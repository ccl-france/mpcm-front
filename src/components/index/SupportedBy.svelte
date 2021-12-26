<script lang="ts">
	import Image from '../Image.svelte';
	import type { SupportedBy } from '../../types';

	export let supportedBy: SupportedBy;
</script>

<div class="flex flex-col-reverse sm:flex-row sm:items-center sm:px-8 lg:px-32">
	<div class="sm:w-1/2 sm:mr-8 lg:mr-8 xl:mr-16 text-center py-4">
		{#each supportedBy.organizations as org}
			<a
				class="inline-block md:w-1/2 p-2 xl:p-4"
				href={org.href}
				rel="external noopener noreferer"
				target="_blank"
			>
				<Image
					src={org.image.url}
					alt={org.image.alternativeText}
					classes="w-40 mx-auto sm:w-full h-16 object-contain"
					width={250}
					height={64}
				/>
			</a>
		{/each}
	</div>
	<div class="sm:w-1/2 sm:ml-8 xl:ml-16 text-center sm:text-left">
		{@html supportedBy.text}
	</div>
</div>
