<script lang="ts">
  import Button from "../../../components/Button.svelte";
  import type { Link } from "../../../types";

  export let text: string;
  export let button: Link;
</script>

<div class="relative bg-sand-100 p-10 md:p-20 mx-auto max-w-3xl rounded-sm">
  {@html text}
  <a href={button.href} target="_blank" rel="noopener noreferrer">
    <Button classes="my-4 md:mb-0">{button.text}</Button>
  </a>
</div>
