<script lang="ts">
  export let segment: string;
  export let page: [string, string];

  // Special case on segment for the index page where the segment is undefined
  $: isActive = "/" + (segment ?? "") === page[0];
</script>

<a
  aria-current={isActive ? 'page' : undefined}
  class="{isActive ? 'menu-item-active' : ''} menu-item cursor-pointer m-6 text-sand-200 font-bold hidden md:block"
  href={page[0]}>{page[1]}</a>
