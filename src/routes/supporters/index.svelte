<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/supporters.json');
		const data = await res.json();

		if (res.status !== 200) {
			return { status: res.status, error: new Error(data.message) };
		}

		return { props: { supporters: data } };
	};
</script>

<script lang="ts">
	import Organization from '../../components/supporters/Organization.svelte';
	import Seo from '../../components/Seo.svelte';
	import type { Supporters } from '../../types';

	export let supporters: Supporters;
</script>

<Seo seo={supporters.seo} />

<section class="pt-32 w-full max-w-4xl mx-auto py-16 sm:pb-32 px-6">
	<div class="max-w-2xl">
		{@html supporters.supportedBy.text}

		<h2 class="text-xl font-bold mb-4">Associations</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
			{#each supporters.supportedBy.organizations as org}
				<Organization href={org.href} image={org.image} />
			{/each}
		</div>
	</div>
</section>
