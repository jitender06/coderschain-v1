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
    slug: "healthcare-platform-transformation",
    title: "Healthcare Platform Transformation",
    video: {
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY",
      duration: "2:30",
    },
    description:
      "Revolutionizing patient care with a comprehensive telemedicine platform that increased user engagement by 300% and reduced operational costs by 45%.",
    excerpt:
      "Comprehensive telemedicine platform transforming patient care with 300% user engagement growth.",
    categories: ["healthcare-app", "web-design", "mobile-app"],
    client: "MediCare Solutions",
    duration: "6 Months",
    results: [
      { metric: "300%", label: "User Growth" },
      { metric: "45%", label: "Cost Reduction" },
      { metric: "4.8★", label: "User Rating" },
    ],
    image: "/case-studies/healthcare-platform.jpg",
    logo: "/clients/medicare-logo.png",
    challenges: [
      "Legacy system integration complexities",
      "HIPAA compliance requirements",
      "Real-time video streaming performance",
      "Patient data security concerns",
    ],
    solutions: [
      "Microservices architecture implementation",
      "AWS cloud infrastructure with HIPAA compliance",
      "React Native cross-platform mobile app",
      "End-to-end encryption for data security",
    ],
    technologies: ["React Native", "Node.js", "AWS", "WebRTC", "MongoDB"],
    testimonial: {
      quote:
        "The team delivered beyond our expectations. The platform has transformed how we serve our patients and streamlined our operations significantly.",
      author: "Dr. Sarah Chen",
      position: "CEO, MediCare Solutions",
      avatar: "/avatars/sarah-chen.jpg",
    },
    gallery: [
      "/case-studies/healthcare-1.jpg",
      "/case-studies/healthcare-2.jpg",
      "/case-studies/healthcare-3.jpg",
    ],
    projectUrl: "https://medicare-solutions.com",
    featured: true,
    completionDate: "2023-10-15",
    seo: {
      title: "Healthcare Telemedicine Platform Development | Case Study",
      description:
        "Discover how we built a comprehensive telemedicine platform for MediCare Solutions, achieving 300% user growth and 45% cost reduction.",
      keywords: [
        "telemedicine",
        "healthcare app",
        "React Native",
        "HIPAA compliance",
        "healthtech",
      ],
    },
  },
  {
    id: 2,
    slug: "ai-powered-ecommerce-personalization",
    title: "AI-Powered E-commerce Personalization",
    video: {
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY",
      duration: "2:30",
    },
    description:
      "Implemented machine learning algorithms to deliver personalized shopping experiences, resulting in 65% higher conversion rates and 40% increase in average order value.",
    excerpt:
      "AI-driven e-commerce personalization engine boosting conversions by 65% and order value by 40%.",
    categories: ["ai-app", "web-design", "ui-ux"],
    client: "StyleHub Fashion",
    duration: "4 Months",
    results: [
      { metric: "65%", label: "Conversion Increase" },
      { metric: "40%", label: "Order Value Growth" },
      { metric: "2.3x", label: "ROI" },
    ],
    image: "/case-studies/ecommerce-ai.jpg",
    logo: "/clients/stylehub-logo.png",
    challenges: [
      "Low personalization leading to high bounce rates",
      "Inefficient product recommendation algorithms",
      "High cart abandonment rates",
      "Limited customer engagement",
    ],
    solutions: [
      "Custom machine learning models for personalization",
      "Real-time analytics and behavior tracking",
      "Personalized marketing automation system",
      "AI-powered search and discovery features",
    ],
    technologies: ["Python", "TensorFlow", "React", "Node.js", "Redis"],
    testimonial: {
      quote:
        "The AI implementation completely transformed our customer experience and revenue streams. We saw immediate impact on our bottom line.",
      author: "Michael Rodriguez",
      position: "CTO, StyleHub Fashion",
      avatar: "/avatars/michael-rodriguez.jpg",
    },
    gallery: [
      "/case-studies/ecommerce-1.jpg",
      "/case-studies/ecommerce-2.jpg",
      "/case-studies/ecommerce-3.jpg",
    ],
    projectUrl: "https://stylehub-fashion.com",
    featured: true,
    completionDate: "2023-08-22",
    seo: {
      title: "AI E-commerce Personalization Platform | StyleHub Case Study",
      description:
        "Learn how AI-powered personalization increased StyleHub's conversions by 65% and average order value by 40%.",
      keywords: [
        "AI e-commerce",
        "machine learning",
        "personalization",
        "conversion optimization",
        "retail tech",
      ],
    },
  },
  // Add more case studies following the same structure...
];
