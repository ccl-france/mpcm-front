<script lang="ts">
  import { apiUrl } from "../const";

  export let src: string;
  export let alt: string;

  src = apiUrl + src;
</script>

<img {src} {alt} />
