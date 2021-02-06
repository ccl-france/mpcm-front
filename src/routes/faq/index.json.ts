import type { FAQ } from "../../types";
import { fetchFAQ } from "../../apiClient";

export async function get(req, res, next) {
  const faq: FAQ = await fetchFAQ();

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(faq));
}
