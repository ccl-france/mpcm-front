<script lang="ts">
  import type { SvelteComponent } from "svelte/internal";

  import Tailwindcss from "../components/Tailwindcss.svelte";

  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  import { isLoadingModal } from "../stores";

  export let segment: string;
  let lazyLoadedModal: SvelteComponent = null;

  let isModalOpen: boolean = false;
  function triggerModal() {
    isModalOpen = !isModalOpen;
  }

  async function lazyLoadModal() {
    if (lazyLoadedModal) return lazyLoadedModal;

    isLoadingModal.set(true);

    const modal = await import("../components/Modal.svelte");
    lazyLoadedModal = (modal.default as unknown) as SvelteComponent;

    isLoadingModal.set(false);
    return lazyLoadedModal;
  }
</script>

<Nav {segment} on:triggerModal={triggerModal} />

<main>
  <slot />
</main>

{#if isModalOpen}
  {#await lazyLoadModal() then Modal}
    <svelte:component this={Modal} on:triggerModal={triggerModal} />
  {/await}
{/if}

<Footer />
