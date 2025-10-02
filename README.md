# Next.js Starter

A lean Next.js starter set up the way I like to work. I built this because existing stacks never quite matched what I wanted — either too heavy or too bare-bones.

---

## Quick start

```bash
# clone or use this repo as a template
npm ci
npm run dev

# start local database
./start-database.sh

# build + run
npm run build
npm start
```

**Node:** ≥ 18.18 (20 LTS recommended) <br>
**Editor:** VS Code (Prettier + ESLint extensions recommended) <br>
**Database:** PostgreSQL (Docker/Podman for local development)

---

## Included

### Core

- **Next.js 15** — React framework with App Router, Server Components, and full-stack capabilities
- **React 19** — The library for web interfaces with Server Components and Actions
- **TypeScript 5** — JavaScript with syntax for types (strict mode, ESM-first, checkJs: true)
- **ESLint 9** — Find and fix problems in JavaScript code with flat config and type-aware rules
- Prettier 3 — Opinionated code formatter with Tailwind class sorting
- **Tailwind CSS v4** — Utility-first CSS framework for rapid UI development
- **Commitlint** — Enforce conventional commit messages
- **Husky** — Git hooks made easy
- **lint-staged** — Run linters on staged git files

### Data & Auth

- **Drizzle ORM** — TypeScript ORM that feels like writing SQL
- **Better Auth** — TypeScript-first auth library with framework adapters
- **@t3-oss/env-nextjs** — Type-safe environment variables with Zod validation
- **Local database script** — Docker/Podman PostgreSQL for development

### UI

- **shadcn/ui** — Copy-paste components built on Radix UI and Tailwind CSS

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
  "db:generate": "drizzle-kit generate",
  "db:migrate": "drizzle-kit migrate",
  "db:push": "drizzle-kit push",
  "db:studio": "drizzle-kit studio",
  "prepare": "husky"
}
```

---

## Environment Variables

Create `.env.local` with:

```env
# Auth
BETTER_AUTH_SECRET="your-secret-here"
BETTER_AUTH_URL="http://localhost:3000"

# OAuth providers (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Database
DATABASE_URL="postgresql://postgres:password@localhost:5432/myapp"
```

Environment variables are validated at runtime via `@t3-oss/env-nextjs` in `src/env.js`.

---

## Database Setup

Local PostgreSQL with Docker/Podman:

```bash
# Start database container
./start-database.sh

# Run migrations
npm run db:push    # for development
npm run db:migrate # for production

# Open Drizzle Studio (database GUI)
npm run db:studio
```

Schema is defined in `src/server/db/schema.ts` using Drizzle ORM.

---

## Authentication

Better Auth is pre-configured with:

- Email/password authentication
- Social providers (Google OAuth example included)
- Session management with cookies
- Type-safe client/server utilities

See `src/server/auth.ts` for configuration and `src/server/auth-client.ts` for client usage.

---

## Commitlint (drop-in)

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
        "db",
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
- `.env.local` — set your database URL and auth secrets
- `src/server/auth.ts` — configure your auth providers
- `src/server/db/schema.ts` — define your database schema
- `src/env.js` — add/remove environment variables
- `.github/*` — update CI/workflow names and badges (if present)
- `.vscode/settings.json` — adjust workspace preferences if desired
- `tsconfig.json`/`eslint.config.js` — adapt path aliases or loosen rules for prototypes
- Remove or update any demo pages in `src/app/` before publishing

---

## Quick troubleshooting

- **Hooks not active after clone:** `npm run prepare`
- **VS Code not using flat ESLint:** set `"eslint.useFlatConfig": true` and restart
- **Prettier not sorting Tailwind classes:** ensure `prettier-plugin-tailwindcss` is installed and `prettier.requireConfig` is true
- **Database connection failed:** ensure Docker/Podman is running and run `./start-database.sh`
- **Type errors with env vars:** check `src/env.js` schema matches your `.env.local`
- **Auth not working:** verify `BETTER_AUTH_SECRET` is set and OAuth credentials are correct
