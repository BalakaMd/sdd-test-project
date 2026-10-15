# sdd-test-project

A tiny Node project used to try the `sdd-engineering` plugin from
[dev-digest-ai-marketplace](https://github.com/BalakaMd/dev-digest-ai-marketplace).

The plugin is enabled at project scope (see `.claude/settings.json`), so opening this folder in
Claude Code offers to trust the marketplace and install it.

```sh
claude plugin marketplace add BalakaMd/dev-digest-ai-marketplace --scope project
claude plugin install sdd-engineering@dev-digest-ai-marketplace --scope project
claude plugin list --json
```

Try it: `/sdd-engineering:run-plan Add trimming of leading and trailing hyphens to slugify`.

Tests: `npm test` (no dependencies).
