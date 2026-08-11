# tldr

A concise-response skill for Claude Code and Codex. It strips output to its essential claims while preserving meaning and useful structure.

## Install

### Claude Code plugin

Run these commands inside Claude Code:

```text
/plugin marketplace add Kyaa-A/tldr
/plugin install tldr@tldr
```

The managed plugin includes startup update notices. The notice is informational and never installs code. Claude discovers `hooks/hooks.json` automatically; the Claude plugin manifest intentionally has no `hooks` field.

### Codex plugin

```bash
codex plugin marketplace add Kyaa-A/tldr
codex plugin add tldr@tldr
```

Start a fresh Codex session, open `/hooks`, review the command, and trust it before the startup update check can run.

### Plain skill copy

```bash
git clone https://github.com/Kyaa-A/tldr.git
cp -r tldr/skills/tldr ~/.claude/skills/tldr
# Codex:
cp -r tldr/skills/tldr ~/.agents/skills/tldr
```

A plain copy provides the skill only. It has no managed version tracking, startup hook, or automatic update notice. Pull the repository and copy the folder again to update it.

## Usage

Ask for a concise answer directly:

- `/tldr explain the cache layer`
- `Summarize this response.`
- `Tighten this and cut the fluff.`

If you say only `tldr` or `/tldr`, the agent condenses its previous response. In Codex you can also invoke `$tldr` explicitly.

## Updates

Managed installs check the public GitHub manifest at most once every 24 hours after a successful check. The dependency-free checker validates the plugin name and semantic version, writes only a timestamp/version cache in the host-provided plugin data directory, and fails silently. It never downloads or runs an update.

Claude Code:

```bash
claude plugin marketplace update tldr
claude plugin update tldr@tldr
```

Restart Claude Code or run `/reload-plugins`.

Codex:

```bash
codex plugin marketplace upgrade tldr
codex plugin remove tldr@tldr
codex plugin add tldr@tldr
```

Start a new Codex session and review/trust the hook again if prompted. Set `TLDR_UPDATE_CHECK=0` to disable managed-plugin checks.

## Development

Requires Node.js 20 or newer.

```bash
npm test
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidance and [SECURITY.md](SECURITY.md) for private vulnerability reporting.

## License

MIT. Copyright (c) 2026 Asnari Pacalna. See [LICENSE](LICENSE).
