/** @type {import('lint-staged').Configuration} */
const lintStagedConfig = {
  "**/*.{ts,tsx,js,jsx}": [
    "prettier --write --cache",
    "eslint --fix --cache",
    () => "tsc --noEmit",
  ],
  "**/*.{md,mdx,json}": "prettier --write --cache",
};

export default lintStagedConfig;
