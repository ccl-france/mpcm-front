import { Remarkable } from "remarkable";

import type { Home } from "../../types";
import { fetchHome } from "../../apiClient";

function getManifestoParser() {
  const manifestoParser = new Remarkable();

  manifestoParser.renderer.rules.heading_open = (tokens: any[], idx: number) =>
    `<h${tokens[idx].hLevel} class="text-xl sm:text-2xl font-bold mb-4">`;

  manifestoParser.renderer.rules.link_open = (tokens: any[], idx: number) =>
    `<a class="underline" href="${tokens[idx].href}">`;

  manifestoParser.renderer.rules.paragraph_open = () => '<p class="my-4">';

  return manifestoParser;
}

function getSupportedByParser() {
  const supportedByParser = new Remarkable();

  supportedByParser.renderer.rules.heading_open = (
    tokens: any[],
    idx: number
  ) => `<h${tokens[idx].hLevel} class="text-xl font-bold">`;

  supportedByParser.renderer.rules.link_open = (tokens: any[], idx: number) =>
    `<a class="underline" href="${tokens[idx].href}">`;

  supportedByParser.renderer.rules.paragraph_open = () =>
    '<p class="mt-4 max-w-sm mx-auto sm:mx-0">';

  return supportedByParser;
}

function getMentionedInParser() {
  const mentionedInParser = new Remarkable();

  mentionedInParser.renderer.rules.heading_open = (
    tokens: any[],
    idx: number
  ) =>
    `<h${tokens[idx].hLevel} class="text-2xl text-center font-bold mb-4 mx-auto">`;

  mentionedInParser.renderer.rules.paragraph_open = () =>
    '<p class="text-lg text-center mx-auto mb-8">';

  return mentionedInParser;
}

export async function get(req, res, next) {
  const home: Home = await fetchHome();

  home.manifesto = getManifestoParser().render(home.manifesto);
  home.supportedBy.text = getSupportedByParser().render(home.supportedBy.text);
  home.mentionedIn.text = getMentionedInParser().render(home.mentionedIn.text);

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(home));
}
