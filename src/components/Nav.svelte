<script lang="ts">
  import NavElement from "./NavElement.svelte";
  import { pages } from "../const";

  export let segment: string;

  let transparent: boolean = false;
  $: transparent = segment === undefined; // No segment means index page

  let scrollY = 0;
  $: isSticky = scrollY > 50;
</script>

<svelte:window bind:scrollY />

<nav
  class="{!transparent || isSticky ? 'bg-green-700' : ''} fixed w-full z-30 flex items-center transition-colors duration-300">
  <a href="/">
    <picture>
      <source srcset="/logo_white.webp" type="image/webp" />
      <source srcset="/logo_white.png" type="image/png" />
      <img
        src="/logo_white.png"
        alt="Logo Meilleur Plan Climat"
        class="h-12 md:h-12 m-4 md:mx-8"
        width="130"
        height="48" />
    </picture>
  </a>

  <ul class="flex">
    {#each pages as page}
      <li>
        <NavElement {segment} {page} />
      </li>
    {/each}
  </ul>
</nav>
