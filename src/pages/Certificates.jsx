import React from "react";
import CertificateCard from "../components/CertificateCard";
import "../styles/Certificates.css";

/* Images & PDFs */
import Cloud from "../Certificates/CloudComputing.jpeg";
import CS from "../Certificates/CS.jpeg";
import DSA from "../Certificates/DSA.jpeg";
import EH from "../Certificates/EthicalHacking.jpeg";
import LLD from "../Certificates/LLD.jpg";
import ML from "../Certificates/ML.jpeg";
import MongoDB from "../Certificates/MongoDB.jpeg";
import OOPS from "../Certificates/OOPS.jpeg";
import Python from "../Certificates/Python.jpeg";
import ST from "../Certificates/SoftwareTesting.jpeg";
import SPM from "../Certificates/SPM.jpeg";
import SQLIBM from "../Certificates/Ibmsql.jpg";
import UIUXImg from "../Certificates/UIUX.jpeg";
import CSSHR from "../Certificates/CSSHR.png";
import HRSQL from "../Certificates/SqlHR.jpg";
import CourseraSQL from "../Certificates/SQL.jpeg";
import JavaHR from "../Certificates/Javabasic.png";

const certificates = [
  {
    title: "Python",
    platform: "Marcello Tech",
    date: "2023",
    desc: "Beginner-level course covering Python basics, syntax, and programming concepts.",
    image: Python,
    link: Python,
    type: "image",
  },
  {
    title: "MongoDB",
    platform: "MongoDB University",
    date: "2024",
    desc: "Hands-on training on MongoDB fundamentals, CRUD operations, and data modeling.",
    image: MongoDB,
    link: MongoDB,
    type: "image",
  },
  {
    title: "Machine Learning",
    platform: "Marcello Tech",
    date: "2024",
    desc: "Theoretical aspects of machine learning algorithms and their applications.",
    image: ML,
    link: ML,
    type: "image",
  },

  {
    title: "SQL (IBM Cognitive Class)",
    platform: "IBM Cognitive Class",
    date: "2024",
    desc: "Learned SQL queries, joins, aggregations, and database fundamentals.",
    image: SQLIBM,
    link: SQLIBM,
    type: "image",
  },

  {
    title: "OOPS (Java)",
    platform: "HackerRank",
    date: "2024",
    desc: "Object-oriented programming principles using Java.",
    image: OOPS,
    link: OOPS,
    type: "image",
  },

  {
    title: "Cyber Security",
    platform: "Microsoft, Tata Strike",
    date: "2024",
    desc: "Core computer science concepts and system fundamentals.",
    image: CS,
    link: CS,
    type: "image",
  },

  {
    title: "Software Testing",
    platform: "NPTEL",
    date: "2024",
    desc: "Software testing methodologies, types, and best practices.",
    image: ST,
    link: ST,
    type: "image",
  },
  {
    title: "Cloud Computing",
    platform: "NPTEL",
    date: "2025",
    desc: "Cloud fundamentals, service models, and deployment concepts.",
    image: Cloud,
    link: Cloud,
    type: "image",
  },
  {
    title: "SQL (Coursera)",
    platform: "Coursera",
    date: "2025",
    desc: "SQL fundamentals and queries using real-world datasets.",
    image: CourseraSQL,
    link: CourseraSQL,
    type: "image",
  },
  {
    title: "UI/UX Design",
    platform: "Coursera / Marcello Tech",
    date: "2025",
    desc: "Fundamentals of user interface and user experience design with modern tools.",
    image: UIUXImg,
    link: UIUXImg,
    type: "image",
  },
  {
    title: "SQL (Basic)",
    platform: "HackerRank",
    date: "2025",
    desc: "Basic SQL queries, joins, and database concepts.",
    image: HRSQL,
    link: HRSQL,
    type: "pdf",
  },
  {
    title: "LLD",
    platform: "Scaler Academy",
    date: "2025",
    desc: "Low-level design concepts, system structuring, and design patterns.",
    image: LLD,
    link: LLD,
    type: "image",
  },
  {
    title: "Ethical Hacking",
    platform: "NPTEL",
    date: "2025",
    desc: "Cybersecurity basics, vulnerabilities, and ethical hacking tools.",
    image: EH,
    link: EH,
    type: "image",
  },

  {
    title: "String Pattern Matching",
    platform: "Scaler Academy",
    date: "2025",
    desc: "String pattern matching algorithms and their real-world applications.",
    image: SPM,
    link: SPM,
    type: "image",
  },
  {
    title: "Java DSA",
    platform: "Online Course",
    date: "2025",
    desc: "Strong foundation in data structures, algorithms, and problem-solving techniques.",
    image: DSA,
    link: DSA,
    type: "image",
  },


  {
    title: "Java (HackerRank)",
    platform: "HackerRank",
    date: "2025",
    desc: "Core Java programming concepts and exercises.",
    image: JavaHR,
    link: JavaHR,
    type: "image",
  },
  {
    title: "CSS (Basic)",
    platform: "HackerRank",
    date: "2025",
    desc: "Modern CSS concepts including layouts, flexbox, and responsiveness.",
    image: CSSHR,
    link: CSSHR,
  },

];

const Certificates = () => {
  return (
    <section className="certificates-section">
      <h2 className="certificates-title">My Certifications</h2>
      <p className="text-center text-gray-600 dark:text-gray-500 mb-16 text-lg">
        Explore the milestones I’ve earned through learning and dedication.
      </p>
      <div className="certificates-grid">
        {certificates
          .sort((a, b) => a.date.localeCompare(b.date))
          .map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
      </div>
    </section>
  );
};

export default Certificates;
