import smartStrokeImg from '../assets/Projects/SmartStroke.png';
import dervifaiImg from '../assets/Projects/Derivifai.png';
import RootToolImg from '../assets/Projects/RootTool.png';
import CreativePortfolioImg from '../assets/Projects/CreativePortfolio.png';
// import CJ from '../assets/CJ.jpg';
import CJ1 from '../assets/CJ1.jpg';
import BSULogo from '../assets/logo/bulsu-logo.jpg';
import SFAMSLogo from '../assets/logo/sfams-logo.png';

export const PORTFOLIO_DATA = {
  profile: {
    name: "Colleen Iris",
    lastName: "P. Jones",
    title: "COLLEEN IRIS P JONES.PROFILE",
    bio: "Failures aren't roadblocks, they’re just part of the debugging process. It’s never about being better than everyone else. It’s just you vs. you, pushing to see how much further you can take your own potential.",
    avatar: CJ1,
    lvl: "1",
    resumeUrl: '/Jones_Colleen_Iris_Resume.pdf',
    cvUrl: "/Jones_Colleen_CV.pdf", 
    briefing: "Welcome to my digital portfolio. Here, you'll find a curated selection of my projects, skills, and educational background. Each section is designed to provide insight into my technical expertise and creative approach to software development. Feel free to explore and connect with me for potential collaborations or opportunities.",
  },
  
  languages: [
    { name: "HTML5", slug: "html5", color: "#E34F26", bg: "bg-white" },
    { name: "CSS3", slug: "css", color: "#1572B6", bg: "bg-white" },
    { name: "JavaScript", slug: "javascript", color: "#F7DF1E", bg: "bg-[#323330]" },
    { name: "TypeScript", slug: "typescript", color: "#3178C6", bg: "bg-white" },
    { name: "Python", slug: "python", color: "#3776AB", bg: "bg-[#F7F7F7]" },
    { name: "Java", slug: "openjdk", color: "#ED8B00", bg: "bg-white" },
    { name: "PHP", slug: "php", color: "#777BB4", bg: "bg-[#050505]" },
    { name: "C", slug: "c", color: "#A8B9CC", bg: "bg-[#222222]" },
    { name: "C++", slug: "cplusplus", color: "#00599C", bg: "bg-white" },
    { name: "Dart", slug: "dart", color: "#0175C2", bg: "bg-white" },
    { name: "SQL", slug: "sqlite", color: "#003B57", bg: "bg-[#A8E6A0]" },
  ],

  frameworks: [
    { name: "React.js", slug: "react", color: "#61DAFB", bg: "bg-[#20232A]" },
    { name: "Vue.js", slug: "vuedotjs", color: "#4FC08D", bg: "bg-[#35495E]" },
    { name: "Laravel", slug: "laravel", color: "#FF2D20", bg: "bg-white" },
    { name: "Node.js", slug: "nodedotjs", color: "#339933", bg: "bg-[#303030]" },
    { name: "Express.js", slug: "express", color: "#000000" },
    { name: "Flutter", slug: "flutter", color: "#02569B", bg: "bg-white" },
    { name: "Tailwind CSS", slug: "tailwindcss", color: "#06B6D4", bg: "bg-[#0F172A]" },
    { name: "Firebase", slug: "firebase", color: "#FFCA28", bg: "bg-[#039BE5]" },
    { name: "MongoDB", slug: "mongodb", color: "#47A248", bg: "bg-white" },
    { name: "PNPM", slug: "pnpm", color: "#F69220", bg: "bg-black" },
  ],

  developerTools: [
    { name: "VS Code", slug: "vscode", color: "#007ACC", bg: "bg-white" },
    { name: "Git", slug: "git", color: "#F05032", bg: "bg-white" },
    { name: "GitHub", slug: "github", color: "#181717", bg: "bg-white" },
    { name: "PNPM", slug: "pnpm", color: "#F69220", bg: "bg-black" },
    { name: "Figma", slug: "figma", color: "#F24E1E", bg: "bg-white" },
    { name: "Canva", slug: "canva", color: "#F24E1E", bg: "bg-white" },
  ],

  devOpsDeployment: [
    { name: "Docker", slug: "docker", color: "#2496ED", bg: "bg-white" },
    { name: "CI/CD", slug: "development", color: "#000000", bg: "bg-white" },
    { name: "GitHub Actions", slug: "githubactions", color: "#2088FF", bg: "bg-white" },
    { name: "Firebase", slug: "firebase", color: "#FFCA28", bg: "bg-[#039BE5]" },
    { name: "Vercel", slug: "vercel", color: "#000000", bg: "bg-white" },
    { name: "Render", slug: "render", color: "#000000", bg: "bg-white" },
  ], 

  get techSections() {
    return [
      { label: "Programming", data: this.languages, icon: "Code2", color: "text-blue-500", key: "lang" },
      { label: "Frameworks", data: this.frameworks, icon: "Database", color: "text-green-500", key: "frame" },
      { label: "Cloud & Ops", data: this.devOpsDeployment, icon: "Globe", color: "text-purple-500", key: "devops" },
      { label: "Tools", data: this.developerTools, icon: "Monitor", color: "text-yellow-600", key: "tools" }
    ];
  },

  projects: [
    { 
      id: 1, 
      title: "SmartStroke", 
      desc: "A handwriting digitization system built on the MERN stack that uses IMU sensors and OpenCV to stream physical notes to a web application in real-time.",
      image: smartStrokeImg,
      url: "https://www.smartstrokee.com/"
    },
    { 
      id: 2, 
      title: "Derivifai", 
      desc: "An OpenAI-powered calculus engine built with PHP and JavaScript. While the site is inactive, this gallery documents the UI and the tool's ability to solve complex derivatives using AI.",
      image: dervifaiImg,
      url: "https://derivifai.app"
    },
    { 
      id: 3, 
      title: "RootTool", 
      desc: "A numerical methods application built with Java and Java Swing, featuring a custom-engineered UI focused on dynamic matrix operations and data visualization.",
      image: RootToolImg,
      url: "https://github.com/yourusername/roottool",
      downloadUrl: "/RootTool.exe",
      isDownloadable: true 
    },
    { 
      id: 4, 
      title: "Creative Portfolio", 
      desc: "Just a neo-brutalism theme portfolio website built with React, Tailwind CSS, and TypeScript, showcasing my projects, skills, and educational background in a visually striking way.",
      image: CreativePortfolioImg,
      url: "https://colleenirisjones-creative.vercel.app/",
    },
  ],

  education: [
    { 
      school: "Bulacan State University", 
      logo: BSULogo,
      degree: "BS in Computer Engineering", 
      year: "2022 — 2026",
      eduId: "BSU-COE-2022",
      progress: 90, // Updated progression
      awards: [
        { id: "AW-01", title: "Magna Cum Laude Candidate", issuer: "College of Engineering", date: "June 2026" },
        { id: "AW-02", title: "Dean's Lister", issuer: "College of Engineering", date: "2023-2026" },
        { id: "AW-03", title: "ICpEP R3 Logic Breadboarding Participant", issuer: "ICpEP.se Region III", date: "March 2026" },
        { id: "AW-04", title: "Huawei Innovation Track Participant", issuer: "Huawei ICT Academy", date: "Nov 2025" },
        { id: "AW-05", title: "Huawei Computing Track Participant", issuer: "Huawei ICT Academy", date: "Nov 2024" },
      ]
    },
    { 
      school: "St. Francis de Assisi Montessori School", 
      logo: SFAMSLogo,
      degree: "Senior High School (STEM) | Junior High", 
      year: "2016 — 2022",
      eduId: "SFAMS-STEM-2016",
      progress: 100, // Completed
      awards: [
        { 
          id: "AW-06", 
          title: "SHS - With Honors", 
          issuer: "SFAMS", 
          date: "May 2022" 
        },
        { 
          id: "AW-07", 
          title: "SHS - Best Thesis Presenter", 
          issuer: "SFAMS", 
          date: "May 2022" 
        },
        { 
          id: "AW-08", 
          title: "JHS - With High Honors", 
          issuer: "SFAMS", 
          date: "March 2020" 
        },
        { 
          id: "AW-09", 
          title: "3rd Place, Creative Scientific Writing (Filipino)", 
          issuer: "National Battle of Math and Science Champions (NCST)", 
          date: "2019" 
        },
        { 
          id: "AW-10", 
          title: "3rd Place, Creative Scientific Writing (Filipino)", 
          issuer: "National Battle of Math and Science Champions (NCST)", 
          date: "2018" 
        },
        { 
          id: "AW-11", 
          title: "4th Place, Science/Writing Category (Grade 8)", 
          issuer: "National Scholastic, Civic and Creative Challenge", 
          date: "2018" 
        },
        { 
          id: "AW-12", 
          title: "8th Place, Spelling Quiz Bee", 
          issuer: "BulPriSa District Meet", 
          date: "2018" 
        },
        { 
          id: "AW-13", 
          title: "1st Runner Up, International Mental Arithmetic Competition", 
          issuer: "ALOHA (Kuala Lumpur, Malaysia)", 
          date: "2017" 
        },
        { 
          id: "AW-14", 
          title: "Champion, Mental Arithmetic Regional Level Competition", 
          issuer: "ALOHA", 
          date: "2017" 
        },
        { 
          id: "AW-15", 
          title: "1st Place, Scientific Writing (Filipino)", 
          issuer: "National Scholastic, Civic and Creative Challenge", 
          date: "February 2017" 
        },
        { 
          id: "AW-16", 
          title: "3rd Place, Creative Scientific Writing (Filipino)", 
          issuer: "National Battle of Math and Science Champions (NCST)", 
          date: "February 2017" 
        },
        { 
          id: "AW-17", 
          title: "6th Place, Physics Quiz Bee", 
          issuer: "National Scholastic, Civic and Creative Challenge", 
          date: "February 2017" 
        }
      ]
  },
  ],
};