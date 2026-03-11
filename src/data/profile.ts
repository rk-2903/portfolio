import resumeUrl from "../assets/Rahul_Kumar_Resume.pdf";

export const profile = {
  initials: "RK",
  name: {
    first: "RAHUL",
    last: "KUMAR",
    full: "Rahul Kumar",
  },
  hero: {
    prefix: "Aspiring AI",
    primary: "ENGINEER",
    primaryAlt: "RESEARCHER",
    secondary: "FULL-STACK",
    secondaryAlt: "DEVELOPER",
  },
  contact: {
    email: "rahulkumar6611@gmail.com",
    phone: "+1 (940) 326-2888",
    location: "Texas, United States",
    linkedin: "https://www.linkedin.com/in/rk-2903",
    resume: resumeUrl,
  },
  summary:
    "Aspiring AI Engineer with 5 years of experience as a Full-Stack Developer, building scalable systems with Java, Kotlin, Spring Boot, Angular 8, MySQL, MongoDB, Neo4j, and Docker. I focus on microservices-based architecture, observability, and performance, and I am currently pursuing an M.S. in Artificial Intelligence at the University of North Texas while seeking AI/ML internships and CPT opportunities.",
  loadingTitles: [
    "Aspiring AI Engineer",
    "Full-Stack Developer",
    "Machine Learning Engineer",
    "Java Backend Engineer",
  ],
  whatIDo: [
    {
      title: "AI/ML",
      subtitle: "Applied Intelligence Systems",
      description:
        "Building practical AI systems across retrieval-augmented generation, custom model training, summarization research, and computer vision. I work with modern ML tooling to move from experimentation to measurable outcomes.",
      tags: [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "LangChain",
        "Hugging Face",
        "BERT",
        "T5",
        "YOLO",
        "OpenCV",
      ],
    },
    {
      title: "FULL-STACK",
      subtitle: "Scalable Platform Engineering",
      description:
        "Designing and shipping reliable backend and frontend systems with a strong emphasis on microservices, APIs, observability, and production performance. My foundation comes from Java, Kotlin, Spring Boot, Angular, and cloud-native tooling.",
      tags: [
        "Java",
        "Kotlin",
        "Spring Boot",
        "Angular",
        "MySQL",
        "MongoDB",
        "Neo4j",
        "Docker",
        "Kubernetes",
      ],
    },
  ],
  experience: [
    {
      role: "Instructional Assistant - IT Capstone II",
      company: "University of North Texas",
      period: "2026",
      description:
        "Conduct code reviews, enforce software design and documentation best practices, and review architecture decisions with a focus on scalability, security, and maintainability.",
    },
    {
      role: "Instructional Assistant - IT Capstone I",
      company: "University of North Texas",
      period: "2025",
      description:
        "Evaluate 20+ teams, mentor 5 teams through the full project lifecycle, and support Agile delivery through weekly technical guidance and student office hours.",
    },
    {
      role: "Machine Learning Engineer",
      company: "Smarsh",
      period: "2024-25",
      description:
        "Scaled data pipelines processing millions of records, led observability improvements with Grafana dashboards and alerting, and implemented resilient retry flows that reduced API failures by 50%.",
    },
    {
      role: "Application Developer II",
      company: "Udaan",
      period: "2021-24",
      description:
        "Improved API latency by 40% with Redis caching, implemented monetization and billing flows, and redesigned seller dispute handling to reduce agent interaction by 70%.",
    },
    {
      role: "Full Stack Java Developer",
      company: "Thinking Stack",
      period: "2021",
      description:
        "Built REST APIs with Swagger, reusable Angular components, visualizations with NGX Charts, and optimized data access using Spring Data JPA and Elasticsearch.",
    },
    {
      role: "Full Stack Java Developer",
      company: "ITC Infotech",
      period: "2019-21",
      description:
        "Developed Spring Boot microservices and Angular applications, designed scalable banking modules, and built an internal Neo4j-powered quiz platform for personalized assessments.",
    },
  ],
  projects: [
    {
      title: "RAG Pipeline",
      category: "Generative AI",
      tools: "LangChain, Hugging Face, Retrieval-Augmented Generation",
      image: "/images/placeholder.webp",
    },
    {
      title: "Model Training & Deployment",
      category: "LLM Engineering",
      tools: "Custom LLM Fine-Tuning, Weights & Biases, Hugging Face",
      image: "/images/placeholder.webp",
    },
    {
      title: "Summarization Research",
      category: "NLP Research",
      tools: "BERT, T5, ROUGE, BERTScore, MEDIQA Dataset",
      image: "/images/placeholder.webp",
    },
    {
      title: "Brand Logo Detection",
      category: "Computer Vision",
      tools: "YOLO, OpenCV, Custom Dataset Training",
      image: "/images/placeholder.webp",
    },
  ],
  techStack: [
    {
      title: "Languages",
      items: ["Python", "Java", "Kotlin", "SQL", "TypeScript", "Bash"],
    },
    {
      title: "AI / ML",
      items: [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "XGBoost",
        "Hugging Face",
        "LangChain",
      ],
    },
    {
      title: "Backend / Data",
      items: [
        "Spring Boot",
        "MySQL",
        "MongoDB",
        "Neo4j",
        "Kafka",
        "Swagger",
      ],
    },
    {
      title: "Platform",
      items: [
        "Angular",
        "Docker",
        "Kubernetes",
        "AWS",
        "API Gateway",
        "Grafana",
      ],
    },
  ],
  education: {
    current: "M.S. in Artificial Intelligence, University of North Texas",
    previous:
      "B.Tech. in Information Technology, St. Thomas' College of Engineering and Technology",
  },
  footerYear: "2026",
};