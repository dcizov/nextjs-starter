/**
 * Commitlint configuration enforcing conventional commits with strict scope and type rules.
 * Ensures all commit messages follow a consistent pattern to improve project maintainability,
 * changelog automation, and developer collaboration.
 *
 * Commit message format:
 * <type>(<scope>): <short summary>
 *
 * Example:
 * feat(ui): add responsive navigation drawer
 *
 * Types and scopes are restricted below for consistency.
 *
 * @type {import('@commitlint/types').UserConfig}
 */
export default {
  // Extending base conventional commit configuration for standard commit message formats
  extends: ["@commitlint/config-conventional"],

  rules: {
    // Commit must always include a scope
    "scope-empty": [2, "never"],

    // Restrict allowed scopes
    "scope-enum": [
      2,
      "always",
      ["auth", "api", "ui", "config", "build", "tests", "infra", "docs"],
    ],

    // Restrict allowed commit types
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
  },
};
