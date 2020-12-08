module.exports = {
  purge: {
    mode: "all",
    content: ["./**/**/*.html", "./**/**/*.svelte"],

    options: {
      whitelistPatterns: [/svelte-/],
    },
  },
  theme: {
    inset: {
      auto: "auto",
      0: 0,
      "1/6": "16.6667%",
      100: "100%",
    },
    colors: {
      green: {
        900: "#032120",
        800: "#08413b",
        700: "#0e6050",
        600: "#157e60",
        500: "#1d9a6c",
        400: "#48b179",
        300: "#74c68c",
        200: "#a1daa8",
        100: "#d0edcf",
      },
      sand: {
        900: "#171112",
        800: "#4a3939",
        700: "#7c6563",
        600: "#ab938e",
        500: "#d9c3bb",
        400: "#e2d0c5",
        300: "#ecdcd0",
        200: "#f4e7db",
        100: "#fbf2e6",
      },
      gray: {
        900: "#1a202c",
        800: "#2d3748",
        700: "#4a5568",
        600: "#718096",
        500: "#a0aec0",
        400: "#cbd5e0",
        300: "#e2e8f0",
        200: "#edf2f7",
        100: "#f7fafc",
      },
      red: {
        500: "#F56565",
        600: "#E53E3E",
        700: "#C53030",
      },
      white: "#fff",
      black: "#000",
    },
  },
  variants: {},
  plugins: [],
};
