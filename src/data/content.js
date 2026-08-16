export const identity = {
  name: "Anay Maurya",
  initials: "AM",
  subtitle: "Professional Portfolio",
  phone: "+91 7905619358",
  phoneHref: "tel:+917905619358",
  email: "anaymaurya04@gmail.com",
  github: "github.com/anaymaurya04",
  githubHref: "https://github.com/anaymaurya04",
  location: "Noida, India",
  linkedinLabel: "linkedin.com/in/anay-maurya",
  linkedinHref: "https://www.linkedin.com/in/anay-maurya/",
};

export const about = {
  headline:
    "Backend-focused MCA candidate at JIIT Noida (2025\u20132027) with hands-on experience building REST APIs, hybrid search systems, and AI-integrated applications. Strong foundation in Java, Spring Boot, Python, SQL, vector search, and data structures & algorithms.",
  detail:
    "Interested in retrieval-augmented AI systems where architecture choices double as trust and governance decisions \u2014 grounding LLM outputs in traceable evidence rather than free-form generation.",
};

export const skillCategories = [
  {
    category: "Languages",
    skills: ["Java", "Python", "SQL", "JavaScript", "Dart"],
  },
  {
    category: "Backend & Frameworks",
    skills: [
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "Spring AI",
      "REST APIs",
      "FastAPI",
      "Flask",
    ],
  },
  {
    category: "Databases & Search",
    skills: [
      "PostgreSQL",
      "pgvector",
      "MySQL",
      "ChromaDB",
      "Apache Lucene",
      "BM25",
      "HNSW",
    ],
  },
  {
    category: "AI / ML",
    skills: [
      "RAG",
      "Embeddings",
      "Hybrid Retrieval",
      "Vector Search",
      "NLP",
      "LangChain",
      "TensorFlow",
      "Scikit-Learn",
      "OpenCV",
      "Pandas",
      "NumPy",
    ],
  },
  {
    category: "Tools & Practices",
    skills: [
      "Git/GitHub",
      "Maven",
      "JUnit",
      "Docker",
      "Postman",
      "Agile/Scrum",
      "TDD",
    ],
  },
  {
    category: "Other",
    skills: [
      "Flutter",
      "Firebase",
      "Chrome Extensions (Manifest V3)",
      "HTML/CSS",
    ],
  },
];

export const experience = [
  {
    role: "DEF-SPACE Winter Intern",
    organisation: "Bharat Space Education Research Centre (BSERC)",
    period: "Dec 2025 \u2013 Jan 2026",
    points: [
      "STEM-focused internship centered on grassroots-level technology development, innovation, and practical technology applications.",
      "Gained exposure to space education, research-driven problem solving, and technology-oriented work aligned with the Viksit Bharat @2047 vision.",
      "Certificate issued Jan 2026.",
    ],
  },
  {
    role: "Computer Lab Assistant",
    organisation: "Rishi Public School",
    period: "Nov 2024 \u2013 Jan 2025",
    points: [
      "Mentored students in programming fundamentals and supported hands-on computer lab activities, including lab management and troubleshooting.",
    ],
  },
];

export const projects = [
  {
    title: "IndiLex \u2014 Hybrid Semantic Search Engine for Legal Judgments",
    status: "active",
    repo: "github.com/anaymaurya04/IndiSearch",
    repoHref: "https://github.com/anaymaurya04/IndiSearch",
    stack: [
      "Java",
      "Spring Boot",
      "Spring AI",
      "PostgreSQL (pgvector)",
      "Apache Lucene",
    ],
    points: [
      "Hybrid semantic + keyword search engine over Indian Supreme Court judgments, with traceable source chunks and a per-result score breakdown.",
      "Structure-aware legal chunker that segments judgments into Facts / Held / Order sections via heading detection, with a paragraph-split fallback for unstructured text.",
      "Hybrid re-ranking layer using Reciprocal Rank Fusion (k=60) combining dense vector similarity (pgvector, HNSW index), BM25 keyword search (Apache Lucene), and a citation-authority boost.",
      "Spring AI integrated with a local ONNX runtime (all-MiniLM-L6-v2, 384-dim embeddings), removing dependency on external embedding APIs.",
      "A GOVERNANCE.md documenting the system's failure modes and guardrails explicitly.",
    ],
  },
  {
    title: "AI Email Assistant \u2014 REST API + Chrome Extension",
    status: "shipped",
    repo: "github.com/anaymaurya04/AI-Email-Assistant",
    repoHref: "https://github.com/anaymaurya04/AI-Email-Assistant",
    stack: ["Java", "Spring Boot", "Chrome Extension (Manifest V3)", "Google Gemini API"],
    points: [
      "Spring Boot REST backend integrated with the Google Gemini API to generate context-aware email replies across four selectable tones.",
      "Manifest V3 Chrome extension that injects an in-page \u201cAuto Reply\u201d button into Gmail's compose window, using content scripts to read email context and handle Gmail's asynchronous DOM loading.",
      "Flexible API-key management supporting both server-side and per-request configuration.",
    ],
    detail: [
      "POST /api/email/generate",
      "Content-Type: application/json",
      "X-Gemini-Key: <your-key>  (optional, overrides server key)",
      "",
      "{",
      "  \"emailContent\": \"The email you want to reply to...\",",
      "  \"tone\": \"professional\"",
      "}",
      "",
      "-> 200 OK",
      "<generated reply as plain text>",
    ],
  },
  {
    title: "YouTube Downloader",
    status: "shipped",
    repo: "github.com/anaymaurya04/Youtube-Downloader",
    repoHref: "https://github.com/anaymaurya04/Youtube-Downloader",
    stack: ["Python", "Flask", "pytube"],
    points: [
      "Flask web application that uses the pytube library to download YouTube videos, audio, and playlists through a simple web interface.",
    ],
  },
  {
    title: "E-Commerce Backend with Microservices",
    status: "active",
    repo: "github.com/anaymaurya04/ECommerce-Backend-with-Microservices",
    repoHref: "https://github.com/anaymaurya04/ECommerce-Backend-with-Microservices",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
      "Spring Boot Actuator",
    ],
    points: [
      "Spring Boot e-commerce backend evolving from a monolithic layered REST API toward a microservices architecture (User, Product, and Order services behind an API Gateway).",
      "Roadmap covers user/address management, product management, shopping cart, order management, and DTO-based request/response handling.",
      "Planned infrastructure additions include Spring Boot Actuator monitoring, Docker containerization, Docker Compose, and PostgreSQL persistence.",
    ],
  },
];

export const leadership = [
  "Lead Organizer, HackDiwas \u2014 mentored 3 competing teams, translated technical direction into actionable guidance.",
  "Led the developer team at U Hack 2.0 \u2014 shipped a full-stack product within a 24-hour hackathon deadline.",
  "Self-directed exploration of GenAI tooling (LangChain, RAG, vector databases) beyond coursework, consistently turned into shipped projects.",
];

export const education = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "JIIT Noida",
    period: "2025\u20132027",
    detail:
      "Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering.",
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "United University",
    period: "2022\u20132025",
    detail: null,
  },
];

export const certifications = [
  {
    title: "DEF-SPACE Winter Internship Certificate",
    issuer: "Bharat Space Education Research Centre (BSERC)",
    period: "Jan 2026",
  },
];

export const quickStats = [
  {
    value: "4",
    label: "Projects",
    color: "blue",
    source: {
      href: "https://github.com/anaymaurya04?tab=repositories",
      label: "github.com/anaymaurya04",
    },
  },
  { value: "41", label: "Skills", color: "purple" },
  { value: "2", label: "Hackathons", color: "pink" },
];

export const resumePath = "hero/AnayMauryaReume.pdf";
