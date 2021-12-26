<script lang="ts">
	import { apiUrl } from '../const';

	export let src: string;
	export let alt: string;
	export let classes: string = '';

	export let width: number;
	export let height: number;

	src = apiUrl + src;
</script>

<img {src} {alt} {width} {height} class={classes} loading="lazy" />
