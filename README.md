# Next.js Starter

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat&logo=tailwindcss)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?style=flat&logo=postgresql)
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?style=flat&logo=eslint)
![Status](https://img.shields.io/badge/Status-In_Development-yellow?style=flat)

A Next.js starter inspired by the [T3 Stack](https://create.t3.gg/). Latest stable tools, strict types, and a clean DX.

> [!WARNING]
> This starter is actively being developed and is not production-ready. APIs and configurations may change. Use for learning and experimentation.

## Why this starter?

Building from scratch means configuration hell. Third-party starters often include too much magic or outdated dependencies. This starter provides:

- **Modern stack** — Next.js 15, React 19, Tailwind v4, all latest stable
- **Type safety everywhere** — From env vars to database queries to API calls
- **Developer experience** — Git hooks, auto-formatting, conventional commits
- **Minimal abstractions** — Direct, explicit patterns you can understand and extend

**Philosophy**: latest stable, strict types, ESM configs, minimal abstractions.

## Tech Stack

| Layer      | Choice                                                                                                 | Why                                              |
| ---------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| Framework  | [Next.js 15](https://nextjs.org/) + [React 19](https://react.dev/)                                     | Server Components, App Router, modern full‑stack |
| Language   | [TypeScript 5](https://www.typescriptlang.org/) (strict)                                               | Type safety end to end                           |
| Styling    | [Tailwind CSS v4](https://tailwindcss.com/)                                                            | Utility‑first CSS, rapid UI development          |
| Database   | [Drizzle ORM](https://orm.drizzle.team/) + [PostgreSQL](https://www.postgresql.org/)                   | Type‑safe queries, SQL‑like syntax               |
| Auth       | [Better Auth](https://better-auth.com/)                                                                | TypeScript‑first auth with adapters              |
| Validation | [Zod](https://zod.dev/)                                                                                | Runtime validation with type inference           |
| Env        | [@t3-oss/env-nextjs](https://github.com/t3-oss/t3-env)                                                 | Type‑safe env vars                               |
| Linting    | [ESLint 9](https://eslint.org/) (flat)                                                                 | Modern config, type‑aware rules                  |
| Formatting | [Prettier 3](https://prettier.io/)                                                                     | Consistent style, Tailwind sorting               |
| Git hooks  | [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged) | Catch issues pre‑commit                          |
| Commits    | [Commitlint](https://commitlint.js.org/)                                                               | Conventional commits                             |
| UI Kit     | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)                            | Accessible, composable components                |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18.18 (20 LTS recommended)
- [Docker](https://www.docker.com/) or [Podman](https://podman.io/) for local PostgreSQL

### Quick setup

```bash
# 1. Install dependencies
npm ci
npm run prepare  # Enable Git hooks

# 2. Set up environment variables
cp .env.example .env.local  # Then edit with your values

# 3. Start database
./start-database.sh
npm run db:push

# 4. Start development server
npm run dev  # http://localhost:3000
```

### Environment variables

Required variables in `.env.local`:

```bash
# Auth
BETTER_AUTH_SECRET="YOUR-SECRET-HERE"
BETTER_AUTH_URL="http://localhost:3000"

# Database
DATABASE_URL="postgresql://postgres:password@localhost:5432/myapp"

# OAuth (optional)
GOOGLE_CLIENT_ID="YOUR-GOOGLE-CLIENT-ID"
GOOGLE_CLIENT_SECRET="YOUR-GOOGLE-CLIENT-SECRET"
```

## Development Workflow

### Daily workflow

```bash
npm run dev                # Start dev server
# Make changes...
git add -A
git commit -m "feat(ui): add responsive navigation drawer"
```

> [!NOTE]
> Git hooks automatically run on commit: format → lint → typecheck. If any check fails, the commit is blocked.

### Key concepts

- **Routes**: App Router pages in `src/app/`
- **Database**: Edit schema → `npm run db:push` (dev) or `db:migrate` (prod)
- **Environment**: Add to `src/env.js` + `.env.local` with type validation
- **Components**: Pull from shadcn/ui, style with Tailwind

## Commands

| Command         | Description                   |
| --------------- | ----------------------------- |
| **Development** |
| `dev`           | Start dev server with Turbo   |
| `build`         | Production build              |
| `start`         | Start production server       |
| **Quality**     |
| `check`         | Run all checks (lint + types) |
| `lint`          | ESLint with cache             |
| `lint:fix`      | Auto-fix issues               |
| `typecheck`     | TypeScript validation         |
| `format:check`  | Verify formatting             |
| `format:write`  | Apply formatting              |
| **Database**    |
| `db:generate`   | Generate migrations           |
| `db:migrate`    | Apply migrations              |
| `db:push`       | Push schema (dev)             |
| `db:studio`     | Drizzle Studio UI             |

## Git Hooks & Code Quality

Automated checks on every commit via Husky + lint-staged:

- **Pre-commit**: Format → Lint → Typecheck
- **Commit-msg**: Enforce conventional commits
- **Post-merge**: Auto-install dependencies

Configuration files:

- [`lint-staged.config.js`](./lint-staged.config.js) — Staged file processing
- [`commitlint.config.js`](./commitlint.config.js) — Commit conventions
- [`.husky/`](./.husky/) — Hook scripts

### Commit format

```
<type>(<scope>): <subject>
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`, `revert`  
**Scopes**: `auth`, `api`, `ui`, `db`, `config`, `build`, `tests`, `infra`, `docs`, `deps`

Example: `feat(auth): add magic link authentication`

## Current Focus

### In development

- **oRPC integration** — Type-safe RPC alternative to Server Actions
- **Auth flows** — Login, register, password recovery pages

### Planned

- **Onboarding** — Email verification and profile setup
- **RBAC** — Role-based access patterns
- **Admin routes** — Protected dashboard examples
- **Email templates** — Transactional email setup

### Exploring

- **Testing setup** — Component and integration tests
- **Docker Compose** — Full-stack local development
- **CI/CD** — GitHub Actions workflows

## FAQ

### Dependency management

**After clone**: Run `npm ci` manually  
**After merge**: Dependencies auto-install via post-merge hook  
**After rebase**: Run `npm install` (hook may not trigger)

### Database workflows

**Development**: Edit schema → `npm run db:push`  
**Production**: Edit schema → `npm run db:generate` → `npm run db:migrate`

### Common issues

| Issue                | Solution                             |
| -------------------- | ------------------------------------ |
| Hooks not working    | `npm run prepare`                    |
| Commit rejected      | Follow conventional commits format   |
| ESLint in VS Code    | Set `"eslint.useFlatConfig": true`   |
| Tailwind sorting     | Check `prettier-plugin-tailwindcss`  |
| DB connection failed | Verify Docker/Podman running         |
| Type errors in env   | Match `src/env.js` with `.env.local` |
