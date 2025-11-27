import GitHubIcon from "../../public/icons/social/github";
import InstagramIcon from "../../public/icons/social/instagram";
import LinkedInIcon from "../../public/icons/social/linkedin";
import PortfolioIcon from "../../public/icons/social/portfolio";
import TwitterIcon from "../../public/icons/social/twitter";
import { SkillIcons } from "./skillsIcons";

export const userData = {
  image: "/images/Vikram.jpg",

  name: "Vikram Baghel",
  age: 24,

  contact: {
    email: "baghelvikram917.com",
    phone: "+91 8817997068",
    address: "Jagdalpur, Bastar (C.G.), India",
  },

  socialLinks: [
    { icon: GitHubIcon, url: "https://github.com/vikram917" },
    { icon: LinkedInIcon, url: "https://www.linkedin.com/in/vikram917" },
    { icon: TwitterIcon, url: "https://x.com/Vikramb28256747" },
    { icon: InstagramIcon, url: "https://www.instagram.com/vikram_baghel068" },

  ],

  objectives:
    "I am a full stack developer with strong skills in building scalable, high-performance applications. My goal is to join an innovative team where I can contribute, grow, and solve real-world problems.",

  skills: {
    frontend: [
      { name: "HTML", icon: SkillIcons["HTML"] },
      { name: "CSS", icon: SkillIcons["CSS"] },
      { name: "JavaScript", icon: SkillIcons["JavaScript"] },
      { name: "TypeScript", icon: SkillIcons["TypeScript"] },
      { name: "React.js", icon: SkillIcons["React.js"] },
      { name: "Next.js", icon: SkillIcons["Next.js"] },
      { name: "React Native", icon: SkillIcons["React Native"] },
      { name: "Tailwind CSS", icon: SkillIcons["Tailwind CSS"] },
    ],
    backend: [
      { name: "Node.js", icon: SkillIcons["Node.js"] },
      { name: "Express.js", icon: SkillIcons["Express.js"] },
      { name: "REST APIs", icon: SkillIcons["REST APIs"] },
      { name: "GraphQL", icon: SkillIcons["GraphQL"] },
    ],
    database: [
      { name: "MongoDB", icon: SkillIcons["MongoDB"] },
      { name: "PostgreSQL", icon: SkillIcons["PostgreSQL"] },
      { name: "Firebase", icon: SkillIcons["Firebase"] },
    ],
    devops: [
      { name: "Git", icon: SkillIcons["Git"] },
      { name: "GitHub", icon: SkillIcons["GitHub"] },
      { name: "CI/CD", icon: SkillIcons["CI/CD"] },
      { name: "Docker", icon: SkillIcons["Docker"] },
    ],
    tools: [
      { name: "VSCode", icon: SkillIcons["VSCode"] },
      { name: "Postman", icon: SkillIcons["Postman"] },
      { name: "Figma", icon: SkillIcons["Figma"] },
    ],
  },

  education: [
    {
      degree: "M.Sc. in Information Technology",
      institution: "Govt. Nagarjuna P.G. Science Of College, Raipur",
      duration: "2022 - 2023",
      score: "7.04 CGPA",
    },
    {
      degree: "Bachelor in Computer Application",
      institution: "Govt. Nagarjuna P.G. Science Of College, Raipur",
      duration: "2019 - 2021",
      score: "71.80%",
    },
        {
      degree: "Diploma in Computer Application",
      institution: "AISECT",
      duration: "2018",
      score: "69.25%",
    },
  ],

  experiences: [
    {
      role: "Full Stack Developer",
      company: "Tetrahedron Manufacturing Services Pvt. Ltd.",
      duration: "2024 - Present",
      responsibilities: [
        "Developed scalable web and mobile applications.",
        "Optimized backend APIs for better performance.",
        "Integrated third-party services and automated deployment workflows.",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "National Information Center, Raipur",
      duration: "6 - month (2023)",
      responsibilities: [
        "Built responsive UI components in React.",
        "Implemented reusable design patterns.",
        "Collaborated with designers for smooth user experiences.",
      ],
    },
  ],

  projects: [
    {
      title: "KavachPro",
      description:
        "A full-stack web application with real-time features and user authentication.",
      tech: ["React", "Tailwindcss", "Material UI", "Firebase"],
      liveUrl: "https://kavachpro.com/",
      githubUrl: "https://github.com/yourusername/project-one",
      image: "/images/projects/Kavachpro.png",
    },
    {
      title: "Endurance Mobile Game /CMR Mobile Game",
      description:
        "Built a mobile game application focused on Endurance SOP-based challenges using React Native CLI",
      tech: ["React-Native", "TailwindCSS", "Firebase"],
      liveUrl: "https://project-two-live.com",
      githubUrl: "https://github.com/yourusername/project-two",
      image: "/images/projects/project2.png",
    },
    {
      title: "Exicom SOP Game - Simulations Applications",
      description:
        "A cross-platform productivity app built using React Native Expo.",
      tech: ["React Native","Expo", "Firebase"],
      liveUrl: "https://play.google.com/app",
      githubUrl: "https://github.com/yourusername/mobile-app",
      image: "/images/projects/project3.png",
    },
  ],
};
