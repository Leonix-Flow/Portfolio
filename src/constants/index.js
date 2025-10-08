import { 
  Code, Wrench, Paintbrush, FileText, GraduationCap, 
  Globe, Database, Zap 
} from "lucide-react";
import ServiceData from "../data/Services-data.json";

// Icon Mapping by Category
const categoryIcons = {
  "web-development": Globe,
  "software": Database,
  "maintenance": Wrench,
  "design": Paintbrush,
  "document": FileText,
  "training": GraduationCap,
  "digital": Zap,
};

// Map Services with Icons
export const services = ServiceData.services.map(service => ({
  ...service,
  icon: categoryIcons[service.category] || Code, // fallback
}));

// Export Categories
export const categories = ServiceData.categories;

// Nav Links
export const navLinks = [
  { id: 1, href: "#home", label: "Home" },
  { id: 2, href: "#about", label: "About" },
  { id: 3, href: "#projects", label: "Projects" },
  { id: 4, href: "#services", label: "Services" },
];

// Example Skills
export const skills = [
  { id: 1, name: "JavaScript", level: "Advanced" },
  { id: 2, name: "React", level: "Advanced" },
  { id: 3, name: "Node.js", level: "Intermediate" },
  { id: 4, name: "Python", level: "Intermediate" },
  { id: 5, name: "Dart & Flutter", level: "Intermediate" },
  { id: 6, name: "HTML & CSS", level: "Advanced" },
  { id: 7, name: "SQL & NoSQL", level: "Intermediate" },
  { id: 8, name: "Git & GitHub", level: "Advanced" },
  { id: 9, name: "Figma & Adobe XD", level: "Intermediate" },
  { id: 10, name: "AI & Machine Learning", level: "Beginner" },
  { id: 11, name: "Game Development (Godot)", level: "Beginner" },
  { id: 12, name: "UI/UX Design", level: "Intermediate" },
];

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Description for Portfolio Website.",
    img: "./Project-1.jpg",
  },
];
