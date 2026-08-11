# Contributing to tldr

Contributions that make summaries tighter, more accurate, or easier to trigger are welcome.

## Workflow

1. Open an issue describing the verbose output, lost meaning, or missed trigger.
2. Fork the repository and create a focused branch.
3. Keep `skills/tldr/SKILL.md` concise and preserve its summarization purpose.
4. Keep package versions aligned across both manifests, the Codex marketplace, and `package.json`.
5. Run the same checks as CI:

   ```bash
   npm ci
   npm test
   npm run validate
   npm pack --dry-run
   ```
6. Open a pull request with a [Conventional Commit](https://www.conventionalcommits.org/) title.

The update checker must remain dependency-free, informational only, silent on failure, and unable to write inside the plugin root. Do not add unrelated features or generated dependencies.

The architecture is intentionally Markdown-first. Keep behavior in `skills/tldr/SKILL.md` and executable update logic in dependency-free JavaScript; TypeScript is not used because this small runtime does not justify a compiler or generated artifacts.
