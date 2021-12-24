<script lang="ts">
  import { Field } from "sveltik";

  export let name: string;
  export let type: string = "text";
  export let classes: string = "";
  export let pClasses: string = "";

  if (type !== "checkbox") {
    classes += " w-full";
  } else {
    pClasses += " inline";
  }
</script>

<Field {name} let:field let:meta>
  <label class={classes}>
    {#if type !== "checkbox"}
      <p class="block text-green-700 mb-1 {pClasses}">
        <slot />
      </p>
    {/if}

    <input
      class="border-2 rounded-sm py-3 px-4 focus:border-green-500 bg-sand-100 {classes} {meta.touched &&
      meta.error
        ? 'border-red-700 mb-2'
        : ''} {!(meta.touched && meta.error) ? 'border-green-700 mb-4' : ''}"
      {type}
      {...field}
      on:input={field.handleInput}
      on:blur={field.handleBlur}
    />

    {#if type === "checkbox"}
      <p class="block text-green-700 mb-1 {pClasses}">
        <slot />
      </p>
    {/if}

    {#if meta.touched && meta.error}
      <p class="text-red-500 text-s italic mb-3">{meta.error}</p>
    {/if}
  </label>
</Field>
