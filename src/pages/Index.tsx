import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';

const portfolioData = {
  name: "Abhijit Bhujbal",
  role: "Full-Stack Developer | MSc Computer Science",
  contact: {
    email: "abhibhujbal1707@gmail.com",
    phone: "9404016761",
    location: "Balewadi, Pune",
    linkedin: "https://www.linkedin.com/in/abhijit-bhujbal-8a3227284/",
    github: "https://github.com/abhiBhujbal1707",
    hackerrank: "https://www.hackerrank.com/profile/abhibhujbal1707"
  },
  careerObjective: "Passionate Full-Stack Developer with strong foundations in web technologies, AI integration, and database management. Seeking to contribute to innovative projects while expanding expertise in scalable, user-focused applications.",
  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "Java", "C#", "C", "SQL"],
    webTechnologies: ["HTML5", "CSS3", "API Development"],
    frameworksLibraries: ["React", "Next.js", "Express.js", "Node.js", "Redux", "Tailwind CSS", "Bootstrap", "Pandas", "NumPy"],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "Neo4j"],
    tools: ["Git", "GitHub"]
  },
  projects: [
    {
      name: "ReelPro",
      stack: ["Next.js", "TypeScript", "MongoDB", "ImageKit", "NextAuth"],
      description: "A video-sharing platform with secure authentication, real-time video uploads, and reusable UI components.",
      link: ""
    },
    {
      name: "PayNest",
      stack: ["Next.js", "Gemini API", "MongoDB", "Recharts", "Shadcn", "Clerk"],
      description: "AI-powered finance tracker with receipt scanning, recurring transactions, budget alerts, and analytics dashboards.",
      link: "https://paynest-alpha.vercel.app"
    },
    {
      name: "Hospital Management System",
      stack: ["React.js", "C#.NET Minimal APIs", "MongoDB"],
      description: "Healthcare platform with modules for patients, doctors, admins, and billing, featuring secure APIs and real-time appointment management.",
      link: ""
    }
  ],
  education: [
    {
      degree: "Master's in Computer Science",
      institution: "Indira College of Commerce and Science, Pune",
      year: "2024 – Current",
      score: "77.33% (till semester)"
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "Aabasaheb Garware College, Pune",
      year: "2021 – 2024",
      score: "CGPA: 7.87 / 74.76%"
    },
    {
      degree: "12th HSC",
      institution: "Shri Sambhajiraje College, Jategaon",
      year: "2019 – 2021",
      score: "86.67%"
    },
    {
      degree: "10th SSC",
      institution: "Samajbhushan Sambhajirao Bhujbal Vidyalaya, Talegaon Dhamdhere",
      year: "2019",
      score: "81.20%"
    }
  ]
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="home">
          <HeroSection 
            name={portfolioData.name}
            role={portfolioData.role}
            contact={portfolioData.contact}
          />
        </div>
        
        <SkillsSection skills={portfolioData.skills} />
        <ProjectsSection projects={portfolioData.projects} />
        <EducationSection education={portfolioData.education} />
        <ContactSection 
          contact={portfolioData.contact}
          careerObjective={portfolioData.careerObjective}
        />
      </main>
    </div>
  );
};

export default Index;
