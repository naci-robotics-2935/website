import type { MetadataRoute } from "next";
import site from "@content/site.json";

/* Add new pages here so Google finds them. */
const ROUTES = [
  "",
  "/about",
  "/about/robots",
  "/outreach",
  "/outreach/more",
  "/community",
  "/community/events",
  "/sponsors",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${site.siteUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
