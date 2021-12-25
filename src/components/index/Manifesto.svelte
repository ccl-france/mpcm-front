<script lang="ts">
	import Button from '../Button.svelte';
	import type { Link } from '../../types';

	export let text: string;
</script>

<div class="sm:text-lg">
	{@html text}
</div>
