---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T054135-059
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
  - maintainer_signal
  - active_author_followup
  - technical_correctness_judgment
canonical: []
candidates:
  - "#67826"
  - "#68180"
  - "#71382"
  - "#70287"
  - "#70518"
  - "#68176"
  - "#71113"
  - "#70851"
  - "#68996"
  - "#69355"
cluster_refs:
  - "#67826"
  - "#68180"
  - "#71382"
  - "#70287"
  - "#70518"
  - "#68176"
  - "#71113"
  - "#70851"
  - "#68996"
  - "#69355"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:41:35.456Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 59

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies.

## Inventory

### #67826 Telegram: harden setup allowFrom and target resolution

- bucket: needs_proof
- author: devlux76
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary
- updated: 2026-06-07T05:12:55Z
- body excerpt: Rebase `bugfix/undefined-trim` onto the latest `main`, harden Telegram `allowFrom` handling and target resolution, and verify with `extensions/telegram/src/setup-surface.test.ts`. Flight test: - `pnpm vitest run extensions/telegram/src/setup-surface.test.ts --

### #68180 fix(daemon): add aliases/default/bin to Linux fnm PATH resolver (fixes #68169)

- bucket: needs_proof
- author: Jimmy-xuzimo
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- updated: 2026-06-07T05:13:03Z
- body excerpt: Fix issue #68169: Linux service PATH resolver now checks both aliases/default/bin (modern fnm) and current/bin (legacy fnm).

### #71382 feat: add WhatsApp read-only mode

- bucket: needs_proof
- author: udaymanish6
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- updated: 2026-06-07T05:13:06Z
- body excerpt: ## Summary Adds a true read-only mode for WhatsApp channels so OpenClaw can ingest and analyze inbound WhatsApp messages without ever sending outbound WhatsApp traffic. Fixes openclaw/openclaw#71166. ## Problem WhatsApp could emit automatic outbound messages d

### #70287 fix(msteams): drop unsupported $search on msteams:search (AI-assisted)

- bucket: needs_proof
- author: gaurav0107
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, stale, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- updated: 2026-06-07T05:13:14Z
- body excerpt: ## Summary - **Problem:** `msteams:search` action hits `HTTP 400: Search is not supported` because Graph API blocks `$search` on `/chats/{id}/messages` and `/teams/*/channels/*/messages` when called with Application permissions (the default for bot auth). - **

### #70518 fix(config): add heartbeat skill allowlist

- bucket: needs_proof
- author: akai-shuuichi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- updated: 2026-06-07T05:13:22Z
- body excerpt: ## Summary - Problem: heartbeat runs currently inherit the target agent's full skill set, even when heartbeat only needs a small subset or none. - Why it matters: large skill catalogs inflate the skills prompt and waste input context on every heartbeat turn. -

### #68176 CLI: bake git commit at build time so --version reports built commit not live HEAD [AI-assisted]

- bucket: needs_proof
- author: sparkeros
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- updated: 2026-06-07T05:13:27Z
- body excerpt: Fixes #68148. ## Summary Before: `node dist/index.js --version` reports the current value of `.git/HEAD`, which can drift past the commit the binary was actually built from. After: the short SHA is baked into `dist/` at build time as a tsdown compile-time defi

### #71113 CI: add AGENTS.md size guard to check-additional

- bucket: needs_proof
- author: Yellowfish23
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, stale, size: M, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- updated: 2026-06-07T05:13:56Z
- body excerpt: ## Summary - Adds `scripts/check-agents-md.ts` — caps every tracked `AGENTS.md` at 150 lines to stop any single guide from regrowing into a monolith. - Wires into the sharded `check-additional` layout via `BOUNDARY_CHECKS` in `scripts/run-additional-boundary-c

### #70851 fix(ui): hide internal sessions from the chat picker

- bucket: needs_proof
- author: CHE10X
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- updated: 2026-06-07T05:14:00Z
- body excerpt: ## Summary - hide internal subagent, ACP, and node-backed sessions from the chat header session picker - keep the currently selected internal session visible so active internal runs don't strand the UI - add picker coverage for hidden internal sessions and the

### #68996 fix(google): route Gemma models through native Generative AI API

- bucket: needs_proof
- author: tanjinlimkelvin-dot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- updated: 2026-06-07T05:19:08Z
- body excerpt: ## Problem Gemma models (gemma-4-31b-it, gemma-4-26b-it, etc.) fail silently when used through the Google provider. The OpenAI-compatible endpoint (`/v1beta/openai/chat/completions`) returns 400/401 errors for Gemma models — only the native Generative AI endpo

### #69355 feat(doctor): detect local rebuild vs pristine npm release

- bucket: needs_proof
- author: mikaeldiakhate-cell
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, commands, size: L, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- updated: 2026-06-07T05:21:05Z
- body excerpt: ## Problem A stock `openclaw update` silently overwrites locally patched installs. Regressions return quietly because operators have no signal that the running package has diverged from the pristine npm release. Concrete trigger: the 2026-04-20 dist-overlay au

