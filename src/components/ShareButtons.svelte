<script lang="ts">
  import { shareButtons, siteUrl } from "../const";

  // TODO: import site URL from somewhere else
  const encodedSiteUrl = encodeURIComponent(siteUrl);
  const buttons = shareButtons.map((sb) => ({
    ...sb,
    href: sb.href + encodedSiteUrl,
  }));
</script>

<style>
  .icon {
    color: #fff;
    width: 16px;
    height: 16px;
  }
</style>

<div class="flex items-center justify-center flex-wrap text-white">
  {#each buttons as button}
    <a
      href={button.href}
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center text-sand-200 mx-4 my-2 sm:my-4 opacity-75 hover:opacity-100 transition ease-in-out duration-200">
      <div class="icon mr-1 mb-1">
        <svelte:component this={button.icon} />
      </div>
      <span>{button.text}</span>
    </a>
  {/each}
</div>
