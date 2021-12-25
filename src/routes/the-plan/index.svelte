<script context="module" lang="ts">
	export async function preload({ params }) {
		const res = await this.fetch('/the-plan.json');
		const data = await res.json();

		if (res.status === 200) {
			return { thePlan: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script lang="ts">
	import HowItWorks from '../index/components/HowItWorks.svelte';
	import Seo from '../../components/Seo.svelte';
	import type { ThePlan } from '../../types';

	export let thePlan: ThePlan;
</script>

<Seo seo={thePlan.seo} />

<section class="pt-32 w-full max-w-4xl mx-auto py-16 sm:pb-32 px-6">
	<div class="max-w-2xl">
		<div class="text-center mb-4">
			<a href="the-plan#details" class="text-sm underline">Déjà lu ? Allez plus loin.</a>
		</div>

		<HowItWorks hiw={thePlan.hiw} />

		<hr class="mx-auto max-w-3xl" />

		<div id="details">
			{@html thePlan.plan}
		</div>
	</div>
</section>
