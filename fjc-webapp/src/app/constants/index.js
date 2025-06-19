
import instagramIcon from "@/assets/socials/instagram.svg";
import resumeIcon from "@/assets/socials/resume.svg";
import linkedinIcon from "@/assets/socials/linkedin.svg";
import githubIcon from "@/assets/socials/github.svg";

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

export const projects = [
  {
    id: 1,
    name: "VantageForm.com",
    shortDescription: "Full-Stack ML Web App",
    date: "June – Present",
    link: "https://vantageform.com",
    technologies: ["Next.js", "Python", "Node.js", "PostgreSQL", "Tailwind", "AWS"],
    description: [
      "Developed a responsive web app using Next.js and Tailwind CSS 4.0 with fully dynamic routes and modern UI transitions.",
      "Engineered a Node.js back end with RESTful APIs and PostgreSQL for scalable user, session, and player data management.",
      "Designing a deep learning model on AWS Lambda and EC2 for real-time stat prediction and inference.",
      "Implementing a flexible pipeline for integrating custom-trained ML models into production-ready endpoints.",
      "Implementing many ML model options for the user to choose",
    ]
  },  
  {
    id: 2,
    name: "SAE Pedal Sensor System",
    shortDescription: "Embedded throttle input system for EV prototype",
    date: "Aug 2023 – April 2025",
    link: "https://github.com/fcolme15/SAE-APPS-2025",
    technologies: ["STM32", "C", "ADC", "CAN Bus"],
    description: [
      "Engineered a pedal sensor system for the UIC SAE Electric Vehicle using STM32 microcontrollers programming in C.",
      "Implemented oversampling and filtering to improve analog-to-digital conversion stability and accuracy.",
      "Designed and validated safety logic for implausibility testing, fault detection, and fail-safe cutoff.",
      "Configured CAN Bus communication for real-time transmission of throttle data to vehicle control modules."
    ]
  },  
  {
    id: 3,
    name: "Server-Client Based Three Card Poker",
    shortDescription: "Multiplayer card game with networking",
    date: "January 2024",
    link: "https://github.com/fcolme15/Server-Client-Three-Card-Poker",
    technologies: ["Java", "JavaFX", "Sockets", "Multithreading"],
    description: [
      "Built a multiplayer Three Card Poker game using a server-client architecture with Java sockets and multithreading.",
      "Implemented a robust game server capable of managing multiple client connections simultaneously using thread pools and socket communication.",
      "Designed a JavaFX-based GUI for client-side interaction with a betting interface, and live game state updates.",
      "Handled game logic on both client and server ends: card dealing, player actions, and payout resolution, with consistent state synchronization.",
      "Ensured fault tolerance with client disconnect handling and enforced rules for concurrent game sessions."
    ]
  },
  {
    id: 4,
    name: "Custom Language Compiler (Bluejay)",
    shortDescription: "Complete compiler implementation",
    date: "December 2024",
    link: "https://github.com/fcolme15",
    technologies: ["C", "Flex", "Bison", "MIPS"],
    description: [
      "Engineered a full compiler in C for a custom programming language from scratch, compiling down to MIPS assembly.",
      "Designed the language grammar and token definitions, then implemented lexical analysis using Flex and parsing using Bison.",
      "Constructed an abstract syntax tree (AST) and generated an intermediate representation (IR) to bridge parsing and code generation.",
      "Implemented semantic analysis including type checking, symbol table management, and scope resolution.",
      "Translated IR into MIPS assembly code, supporting function calls, control flow, arithmetic expressions, and memory access.",
      "Tested the compiler using both custom and edge-case source programs to validate correctness and performance."
    ]
  }  
];


export const timelineData = [
  {
    id: 1,
    date: 'June - Present',
    type: 'project',
    title: 'VantageForm.com',
    company: '',
    institution: 'Personal Project',
    description: '',
    duration: '',
    contentType: 'project'
  },
  {
    id: 2,
    date: 'May 2025',
    type: 'education',
    title: 'Bachelor of Science in Computer Science',
    company: '',
    institution: 'University of Illinois at Chicago',
    description: 'Graduated with a perfect 4.0/4.0 GPA. Focused on software engineering, algorithms, and system design with advanced coursework in computer science fundamentals.',
    duration: 'Aug 2023 - May 2025',
    contentType: 'degree'
  },
  {
    id: 3,
    date: 'April 2025',
    type: 'project',
    title: 'SAE Pedal Sensor System',
    company: '',
    institution: 'Club Project',
    description: '',
    duration: '',
    contentType: 'project'
  },
  {
    id: 4,
    date: 'Dec 2024',
    type: 'project',
    title: 'Custom Language Compiler (Bluejay)',
    company: '',
    institution: 'Academic Project',
    description: '',
    duration: '',
    contentType: 'project'
  },
  {
    id: 5,
    date: 'Aug 2023',
    type: 'work',
    title: 'Research Assistant',
    company: 'Joliet Junior College - Physics of Acoustics',
    institution: '',
    description: 'Conducted research in the physics of acoustics, contributing to experimental design and data analysis. Collaborated with faculty on acoustic wave propagation studies.',
    duration: 'Jun 2023 - Aug 2023',
    contentType: 'work'
  },
  
  {
    id: 6,
    date: 'May 2023',
    type: 'education',
    title: 'Associate in Science',
    company: '',
    institution: 'Joliet Junior College',
    description: 'Graduated with an exceptional 3.96/4.0 GPA. Built a strong foundation in mathematics, sciences, and computer science fundamentals.',
    duration: 'Aug 2021 - May 2023',
    contentType: 'degree'
  },
  
];

export const socials = [
  {
    id: "1",
    title: "LinkedIn",
    iconUrl: linkedinIcon,
    url: "https://www.linkedin.com/in/colmenerojf/",
  },
  {
    id: "2",
    title: "Github",
    iconUrl: githubIcon,
    url: "https://github.com/fcolme15",
  },
  {
    id: "3",
    title: "Instagram",
    iconUrl: instagramIcon,
    url: "https://www.instagram.com/francisco__colmenero",
  },
  {
    id: "4",
    title: "Resume",
    iconUrl: resumeIcon,
    url: "https://github.com/fcolme15/PersonalWebsite/blob/main/FranciscoJC-Resume.pdf",
  },
  
];

