<script lang="ts">
  import Tailwindcss from "../components/Tailwindcss.svelte";

  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment: string;
</script>

<Nav {segment} />

<main>
  <slot />
</main>

<Footer />
