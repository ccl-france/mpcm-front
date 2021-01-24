<script lang="ts">
  import FaCircleNotch from "svelte-icons/fa/FaCircleNotch.svelte";

  import { isLoadingModal } from "../stores";
</script>

{#if $isLoadingModal}
  <div
    class="w-8 h-8 text-center inline-block"
    style="animation: spin 1s infinite ease-in-out;">
    <FaCircleNotch />
  </div>
{:else}Rejoindre le mouvement{/if}
