export const identity = {
  name: "Anay Maurya",
  initials: "AM",
  subtitle: "Java Backend Developer",
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
    "Java backend-focused MCA candidate at JIIT Noida (2025\u20132027) with hands-on experience building REST APIs, durable execution services, and hybrid search systems. Strong foundation in Java 17/21, Spring Boot, PostgreSQL, and data structures & algorithms.",
  detail:
    "Interested in backend reliability: designing systems that handle ambiguous failures, idempotency, and concurrency honestly \u2014 and documenting the limits of what they can guarantee.",
};

export const skillCategories = [
  {
    category: "Languages",
    skills: ["Java 17/21", "SQL", "Python", "JavaScript"],
  },
  {
    category: "Computer Science",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming"],
  },
  {
    category: "Backend",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "Spring AI",
    ],
  },
  {
    category: "Databases & Search",
    skills: ["PostgreSQL", "pgvector", "H2", "Apache Lucene"],
  },
  {
    category: "Testing & Tools",
    skills: [
      "JUnit 5",
      "API & Integration Testing",
      "Maven",
      "Git/GitHub",
      "Postman",
      "Docker Compose",
    ],
  },
  {
    category: "Foundations",
    skills: [
      "HTML/CSS",
      "Flutter",
      "Firebase",
      "TensorFlow",
      "Scikit-Learn",
      "OpenCV",
      "Pandas",
      "NumPy",
    ],
  },
];

export const skillCount = skillCategories.reduce(
  (total, category) => total + category.skills.length,
  0
);

export const experience = [
  {
    role: "Freelance Web Developer",
    organisation: "Bharat Foundation",
    period: "Nov 2025 \u2013 Feb 2026",
    points: [
      "Built and delivered a website for Bharat Foundation as a paid freelance project using HTML, CSS, and JavaScript.",
    ],
  },
  {
    role: "DEF-SPACE Winter Intern",
    organisation: "Bharat Space Education Research Centre (BSERC)",
    period: "Dec 2025 \u2013 Jan 2026",
    points: [
      "Contributed to grassroots technology development and research-driven problem solving under the Viksit Bharat @2047 initiative.",
      "Gained exposure to space education and practical technology applications; certificate issued Jan 2026.",
    ],
  },
  {
    role: "Java Mentor & Computer Lab Assistant",
    organisation: "Rishi Public School",
    period: "Nov 2024 \u2013 Jan 2025",
    points: [
      "Taught Java fundamentals and mentored students in programming basics.",
      "Supported hands-on computer lab activities, including lab management and troubleshooting.",
    ],
  },
];

export const projects = [
  {
    title: "Relay \u2014 Durable Execution & Reliability Layer",
    status: "active",
    repo: "github.com/anaymaurya04/Relay",
    repoHref: "https://github.com/anaymaurya04/Relay",
    stack: [
      "Java 17",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "PostgreSQL",
      "JUnit 5",
      "Maven",
    ],
    points: [
      "Executes API calls on a client's behalf and records ambiguous timeouts as UNKNOWN rather than guessing whether the request succeeded.",
      "Models five operation states and four attempt outcomes, distinguishing requests that were never sent from ones that may have reached the destination.",
      "Prevents duplicate operations: eight simultaneous identical requests create exactly one operation, enforced by a database unique constraint and concurrency tests.",
      "Uses Idempotency-Key headers for outbound calls; workers claim jobs with PostgreSQL row locking using FOR UPDATE SKIP LOCKED.",
      "Wrote 22 automated tests against a real PostgreSQL database and real HTTP servers, including forced connection resets.",
      "Currently at Phase 3 of 5 \u2014 retry scheduling and demo packaging are next.",
    ],
  },
  {
    title: "E-Commerce Backend \u2014 REST API",
    status: "shipped",
    repo: "github.com/anaymaurya04/ECommerce-Backend",
    repoHref: "https://github.com/anaymaurya04/ECommerce-Backend",
    stack: [
      "Java 17",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "H2",
      "Lombok",
      "Maven",
    ],
    points: [
      "Built 15 REST API endpoints for users, products, carts, and orders using Spring Boot, Spring Data JPA, and Hibernate.",
      "Implemented per-user cart and order separation via the X-User-ID header, keyword product search, and soft deletion.",
      "Organized the application into controller, service, repository, model, and DTO layers with proper HTTP semantics.",
      "Backed by an H2 database with a domain model spanning users, addresses, products, carts, and orders.",
    ],
  },
  {
    title: "IndiLex \u2014 Hybrid Search for Indian Supreme Court Judgments",
    status: "shipped",
    repo: "github.com/anaymaurya04/IndiSearch",
    repoHref: "https://github.com/anaymaurya04/IndiSearch",
    stack: [
      "Java 21",
      "Spring Boot",
      "Spring AI",
      "PostgreSQL (pgvector)",
      "Apache Lucene",
      "PDFBox",
      "Docker Compose",
      "JUnit 5",
    ],
    points: [
      "Built search, ingestion, and health endpoints for a hybrid search service over Indian Supreme Court judgments.",
      "Implemented PDF extraction and structure-aware chunking (Facts, Held, Order), with 384-dimensional embeddings stored in PostgreSQL using pgvector and an HNSW index.",
      "Combined dense vector and Apache Lucene BM25 results using Reciprocal Rank Fusion (k=60) and a citation-authority boost.",
      "Wrote three JUnit 5 test suites covering chunking, rank fusion, and citation boosting.",
      "Documented failure modes and guardrails in GOVERNANCE.md, including citation staleness and empty-query handling.",
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
];

export const leadership = [
  "Lead Organizer, HackDiwas \u2014 mentored three competing teams with technical guidance.",
  "Developer Team Lead, U Hack 2.0 \u2014 led a team in shipping a full-stack product in 24 hours.",
  "Self-directed exploration of durable execution, PostgreSQL, and hybrid retrieval beyond coursework, turned into shipped projects.",
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
    value: String(projects.length),
    label: "Projects",
    color: "blue",
    source: {
      href: "https://github.com/anaymaurya04?tab=repositories",
      label: "github.com/anaymaurya04",
    },
  },
  { value: String(skillCount), label: "Skills", color: "purple" },
  { value: "2", label: "Hackathons", color: "pink" },
];

export const resumePath = "hero/AnayMauryaReume.pdf";
