import tailwindPlugin from "prettier-plugin-tailwindcss";

/** @type {import('prettier').Config} */
export default {
  plugins: [tailwindPlugin],
  trailingComma: "all",
  semi: true,
  tabWidth: 2,
  singleQuote: false,
  printWidth: 80,
  endOfLine: "auto",
  arrowParens: "always",
};
