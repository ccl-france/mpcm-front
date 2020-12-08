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
  import ShareButtons from "../components/ShareButtons.svelte";
  import Button from "../components/Button.svelte";

  export let home;

  console.log(home);
</script>

<style>
  section {
    background-image: url("/background.png");
    background-repeat: "no-repeat";
  }
</style>

<svelte:head>
  <!-- TODO: Component SEO in strapi -->
  <title>{home.title}</title>
</svelte:head>

<section class="pt-24 relative mb-64 bg-cover bg-green-900">
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
      <div
        class="relative bg-sand-100 p-10 md:p-20 mx-auto max-w-3xl rounded-sm">
        <h2 class="text-xl sm:text-2xl font-bold mb-4">{home.manifesto}</h2>
        <p className="my-4">
          La France a besoin d&apos;une transition verte, et le plus tôt sera le
          mieux. Les accords de Paris et le Green Deal énoncent des objectifs
          ambitieux (neutralité carbone d&apos;ici 2050), cependant aucun plan
          n&apos;a été détaillé afin d&apos;y parvenir.
        </p>
        <p className="my-4">
          Nous proposons une solutions reconnue et soutenue par les meilleurs
          experts du climat ainsi que les économistes et sur laquelle la gauche
          et la droite se mettent d&apos;accord.
        </p>
      </div>
    </div>
  </div>
</section>
