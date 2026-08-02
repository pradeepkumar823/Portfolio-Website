export const PORTFOLIO_DATA = {
  name: "Pradeep Kumar",
  title: "Java Software Developer",
  status: "Available for Java Software Developer Roles",
  email: "pksinghgolu76310@gmail.com",
  phone: "+91-7870682477",
  location: "Gurugram, Haryana",
  profileImage: "/imresizer-IMG_20240103_150726.png",
  resumeUrl: "https://drive.google.com/file/d/1Ze3RttFBLdsL41yeMbUjSYoNIhCyAyG8/view?usp=drivesdk",
  socials: {
    linkedin: "https://www.linkedin.com/in/kumarpradeep23/",
    github: "https://github.com/pradeepkumar823",
    leetcode: "https://leetcode.com/Pradeepkumar8",
    instagram: "https://www.instagram.com/im_pradeepkumarn8/"
  },
  summary: "Meticulous and resilient Computer Science and Engineering graduate with hands-on experience in Java, Spring Boot, Spring AI, MySQL, REST APIs, and Microservices. Proven ability to develop secure, scalable, and maintainable backend applications.",
  stats: [
    { label: "Live Projects", value: "15+" },
    { label: "LeetCode Solved", value: "400+" },
    { label: "Max Rating", value: "1661" },
    { label: "B.Tech CSE", value: "2022 - 2026" }
  ],
  experience: [
    {
      role: "Java Developer Intern (Remote)",
      company: "Micro IT Services",
      period: "April 2025 – May 2025",
      type: "Internship",
      details: [
        "Built a microservices-based backend using Java, Spring Boot, and Hibernate ORM with RESTful Web Services for efficient inter-service communication.",
        "Designed and optimized MySQL databases using design patterns, deployed to a live environment, gaining end-to-end SDLC experience."
      ],
      skills: ["Java", "Spring Boot", "Hibernate ORM", "RESTful Web Services", "MySQL", "SDLC"]
    }
  ],
  skills: [
    { name: "Java", icon: "Coffee", category: "Backend" },
    { name: "Spring Boot", icon: "Leaf", category: "Backend" },
    { name: "Spring AI", icon: "Brain", category: "AI & ML" },
    { name: "Microservices", icon: "Boxes", category: "Backend" },
    { name: "Kafka", icon: "Zap", category: "Messaging Queue" },
    { name: "Redis", icon: "Database", category: "Database" },
    { name: "MySQL", icon: "Database", category: "Database" },
    { name: "PostgreSQL", icon: "Database", category: "Database" },
    { name: "Hibernate / JPA", icon: "Database", category: "Backend" },
    { name: "Docker & Compose", icon: "Container", category: "DevOps" },
    { name: "MinIO S3", icon: "Cloud", category: "Cloud Storage" },
    { name: "AWS", icon: "Cloud", category: "Cloud" },
    { name: "React.js", icon: "Code2", category: "Frontend" },
    { name: "Git & GitHub", icon: "GitBranch", category: "Tools" },
    { name: "REST APIs & OAuth2", icon: "Globe", category: "Web Services" }
  ],
  projects: [
    {
      id: "resumeiq",
      title: "ResumeIQ",
      category: "fullstack",
      badge: "Full-Stack + AI",
      date: "July 2026",
      icon: "Brain",
      description: "AI-powered career platform utilizing a 5-service microservices architecture with Spring Boot, React, Kafka & Ollama LLM.",
      longDescription: "Built an AI-powered career platform utilizing a 5-service microservices architecture with Spring Boot and React, routing traffic through a central API Gateway with stateless JWT authentication. Implemented event-driven communication using Apache Kafka to decouple services (e.g., user registration events) and integrated Redis caching to optimize data retrieval speeds. Integrated a locally-hosted Ollama LLM to analyze PDF resume text and generate contextual mock interview questions (100% data privacy). Orchestrated deployment with Docker Compose, configuring MySQL and MinIO object storage.",
      metrics: [
        { label: "Architecture", value: "5-Microservices" },
        { label: "Event Bus", value: "Apache Kafka" },
        { label: "Caching / Privacy", value: "Redis + Ollama" }
      ],
      tags: ["Spring Boot", "Microservices", "Spring AI", "Kafka", "Redis", "Docker", "MinIO", "MySQL", "React"],
      github: "https://github.com/pradeepkumar823/ResumeIQ"
    },
    {
      id: "grievancehub",
      title: "GrievanceHub",
      category: "fullstack",
      badge: "Full-Stack",
      date: "May 2026",
      icon: "MessageSquare",
      description: "Public grievance portal with RBAC, Google OAuth 2.0, geolocation, and AI-based SLA ticket routing.",
      longDescription: "Architected a public grievance platform featuring strict RBAC and Google OAuth 2.0 and BCrypt password encryption, reducing unauthorized logins by 40% and optimizing database schemas to boost query speeds by 30%. Developed a RESTful complaint portal with real-time analytics, geolocation, and AI-based ticket routing with SLA enforcement, improving ticket management efficiency.",
      metrics: [
        { label: "Unauthorized Logins", value: "-40%" },
        { label: "Query Speed", value: "+30%" },
        { label: "Security", value: "OAuth2 + RBAC" }
      ],
      tags: ["Java", "Spring Boot", "MySQL", "Spring Security", "JWT", "Google OAuth2"],
      github: "https://github.com/pradeepkumar823/GrievanceHub"
    },
    {
      id: "foodfrenzy",
      title: "Online Food Ordering Platform (FoodFrenzy)",
      category: "fullstack",
      badge: "Full-Stack",
      date: "April 2025",
      icon: "Utensils",
      description: "Food management platform with automated email workflows, OAuth2 auth, and optimized JPA queries.",
      longDescription: "Developed a food management platform utilizing Spring Boot, Java 17, and MySQL, implementing automated user email notifications and OAuth2 auth to streamline workflows and reduce order processing time by 40%. Architected a robust backend using MVC and DTO patterns, significantly optimizing Spring Data JPA database queries to reduce data retrieval latency by 30%.",
      metrics: [
        { label: "Processing Time", value: "-40%" },
        { label: "DB Latency", value: "-30%" },
        { label: "Pattern", value: "MVC + DTO" }
      ],
      tags: ["Java 17", "Spring Boot", "MySQL", "OAuth2", "Spring Data JPA"],
      github: "https://github.com/pradeepkumar823/FoodFrenzy-main"
    },
    {
      id: "infantmilkcare",
      title: "InfantMilkCare",
      category: "fullstack",
      badge: "Full-Stack",
      date: "March 2025",
      icon: "Baby",
      description: "Precision health monitoring platform for infant nutrition and growth tracking with WHO metrics.",
      longDescription: "InfantMilkCare provides precision health and growth tracking for infants. It calculates WHO growth percentiles, tracks daily milk and formula intake, supports multi-child profile switching, and fires automated health alert notifications.",
      metrics: [
        { label: "Framework", value: "Spring Boot 3" },
        { label: "Database", value: "PostgreSQL" },
        { label: "UI Engine", value: "Thymeleaf" }
      ],
      tags: ["Spring Boot", "PostgreSQL", "Thymeleaf", "Spring Security"],
      github: "https://github.com/pradeepkumar823/InfantMilkCare"
    },
    {
      id: "zorvynbackend",
      title: "Zorvyn Backend",
      category: "backend",
      badge: "Backend",
      date: "February 2025",
      icon: "Server",
      description: "Production-ready Spring Boot REST API for a multi-role financial dashboard with JWT.",
      longDescription: "A secure financial microservice backend with role-based access control (USER/ADMIN/AUDITOR), JWT authentication, H2 in-memory persistence, OpenAPI documentation, and automated unit testing.",
      metrics: [
        { label: "Security", value: "JWT + RBAC" },
        { label: "Endpoints", value: "18+ REST" },
        { label: "Database", value: "H2 / MySQL" }
      ],
      tags: ["Spring Boot", "Spring Security", "JWT", "REST API", "H2 Database"],
      github: "https://github.com/pradeepkumar823/zorvynBackend"
    },
    {
      id: "bankingapp",
      title: "Simple Banking Application",
      category: "fullstack",
      badge: "Full-Stack",
      date: "January 2025",
      icon: "Building2",
      description: "Secure banking simulation with BCrypt password hashing and real-time transaction logging.",
      longDescription: "Simulates key retail banking operations: account registration, fund transfers, transaction history auditing, and balance validation with Spring Security and JPA Hibernate.",
      metrics: [
        { label: "Security", value: "BCrypt Hashing" },
        { label: "Transactions", value: "ACID Compliant" },
        { label: "ORM Layer", value: "Hibernate JPA" }
      ],
      tags: ["Spring Security", "MySQL", "JPA / Hibernate", "Java"],
      github: "https://github.com/pradeepkumar823/Simple-Banking-Application"
    },
    {
      id: "dsajava",
      title: "DSA Java Archive",
      category: "backend",
      badge: "Backend / DSA",
      date: "2024 - Present",
      icon: "Code",
      description: "Curated collection of 400+ LeetCode problem solutions in Java (Max Rating: 1661).",
      longDescription: "Comprehensive data structures and algorithms repository covering arrays, trees, dynamic programming, graphs, sliding window, and backtracking solutions in clean Java.",
      metrics: [
        { label: "LeetCode Solved", value: "400+" },
        { label: "Max Rating", value: "1661" },
        { label: "CodeChef Rating", value: "1032" }
      ],
      tags: ["Java", "DSA", "LeetCode", "Algorithms"],
      github: "https://github.com/pradeepkumar823/DSAJava"
    },
    {
      id: "emailsender",
      title: "Email Sender App",
      category: "fullstack",
      badge: "Full-Stack",
      date: "December 2024",
      icon: "Mail",
      description: "Full-stack email management app with React frontend and Spring Boot backend for SMTP dispatch.",
      longDescription: "Combines a dynamic React.js dashboard with a Spring Boot JavaMail API to send custom HTML formatted emails via SMTP protocol with attachment support.",
      metrics: [
        { label: "Frontend", value: "React.js" },
        { label: "Backend", value: "Spring Boot" },
        { label: "Protocol", value: "SMTP / JavaMail" }
      ],
      tags: ["React", "Spring Boot", "JavaMail", "SMTP"],
      github: "https://github.com/pradeepkumar823/EmailSender-frontend"
    },
    {
      id: "microservices",
      title: "Reactive Microservices",
      category: "backend",
      badge: "Backend",
      date: "November 2024",
      icon: "Boxes",
      description: "Scalable Microservices Architecture & Reactive Programming with Spring WebFlux and Docker.",
      longDescription: "Demonstrates asynchronous non-blocking API patterns using Spring WebFlux, Eureka Service Discovery, API Gateway routing, and Docker container orchestration.",
      metrics: [
        { label: "Paradigm", value: "Reactive WebFlux" },
        { label: "Discovery", value: "Netflix Eureka" },
        { label: "Containers", value: "Docker Compose" }
      ],
      tags: ["Spring WebFlux", "Microservices", "Docker", "REST API"],
      github: "https://github.com/pradeepkumar823/Microservice"
    },
    {
      id: "devops",
      title: "DevOps CI/CD Pipelines",
      category: "devops",
      badge: "DevOps",
      date: "October 2024",
      icon: "Container",
      description: "Jenkins automation pipelines for automated building, testing, and Docker container deployment.",
      longDescription: "A collection of DevOps projects demonstrating automated continuous integration and continuous deployment (CI/CD) pipelines using Jenkins, Docker, and Maven.",
      metrics: [
        { label: "Automation", value: "Jenkins CI/CD" },
        { label: "Build Tool", value: "Apache Maven" },
        { label: "Deployment", value: "Docker Containers" }
      ],
      tags: ["Jenkins", "CI/CD", "Docker", "Maven", "Git"],
      github: "https://github.com/pradeepkumar823/pipeline-example"
    },
    {
      id: "weatherapp",
      title: "Weather Portal",
      category: "frontend",
      badge: "Frontend",
      date: "August 2024",
      icon: "SunMedium",
      description: "Real-time weather forecast application with location search and weather API integration.",
      longDescription: "Responsive weather dashboard fetching live atmospheric metrics, 5-day forecasts, wind speeds, and dynamic weather condition wallpapers.",
      metrics: [
        { label: "API Sync", value: "Real-time" },
        { label: "Responsive", value: "100% Mobile" },
        { label: "Stack", value: "JS / HTML / CSS" }
      ],
      tags: ["JavaScript", "HTML5/CSS3", "Weather API"],
      github: "https://github.com/pradeepkumar823/Weather-Website"
    },
    {
      id: "frontendprojects",
      title: "React Component Suite",
      category: "frontend",
      badge: "Frontend",
      date: "July 2024",
      icon: "Code2",
      description: "Interactive React UI components featuring custom hooks, state management, and smooth transitions.",
      longDescription: "A suite of modular React frontend projects showcasing hooks (useState, useEffect, useReducer), state management, and interactive widgets like Counter and Like buttons.",
      metrics: [
        { label: "Library", value: "React 19" },
        { label: "State", value: "React Hooks" },
        { label: "Design", value: "Vanilla CSS" }
      ],
      tags: ["React", "JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/pradeepkumar823/COUNTER-BUTTON"
    },
    {
      id: "game2048",
      title: "2048 Puzzle Game",
      category: "game",
      badge: "Game",
      date: "June 2024",
      icon: "Gamepad2",
      description: "Classic 2048 grid puzzle game with tile merging animations, keyboard controls, and high score tracking.",
      longDescription: "Smooth JavaScript implementation of the 2048 game with matrix manipulation logic, swipe gestures support, and local storage state persistence.",
      metrics: [
        { label: "Logic", value: "2D Matrix Grid" },
        { label: "Storage", value: "LocalStorage" },
        { label: "Controls", value: "Keyboard + Touch" }
      ],
      tags: ["JavaScript", "HTML5 Canvas", "CSS Animations"],
      github: "https://github.com/pradeepkumar823/game2048"
    }
  ],
  education: [
    {
      title: "B.Tech in Computer Science and Engineering",
      institution: "Global Institute of Technology and Management, Gurgaon",
      period: "Sep 2022 - May 2026",
      details: "CGPA: 7.8 | Gurugram, Haryana. Specializing in Java Backend, Spring Boot, Microservices, Spring AI, MySQL, REST APIs, and Data Structures & Algorithms."
    },
    {
      title: "Senior Secondary (Class XII - PCM)",
      institution: "CBSE Board",
      period: "2020 - 2022",
      details: "Focused on Physics, Chemistry, and Mathematics."
    },
    {
      title: "Secondary School (Class X - CBSE)",
      institution: "Jawahar Navodaya Vidyalaya, Palamu II (CBSE)",
      period: "Aug 2015 - March 2020",
      details: "CGPA: 8.4 | Japla, Jharkhand. Excelled in Mathematics, Science, and Computer Applications."
    }
  ],
  certifications: [
    {
      title: "Java (Basic) Certificate",
      issuer: "HackerRank",
      year: "Sep 2024",
      link: "https://www.hackerrank.com/certificates/c6d26786fb2e",
      details: "Verified proficiency in Java fundamentals, data structures, object-oriented concepts, and control flow.",
      image: "/cert_java_hackerrank.png"
    },
    {
      title: "Spring Boot 3 Essential Training",
      issuer: "LinkedIn Learning",
      year: "Jan 2026",
      link: "https://www.linkedin.com/learning/certificates/0fbd5769f0c6c4488c7e66bcdb618d028d1047a87a042c7640c7aeb090309b0f",
      details: "Built RESTful APIs using Spring Boot and Spring Data JPA, dependency injection, and configuration management.",
      image: "/cert_spring_boot.png"
    },
    {
      title: "Career Essentials in Software Development",
      issuer: "Microsoft & LinkedIn",
      year: "Jan 2026",
      link: "https://www.linkedin.com/learning/certificates/50fa2b452fd32a4033d6ea3085e1cdd13f8a1dcc85a2a15751f6f8692a345ba8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BfppgKHvZTKmSfPRc8gZzEg%3D%3D",
      details: "Comprehensive foundation in modern software engineering principles, Git version control, and team collaboration.",
      image: "/cert_career_essentials.png"
    },
    {
      title: "Microservices Foundations",
      issuer: "LinkedIn Learning",
      year: "Aug 2024",
      link: "https://www.linkedin.com/learning/certificates/ae8fa87f09b9ec5cc60221ea3e59a5c6ae860c0b9654ceba9163b2233d1a0350?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BfppgKHvZTKmSfPRc8gZzEg%3D%3D",
      details: "Designed microservice architectures, service discovery, API gateways, and distributed data management patterns.",
      image: "/cert_microservices.png"
    },
    {
      title: "Programming in Java Certificate",
      issuer: "NPTEL",
      year: "Juny 2025",
      link: "https://drive.google.com/file/d/1FhlDWMW2Qjli5siCkCQC5dSpoEG6J2nJ/view",
      details: "Mastered OOP concepts, exception handling, collections framework, multithreading, and industry-standard coding practices.",
      image: "/cert_nptel.png"
    },
    {
      title: "JPMorgan Chase - Software Engineering Simulation",
      issuer: "Forage",
      year: "June 2026",
      link: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_dMN5f5eamReFMDkGh_1782551246243_completion_certificate.pdf",
      details: "Built REST APIs in Spring Boot, integrated Kafka messaging and H2 database for data processing.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Citi ICG Technology Software Development Simulation",
      issuer: "Forage",
      year: "May 2026",
      link: "https://www.theforage.com/completion-certificates/8eNRcRqBZM9HLvwGw/2jxESPvorR7fmypXj_8eNRcRqBZM9HLvwGw_dMN5f5eamReFMDkGh_1778328448285_completion_certificate.pdf",
      details: "Designed state diagrams, queried web data, visualized live datasets, and applied analytical problem-solving skills.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
    }
  ],
  extracurriculars: [
    {
      title: "Competitive Programming & Problem Solving",
      details: "Solved 400+ problems on LeetCode with maximum rating of 1661, and CodeChef rating of 1032."
    },
    {
      title: "Core Team Head - GITM Team Sankalp",
      details: "Led technical initiatives, community outreach, and workshop organization at college level."
    },
    {
      title: "Student Coordinator - Hack 2.0",
      details: "Coordinated technical hackathon event Hack 2.0 organized by GITM Gurgaon."
    },
    {
      title: "National Athletics Contender (High Jump)",
      details: "Represented Patna Region at 29th National Athletics Meet 2018 hosted by Navodaya Vidyalaya Samiti at JNV Wargal, Telangana."
    }
  ]
};
