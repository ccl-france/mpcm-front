<script lang="ts">
	import Image from '../Image.svelte';
	import type { HowItWorks } from '../../types';

	export let hiw: HowItWorks;
</script>

<div class="relative bg-sand-100 mt-12 p-10 pb-0 md:pr-20 md:pl-20 mx-auto max-w-7xl rounded-sm">
	<!-- <h2 class="text-2xl md:text-center font-bold mb-8 mx-auto">{hiw.title}</h2> -->

	<div class="grid grid-cols-1 md:grid-cols-3 gap-10">
		{#each hiw.steps as step, i}
			<div class="mb-12 sm:flex sm:flex-col sm:items-center">
				<div>
					<Image
						src={step.image.url}
						alt={step.image.alternativeText}
						width={312}
						height={150}
						loading={i === 0 ? 'eager' : 'lazy'}
					/>
				</div>
				<div>
					<p class="mb-2 text-lg lg:text-xl font-semibold text-center">
						{step.label}
					</p>
					<p class="text-center">{step.text}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
