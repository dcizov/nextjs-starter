# Next.js Starter

A lean, developer-focused template for Next.js apps. Strict defaults, ESM everywhere, and preconfigured DX so you can fork, iterate, and ship fast.

---

## Goals

- Minimal, sensible defaults for production-ready apps
- Strict TypeScript + type-aware linting out of the box
- Fast dev loop (Turbopack) and pre-commit safety nets
- Easy to fork / adapt as a template repository

---

## Quick start

```bash
# clone or use this repo as a template
npm ci
npm run dev            # http://localhost:3000

# build + run
npm run build
npm start
```

**Node:** ≥ 18.18 (20 LTS recommended)
**Editor:** VS Code (Prettier + ESLint extensions recommended)

---

## Included (minimal)

- Next.js 15 + React 19 (App Router)
- TypeScript 5 (strict, ESM-first, `checkJs: true`)
- ESLint 9 — flat config + `typescript-eslint` (type-checked rules)
- Prettier 3 + `prettier-plugin-tailwindcss`
- Tailwind CSS v4 via `@tailwindcss/postcss`
- Commitlint (conventional commits), Husky, lint-staged
- ESM config files; `package.json` uses `"type": "module"`

---

## Useful scripts

```json
{
  "dev": "next dev --turbo",
  "build": "next build",
  "start": "next start",
  "check": "next lint && tsc --noEmit",
  "lint": "eslint .",
  "lint:fix": "eslint . --fix --cache",
  "format:check": "prettier --check \"**/*.{ts,tsx,js,jsx,mdx}\" --cache",
  "format:write": "prettier --write \"**/*.{ts,tsx,js,jsx,mdx}\" --cache",
  "typecheck": "tsc --noEmit",
  "prepare": "husky"
}
```

Run `npm run check` in CI to replicate local gates.

---

## Commitlint (drop-in)

Copy to `commitlint.config.js`:

```js
/**
 * Enforces conventional commits with scoped types.
 * Example: feat(ui): add responsive navigation drawer
 */
const commitLintConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-empty": [2, "never"],
    "scope-enum": [
      2,
      "always",
      [
        "auth",
        "api",
        "ui",
        "config",
        "build",
        "tests",
        "infra",
        "docs",
        "deps",
      ],
    ],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "chore",
        "style",
        "refactor",
        "ci",
        "test",
        "revert",
        "perf",
      ],
    ],
    "subject-case": [2, "always", "lower-case"],
    "subject-full-stop": [2, "never", "."],
    "subject-empty": [2, "never"],
    "body-max-line-length": [2, "always", 100],
  },
};
export default commitLintConfig;
```

Example commit: `feat(ui): add responsive navigation drawer`

---

## Template checklist (what to change when forking)

- `package.json` — update `name`, `version`, `repository`, `author`, `license`
- `.github/*` — update CI/workflow names and badges (if present)
- `.vscode/settings.json` — adjust workspace preferences if desired
- `tsconfig.json`/`eslint.config.js` — adapt path aliases or loosen rules for prototypes
- Remove or update any demo pages in `src/app/` before publishing

---

## Quick troubleshooting

- Hooks not active after clone: `npm run prepare`
- VS Code not using flat ESLint: set `"eslint.useFlatConfig": true` and restart
- Prettier not sorting Tailwind classes: ensure `prettier-plugin-tailwindcss` is installed and `prettier.requireConfig` is true
