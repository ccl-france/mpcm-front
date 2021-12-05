<script lang="ts">
  import Badge from "../../../components/Badge.svelte";
  import Image from "../../../components/Image.svelte";
  import type { HowItWorks } from "../../../types";

  export let hiw: HowItWorks;
</script>

<div
  class="relative bg-sand-100 mt-10 p-10 pb-0 md:pr-20 md:pl-20 mx-auto max-w-5xl rounded-sm"
>
  <h2 class="text-2xl md:text-center font-bold mb-8 mx-auto">{hiw.title}</h2>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
    {#each hiw.steps as step, i}
      <div class="mb-12 sm:flex sm:flex-col sm:items-center">
        <div>
          <Badge badge="{i + 1}." label={step.label} />
          <p>{step.text}</p>
        </div>
        <div>
          <Image
            src={step.image.url}
            alt={step.image.alternativeText}
            width={312}
            height={150}
          />
        </div>
      </div>
    {/each}
  </div>
</div>
