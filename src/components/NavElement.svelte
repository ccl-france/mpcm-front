<script lang="ts">
  export let segment: string;
  export let page: string[];

  export let isMobile: boolean = false;

  const classes = isMobile ? "text-green-700 p-0.5" : "text-sand-200 block";

  // Special case on segment for the index page where the segment is undefined
  $: isActive = "/" + (segment ?? "") === page[0];
</script>

<a
  on:click
  aria-current={isActive ? 'page' : undefined}
  class="{isActive ? 'menu-item-active' : ''} menu-item cursor-pointer m-6 {classes} font-bold"
  href={page[0]}>{page[1]}</a>
