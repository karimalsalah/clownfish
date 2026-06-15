---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T054135-078
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
  - "#56545"
  - "#58482"
  - "#58732"
  - "#58679"
  - "#58333"
  - "#58735"
  - "#59884"
  - "#60643"
  - "#59522"
  - "#60445"
cluster_refs:
  - "#56545"
  - "#58482"
  - "#58732"
  - "#58679"
  - "#58333"
  - "#58735"
  - "#59884"
  - "#60643"
  - "#59522"
  - "#60445"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:41:35.457Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 78

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #56545 feat(cron): add agent-turn mode for failure alerts

- bucket: needs_proof
- author: andyk-ms
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T06:09:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #56521 ## What Adds a new `agent-turn` mode for cron job `failureAlert` that injects the error as a system event into the agent session instead of sending an outbound notification (Telegram/etc). ## Why When cron jobs fail, the current `announce` mode s

### #58482 fix(memory-host): add AbortSignal support to batch polling (OpenAI, Voyage, Gemini)

- bucket: needs_proof
- author: ViagraFixesMyBug
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-10T06:09:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Add AbortSignal support to batch polling loops to enable immediate cancellation when clients disconnect. Problem When HTTP clients disconnect during batch embedding operations, server-side polling continues until timeout, wasting API quota. Solution - Replace 

### #58732 utils: add AbortSignal support to runTasksWithConcurrency

- bucket: needs_proof
- author: chineping
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T06:11:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `runTasksWithConcurrency` lacks external cancellation support, making it impossible for callers to abort pending tasks when an operation is no longer needed. - Why it matters: The codebase already uses `AbortSignal` in `fetch-timeout.ts` 

### #58679 feat(config): add provenance tracking and explain command

- bucket: needs_proof
- author: tejasghalsasi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, commands, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T06:12:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR adds an initial config provenance surface to OpenClaw and exposes it through a new CLI command: - `openclaw config explain` - `openclaw config explain --json` The goal is to improve operator/debug UX by showing: - the active config path - wh

### #58333 fix: correct nested config chevron direction

- bucket: needs_proof
- author: Mist-wu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: needs-real-behavior-proof, P3, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T06:12:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: nested config section chevrons in Control UI could point the wrong way because an open parent section rotated descendant chevrons too. - Why it matters: collapsed secondary sections looked expanded, which made the config panel state misle

### #58735 feat(gateway): make control-plane write rate limit configurable

- bucket: needs_proof
- author: justinjkline
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T06:13:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The control-plane write rate limit (`config.apply`, `config.patch`, `update.run`) is currently hardcoded at 3 requests per 60-second window per device+IP bucket. This is too low for multi-tenant deployments where automated config sync routinely push

### #59884 Fix compaction safeguard auth lookup for newer model registries [AI-assisted]

- bucket: needs_proof
- author: SHAREN
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, agents, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T06:13:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a compat request-auth resolver for compaction safeguard that tries `getApiKeyAndHeaders`, `getApiKeyForProvider`, and legacy `getApiKey` - use that resolver in the safeguard instead of assuming a single model-registry auth API shape - cover pr

### #60643 feat(agents): cognitive processing scaffolding and structured memory prompt

- bucket: needs_proof
- author: mkonstan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: msteams, extensions: memory-core, agents, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T06:14:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a **Cognitive Processing** section to the system prompt — pressure awareness with named frames, bidirectional complexity assessment, urgency distinction, and self-check with failure modes - Rewrites the **memory prompt** from read-only retrie

### #59522 docs(himalaya): align v1.1 provider guidance

- bucket: needs_proof
- author: artemgetmann
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: S, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T06:14:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - fix stale Himalaya skill examples that no longer match the v1.1 CLI - document provider-specific Gmail and iCloud guidance that matters for real mailbox access - keep the change docs-only; no OpenClaw runtime code changes ## Why The current Himala

### #60445 fix(agents): add channelData marker to exec-approval-unavailable payloads

- bucket: needs_proof
- author: qualiobra
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: L, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T06:14:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `buildExecApprovalUnavailableReplyPayload` returns `{ text: "..." }` with no `channelData` marker, making exec-approval-unavailable payloads indistinguishable from regular assistant text at delivery gates. - **Why it matters:** In flo

