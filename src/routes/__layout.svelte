<script lang="ts">
	import '../app.css';

	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import Modal from '../components/Modal.svelte';

	let isModalOpen: boolean = false;
	function triggerModal() {
		isModalOpen = !isModalOpen;
	}
</script>

<Nav on:triggerModal={triggerModal} />

<main>
	<slot />
</main>

{#if isModalOpen}
	<Modal on:triggerModal={triggerModal} />
{/if}

<Footer />
