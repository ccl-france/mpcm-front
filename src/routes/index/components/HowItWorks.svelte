<script lang="ts">
  import Badge from "../../../components/Badge.svelte";
  import Image from "../../../components/Image.svelte";
  import type { HowItWorks } from "../../../types";

  export let hiw: HowItWorks;

  const re = new RegExp("\n\n", "g");
  const intro = hiw.intro.replace(re, "<br />");
</script>

<div
  class="relative bg-sand-100 mt-10 p-10 md:p-20 mx-auto max-w-5xl rounded-sm">
  <h2 class="text-2xl md:text-center font-bold mb-4 mx-auto">{hiw.title}</h2>
  <p class="md:text-center max-w-xl md:mx-auto mb-16">
    {@html intro}
  </p>

  {#each hiw.steps as step, i}
    <div class="mb-12 sm:flex sm:items-center">
      <div class="sm:w-1/2 sm:mr-20">
        <Badge badge="{i + 1}." label={step.label} />
        <p>{step.text}</p>
      </div>
      <div class="hidden sm:w-1/2 sm:block">
        <Image
          src={step.image.url}
          alt={step.image.alternativeText}
          width={312}
          height={150} />
      </div>
    </div>
  {/each}
</div>
