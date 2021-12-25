<script lang="ts">
	export let badge: string;
	export let label: string;
</script>

<div class="flex items-center">
	<span
		class="rounded-full w-10 h-10 flex items-center justify-center bg-green-500 text-xl text-sand-100 font-bold mb-4 mr-3"
	>
		{badge}
	</span>
	{label}
</div>
