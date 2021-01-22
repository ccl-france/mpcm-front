const isDev = process.env.NODE_ENV !== "production";

const purge =
  isDev === false
    ? {
        "@fullhuman/postcss-purgecss": {
          content: ["./src/**/*.svelte", "./src/**/*.html"],
          whitelistPatterns: [/svelte-/],
          defaultExtractor: (content) =>
            content.match(/[A-Za-z0-9-_:/]+/g) || [],
        },
      }
    : {};

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...purge,
  },
};
