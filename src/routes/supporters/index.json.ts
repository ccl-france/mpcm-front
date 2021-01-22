import { Remarkable } from "remarkable";

import type { Supporters } from "../../types";
import { fetchSupporters } from "../../apiClient";

function getSupportedByParser() {
  const supportedByParser = new Remarkable();

  supportedByParser.renderer.rules.heading_open = (
    tokens: any[],
    idx: number
  ) => {
    const hLevel: number = tokens[idx].hLevel;
    const isH1 = hLevel === 1;

    return `<h${hLevel} class="${
      isH1 ? "text-2xl" : "text-xl"
    } font-bold mb-4">`;
  };

  supportedByParser.renderer.rules.link_open = (tokens: any[], idx: number) =>
    `<a class="underline" href="${tokens[idx].href}">`;

  supportedByParser.renderer.rules.paragraph_open = () =>
    '<p class="leading-relaxed mb-12">';

  return supportedByParser;
}

export async function get(req, res, next) {
  const supporters: Supporters = await fetchSupporters();

  supporters.supportedBy.text = getSupportedByParser().render(
    supporters.supportedBy.text
  );

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(supporters));
}
