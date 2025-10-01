/** @type {import('lint-staged').Configuration} */
const lintStagedConfig = {
  // Format + lint staged code files (JS + TS). lint-staged appends files automatically.
  "**/*.{ts,tsx,js,jsx}": [
    "prettier --write --cache",
    "eslint --fix --cache",
    () => "tsc --noEmit",
  ],
  "**/*.{md,mdx,json}": "prettier --write --cache",
};

export default lintStagedConfig;
