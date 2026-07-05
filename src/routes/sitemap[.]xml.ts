import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { blogPosts } from "@/data/site";

const BASE_URL = "https://testium-tech.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          "/", "/about", "/services", "/products", "/solutions", "/industries",
          "/careers", "/blog", "/contact",
          "/privacy", "/terms", "/cookies", "/legal",
          ...services.map((s) => `/services/${s.slug}`),
          ...products.map((p) => `/products/${p.slug}`),
          ...blogPosts.map((b) => `/blog/${b.slug}`),
        ];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
