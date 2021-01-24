<script lang="ts">
  import Tailwindcss from "../components/Tailwindcss.svelte";

  import Modal from "../components/Modal.svelte";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment: string;

  let isModalOpen: boolean = false;
  function triggerModal() {
    isModalOpen = !isModalOpen;
  }
</script>

<Nav {segment} on:triggerModal={triggerModal} />

<main>
  <slot />
</main>

{#if isModalOpen}
  <Modal on:triggerModal={triggerModal} />
{/if}

<Footer />
