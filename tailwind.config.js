const isProd = process.env.REACT_APP_ENV === "prod";

module.exports = {
  purge: {
    enabled: isProd,
    preserveHtmlElements: isProd,
    content: [
      "src/**/*.js",
      "src/**/*.jsx",
      "src/**/*.ts",
      "src/**/*.tsx",
      "public/**/*.html",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
