import XIcon from "@/assets/socials/twitter.svg";
import instagramIcon from "@/assets/socials/instagram.svg";
import facebookIcon from "@/assets/socials/facebook.svg";

import { Code, Brain, Globe, Cloud, Database, GitBranch } from 'lucide-react';

export const navigation = [
    {
      id: "0",
      title: "Home",
      url: "/",
    },
    {
      id: "1",
      title: "Teck Stack",
      url: "/#techstack",
    },
    {
      id: "2",
      title: "Projects",
      url: "/#projects",
    },
    {
      id: "3",
      title: "experince",
      url: "/#experience",
    },

    {
      id: "4",
      title: "About",
      url: "/about",
    },
    {
      id: "5",
      title: "Contact",
      url: "/#contact",
    },
  ];

export const techstack = [
  {
    title: "Programming Languages",
    icon: <Code className="w-8 h-8" />,
    techs: ["Python", "C++", "C", "Java", "JavaScript", "TypeScript", "Go", "SQL", "F#"]
  },
  {
    title: "Machine Learning & AI",
    icon: <Brain className="w-8 h-8" />,
    techs: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"]
  },
  {
    title: "Web Development",
    icon: <Globe className="w-8 h-8" />,
    techs: ["React", "Next.js", "Node.js", "Tailwind CSS", "HTML", "CSS"]
  },
  {
    title: "Cloud",
    icon: <Cloud className="w-8 h-8" />,
    techs: ["AWS", "Vercel"]
  },
  {
    title: "Database",
    icon: <Database className="w-8 h-8" />,
    techs: ["PostgreSQL", "SQLite"]
  },
  {
    title: "Methodologies",
    icon: <GitBranch className="w-8 h-8" />,
    techs: ["Agile", "Git Workflow"]
  }
];




export const socials = [
  {
    id: "0",
    title: "X",
    iconUrl: XIcon,
    url: "http://x.com",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagramIcon,
    url: "http://instagram.com",
  },
  {
    id: "2",
    title: "Facebook",
    iconUrl: facebookIcon,
    url: "http://facebook.com",
  },
];

