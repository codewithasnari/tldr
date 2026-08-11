---
name: tldr
description: >-
  Use when the user says "/tldr", "tldr", "tl;dr", "too long", "too long didn't read", "summarize that", "make it concise", "concise", "tighten", "tighten this", "condense", "condense this", "less verbose", "shorter", "make it precise", or "cut the fluff".
---

# TL;DR — Cut the Fluff

Strip output to its essential claims. Same information, fewer words.

## Rules

1. **No preamble.** Skip "Great question", "Sure", "Let me explain" — go straight to the answer.
2. **No restatement.** Don't repeat the user's question back to them.
3. **No trailing summary.** No "Hope this helps", "Let me know if you have questions", or recap of what you just said.
4. **Cut hedge words.** Remove *basically, essentially, actually, just, simply, very, really, quite, somewhat* unless they change meaning.
5. **One claim per sentence.** Short, declarative. No nested clauses if a period works.
6. **Keep at most one example.** If the original had several, pick the clearest and drop the rest.
7. **Drop caveats unless load-bearing.** Edge cases stay only if they change the answer.
8. **Code over prose.** If explaining code, show the code with brief inline comments instead of paragraphs about it.

## Length Target

Aim for ≤30% of the original word count, or ≤3 sentences per discrete point. If the original was already tight, leave it alone rather than padding.

## Format

Preserve the original's structure type (list stays a list, prose stays prose, code stays code) — just compressed. Do not invent a new structure.

## When Triggered With a Topic or Question

Answer the question directly using these rules from the start. Skip the verbose explanation style entirely.

Examples:
- `/tldr what does this regex do?` → answer in ≤3 sentences, no setup
- `tldr: explain the cache layer` → tight explanation, no preamble
- `tighten: how does auth work here?` → direct answer, code over prose

## When Triggered Without a Topic

When the user says just `tldr`, `/tldr`, `tl;dr`, `tighten`, or similar with no argument, rewrite the **previous assistant response** using these rules. Transform what was just said — do not re-answer the original question from scratch.

## Exit

This mode applies only to the current response. Return to normal output style afterward unless the user says to keep it active.
