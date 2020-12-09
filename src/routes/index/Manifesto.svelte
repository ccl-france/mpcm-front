<!-- 
  TODO: explore how to reduce this component bundle size 

  Problem: Svelte bundles remarkable inside the component
  Solution 1: Write a preload function and fetch twice (index+Manifesto)
  Solution 2: index does the parsing in preload, sets it in the session store which is retrieved here 
-->
<script lang="ts">
  import { Remarkable } from "remarkable";
  import Button from "../../components/Button.svelte";
  import type { Link } from "../../types";

  export let text: string;
  export let button: Link;

  const md = new Remarkable();
  md.renderer.rules.heading_open = (tokens: any[], idx: number) => {
    const headingOpen = tokens[idx];
    return `<h${headingOpen.hLevel} class="text-xl sm:text-2xl font-bold mb-4">`;
  };
  md.renderer.rules.link_open = (tokens: any[], idx: number) => {
    const linkOpen = tokens[idx];
    return `<a class="underline" href="${linkOpen.href}">`;
  };
  md.renderer.rules.paragraph_open = () => '<p class="my-4">';

  const renderedText = md.render(text);
</script>

<div class="relative bg-sand-100 p-10 md:p-20 mx-auto max-w-3xl rounded-sm">
  {@html renderedText}
  <a href={button.href} target="_blank" rel="noopener noreferrer">
    <Button classes="my-4 md:mb-0">{button.text}</Button>
  </a>
</div>
