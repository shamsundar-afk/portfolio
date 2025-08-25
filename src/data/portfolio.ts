export const personalInfo = {
  name: "Sham Sundar A",
  title: "Full Stack Developer & UI Designer",
  email: "shamsundar.a29@gmail.com",
  phone: "8939105827",
  location: "Tamil Nadu, India",
  bio: `Passionate <strong>Full-stack Developer</strong> with 5+ years of experience in building scalable web applications and crafting seamless user experiences. I love solving real-world problems through clean and intuitive code.

  I’ve also <strong>mentored freshers</strong>, worked as a <strong>Project Manager</strong>, and now manage <strong>HR operations</strong> alongside server-side deployments via <strong>cPanel</strong>.`,

  resumeUrl: "/resume.pdf"
};

export const socialLinks = [
  // { name: "GitHub", url: "https://github.com/shamsundar", icon: "Github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/sham-sundar-52106015b/", icon: "Linkedin" },
  // { name: "Twitter", url: "https://twitter.com/shamsundar", icon: "Twitter" },
  { name: "Email", url: "mailto:shamsundar.a29@gmail.com", icon: "Mail" }
];

export const skills = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "JQuery", "Bootstrap", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["PHP", "Laravel", "SQL", "MySQL", "MongoDB", "Redis"]
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "AWS", "Figma",  "ClickUp"]
  },
  {
    category: "Design",
    items: ["UI/UX Design", "Prototyping", "Wireframing", "User Research", "Design Systems"]
  }
];

export const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "Mercu.",
    period: "2025 - Present",
    description: "Driving the design and development of scalable, high-performance web applications. Implemented a robust microservices architecture and actively mentor junior developers to elevate team productivity and code quality."
  },
  {
    title: "Frontend Developer",
    company: "Gowebez",
    period: "2020 - 2022",
    description: "Engineered responsive and visually polished web applications using React and TypeScript. Partnered with UI/UX designers to implement pixel-perfect components, ensuring cross-browser compatibility and performance optimization."
  },
  // {
  //   title: "UI/UX Designer",
  //   company: "Creative Studio",
  //   period: "2019 - 2020",
  //   description: "Designed user interfaces for mobile and web applications. Conducted user research and created design systems for multiple clients."
  // }
];

export const projects = [
  {
    id: 1,
    title: "Inflowcare",
    description: "Full-stack e-commerce solution with Laravel ,mangodb and Redis. Features include user authentication, payment processing, and admin dashboard.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    liveUrl: "https://inflowcare.com/",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "Express.js", "Socket.io", "MongoDB"],
    liveUrl: "https://taskmanager-demo.com",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with location-based forecasts, interactive maps, and customizable widgets.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
    liveUrl: "https://weather-dashboard-demo.com",
    featured: false
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media metrics with data visualization, automated reports, and performance insights.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "Python", "D3.js", "Flask", "Redis"],
    liveUrl: "https://analytics-demo.com",
    githubUrl: "https://github.com/shamsundar/social-analytics",
    featured: true
  },
  {
    id: 5,
    title: "Learning Management System",
    description: "Complete LMS with video streaming, progress tracking, assignments, and interactive quizzes for online education.",
    image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Django", "PostgreSQL", "AWS S3", "WebRTC"],
    liveUrl: "https://lms-demo.com",
    githubUrl: "https://github.com/shamsundar/lms",
    featured: false
  },
  {
    id: 6,
    title: "Cryptocurrency Tracker",
    description: "Real-time cryptocurrency tracking application with portfolio management, price alerts, and market analysis tools.",
    image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "WebSocket", "CoinGecko API"],
    liveUrl: "https://crypto-tracker-demo.com",
    githubUrl: "https://github.com/shamsundar/crypto-tracker",
    featured: false
  }
];