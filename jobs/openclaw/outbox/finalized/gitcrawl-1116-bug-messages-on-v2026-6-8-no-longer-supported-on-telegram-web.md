---
repo: openclaw/openclaw
cluster_id: gitcrawl-1116-bug-messages-on-v2026-6-8-no-longer-supported-on-telegram-web
mode: plan
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
  - raise_pr
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical: []
candidates:
  - "#93824"
  - "#94131"
  - "#94639"
cluster_refs:
  - "#93824"
  - "#94131"
  - "#94639"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#93794"
  - "#93836"
  - "#93856"
  - "#93974"
  - "#93984"
  - "#93988"
  - "#94048"
  - "#94195"
  - "#94218"
  - "#94405"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #93794 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1116 on 2026-06-19. Existing-overlap refs #93794, #93836, #93856, #93974, #93984, #93988, #94048, #94195, #94218, #94405 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1116

Generated from local gitcrawl run cluster 1116 for `openclaw/openclaw`.

Display title:

> [Bug]: Messages on v2026.6.8 no longer supported on telegram web

Cluster shape from gitcrawl:

- total members: 13
- issues: 4
- pull requests: 9
- open candidates in local store: 3
- excluded existing-overlap refs: #93794, #93836, #93856, #93974, #93984, #93988, #94048, #94195, #94218, #94405
- representative: #93794, currently open in local store
- latest member update: 2026-06-19T02:13:00.621308Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #93824 Telegram rich messages: blockquote 'expandable' attribute parsed but never emitted (no collapse on long quotes)
- #94131 Telegram iOS font size setting ignored in v2026.6.8 — bot messages render at fixed larger size
- #94639 [Bug]: Telegram Web does not support message after update to 2026.6.8

Existing-overlap context refs:

- #93794 [Bug]: Messages on v2026.6.8 no longer supported on telegram web
- #93836 [security-signal] fix(telegram): emit expandable attribute on rich message blockquote
- #93856 [security-signal] fix(telegram): fall back to plain text when sendRichMessage fails on Telegram Web
- #93974 fix(telegram): avoid Bot API 10.1 HTML tags in non-rich messages
- #93984 fix(telegram): avoid Bot API 10.1 HTML tags in non-rich messages
- #93988 fix(telegram): avoid Bot API 10.1 HTML tags in non-rich messages
- #94048 fix(telegram): set richMessages default to false explicitly in schema
- #94195 fix(telegram): avoid HTML parse_mode for plain text to respect iOS font size
- #94218 [security-signal] fix(telegram): fall back to plain text when sendRichMessage fails on Telegram Web
- #94405 fix(telegram): fall back to sendMessage when sendRichMessage unsupported by client
