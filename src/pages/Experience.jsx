import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import ZigzagTimeline from "../components/ZigzagTimeline";
import {
  Bot,
  Trophy,
  GraduationCap,
  Code2,
  Laptop,
  Award,
  Zap,
} from "lucide-react";
import { FaFolderOpen, FaDownload, FaEnvelope } from "react-icons/fa";
import Hackathon from "../Experience/Hackathon.jpg";
import IEEEQuiz from "../Experience/IEEEQuiz.jpg";
import Marcello from "../Experience/Marcello.jpeg";
import Phonix from "../Experience/Phonix.jpeg";
import Vcet from "../Experience/Vcet.jpg";
import Naukri from "../Experience/Naukri.pdf";
import cvFile from "../assets/Vishnu_Priya_CV.pdf";

const experiences = [
  {
    id: "zoho",
    title: "Zoho Cliqtrix ’26",
    date: "November 2025",
    place: "Zoho Corporation",
    desc: "Built an interactive chatbot using Zoho SalesIQ’s Codeless Bot Builder, integrated with a website and Zoho Forms for course selection and form assistance.",
    stack: ["Logic", "Problem Solving", "UX", "Teamwork"],
    link: "https://github.com/Vishnupriya-TK/Zoho-SalesIQ-Course_Advisor.git",
    icon: Bot,
    iconColor: "text-violet-400",
  },
  {
    id: "adobe",
    title: "Adobe India Hackathon",
    date: "July 2025",
    place: "Adobe",
    desc: "Participated in a national-level hackathon focusing on innovation, collaboration, and rapid solution development under time constraints.",
    stack: ["Innovation", "Teamwork", "Problem Solving"],
    link: Hackathon,
    icon: Trophy,
    iconColor: "text-amber-400",
  },
  {
    id: "vcet",
    title: "VCET Inhouse Internship",
    date: "May 2025 – June 2025",
    place: "Velammal College of Engineering & Technology",
    desc: "Worked on real-time academic projects with practical exposure to software development, collaboration, and project execution.",
    stack: ["MERN Stack", "Collaboration", "Time Management"],
    link: Vcet,
    icon: GraduationCap,
    iconColor: "text-emerald-400",
  },
  {
    id: "phoenix",
    title: "Full Stack Internship",
    date: "2023",
    place: "Phoenix Softech, Madurai",
    desc: "Gained hands-on full-stack experience on real-world projects, strengthening frontend and backend development skills.",
    stack: ["Full Stack", "Communication", "Technical Skills"],
    link: Phonix,
    icon: Code2,
    iconColor: "text-cyan-400",
  },
  {
    id: "marcello",
    title: "Full Stack Development (Online)",
    date: "July 2024 – September 2024",
    place: "Marcello Tech, Trichy",
    desc: "Worked on full-stack projects in an online environment, improving coding proficiency, creativity, and collaborative skills.",
    stack: ["Full Stack", "Creativity", "Teamwork"],
    link: Marcello,
    icon: Laptop,
    iconColor: "text-sky-400",
  },
  {
    id: "naukri",
    title: "Naukri Coding Contests",
    date: "2025",
    place: "Naukri",
    desc: "Participated in multiple coding contests and secured 77th rank in December 2025, improving competitive programming skills.",
    stack: ["DSA", "Java", "Problem Solving"],
    link: Naukri,
    icon: Award,
    iconColor: "text-rose-400",
  },
  {
    id: "ieee",
    title: "IEEE Quiz Competition",
    date: "March 2025",
    place: "IEEE Madras Section",
    desc: "Participated in a technical quiz that strengthened core knowledge, analytical thinking, and quick decision-making.",
    stack: ["Technical Knowledge", "Analytics", "Decision Making"],
    link: IEEEQuiz,
    icon: Zap,
    iconColor: "text-yellow-400",
  },
];

const Experience = () => (
  <section className="page-experience min-h-screen px-4 sm:px-8 py-12 sm:py-16 max-w-6xl mx-auto text-slate-200">
    <PageHeader
      title="My Experience"
      subtitle="Internships, hackathons, and competitions that shaped my professional journey."
    />

    <ZigzagTimeline items={experiences} />

    <div className="mt-14 flex flex-col sm:flex-row justify-center gap-3">
      <Link to="/projects" className="btn-primary text-sm inline-flex items-center gap-2">
        <FaFolderOpen /> View My Works
      </Link>
      <a href={cvFile} download className="btn-secondary text-sm inline-flex items-center gap-2">
        <FaDownload /> View CV
      </a>
      <Link to="/connect" className="btn-outline text-sm inline-flex items-center gap-2">
        <FaEnvelope /> Get in Touch
      </Link>
    </div>
  </section>
);

export default Experience;
