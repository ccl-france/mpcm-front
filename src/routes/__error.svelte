<script context="module" lang="ts">
	import type { ErrorLoad } from '@sveltejs/kit';

	export const load: ErrorLoad = ({ error, status }) => {
		return {
			props: {
				status,
				error
			}
		};
	};
</script>

<script lang="ts">
	export let status: number;
	export let error: Error;

	import { dev } from '$app/env';
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class="pt-16 mx-4">
	<h1 class="pt-20">{status}</h1>

	<p>{error.message}</p>

	{#if dev && error.stack}
		<pre>{error.stack}</pre>
	{/if}
</div>

<style>
	h1,
	p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>
