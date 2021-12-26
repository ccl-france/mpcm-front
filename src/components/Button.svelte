<script lang="ts">
	export let large = false;
	export let secondary = false;
	export let classes = '';
	export let type: 'submit' | 'button' | 'reset' = 'submit';

	classes += ' font-bold py-2 px-4 rounded-sm transition ease-in-out duration-200';

	if (large) classes += ' px-8 py-3 text-xl';

	if (secondary) classes += ' text-green-900 bg-sand-200 hover:bg-sand-300';
	else classes += ' text-white bg-green-600 hover:bg-green-700';
</script>

<button class={classes} {type} on:click>
	<slot />
</button>
