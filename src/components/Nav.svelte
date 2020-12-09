<script lang="ts">
  import { pages } from "../const";

  export let segment: string;

  let scrollY = 0;
  $: isSticky = scrollY > 50;

  function isActive(url) {
    return "/" + segment === url;
  }
</script>

<svelte:window bind:scrollY />

<nav
  class="{isSticky && 'bg-green-700'} fixed w-full z-30 flex items-center transition-colors duration-300">
  <a href="/">
    <img
      src="/logo_white.png"
      alt="Logo principal"
      class="h-12 md:h-12 m-4 md:mx-8" />
  </a>

  <ul class="flex">
    {#each pages as page}
      <li>
        <a
          aria-current={isActive(page[1]) ? 'page' : undefined}
          class="{isActive(page[1]) ? 'menu-item-active' : 'menu-item'} cursor-pointer m-6 text-sand-200 font-bold hidden md:block"
          href={page[0]}>{page[1]}</a>
      </li>
    {/each}
  </ul>
</nav>
