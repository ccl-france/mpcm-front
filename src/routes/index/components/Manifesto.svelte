<script lang="ts">
  import Button from "../../../components/Button.svelte";
  import type { Link } from "../../../types";

  export let text: string;
  export let button: Link;
</script>

<div class="sm:text-lg">
  {@html text}
  <a href={button.href} target="_blank" rel="noopener noreferrer">
    <Button classes="my-4 md:mb-0">{button.text}</Button>
  </a>
</div>
