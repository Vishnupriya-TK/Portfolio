import { useCallback, useEffect, useState } from "react";

const LEETCODE_USER = "VISHNUPRIYA-TK";
const HACKERRANK_USER = "4179Vishnupriya";
const REFRESH_MS = 5 * 60 * 1000;

const PROXY_FETCHERS = [
  async (url) => {
    const res = await fetch(
      `https://cors-proxy-xi-ten.vercel.app/api/proxy?url=${encodeURIComponent(url)}`
    );
    if (!res.ok) throw new Error("cors-proxy failed");
    return res.json();
  },
  async (url) => {
    const res = await fetch(
      `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`
    );
    if (!res.ok) throw new Error("allorigins raw failed");
    return res.json();
  },
  async (url) => {
    const res = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
    );
    if (!res.ok) throw new Error("allorigins get failed");
    const wrapper = await res.json();
    return JSON.parse(wrapper.contents);
  },
];

const fetchJson = async (url, { preferProxy = false } = {}) => {
  const attempts = preferProxy
    ? [...PROXY_FETCHERS, directFetch]
    : [directFetch, ...PROXY_FETCHERS];

  let lastError;
  for (const attempt of attempts) {
    try {
      return await attempt(url);
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError ?? new Error("Unable to fetch data");
};

async function directFetch(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Direct fetch failed");
  return res.json();
}

/** LeetCode acceptance = accepted submissions ÷ total submissions (All). */
const calcAcceptance = (solved) => {
  const total = solved?.totalSubmissionNum?.find((s) => s.difficulty === "All");
  const accepted = solved?.acSubmissionNum?.find((s) => s.difficulty === "All");
  if (!total?.submissions || !accepted?.submissions) return null;
  return Math.round((accepted.submissions / total.submissions) * 100);
};

const parseHackerrank = (badgesRes, profileRes) => {
  const badges = badgesRes?.models ?? [];
  const totalStars = badges.reduce((sum, b) => sum + (b.stars ?? 0), 0);
  const totalSolved = badges.reduce((sum, b) => sum + (b.solved ?? 0), 0);
  const topSkill = badges.reduce(
    (best, b) => ((b.stars ?? 0) > (best?.stars ?? 0) ? b : best),
    null
  );

  return {
    level: profileRes?.model?.level ?? 0,
    badgeCount: badges.length,
    totalStars,
    totalSolved,
    topSkill: topSkill?.badge_name ?? "—",
    memberSince: profileRes?.model?.created_at
      ? new Date(profileRes.model.created_at).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        })
      : "—",
  };
};

export const useCodingStats = () => {
  const [leetcode, setLeetcode] = useState({ loading: true, error: null, data: null });
  const [hackerrank, setHackerrank] = useState({ loading: true, error: null, data: null });
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchLeetcode = useCallback(async () => {
    try {
      const base = `https://alfa-leetcode-api.onrender.com/${LEETCODE_USER}`;
      const [profile, solved, badges] = await Promise.all([
        fetchJson(base),
        fetchJson(`${base}/solved`),
        fetchJson(`${base}/badges`),
      ]);

      const data = {
        ranking: profile.ranking,
        totalSolved: solved.solvedProblem,
        easySolved: solved.easySolved,
        mediumSolved: solved.mediumSolved,
        hardSolved: solved.hardSolved,
        acceptanceRate: calcAcceptance(solved),
        badges: badges.badgesCount ?? badges.badges?.length ?? 0,
      };

      setLeetcode({ loading: false, error: null, data });
      return data;
    } catch (err) {
      setLeetcode((prev) => ({
        loading: false,
        error: err.message,
        data: prev.data,
      }));
      return null;
    }
  }, []);

  const fetchHackerrank = useCallback(async () => {
    const badgesUrl = `https://www.hackerrank.com/rest/hackers/${HACKERRANK_USER}/badges`;
    const profileUrl = `https://www.hackerrank.com/rest/contests/master/hackers/${HACKERRANK_USER}/profile`;

    try {
      const [badgesRes, profileRes] = await Promise.all([
        fetchJson(badgesUrl, { preferProxy: true }),
        fetchJson(profileUrl, { preferProxy: true }),
      ]);

      const data = parseHackerrank(badgesRes, profileRes);
      setHackerrank({ loading: false, error: null, data });
      return data;
    } catch (err) {
      setHackerrank((prev) => ({
        loading: false,
        error: err.message,
        data: prev.data,
      }));
      return null;
    }
  }, []);

  const refresh = useCallback(async () => {
    setLeetcode((p) => ({ ...p, loading: true, error: null }));
    setHackerrank((p) => ({ ...p, loading: true, error: null }));
    await Promise.all([fetchLeetcode(), fetchHackerrank()]);
    setLastUpdated(new Date());
  }, [fetchLeetcode, fetchHackerrank]);

  useEffect(() => {
    refresh();
    const id = setInterval(refresh, REFRESH_MS);
    return () => clearInterval(id);
  }, [refresh]);

  return { leetcode, hackerrank, lastUpdated, refresh };
};
