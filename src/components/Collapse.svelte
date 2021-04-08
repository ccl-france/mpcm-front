<script lang="ts">
  import { slide } from "svelte/transition";
  import FaChevronCircleUp from "svelte-icons/fa/FaChevronCircleUp.svelte";
  import FaChevronCircleDown from "svelte-icons/fa/FaChevronCircleDown.svelte";

  export let title: string;
  export let text: string;

  let isActive = false;
  function toggleActive() {
    isActive = !isActive;
  }
</script>

<style>
  .icon {
    min-width: 24px;
    min-height: 24px;
    width: 24px;
    height: 24px;
    fill: theme("colors.green.500");
  }
</style>

<div class="flex items-center cursor-pointer py-4" on:click={toggleActive}>
  <div class="mr-4 text-green-500 text-2xl icon">
    {#if isActive}
      <FaChevronCircleUp />
    {:else}
      <FaChevronCircleDown />
    {/if}
  </div>

  {title}
</div>

{#if isActive}
  <div class="my-4" transition:slide>
    {@html text}
  </div>
{/if}
