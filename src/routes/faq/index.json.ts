import { Remarkable } from "remarkable";
import type { FAQ } from "../../types";
import { fetchFAQ } from "../../apiClient";

function getFaqParser() {
  const faqParser = new Remarkable();

  faqParser.renderer.rules.paragraph_open = () =>
    '<p class="sm:text-lg leading-relaxed my-4">';

  faqParser.renderer.rules.link_open = (tokens: any[], idx: number) =>
    `<a class="underline" target="_blank" href="${tokens[idx].href}">`;

  return faqParser;
}

export async function get(req, res, next) {
  const faq: FAQ = await fetchFAQ();

  const parser = getFaqParser();
  faq.qas = faq.qas.map((qa) => {
    return {
      question: qa.question,
      answer: parser.render(qa.answer),
    };
  });

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(faq));
}
