import { Code, Palette, Smartphone, Zap, Globe, Database } from 'lucide-react';

export const navLinks = [
    { id: 1, href: "#home", label: "My Home" },
    { id: 2, href: "#about", label: "About Me" },
    { id: 3, href: "#projects", label: "My Projects" },
    { id: 4, href: "#services", label: "My Services" },
];

export const services = [
  {
    id: 1,
    icon: Code,
    title: "Web Development",
    description:
      "Building responsive and performant web applications with modern technologies and best practices.",
    features: ["React & Next.js", "Full-Stack Development", "API Integration"],
  },
  {
    id: 2,
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Creating native and cross-platform mobile applications that deliver seamless user experiences.",
    features: ["React Native", "iOS & Android", "Progressive Web Apps"],
  },
  {
    id: 3,
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Designing intuitive and beautiful interfaces that prioritize user experience and accessibility.",
    features: ["Figma & Adobe XD", "Responsive Design", "Brand Identity"],
  },
  {
    id: 4,
    icon: Database,
    title: "Backend Development",
    description:
      "Developing robust server-side solutions with scalable architecture and secure data management.",
    features: ["Node.js & Express", "Database Design", "RESTful APIs"],
  },
  {
    id: 5,
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Enhancing application speed and efficiency through code optimization and best practices.",
    features: ["Code Splitting", "Lazy Loading", "SEO Optimization"],
  },
  {
    id: 6,
    icon: Globe,
    title: "Web3 Development",
    description:
      "Building decentralized applications and smart contracts for blockchain ecosystems.",
    features: ["Smart Contracts", "DApp Development", "Blockchain Integration"],
  },
];

export const projects = [
    {
        id: 1,
        title: "Chat Application",
        description: "Description for Chat Application.",
        img: "./PIC-profile.jpg",
    },
    {
        id: 2,
        title: "YouTube clone",
        description: "Description for YouTube clone.",
        img: "./PIC-profile.jpg"
    },
    {
        id: 3,
        title: "Project Three",
        description: "Description for project three.",
        img: "./PIC-profile.jpg"
    },
];

export const skills = [
    { id: 1, name: "JavaScript", level: "Advanced" },
    { id: 2, name: "React", level: "Advanced" },
    { id: 3, name: "Node.js", level: "Intermediate" },
    { id: 4, name: "CSS", level: "Advanced" },
    { id: 5, name: "HTML", level: "Advanced" },
    { id: 6, name: "Python", level: "Intermediate" },
    { id: 7, name: "Django", level: "Intermediate" },
    { id: 8, name: "SQL", level: "Intermediate" },
];
