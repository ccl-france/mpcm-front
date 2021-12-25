<script lang="ts">
	import Manifesto from './components/Manifesto.svelte';
	import HowItWorks from './components/HowItWorks.svelte';
	import SupportedBy from './components/SupportedBy.svelte';
	import MentionedIn from './components/MentionedIn.svelte';
	import ShareButtons from '../../components/ShareButtons.svelte';
	import Collapse from '../../components/Collapse.svelte';
	import Seo from '../../components/Seo.svelte';
	import type { Home } from '../../types';

	export let home: Home;
</script>

<Seo seo={home.seo} />

<!-- TODO: Write WEBP support detection -->
<section class="pt-24 relative mb-64 bg-cover bg-green-900 has-webp" id="bg-image">
	<div class="relative mx-auto p-8">
		<h1
			class="text-center max-w-4xl mx-auto text-xl sm:text-2xl md:text-4xl font-bold text-sand-100 leading-none"
		>
			{home.title}
		</h1>

		<p class="max-w-xl mx-auto text-center md:text-xl my-6 text-sand-100">
			{home.subtitle}
		</p>

		<div class="transform -mt-64 translate-y-64">
			<HowItWorks hiw={home.hiw} />
		</div>
	</div>
</section>

<section class="pt-2 lg:pt-4 px-8 mx-auto max-w-3xl">
	<div class="max-w-2xl">
		<h1 class="text-2xl my-6 font-bold">Questions fréquentes</h1>

		{#each home.qas as qa}
			<Collapse title={qa.question} text={qa.answer} />
		{/each}
	</div>
</section>

<section class="pt-8 px-8 mx-auto max-w-3xl">
	<Manifesto text={home.manifesto} />
</section>

<section class="sm:mx-12 my-24 text-white px-8 py-8 sm:py-32 bg-green-800 rounded-sm">
	<SupportedBy supportedBy={home.supportedBy} />
</section>

<section class="px-8 mx-auto max-w-4xl pt-12">
	<MentionedIn mentionedIn={home.mentionedIn} />
</section>

<ShareButtons />

<style>
	#bg-image.no-webp {
		background-image: url('/background.png');
		background-repeat: 'no-repeat';
	}
	#bg-image.has-webp {
		background-image: url('/background.webp');
		background-repeat: 'no-repeat';
	}
</style>
