import { Remarkable } from 'remarkable';
import type { RequestHandler } from '@sveltejs/kit';

import type { FAQ } from '../../types';
import { fetchFAQ } from '../../apiClient';

export function getFaqParser() {
	const faqParser = new Remarkable();

	faqParser.renderer.rules.paragraph_open = () => '<p class="sm:text-lg leading-relaxed my-4">';

	faqParser.renderer.rules.link_open = (tokens: any[], idx: number) =>
		`<a class="underline" target="_blank" href="${tokens[idx].href}">`;

	return faqParser;
}

export const get: RequestHandler = async ({ params }) => {
	const faq: FAQ = await fetchFAQ();

	const parser = getFaqParser();
	faq.qas = faq.qas
		.filter((qa) => qa.showInFaq)
		.map((qa) => ({
			...qa,
			answer: parser.render(qa.answer)
		}));

	return {
		status: 200,
		body: JSON.stringify(faq)
	};
};
