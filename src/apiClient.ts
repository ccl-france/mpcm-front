import { apiUrl } from './const';

const defaultOptions = {
	headers: {
		'Content-Type': 'application/json'
	}
};

export async function fetchApiEndpoint(endpoint: string) {
	const apiRes = await fetch(apiUrl + endpoint, defaultOptions);
	return await apiRes.json();
}

export async function fetchHome() {
	return await fetchApiEndpoint('/home');
}

export async function fetchSupporters() {
	return await fetchApiEndpoint('/supporters');
}

export async function fetchThePlan() {
	return await fetchApiEndpoint('/the-plan');
}

export async function fetchFAQ() {
	return await fetchApiEndpoint('/faq');
}
