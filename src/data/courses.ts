export type Lesson = {
  title: string;
  duration: string;
};

export type CurriculumSection = {
  title: string;
  lessons: Lesson[];
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  price: number;
  originalPrice?: number;
  image?: string;
  icon?: string;
  downloadFile?: string;
  
  // Extended fields for detail page
  level: string;
  duration: string;
  lessonsCount: string;
  learningOutcomes: string[];
  curriculum: CurriculumSection[];
  requirements: string[];
  audience: string[];
  instructor: {
    name: string;
    role: string;
    bio: string;
    image?: string;
  };
  features: {
    title: string;
    description: string;
  }[];
};

const commonFeatures = [
  { title: "Lifetime Access", description: "Access your course after purchase." },
  { title: "Self-Paced", description: "Learn at your own pace." },
  { title: "Online", description: "Study from anywhere." },
  { title: "Course Materials", description: "Access learning resources." }
];


const commonRequirements = [
  "Basic computer literacy",
  "A computer with internet access",
  "Willingness to learn",
  "No previous professional experience required"
];

const commonAudience = [
  "Students beginning their technology journey",
  "Beginners interested in IT",
  "Learners looking to build foundational technical skills",
  "Anyone interested in the subject"
];

export const courses: Course[] = [
  {
    id: "c1",
    title: "Introduction to Programming",
    slug: "programming",
    description: "This course introduces students to the fundamental concepts required to understand modern programming. Students explore syntax, logic, problem-solving, and practical development using modern languages.",
    price: 20,
    originalPrice: 60,
    category: "Programming",
    level: "Beginner Friendly",
    duration: "10+ Hours",
    lessonsCount: "48 Lessons",
    learningOutcomes: [
      "Understand fundamental programming concepts",
      "Work with variables and data types",
      "Understand conditional logic",
      "Use loops and functions",
      "Understand basic algorithms",
      "Build simple programs"
    ],
    curriculum: [
      {
        title: "01 — Getting Started",
        lessons: [
          { title: "01. Introduction to Programming", duration: "10 min" },
          { title: "02. Setting up your Environment", duration: "15 min" },
          { title: "03. Your First Program", duration: "12 min" }
        ]
      },
      {
        title: "02 — Core Concepts",
        lessons: [
          { title: "04. Variables and Data Types", duration: "20 min" },
          { title: "05. Operators and Expressions", duration: "18 min" },
          { title: "06. Conditional Statements", duration: "25 min" }
        ]
      },
      {
        title: "03 — Advanced Basics",
        lessons: [
          { title: "07. Loops and Iteration", duration: "22 min" },
          { title: "08. Functions and Scope", duration: "30 min" },
          { title: "09. Building a Mini Project", duration: "45 min" }
        ]
      }
    ],
    requirements: commonRequirements,
    audience: commonAudience,
    instructor: {
      name: "Dr. Sarah Chen",
      role: "Lead Programming Instructor",
      bio: "Dr. Chen has over 15 years of experience in software engineering and has taught programming fundamentals to thousands of students worldwide."
    },
    features: commonFeatures
  },
  {
    id: "c2",
    title: "Web Development",
    slug: "web-development",
    description: "This course introduces students to the fundamental concepts required to build modern websites. Students explore HTML, CSS, JavaScript, responsive design, and frontend development workflows.",
    price: 70,
    originalPrice: 120,
    category: "Web Development",
    level: "Beginner Friendly",
    duration: "12+ Hours",
    lessonsCount: "52 Lessons",
    learningOutcomes: [
      "Understand HTML and CSS",
      "Build responsive web pages",
      "Understand JavaScript fundamentals",
      "Work with modern web development concepts",
      "Build interactive interfaces",
      "Understand frontend development workflows"
    ],
    curriculum: [
      {
        title: "01 — HTML Fundamentals",
        lessons: [
          { title: "01. How the Web Works", duration: "15 min" },
          { title: "02. HTML Structure and Tags", duration: "25 min" },
          { title: "03. Semantic HTML", duration: "18 min" }
        ]
      },
      {
        title: "02 — CSS Styling",
        lessons: [
          { title: "04. Introduction to CSS", duration: "20 min" },
          { title: "05. Box Model and Layout", duration: "30 min" },
          { title: "06. Responsive Design basics", duration: "25 min" }
        ]
      },
      {
        title: "03 — JavaScript Basics",
        lessons: [
          { title: "07. Adding Interactivity", duration: "22 min" },
          { title: "08. DOM Manipulation", duration: "28 min" },
          { title: "09. Events and Listeners", duration: "25 min" }
        ]
      }
    ],
    requirements: commonRequirements,
    audience: commonAudience,
    instructor: {
      name: "Dr. Marcus Johnson",
      role: "Senior Web Developer & Educator",
      bio: "With a background in building large-scale web applications, Dr. Johnson specializes in modern JavaScript frameworks and responsive design."
    },
    features: commonFeatures
  },
  {
    id: "c3",
    title: "Computer Architecture",
    slug: "computer-architecture",
    description: "This course introduces students to the fundamental hardware concepts that power our digital world. Students explore CPU design, memory management, operating system basics, and hardware-software relationships.",
    price: 150,
    originalPrice: 200,
    category: "Computer Architecture",
    level: "Beginner Friendly",
    duration: "8+ Hours",
    lessonsCount: "35 Lessons",
    learningOutcomes: [
      "Understand CPU architecture",
      "Understand memory and storage",
      "Learn how computer components interact",
      "Understand operating system fundamentals",
      "Understand data representation",
      "Understand hardware/software relationships"
    ],
    curriculum: [
      {
        title: "01 — Hardware Basics",
        lessons: [
          { title: "01. The Motherboard", duration: "15 min" },
          { title: "02. How CPUs Work", duration: "25 min" },
          { title: "03. Memory and Storage types", duration: "20 min" }
        ]
      },
      {
        title: "02 — Data Representation",
        lessons: [
          { title: "04. Binary and Hexadecimal", duration: "30 min" },
          { title: "05. Logic Gates", duration: "25 min" },
          { title: "06. Instructions and Execution", duration: "22 min" }
        ]
      },
      {
        title: "03 — OS Fundamentals",
        lessons: [
          { title: "07. Role of the Operating System", duration: "18 min" },
          { title: "08. Processes and Threads", duration: "20 min" },
          { title: "09. File Systems", duration: "25 min" }
        ]
      }
    ],
    requirements: commonRequirements,
    audience: commonAudience,
    instructor: {
      name: "Dr. Elena Rodriguez",
      role: "Hardware Systems Architect",
      bio: "Dr. Rodriguez holds a Ph.D. in Computer Engineering and has spent a decade designing microprocessors before bringing her expertise to the classroom."
    },
    features: commonFeatures
  },
  {
    id: "c4",
    title: "Networking",
    slug: "networking",
    description: "This course introduces students to the fundamental concepts required to understand modern networking. Students explore protocols, systems that connect computers globally, TCP/IP, routing, and network security basics.",
    price: 90,
    originalPrice: 110,
    category: "Networking",
    level: "Beginner Friendly",
    duration: "10+ Hours",
    lessonsCount: "42 Lessons",
    learningOutcomes: [
      "Understand network fundamentals",
      "Learn about IP addressing",
      "Understand routing and switching",
      "Learn network protocols",
      "Understand LAN and WAN concepts",
      "Understand network security basics"
    ],
    curriculum: [
      {
        title: "01 — Network Fundamentals",
        lessons: [
          { title: "01. What is a Network?", duration: "15 min" },
          { title: "02. The OSI Model", duration: "30 min" },
          { title: "03. Topologies and Types", duration: "20 min" }
        ]
      },
      {
        title: "02 — Protocols & Addressing",
        lessons: [
          { title: "04. TCP/IP Protocol Suite", duration: "25 min" },
          { title: "05. IP Addressing (IPv4/IPv6)", duration: "35 min" },
          { title: "06. DNS and DHCP", duration: "22 min" }
        ]
      },
      {
        title: "03 — Hardware & Security",
        lessons: [
          { title: "07. Routers and Switches", duration: "20 min" },
          { title: "08. Wireless Networking", duration: "18 min" },
          { title: "09. Basic Network Security", duration: "25 min" }
        ]
      }
    ],
    requirements: commonRequirements,
    audience: commonAudience,
    instructor: {
      name: "Dr. James Wilson",
      role: "Principal Network Engineer",
      bio: "An expert in network infrastructure and protocols, Dr. Wilson has designed enterprise-grade networks and holds multiple advanced networking certifications."
    },
    features: commonFeatures
  },
  {
    id: "c5",
    title: "Cybersecurity",
    slug: "cybersecurity",
    description: "This course introduces students to the fundamental concepts required to understand modern cybersecurity. Students explore security principles, common threats, network protection, authentication, encryption, and practical security awareness.",
    price: 60,
    originalPrice: 135,
    category: "Cybersecurity",
    level: "Beginner Friendly",
    duration: "14+ Hours",
    lessonsCount: "58 Lessons",
    learningOutcomes: [
      "Understand cybersecurity fundamentals",
      "Identify common security threats",
      "Understand authentication and authorization",
      "Learn network security concepts",
      "Understand encryption fundamentals",
      "Learn basic security best practices"
    ],
    curriculum: [
      {
        title: "01 — Introduction to Cybersecurity",
        lessons: [
          { title: "01. What is Cybersecurity?", duration: "15 min" },
          { title: "02. The CIA Triad", duration: "20 min" },
          { title: "03. Common Security Threats", duration: "25 min" }
        ]
      },
      {
        title: "02 — Defensive Concepts",
        lessons: [
          { title: "04. Authentication & Authorization", duration: "30 min" },
          { title: "05. Network Security Basics", duration: "28 min" },
          { title: "06. Firewalls and Monitoring", duration: "22 min" }
        ]
      },
      {
        title: "03 — Data Protection",
        lessons: [
          { title: "07. Encryption Fundamentals", duration: "35 min" },
          { title: "08. Public Key Infrastructure", duration: "25 min" },
          { title: "09. Security Best Practices", duration: "20 min" }
        ]
      }
    ],
    requirements: commonRequirements,
    audience: commonAudience,
    instructor: {
      name: "Dr. Aisha Patel",
      role: "Chief Information Security Officer",
      bio: "Dr. Patel brings real-world cybersecurity experience to her teaching, focusing on ethical hacking, cryptography, and secure system design."
    },
    features: commonFeatures,
    downloadFile: "/courses/cybersecurity.zip"
  }
];
