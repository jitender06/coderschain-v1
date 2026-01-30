export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  categories: string[];
  client: string;
  duration: string;
  results: Array<{ metric: string; label: string }>;
  image: string;
  logo: string;
  challenges: string[];
  solutions: string[];
  technologies: string[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
    avatar: string;
  };
  gallery?: string[];
  projectUrl?: string;
  githubUrl?: string;
  featured: boolean;
  completionDate: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  video?: {
    url: string;
    thumbnail: string;
    duration: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "synapse-ai",
    title: "Synapse AI Analytics",
    description: "Advanced business intelligence platform with predictive modeling and real-time data visualization. Built for enterprise scalability and deep insights.",
    excerpt: "Enterprise AI analytics platform achieving 300% faster data processing.",
    categories: ["artificial-intelligence", "data-analytics"],
    client: "Synapse Corp",
    duration: "8 Months",
    results: [
      { metric: "300%", label: "Faster Insights" },
      { metric: "45%", label: "Efficiency Gain" },
      { metric: "12M+", label: "Data Points/Sec" },
    ],
    image: "/projects/synapse-ai.png",
    logo: "/clients/synapse-logo.png",
    challenges: [
      "Processing Terrybytes of raw data in milliseconds",
      "Designing complex multi-dimensional visualizations",
      "Ensuring high precision in predictive models"
    ],
    solutions: [
      "Implemented a custom distributed processing engine",
      "Built a modular visualization library using WebGL",
      "Automated model training with cloud-native pipelines"
    ],
    technologies: ["React", "Python", "HuggingFace", "D3.js", "AWS"],
    testimonial: {
      quote: "The Sinapse platform transformed our decision-making process from reactive to proactive.",
      author: "Alex Rivera",
      position: "VP of Engineering",
      avatar: "/avatars/alex.jpg",
    },
    featured: true,
    completionDate: "2023-12-01",
    seo: {
      title: "Synapse AI Analytics | Case Study",
      description: "Learn how we built an enterprise AI platform for real-time predictive analytics.",
      keywords: ["AI", "Analytics", "Data Visualization", "Enterprise Software"],
    },
  },
  {
    id: 2,
    slug: "modernist",
    title: "The Modernist",
    description: "High-end fashion platform focused on minimalist aesthetics and seamless checkout. A premium e-commerce experience for luxury brands.",
    excerpt: "Luxury e-commerce platform with 65% higher conversion rates.",
    categories: ["luxury-ecommerce", "ui-ux"],
    client: "Modernist Fashion",
    duration: "5 Months",
    results: [
      { metric: "65%", label: "Conversion Lift" },
      { metric: "40%", label: "AOV Increase" },
      { metric: "0.8s", label: "Load Time" },
    ],
    image: "/projects/the-modernist.png",
    logo: "/clients/modernist-logo.png",
    challenges: [
      "Balancing high-res imagery with performance",
      "Creating a unique, frictionless checkout flow",
      "Integrating complex inventory systems"
    ],
    solutions: [
      "Next.js Image optimization and edge caching",
      "Heuristic-based checkout flow redesign",
      "Real-time ERP integration"
    ],
    technologies: ["Next.js", "Stripe", "Tailwind", "Shopify API"],
    testimonial: {
      quote: "Our brand identity has never looked better online. The results speak for themselves.",
      author: "Elena Rossi",
      position: "Creative Director",
      avatar: "/avatars/elena.jpg",
    },
    featured: true,
    completionDate: "2024-01-15",
    seo: {
      title: "The Modernist Luxury E-commerce | Case Study",
      description: "How we built a high-performance fashion platform with minimalist design.",
      keywords: ["E-commerce", "Luxury Fashion", "Next.js", "UI/UX"],
    },
  },
  {
    id: 3,
    slug: "orbit",
    title: "Orbit Crypto Wallet",
    description: "Ultra-secure digital asset management with multi-chain support and real-time portfolio tracking.",
    excerpt: "Next-gen Web3 wallet with military-grade security.",
    categories: ["fintech", "web3"],
    client: "Orbit Labs",
    duration: "6 Months",
    results: [
      { metric: "1M+", label: "Active Users" },
      { metric: "15+", label: "Chains Supported" },
      { metric: "0", label: "Security Breaches" },
    ],
    image: "/projects/orbit-crypto.png",
    logo: "/clients/orbit-logo.png",
    challenges: [
      "Managing multi-chain private keys securely",
      "Real-time transaction indexing",
      "Simplifying complex Web3 concepts for users"
    ],
    solutions: [
      "Multi-party computation (MPC) for keys",
      "GraphQL-based custom indexing layer",
      "UX-first design system for blockchain interaction"
    ],
    technologies: ["React Native", "Ethereum", "Solana", "Rust"],
    testimonial: {
      quote: "Orbit makes crypto feel like a standard banking app. It's the future of finance.",
      author: "Jordan Lee",
      position: "Founder, Orbit Labs",
      avatar: "/avatars/jordan.jpg",
    },
    featured: true,
    completionDate: "2023-11-20",
    seo: {
      title: "Orbit Crypto Wallet | Case Study",
      description: "Building a secure, multi-chain crypto wallet with premium UX.",
      keywords: ["Web3", "Crypto", "Wallet", "Fintech"],
    },
  },
  {
    id: 4,
    slug: "catalyst",
    title: "Catalyst SaaS",
    description: "Next-gen project management tool designed for global distributed teams. High-performance collaboration at scale.",
    excerpt: "Enterprise SaaS platform boosting team productivity by 40%.",
    categories: ["enterprise-software", "saas"],
    client: "Catalyst Devs",
    duration: "10 Months",
    results: [
      { metric: "40%", label: "Productivity Boost" },
      { metric: "200k", label: "Monthly Users" },
      { metric: "99.99%", label: "Uptime" },
    ],
    image: "/projects/catalyst-saas.png",
    logo: "/clients/catalyst-logo.png",
    challenges: [
      "Real-time collaboration conflicts",
      "Scaling to support large enterprise teams",
      "Complex permission and RBAC systems"
    ],
    solutions: [
      "CRDT-based real-time syncing",
      "Micro-frontend architecture",
      "Advanced caching and database partitioning"
    ],
    technologies: ["SaaS", "TypeScript", "Node.js", "PostgreSQL"],
    testimonial: {
      quote: "The scale and reliability of Catalyst are unmatched. It has redefined our workflow.",
      author: "Marcus Thorne",
      position: "Project Lead",
      avatar: "/avatars/marcus.jpg",
    },
    featured: true,
    completionDate: "2023-09-10",
    seo: {
      title: "Catalyst SaaS Platform | Case Study",
      description: "Development of a high-scale enterprise project management tool.",
      keywords: ["SaaS", "Enterprise", "Collaboration", "Productivity"],
    },
  },
  {
    id: 5,
    slug: "echostream",
    title: "EchoStream",
    description: "Immersive media streaming with real-time waveform visualization and AI-driven content discovery.",
    excerpt: "Creative streaming platform with 500k+ subscribers.",
    categories: ["creative-media", "streaming"],
    client: "Echo Media Group",
    duration: "7 Months",
    results: [
      { metric: "500k+", label: "Subscribers" },
      { metric: "3.5h", label: "Avg. Watch Time" },
      { metric: "20ms", label: "Latency" },
    ],
    image: "/projects/echostream.png",
    logo: "/clients/echo-logo.png",
    challenges: [
      "Ultra-low latency audio/video sync",
      "AI recommendation engine scaling",
      "High-energy interactive UI"
    ],
    solutions: [
      "Edge-based media processing",
      "Personalized ML models for discovery",
      "Custom animation engine for waveforms"
    ],
    technologies: ["Node.js", "WebRTC", "TensorFlow", "Framer Motion"],
    testimonial: {
      quote: "EchoStream provides an audio-visual experience we didn't think was possible on the web.",
      author: "Sarah Jenkins",
      position: "Product Manager",
      avatar: "/avatars/sarah.jpg",
    },
    featured: true,
    completionDate: "2024-01-05",
    seo: {
      title: "EchoStream Media Platform | Case Study",
      description: "How we built an immersive streaming service with real-time visualizations.",
      keywords: ["Streaming", "Media", "AI", "WebRTC"],
    },
  },
  {
    id: 6,
    slug: "vibecheck",
    title: "VibeCheck Social",
    description: "Community-driven social platform focused on vertical content and Gen-Z engagement flows.",
    excerpt: "Gen-Z focused social app with viral engagement loops.",
    categories: ["consumer-app", "social"],
    client: "VibeCheck Inc",
    duration: "9 Months",
    results: [
      { metric: "2M+", label: "Downloads" },
      { metric: "15 min", label: "Session Length" },
      { metric: "4.9", label: "App Store Rating" },
    ],
    image: "/projects/vibecheck.png",
    logo: "/clients/vibe-logo.png",
    challenges: [
      "Optimizing vertical video for mobile",
      "Developing viral sharing algorithms",
      "Managing high-frequency user interactions"
    ],
    solutions: [
      "Proprietary video compression engine",
      "Engagement-based ML feed",
      "Real-time social graph updates"
    ],
    technologies: ["React Native", "Firebase", "Google Cloud", "Redux"],
    testimonial: {
      quote: "VibeCheck is growing faster than we ever imagined. The tech stack is rock solid.",
      author: "David Kim",
      position: "CEO, VibeCheck",
      avatar: "/avatars/david.jpg",
    },
    featured: true,
    completionDate: "2023-10-30",
    seo: {
      title: "VibeCheck Social App | Case Study",
      description: "Building the next-gen social platform for Gen-Z audiences.",
      keywords: ["Social Media", "App Development", "React Native", "Gen-Z"],
    },
  },
  {
    id: 7,
    slug: "nexus",
    title: "Nexus Global Market",
    description: "Scalable marketplace for global trade with multi-currency support and AI fraud detection.",
    excerpt: "Global B2B marketplace facilitating $50M+ in quarterly trade.",
    categories: ["luxury-ecommerce", "fintech"],
    client: "Nexus Global",
    duration: "11 Months",
    results: [
      { metric: "$50M+", label: "Quarterly GMV" },
      { metric: "100+", label: "Countries" },
      { metric: "98%", label: "Fraud Detection" },
    ],
    image: "/projects/ai-fraud.png",
    logo: "/clients/nexus-logo.png",
    challenges: [
      "Complex cross-border payment compliance",
      "Large-scale vendor management",
      "Detecting fraudulent transactions internationally"
    ],
    solutions: [
      "Multi-provider payment gateway system",
      "Comprehensive vendor dashboard/analytics",
      "AI-driven fraud monitoring engine"
    ],
    technologies: ["Next.js", "Go", "PostgreSQL", "Analytics"],
    testimonial: {
      quote: "Nexus has bridged the gap between global buyers and local sellers effortlessly.",
      author: "Li Wei",
      position: "Head of Operations",
      avatar: "/avatars/li.jpg",
    },
    featured: true,
    completionDate: "2023-08-15",
    seo: {
      title: "Nexus Global Market | Case Study",
      description: "Scalable global marketplace for international B2B trade.",
      keywords: ["Marketplace", "B2B", "E-commerce", "Global Trade"],
    },
  },
  {
    id: 8,
    slug: "holosight-vr",
    title: "Holosight VR",
    description: "Immersive VR training platform for medical professionals, enabling risk-free surgical simulations with high-precision haptic feedback.",
    excerpt: "Medical VR training platform achieving 95% surgical accuracy.",
    categories: ["ar-vr"],
    client: "MedTech Innovations",
    duration: "12 Months",
    results: [
      { metric: "95%", label: "Accuracy" },
      { metric: "40%", label: "Cost Reduction" },
      { metric: "10k+", label: "Trained" },
    ],
    image: "/projects/saas-img.png",
    logo: "/clients/medtech-logo.png",
    challenges: [
      "Synchronizing haptic feedback with visual latency",
      "Modeling complex biological interactions",
      "Rendering high-poly medical assets in real-time"
    ],
    solutions: [
      "Custom predictive haptic engine",
      "Physically-based rendering (PBR) optimization",
      "Dynamic asset streaming for standalone VR"
    ],
    technologies: ["Unity", "Meta SDK", "C#", "Oculus"],
    testimonial: {
      quote: "Holosight has revolutionized how our residents prepare for complex procedures.",
      author: "Dr. James Aris",
      position: "Chief Surgeon",
      avatar: "/avatars/james.jpg",
    },
    featured: true,
    completionDate: "2024-02-10",
    seo: {
      title: "Holosight VR Medical Training | Case Study",
      description: "How we built a high-precision VR simulation for medical training.",
      keywords: ["VR", "Medical", "Simulation", "AR/VR"],
    },
  },
  {
    id: 9,
    slug: "flashstack",
    title: "FlashStack MVP",
    description: "Multi-tenant rapid deployment platform for early-stage startups to validate ideas within weeks instead of months.",
    excerpt: "Startup-focused MVP engine taking ideas to market in 4 weeks.",
    categories: ["mvp-development"],
    client: "Velocity Startups",
    duration: "3 Months",
    results: [
      { metric: "4 Weeks", label: "Time to Market" },
      { metric: "80%", label: "Setup Reduced" },
      { metric: "15+", label: "Startups Launched" },
    ],
    image: "/projects/catalyst-saas.png",
    logo: "/clients/velocity-logo.png",
    challenges: [
      "Creating highly reusable architecture patterns",
      "Integrating primary features without bloat",
      "Automating deployment pipelines for rapid iteration"
    ],
    solutions: [
      "Modular feature-flag based codebase",
      "Serverless cloud architecture for cost efficiency",
      "Built-in analytics and feedback loops"
    ],
    technologies: ["Next.js", "Supabase", "Tailwind", "Vercel"],
    testimonial: {
      quote: "We went from concept to 1,000 users in 30 days. Unbelievable efficiency.",
      author: "Sofia G.",
      position: "Founder",
      avatar: "/avatars/sofia.jpg",
    },
    featured: true,
    completionDate: "2024-01-20",
    seo: {
      title: "FlashStack MVP Platform | Case Study",
      description: "Rapid MVP development for startups to validate market fit.",
      keywords: ["MVP", "Startup", "Rapid Development", "Product Launch"],
    },
  },
  {
    id: 10,
    slug: "lumina-design",
    title: "Lumina Design",
    description: "Complete design system and brand transformation for a global fintech powerhouse, focusing on trust and accessibility.",
    excerpt: "Comprehensive UI/UX transformation boosting Fintech NPS by 50%.",
    categories: ["ui-ux"],
    client: "GloBank Fintech",
    duration: "4 Months",
    results: [
      { metric: "50%", label: "NPS Boost" },
      { metric: "35%", label: "Ticket Reduction" },
      { metric: "WCAG", label: "A++ Compliance" },
    ],
    image: "/projects/the-modernist.png",
    logo: "/clients/globank-logo.png",
    challenges: [
      "Consolidating fragmented design patterns",
      "Meeting strict accessibility standards",
      "Simplifying complex financial data"
    ],
    solutions: [
      "Enterprise-grade design system 'Lumina'",
      "User-centric dashboard redesign",
      "Accessibility-first component library"
    ],
    technologies: ["Figma", "Framer", "React", "Principle"],
    testimonial: {
      quote: "The interface finally matches the premium nature of our services.",
      author: "Robert Dunn",
      position: "VP Product",
      avatar: "/avatars/robert.jpg",
    },
    featured: true,
    completionDate: "2023-11-05",
    seo: {
      title: "Lumina Fintech Design System | Case Study",
      description: "Transformation of a global fintech platform through premium UI/UX.",
      keywords: ["UI/UX", "Design System", "Fintech", "Accessibility"],
    },
  },
  {
    id: 11,
    slug: "swiftlaunch",
    title: "SwiftLaunch Landing",
    description: "High-conversion growth page designed for an EdTech giant, optimized for speed and social proof.",
    excerpt: "EdTech landing page achieving a record-breaking 12% conversion.",
    categories: ["landing-page"],
    client: "Edutech Global",
    duration: "2 Weeks",
    results: [
      { metric: "12%", label: "Conversion Rate" },
      { metric: "200ms", label: "FCP" },
      { metric: "100", label: "Lighthouse Score" },
    ],
    image: "/projects/echostream.png",
    logo: "/clients/edutech-logo.png",
    challenges: [
      "Extreme performance optimization",
      "Maximizing mobile conversion loops",
      "Integrating seamless waitlist systems"
    ],
    solutions: [
      "Static site generation with ISR",
      "Micro-animations for engagement",
      "Edge-based personalization"
    ],
    technologies: ["React", "GSAP", "Tailwind", "PostHog"],
    testimonial: {
      quote: "The conversion surge was immediate. The best performing page we've ever run.",
      author: "Ananya R.",
      position: "Growth Lead",
      avatar: "/avatars/ananya.jpg",
    },
    featured: true,
    completionDate: "2024-03-01",
    seo: {
      title: "SwiftLaunch Conversion Landing | Case Study",
      description: "High-performance landing page development for global EdTech.",
      keywords: ["Landing Page", "Performance", "Conversion Optimization", "EdTech"],
    },
  },
  {
    id: 12,
    slug: "routineflux",
    title: "RoutineFlux",
    description: "The all-in-one tool to manage tasks, build strong habits, and visualize your progress with precision.",
    excerpt: "The all-in-one tool to manage tasks, build strong habits.",
    categories: ["productivity", "pwa"],
    client: "RoutineFlux Inc",
    duration: "4 Months",
    results: [
      { metric: "10k+", label: "Active Users" },
      { metric: "85%", label: "Retention" },
      { metric: "4.8", label: "App Store" },
    ],
    image: "/projects/rf.png",
    logo: "/clients/default-logo.png",
    challenges: [
      "Offline-first synchronization",
      "Gamification without distraction",
      "Cross-platform consistency"
    ],
    solutions: [
      "Local-first database architecture",
      "Minimalist reward systems",
      "PWA installation strategies"
    ],
    technologies: ["ReactJs", "PWA", "Habit Tracking"],
    testimonial: {
      quote: "My productivity has doubled since switching to RoutineFlux.",
      author: "Jamie L.",
      position: "Freelancer",
      avatar: "/avatars/default.jpg",
    },
    featured: true,
    completionDate: "2025-01-20",
    seo: {
      title: "RoutineFlux | Case Study",
      description: "Building the ultimate productivity and habit tracking tool.",
      keywords: ["Productivity", "Habits", "PWA", "React"],
    },
  },
  {
    id: 13,
    slug: "keyvault",
    title: "KeyVault Digital Marketplace",
    description: "A secure digital commerce platform for selling software licenses, game keys, and downloadable products.",
    excerpt: "Secure digital commerce for software and game keys.",
    categories: ["digital-ecommerce", "security"],
    client: "KeyVault Ltd",
    duration: "5 Months",
    results: [
      { metric: "100%", label: "Secure Delivery" },
      { metric: "2x", label: "Sales Volume" },
      { metric: "10k+", label: "Keys Sold" }
    ],
    image: "/projects/digital.png",
    logo: "/clients/default-logo.png",
    challenges: ["Secure key distribution", "Fraud prevention", "Instant delivery"],
    solutions: ["Encrypted key storage", "Real-time fraud checks", "Automated email delivery"],
    technologies: ["Next.js", "Stripe", "Secure Delivery"],
    testimonial: { quote: "KeyVault made selling digital products seamless and secure.", author: "Dev Team", position: "CTO", avatar: "/avatars/default.jpg" },
    featured: true,
    completionDate: "2025-02-15",
    seo: { title: "KeyVault Digital Marketplace | Case Study", description: "Secure digital commerce platform.", keywords: ["Digital", "Commerce", "Keys"] }
  },
  {
    id: 14,
    slug: "medibook",
    title: "MediBook Health",
    description: "Appointment and clinic management system ensuring digital records privacy.",
    excerpt: "Privacy-first clinic management.",
    categories: ["healthcare", "management"],
    client: "MediBook Inc",
    duration: "6 Months",
    results: [{ metric: "100+", label: "Clinics" }, { metric: "50k+", label: "Patients" }, { metric: "99.9%", label: "Uptime" }],
    image: "/projects/health.jpg",
    logo: "/clients/default-logo.png",
    challenges: ["HIPAA Compliance", "Real-time scheduling", "Data privacy"],
    solutions: ["End-to-end encryption", "WebSocket scheduling", "Role-based access"],
    technologies: ["Healthcare", "Appointments"],
    testimonial: { quote: "MediBook streamlined our clinic operations overnight.", author: "Dr. Smith", position: "Director", avatar: "/avatars/default.jpg" },
    featured: true,
    completionDate: "2025-01-10",
    seo: { title: "MediBook Health | Case Study", description: "Healthcare management platform.", keywords: ["Healthcare", "Clinic", "Management"] }
  },
  {
    id: 15,
    slug: "serveeasy",
    title: "ServeEasy Suite",
    description: "End-to-end management system including table reservations and online ordering.",
    excerpt: "Complete restaurant management suite.",
    categories: ["restaurant", "pos"],
    client: "ServeEasy",
    duration: "5 Months",
    results: [{ metric: "30%", label: "Revenue Increase" }, { metric: "15min", label: "Saved/Table" }, { metric: "500+", label: "Restaurants" }],
    image: "/projects/res.jpg",
    logo: "/clients/default-logo.png",
    challenges: ["POS Integration", "Peak load handling", "Inventory syncing"],
    solutions: ["Cloud-based POS", "Queue management system", "Real-time inventory"],
    technologies: ["POS", "Ordering", "Admin Panel"],
    testimonial: { quote: "ServeEasy makes running a restaurant effortless.", author: "Chef Gordon", position: "Owner", avatar: "/avatars/default.jpg" },
    featured: true,
    completionDate: "2024-12-05",
    seo: { title: "ServeEasy Suite | Case Study", description: "Restaurant management system.", keywords: ["Restaurant", "POS", "Ordering"] }
  },
  {
    id: 16,
    slug: "teamflow",
    title: "TeamFlow Workspace",
    description: "Collaborative platform for teams with task tracking and real-time collaboration.",
    excerpt: "Real-time team collaboration workspace.",
    categories: ["saas", "productivity"],
    client: "TeamFlow",
    duration: "8 Months",
    results: [{ metric: "2x", label: "Team Velocity" }, { metric: "10k+", label: "Teams" }, { metric: "99%", label: "Satisfaction" }],
    image: "/projects/team.jpg",
    logo: "/clients/default-logo.png",
    challenges: ["Real-time sync", "Complex state management", "Offline support"],
    solutions: ["CRDT syncing", "Optimistic UI", "IndexedDB caching"],
    technologies: ["SaaS", "Productivity"],
    testimonial: { quote: "TeamFlow keeps our remote team completely aligned.", author: "Sarah Connor", position: "Manager", avatar: "/avatars/default.jpg" },
    featured: true,
    completionDate: "2024-11-20",
    seo: { title: "TeamFlow Workspace | Case Study", description: "Collaborative project management.", keywords: ["Collaboration", "Team", "Tasks"] }
  },
  {
    id: 17,
    slug: "propease",
    title: "PropEase Management",
    description: "Comprehensive system for listing properties and managing leads.",
    excerpt: "Real estate listing and management system.",
    categories: ["real-estate", "crm"],
    client: "PropEase",
    duration: "7 Months",
    results: [{ metric: "40%", label: "Lead Convert" }, { metric: "1k+", label: "Properties" }, { metric: "24/7", label: "Availability" }],
    image: "/projects/prop.jpg",
    logo: "/clients/default-logo.png",
    challenges: ["High-res image hosting", "Lead routing logic", "Map integration"],
    solutions: ["CDN optimization", "Automated lead scoring", "Interactive maps"],
    technologies: ["Real Estate", "CRM"],
    testimonial: { quote: "PropEase helps us sell homes faster than ever.", author: "Realtor Jane", position: "Agent", avatar: "/avatars/default.jpg" },
    featured: true,
    completionDate: "2024-10-15",
    seo: { title: "PropEase Management | Case Study", description: "Real estate management system.", keywords: ["Real Estate", "CRM", "Properties"] }
  },
  {
    id: 18,
    slug: "hiresense",
    title: "HireSense AI",
    description: "AI-powered recruitment platform that screens resumes and ranks candidates.",
    excerpt: "AI recruitment and resume screening.",
    categories: ["ai", "hr-tech"],
    client: "HireSense",
    duration: "9 Months",
    results: [{ metric: "70%", label: "Time Saved" }, { metric: "95%", label: "Match Quality" }, { metric: "5k+", label: "Hires" }],
    image: "/projects/ai.png",
    logo: "/clients/default-logo.png",
    challenges: ["Resume parsing accuracy", "Bias elimination", "Scaleable matching"],
    solutions: ["NLP parsing models", "Blind screening algos", "Vector database matching"],
    technologies: ["AI", "Next.js", "Resume Parsing"],
    testimonial: { quote: "HireSense found us the perfect candidates in days, not months.", author: "HR Director", position: "HR", avatar: "/avatars/default.jpg" },
    featured: true,
    completionDate: "2024-09-10",
    seo: { title: "HireSense AI | Case Study", description: "AI recruitment platform.", keywords: ["AI", "Recruitment", "HR"] }
  },
  {
    id: 19,
    slug: "mentorconnect",
    title: "MentorConnect",
    description: "Personalized learning platform connecting learners with verified experts.",
    excerpt: "Expert mentorship marketplace.",
    categories: ["edtech", "marketplace"],
    client: "MentorConnect",
    duration: "6 Months",
    results: [{ metric: "5k+", label: "Sessions" }, { metric: "4.9/5", label: "Rating" }, { metric: "100+", label: "Mentors" }],
    image: "/projects/mentor-2.png",
    logo: "/clients/default-logo.png",
    challenges: ["Video scheduling", "Payment splitting", "Quality assurance"],
    solutions: ["Calendar syncing", "Stripe Connect", "Verification flows"],
    technologies: ["Marketplace", "Video Sessions", "Payments"],
    testimonial: { quote: "I found my dream mentor here within a week.", author: "Student Tom", position: "Learner", avatar: "/avatars/default.jpg" },
    featured: true,
    completionDate: "2024-08-05",
    seo: { title: "MentorConnect | Case Study", description: "Mentorship marketplace.", keywords: ["EdTech", "Mentorship", "Learning"] }
  },
  {
    id: 20,
    slug: "fitcreator",
    title: "FitCreator SaaS",
    description: "All-in-one SaaS platform for fitness influencers and coaches to manage clients.",
    excerpt: "Fitness coaching SaaS platform.",
    categories: ["fitness", "saas"],
    client: "FitCreator",
    duration: "5 Months",
    results: [{ metric: "3k+", label: "Trainers" }, { metric: "100k+", label: "Workouts" }, { metric: "2x", label: "Client Retention" }],
    image: "/projects/fitness-2.png",
    logo: "/clients/default-logo.png",
    challenges: ["Custom workout building", "Progress tracking", "Video hosting"],
    solutions: ["Drag-and-drop builder", "Chart.js visualization", "Compressed streaming"],
    technologies: ["SaaS", "Subscriptions", "Dashboards"],
    testimonial: { quote: "The best platform to run my online fitness business.", author: "Coach Mike", position: "Trainer", avatar: "/avatars/default.jpg" },
    featured: true,
    completionDate: "2024-07-20",
    seo: { title: "FitCreator SaaS | Case Study", description: "Fitness coaching platform.", keywords: ["Fitness", "SaaS", "Coaching"] }
  }
];
