import { GraduationCap, School, BookOpen } from "lucide-react";

export const educationTimeline = [
  {
    id: "ug",
    title: "UG Degree",
    subtitle: "Computer Science and Engineering",
    place: "Velammal College of Engineering and Technology, Madurai",
    date: "2023 – 2027",
    desc: "Pursuing B.E in Computer Science with focus on full-stack development and system design.",
    details: [
      "CGPA: 8.87/10",
      "Participated in Zoho Cliqtrix ’26 to enhance problem-solving skills",
      "Participated in Adobe India Hackathon Round 1",
      "Focused on full-stack system design and optimization",
    ],
    icon: GraduationCap,
    iconColor: "text-emerald-400",
  },
  {
    id: "xii",
    title: "Higher Secondary (XII)",
    subtitle: "Biology, Physics, Chemistry, Mathematics",
    place: "St.Joseph's Girls' Higher Secondary School, Madurai",
    date: "2021 – 2023",
    desc: "Completed higher secondary education with strong academic performance.",
    details: [
      "Percentage: 93%",
      "State level essay & speech competitions (District winner)",
    ],
    icon: School,
    iconColor: "text-sky-400",
  },
  {
    id: "x",
    title: "Secondary (X)",
    place: "St.Joseph's Girls' Higher Secondary School, Madurai",
    date: "2020 – 2021",
    desc: "Secondary schooling during the pandemic academic year.",
    details: ["Pandemic year – No board exams conducted"],
    icon: BookOpen,
    iconColor: "text-violet-400",
  },
];
