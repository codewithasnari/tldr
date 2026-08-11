# TLDR Plugin Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Publish the existing TLDR skill as an installable, update-aware Claude and Codex plugin.

**Architecture:** Keep the skill as the only behavior authority under `skills/tldr/`. Wrap it with host manifests, canonical marketplaces, one auto-discovered cross-host hook, and a tested dependency-free update checker adapted from ELI5.

**Tech Stack:** Markdown skills, JSON plugin manifests, Node.js 20, Node test runner, Git, GitHub CLI.

---

### Task 1: Define the package contract

**Files:** Create `skills/tldr/SKILL.md` and `test/check-update.test.mjs`.

1. Copy the installed skill byte-for-byte.
2. Write failing tests for v0.1.0 metadata, canonical marketplaces, cross-host hook selection, safe notices, silent failures, and secure caching.
3. Run the tests and confirm they fail because packaging is absent.
4. Commit as `test: define tldr plugin contract`.

### Task 2: Implement packaging and updates

**Files:** Create Claude/Codex manifests and marketplaces, `hooks/hooks.json`, `scripts/check-update.mjs`, and `package.json`.

1. Adapt the reviewed ELI5 implementation using TLDR identity and URLs only.
2. Keep hooks auto-discovered; omit manifest hook fields rejected by the validator.
3. Run tests and both plugin validators.
4. Commit as `feat: add managed plugin updates`.

### Task 3: Add public documentation

**Files:** Create `README.md`, `LICENSE`, `SECURITY.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `CITATION.cff`, and `.gitignore`.

1. Document usage, installation, updates, hook trust, and plain-copy limitations.
2. Add MIT copyright for Asnari Pacalna.
3. Run package and diff checks.
4. Commit as `docs: add project documentation`.

### Task 4: Publish and install

1. Run all tests, skill/plugin validators, JSON parsing, package dry-run, and diff checks.
2. Create the public `Kyaa-A/tldr` repository and push `main` without force.
3. Install `tldr@tldr` in Claude and Codex.
4. Confirm v0.1.0 enabled in both hosts and remote `main` equals local.
