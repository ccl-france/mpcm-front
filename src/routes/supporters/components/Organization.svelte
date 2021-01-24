<script lang="ts">
  import Image from "../../../components/Image.svelte";
  import type { Image as IImage } from "../../../types";

  export let href: string;
  export let image: IImage;
</script>

<div
  class="flex items-center w-full p-4 bg-gray-100 border border-gray-300 rounded-sm">
  <a {href} rel="external noopener noreferer" target="_blank">
    <Image
      classes="w-full h-16 object-contain"
      alt={image.alternativeText}
      width={296}
      height={64}
      src={image.url} />
  </a>
</div>
