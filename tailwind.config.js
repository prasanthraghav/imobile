const isProd = process.env.REACT_APP_ENV === "prod";

console.log(`

process.env.REACT_APP_ENV= ${process.env.REACT_APP_ENV}
iisProd = ${isProd}

`);

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
