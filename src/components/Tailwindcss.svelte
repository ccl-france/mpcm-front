<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    font-family: "Space Grotesk", sans-serif;
    @apply text-green-900;
  }

  .menu-item {
    position: relative;
  }
  .menu-item:after {
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    transition: all 0.2s ease-in-out;
    width: 0;
    @apply bg-sand-200;
  }
  .menu-item:hover:after,
  .menu-item-active:after {
    width: 100%;
    left: 0;
  }
</style>
