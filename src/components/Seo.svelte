<script lang="ts">
	import { page } from '$app/stores';
	import type { Seo } from '../types';
	import { apiUrl } from '../const';

	export let seo: Seo;
</script>

<svelte:head>
	<title>{seo.title} · Le meilleur plan climat du monde</title>
	<meta name="description" content={seo.description} />
	<meta name="keywords" content={seo.keywords} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="{$page.host}{$page.path}" />
	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="{$page.host}{$page.path}" />
	<meta property="twitter:title" content={seo.title} />
	<meta property="twitter:description" content={seo.description} />

	{#if seo.image}
		<meta property="og:image" content={apiUrl + seo.image.url} />
		<meta property="twitter:image" content={apiUrl + seo.image.url} />
	{/if}
</svelte:head>
