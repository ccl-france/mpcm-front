<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/faq.json');
		const data = await res.json();

		if (res.status !== 200) {
			return { status: res.status, error: data.message };
		}

		return { props: { faq: data } };
	};
</script>

<script lang="ts">
	import type { FAQ } from '../../types';
	import Seo from '../../components/Seo.svelte';
	import Collapse from '../../components/Collapse.svelte';

	export let faq: FAQ;

	const qas = faq.qas.sort((a, b) => a.question.localeCompare(b.question));
</script>

<Seo seo={faq.seo} />

<section class="pt-32 w-full max-w-4xl mx-auto py-16 sm:pb-32 px-6">
	<div class="max-w-2xl">
		<h1 class="text-2xl my-6 font-bold">Foire aux questions</h1>

		{#each qas as qa}
			<Collapse title={qa.question} text={qa.answer} />
		{/each}
	</div>
</section>
