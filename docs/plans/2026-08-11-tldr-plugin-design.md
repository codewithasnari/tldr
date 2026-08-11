# TLDR Plugin Design

Package the existing TLDR skill as a public standalone plugin at `Kyaa-A/tldr` without changing its summarization behavior.

Match the proven ELI5 distribution model: preserve `skills/tldr/SKILL.md` byte-for-byte; add Claude and Codex manifests, canonical marketplaces, one cross-host startup hook, a dependency-free informational update checker, MIT licensing, and concise project documentation. Updates remain manual and fail open.

Release v0.1.0 only after automated updater/manifest tests, both plugin validators, isolated Claude and Codex installation, and remote verification pass.
