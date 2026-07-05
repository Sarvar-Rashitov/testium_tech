export type Product = {
  slug: string;
  url?: string;
  status: "live" | "beta" | "coming-soon";
  badge?: string;
  highlight?: boolean;
  // i18n: products.<slug>.{name,tagline,description}, products.<slug>.features[0..n], products.<slug>.integrations[]
  featureCount: number;
  integrations?: string[];
};

export const products: Product[] = [
  {
    slug: "nexi-ai",
    url: "https://nexiai.testium.uz/",
    status: "live",
    badge: "Flagship",
    highlight: true,
    featureCount: 6,
    integrations: ["Telegram", "WhatsApp", "HubSpot", "Pipedrive", "Google Calendar", "Slack"],
  },
  {
    slug: "finflow-ai",
    url: "https://t.me/finflowuz_robot",
    status: "live",
    featureCount: 6,
    integrations: ["Telegram", "Excel", "CSV", "PDF Export"],
  },
  {
    slug: "eduself",
    url: "https://eduself.uz",
    status: "live",
    badge: "Flagship",
    highlight: true,
    featureCount: 6,
    integrations: ["Zoom", "Google Classroom", "Telegram", "Payme", "Click"],
  },
  {
    slug: "ipe-school",
    url: "https://ipeschool.uz",
    status: "live",
    featureCount: 6,
    integrations: ["Telegram", "Payme", "Click", "Zoom"],
  },
  {
    slug: "dildoras-bot",
    url: "https://t.me/dildoras_robot",
    status: "live",
    featureCount: 6,
    integrations: ["Telegram", "Payme", "Click", "CRM"],
  },
];
