<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		// trigger sitemap generation
		fetch('/sitemap.xml');

		const res = await fetch('/index.json');
		const data = await res.json();

		if (res.status !== 200) {
			return { status: res.status, error: data.message };
		}

		return { props: { home: data } };
	};
</script>

<script lang="ts">
	// routes/index.svelte is our entrypoint but we want to have an index folder for its related components
	// therefore we're forced to do this not really pretty hack
	import Index from './index/index.svelte';
	import type { Home } from '../types';

	export let home: Home;
</script>

<Index {home} />
