---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T054135-004
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
  - "#76119"
  - "#76909"
  - "#75198"
  - "#75483"
  - "#75951"
  - "#75011"
  - "#76120"
  - "#72843"
  - "#75472"
  - "#75890"
cluster_refs:
  - "#76119"
  - "#76909"
  - "#75198"
  - "#75483"
  - "#75951"
  - "#75011"
  - "#76120"
  - "#72843"
  - "#75472"
  - "#75890"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:41:35.451Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 4

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #76119 [codex] Include reset archives in session log searches

- bucket: needs_proof
- author: pradeep7127
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T04:59:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Document reset transcript archives in the bundled `session-logs` skill. - Add a reset-aware search example that includes `*.jsonl.reset.*` archives while excluding trajectory sidecars. - Clarify that reset archives can contain conversation history

### #76909 feat(plugins): add system-tier plugin discovery for machine-wide policy  enforcement"

- bucket: needs_proof
- author: amirkutcher
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-05-31T04:59:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a new `"system"` plugin origin loaded from a machine-wide directory (`/etc/openclaw/plugins` on Linux/Mac, `%ProgramData%\OpenClaw\plugins` on Windows) - System plugins are immune to user config (deny/allow lists, per-entry disable, global to

### #75198 fix(models): resolve provider-qualified aliases in session switches

- bucket: needs_proof
- author: sahilsatralkar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T04:59:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #75483 fix(cli-runner): classify session_expired when CLI returns errors[] without result

- bucket: needs_proof
- author: probepark
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T05:00:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When the Claude CLI emits an `error_during_execution` result event with an `errors:[...]` array but `result:null` (the actual format for "No conversation found with session ID" failures), `createResultError` falls back to `"Claude CLI failed."` and 

### #75951 fix(memory-core): add actionable remediation hints for memory search embedding errors

- bucket: needs_proof
- author: QihongRuan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T05:00:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fresh port of #55684 onto current `main` (the source branch was 16k commits behind and unmergeable). Adds actionable remediation hints when `memory_search` or `openclaw memory status` surfaces an embedding-provider failure, so leaked-key, quota, and

### #75011 pairing.md documents that commands are dropped during the pending st…

- bucket: needs_proof
- author: Angfr95
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, triage: low-signal-docs, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-31T05:00:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Problem: pairing.md documents that commands are dropped during the pending state but provides no operator guidance for recovery. Solution: add a Troubleshooting section covering commands dropped before pairing approval, pending requests not appearing, and stal

### #76120 [codex] Suppress empty native reasoning placeholders

- bucket: needs_proof
- author: pradeep7127
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T05:00:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Stop fabricating a visible reasoning placeholder when a native reasoning block has only a signature and no summary text. - Preserve normal reasoning display when the provider returns actual thinking/summary text. - Add regression coverage for payl

### #72843 fix(agents): warm context-window cache for the gateway daemon

- bucket: needs_proof
- author: jakepresent
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-31T05:00:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What The long-running gateway daemon never warms the context-window cache, so synchronous lookups on the status path return `DEFAULT_CONTEXT_TOKENS = 200_000` until the first agent run completes. That value then gets persisted onto the session record and ra

### #75472 feat: add configurable promptMode to agents.defaults

- bucket: needs_proof
- author: mandar-gite
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T05:00:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** The system prompt for primary sessions is always `"full"` (~35K chars), with ~18-26K chars of framework overhead (Documentation links, Self-Update instructions, Model Aliases, etc.) that cannot be reduced via config. For local model d

### #75890 fix(signal): support Note-to-Self in linked-device mode

- bucket: needs_proof
- author: jeffhu1
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: signal, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-05-31T05:00:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** When `signal-cli` runs as a linked device on the operator's personal Signal account, the existing loop-protection in `event-handler.ts` blanket-drops all messages from the bot's own account AND all syncMessages. Note-to-Self chat is t

