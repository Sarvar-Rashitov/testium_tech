import {
  Bot, Brain, Code2, Smartphone, Globe, Boxes, ShoppingCart, GraduationCap,
  LineChart, Cloud, Server, Workflow, MessageSquare, Sparkles, Database,
  Layers, ShieldCheck, Search, Wrench, Users, Cpu, Network, Zap,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: typeof Bot;
  category: "ai" | "engineering" | "product" | "consulting";
  bulletCount: number;
  featured?: boolean;
  // i18n: services.<slug>.{title,description}, services.<slug>.bullets[0..n]
};

export const services: Service[] = [
  { slug: "claude-cowork-training", icon: Sparkles, category: "ai", bulletCount: 3, featured: true },
  { slug: "course-creator-telegram-crm", icon: MessageSquare, category: "ai", bulletCount: 3, featured: true },
  { slug: "business-automation", icon: Workflow, category: "ai", bulletCount: 3, featured: true },
  { slug: "ai-agent-development", icon: Bot, category: "ai", bulletCount: 3 },
  { slug: "ai-automation", icon: Zap, category: "ai", bulletCount: 3 },
  { slug: "telegram-bots", icon: MessageSquare, category: "ai", bulletCount: 3 },
  { slug: "chatbots", icon: MessageSquare, category: "ai", bulletCount: 3 },
  { slug: "ai-integration", icon: Brain, category: "ai", bulletCount: 3 },
  { slug: "rag-systems", icon: Database, category: "ai", bulletCount: 3 },
  { slug: "machine-learning", icon: Cpu, category: "ai", bulletCount: 3 },
  { slug: "custom-software-development", icon: Code2, category: "engineering", bulletCount: 3 },
  { slug: "web-development", icon: Globe, category: "engineering", bulletCount: 3 },
  { slug: "mobile-app-development", icon: Smartphone, category: "engineering", bulletCount: 3 },
  { slug: "api-development", icon: Server, category: "engineering", bulletCount: 3 },
  { slug: "cloud-solutions", icon: Cloud, category: "engineering", bulletCount: 3 },
  { slug: "devops", icon: Workflow, category: "engineering", bulletCount: 3 },
  { slug: "crm-development", icon: Users, category: "product", bulletCount: 3 },
  { slug: "erp-development", icon: Boxes, category: "product", bulletCount: 3 },
  { slug: "lms-development", icon: GraduationCap, category: "product", bulletCount: 3 },
  { slug: "marketplace-development", icon: ShoppingCart, category: "product", bulletCount: 3 },
  { slug: "ecommerce", icon: ShoppingCart, category: "product", bulletCount: 3 },
  { slug: "saas-development", icon: Layers, category: "product", bulletCount: 3 },
  { slug: "mvp-development", icon: Sparkles, category: "product", bulletCount: 3 },
  { slug: "ui-ux-design", icon: Sparkles, category: "product", bulletCount: 3 },
  { slug: "data-analytics", icon: LineChart, category: "consulting", bulletCount: 3 },
  { slug: "consulting", icon: Search, category: "consulting", bulletCount: 3 },
  { slug: "product-discovery", icon: Search, category: "consulting", bulletCount: 3 },
  { slug: "technical-audit", icon: ShieldCheck, category: "consulting", bulletCount: 3 },
  { slug: "dedicated-team", icon: Network, category: "consulting", bulletCount: 3 },
  { slug: "maintenance", icon: Wrench, category: "consulting", bulletCount: 3 },
];
