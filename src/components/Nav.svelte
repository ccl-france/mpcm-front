<script lang="ts">
  import { pages } from "../const";

  export let segment: string;
</script>

<nav class="fixed w-full z-30 flex">
  <a href="/">
    <img src="/logo_white.png" alt="aze" class="h-12 md:h-12 m-4 md:mx-8" />
  </a>

  <ul class="flex">
    {#each pages as page}
      <li>
        <a
          aria-current={'/' + segment === page[1] ? 'page' : undefined}
          class="cursor-pointer m-6 text-sand-200 font-bold hidden md:block"
          href={page[0]}>{page[1]}</a>
      </li>
    {/each}
  </ul>
</nav>
