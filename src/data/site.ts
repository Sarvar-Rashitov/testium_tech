import {
  GraduationCap, Heart, Banknote, ShoppingBag, Factory, Truck,
  Landmark, Building2, Rocket, Briefcase, Building,
} from "lucide-react";

// All user-visible strings are in src/i18n/locales/*.ts under data.*
export const industries = [
  { slug: "education", icon: GraduationCap },
  { slug: "healthcare", icon: Heart },
  { slug: "finance", icon: Banknote },
  { slug: "retail", icon: ShoppingBag },
  { slug: "manufacturing", icon: Factory },
  { slug: "logistics", icon: Truck },
  { slug: "government", icon: Landmark },
  { slug: "real-estate", icon: Building2 },
  { slug: "startups", icon: Rocket },
  { slug: "sme", icon: Briefcase },
  { slug: "enterprise", icon: Building },
];

export const solutions = [
  { slug: "ai-for-education", icon: GraduationCap },
  { slug: "ai-for-sales", icon: Rocket },
  { slug: "ai-for-finance", icon: Banknote },
  { slug: "ai-for-hr", icon: Briefcase },
  { slug: "ai-for-support", icon: Heart },
  { slug: "ai-automation", icon: Factory },
];

export const technologies = [
  "Python", "Django", "FastAPI", "Node.js", "React", "Next.js", "TypeScript",
  "Flutter", "React Native", "PostgreSQL", "Redis", "Supabase",
  "Docker", "Kubernetes", "AWS", "Azure", "GCP",
  "OpenAI", "Anthropic", "Gemini", "Claude", "LangChain", "LangGraph", "MCP", "n8n",
];

export const processSteps = [
  { slug: "discovery", n: "01" },
  { slug: "planning", n: "02" },
  { slug: "design", n: "03" },
  { slug: "development", n: "04" },
  { slug: "testing", n: "05" },
  { slug: "deployment", n: "06" },
  { slug: "maintenance", n: "07" },
];

export const whyUsKeys = [
  "ownership", "aiFirst", "enterprise", "fastMvp", "scalable", "longTerm", "security",
];

export const faqKeys = ["timeline", "international", "pricing", "ai", "nda", "afterLaunch", "ownership"];

export const trustedLogos = [
  "EduSelf Teacher",
  "Telegram Bot Service",
  "IELTS Prep",
  "Nexi AI",
  "FinFlow AI",
  "IPE School",
];

export const blogPosts = [
  { slug: "building-ai-agents-2026", category: "AI Engineering", date: "2026-06-12", read: "8 min" },
  { slug: "rag-vs-fine-tuning", category: "AI Engineering", date: "2026-05-28", read: "6 min" },
  { slug: "mvp-in-six-weeks", category: "Product", date: "2026-05-14", read: "5 min" },
  { slug: "scaling-postgres-100m", category: "Engineering", date: "2026-04-30", read: "9 min" },
];

export const careerOpenings = [
  { slug: "senior-ai-engineer", team: "AI", location: "Remote / Tashkent", type: "Full-time" },
  { slug: "senior-fullstack", team: "Engineering", location: "Remote", type: "Full-time" },
  { slug: "senior-designer", team: "Design", location: "Remote / Tashkent", type: "Full-time" },
  { slug: "devops", team: "Platform", location: "Remote", type: "Full-time" },
  { slug: "tech-pm", team: "Delivery", location: "Tashkent", type: "Full-time" },
];
