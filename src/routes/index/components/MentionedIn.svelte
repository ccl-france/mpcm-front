<script lang="ts">
  import Image from "../../../components/Image.svelte";
  import type { MentionedIn } from "../../../types";

  export let mentionedIn: MentionedIn;
</script>

{@html mentionedIn.text}
<div
  class="flex-none max-w-15 sm:max-w-none mx-auto sm:flex items-center justify-around mb-24">
  {#each mentionedIn.articles as article}
    <a
      rel="external"
      target="_blank"
      class="block sm:flex-1 p-2 sm:p-0 opacity-50 hover:opacity-100 transition ease-in-out duration-200"
      href={article.href}>
      <Image src={article.image.url} alt={article.image.alternativeText} />
    </a>
  {/each}
</div>
