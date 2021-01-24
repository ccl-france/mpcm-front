<script context="module" lang="ts">
  export async function preload({ params }) {
    const res = await this.fetch("/supporters.json");
    const data = await res.json();

    if (res.status === 200) {
      return { supporters: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script lang="ts">
  import Organization from "./components/Organization.svelte";
  import Seo from "../../components/Seo.svelte";
  import type { Supporters } from "../../types";

  export let supporters: Supporters;
</script>

<Seo seo={supporters.seo} />

<section class="pt-32 w-full max-w-4xl mx-auto py-16 sm:pb-32 px-6">
  <div class="max-w-2xl">
    {@html supporters.supportedBy.text}

    <h2 class="text-xl font-bold mb-4">Associations</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {#each supporters.supportedBy.organizations as org}
        <Organization href={org.href} image={org.image} />
      {/each}
    </div>
  </div>
</section>
