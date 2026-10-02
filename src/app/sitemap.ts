import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Only pages worth indexing. The empty /live, /withdrawal and duplicate /checkout-2 pages from the old site are left out on purpose.
const paths = [
  "",
  "/florida-retreat",
  "/webinar",
  "/contact",
  "/terms-and-conditions",
  "/disclaimer",
  "/imprint",
  "/privacy-statement-us",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
