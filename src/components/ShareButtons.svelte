<script lang="ts">
  import { shareButtons, siteUrl } from "../const";

  const encodedSiteUrl = encodeURIComponent(siteUrl);
  const buttons = shareButtons.map((sb) => ({
    ...sb,
    href: sb.href + encodedSiteUrl,
  }));
</script>

<div class="flex items-center justify-center flex-wrap">
  {#each buttons as button}
    <a
      href={button.href}
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center mx-4 my-2 sm:my-4 opacity-75 hover:opacity-100 transition ease-in-out duration-200"
    >
      <div class="icon mr-1 mb-1">
        <svelte:component this={button.icon} />
      </div>
      <span>{button.text}</span>
    </a>
  {/each}
</div>

<style>
  .icon {
    color: #000;
    fill: #000;
    width: 16px;
    height: 16px;
  }
</style>
