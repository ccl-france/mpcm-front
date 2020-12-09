<script context="module" lang="ts">
  export async function preload({ params }) {
    const res = await this.fetch(`http://localhost:1337/home`);
    const data = await res.json();

    if (res.status === 200) {
      return { home: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script lang="ts">
  import Manifesto from "./Manifesto.svelte";
  import HowItWorks from "./HowItWorks.svelte";
  import ShareButtons from "../../components/ShareButtons.svelte";
  import Button from "../../components/Button.svelte";
  import type { Home } from "../../types";

  export let home: Home;

  console.log({ home });
</script>

<style>
  #bg-image {
    background-image: url("/background.png");
    background-repeat: "no-repeat";
  }
</style>

<svelte:head>
  <!-- TODO: Component SEO in strapi -->
  <title>{home.title}</title>
</svelte:head>

<section class="pt-24 relative mb-64 bg-cover bg-green-900" id="bg-image">
  <div class="relative mx-auto md:pt-32 p-8">
    <h1
      class="text-center text-xl sm:text-2xl md:text-4xl font-bold text-sand-100 leading-none">
      {home.title}
    </h1>

    <p class="max-w-xl mx-auto text-center md:text-xl my-8 text-sand-100">
      {home.subtitle}
    </p>

    <a href={home.mainButton.href} target="_blank" rel="noopener noreferrer">
      <Button large classes="block mx-auto my-8 sm:my-16">
        {home.mainButton.text}
      </Button>
    </a>

    <ShareButtons />

    <div class="transform -mt-64 translate-y-64">
      <Manifesto text={home.manifesto} button={home.mainButton} />
    </div>
  </div>
</section>

<section class="pt-16 px-8 mx-auto max-w-3xl">
  <HowItWorks hiw={home.hiw} />
</section>
