<script context="module" lang="ts">
  export async function preload({ params }) {
    const res = await this.fetch("/index.json");
    const data = await res.json();

    if (res.status === 200) {
      return { home: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script lang="ts">
  import Manifesto from "./components/Manifesto.svelte";
  import HowItWorks from "./components/HowItWorks.svelte";
  import SupportedBy from "./components/SupportedBy.svelte";
  import MentionedIn from "./components/MentionedIn.svelte";
  import ShareButtons from "../../components/ShareButtons.svelte";
  import Button from "../../components/Button.svelte";
  import Seo from "../../components/Seo.svelte";
  import type { Home } from "../../types";

  export let home: Home;
</script>

<style>
  #bg-image.no-webp {
    background-image: url("/background.png");
    background-repeat: "no-repeat";
  }
  #bg-image.has-webp {
    background-image: url("/background.webp");
    background-repeat: "no-repeat";
  }
</style>

<Seo seo={home.seo} />

<!-- TODO: Write WEBP support detection -->
<section
  class="pt-24 relative mb-64 bg-cover bg-green-900 has-webp"
  id="bg-image">
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

<section
  class="sm:mx-12 my-24 text-white px-8 py-8 sm:py-32 bg-green-800 rounded-sm">
  <SupportedBy supportedBy={home.supportedBy} />
</section>

<section class="px-8 mx-auto max-w-4xl pt-12">
  <MentionedIn mentionedIn={home.mentionedIn} />
</section>
