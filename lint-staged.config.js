/** @type {import('lint-staged').Configuration} */
const lintStagedConfig = {
  "**/*.{ts,tsx,js,jsx}": (files) => [
    `prettier --write --cache ${files.join(" ")}`,
    `eslint --fix --cache ${files.join(" ")}`,
    "tsc --noEmit",
  ],
  "**/*.{json,md,mdx,css}": (files) =>
    `prettier --write --cache ${files.join(" ")}`,
};

export default lintStagedConfig;
