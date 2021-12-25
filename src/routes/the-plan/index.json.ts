// This is still 'on' Sapper (aka not working on SvelteKit)
// Should be upgraded if enabled back

import { Remarkable } from 'remarkable';
import { fetchHome, fetchThePlan } from '../../apiClient';
import type { Home, ThePlan } from '../../types';

function getPlanParser() {
	const planParser = new Remarkable();

	planParser.renderer.rules.heading_open = (tokens: any[], idx: number) => {
		const hLevel: number = tokens[idx].hLevel;
		const isH1 = hLevel === 1;

		return `<h${hLevel} class="${isH1 ? 'text-2xl' : 'text-lg'} font-bold my-4">`;
	};

	planParser.renderer.rules.link_open = (tokens: any[], idx: number) =>
		`<a class="underline" href="${tokens[idx].href}">`;

	planParser.renderer.rules.paragraph_open = () => '<p class="sm:text-lg leading-relaxed my-4">';

	return planParser;
}

export async function get(req, res, next) {
	const [home, thePlan]: [Home, ThePlan] = await Promise.all([fetchHome(), fetchThePlan()]);

	thePlan.hiw = home.hiw;
	thePlan.plan = getPlanParser().render(thePlan.plan);

	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(thePlan));
}
