import { format } from "util";

import { fetchApiEndpoint } from "../apiClient";
import { pages, siteUrl } from "../const";
import type { CreatedUpdatedInfos } from "../types";

const sitemapTpl = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    %s
</urlset>`;

const urlTpl = `
  <url>
    <loc>%s</loc>
    <lastmod>%s</lastmod>
    <priority>%s</priority>
  </url>
`;

export async function get(req, res, next) {
  const urls = await Promise.all(
    pages.map(async (page) => {
      const isRoot = page[0] === "/";

      const jsonPath = isRoot ? "/home" : page[0];
      const priority = isRoot ? 1 : 0.8;

      const res = (await fetchApiEndpoint(jsonPath)) as CreatedUpdatedInfos;

      return format(urlTpl, siteUrl + page[0], res.updated_at, priority);
    })
  );

  res.setHeader("Content-Type", "application/xml");
  res.end(format(sitemapTpl, urls.join("")));
}
