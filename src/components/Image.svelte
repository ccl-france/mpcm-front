<script lang="ts">
  import { apiUrl } from "../const";

  export let src: string;
  export let alt: string;
  export let classes: string = "";

  src = apiUrl + src;
</script>

<img {src} {alt} class={classes} />
