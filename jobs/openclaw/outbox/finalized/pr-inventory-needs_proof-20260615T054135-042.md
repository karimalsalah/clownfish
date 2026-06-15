---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T054135-042
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
  - "#63347"
  - "#63578"
  - "#63571"
  - "#63924"
  - "#63662"
  - "#65149"
  - "#65242"
  - "#65423"
  - "#65727"
  - "#64800"
cluster_refs:
  - "#63347"
  - "#63578"
  - "#63571"
  - "#63924"
  - "#63662"
  - "#65149"
  - "#65242"
  - "#65423"
  - "#65727"
  - "#64800"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:41:35.454Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 42

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #63347 feat(msteams): support webhook host binding

- bucket: needs_proof
- author: sharkqwy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: msteams, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-05T04:59:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add optional `channels.msteams.webhook.host` to Teams config schema/types - forward configured host to `expressApp.listen(port, host)` while preserving default behavior when omitted - include host in startup logs for bind-scope auditing - add life

### #63578 fix(message): hydrate send action media for plugin channels

- bucket: needs_proof
- author: OwenYWT
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-05T05:00:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Hydrate attachment payloads for plugin-handled `send` actions when callers provide `media`, `path`, `filePath`, `mediaUrl`, or `fileUrl`. ## Changes - allow `hydrateAttachmentParamsForAction()` to hydrate `send` actions when attachment hints are pre

### #63571 feat(web-search): add explicit provider fallback support

- bucket: needs_proof
- author: scriptsth
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider
- gitcrawl snapshot updated: 2026-06-05T05:00:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: When a provider is explicitly configured with a fallbacks array, retry the next configured provider on any error instead of failing immediately. Without fallbacks, explicit mode keeps existing fail-fast behavior. ## Summary Describe the problem and fix in 2–5 

### #63924 fix: 4 bug fixes for feishu, health, models, and skills

- bucket: needs_proof
- author: hubbyxiao-cpu
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: commands, agents, channel: feishu, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-05T05:01:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary 4 bug fixes addressing stability issues in OpenClaw 2026.4.9. ### 1. fix(feishu): use buildChannelConfigSchema instead of hand-written JSON Schema - **Problem**: Hand-written JSON Schema only listed 11 properties for accounts, while the Zod schema d

### #63662 feat(memory-core): configurable MEMORY.md injection mode + per-turn autoRecall

- bucket: needs_proof
- author: ZardLi1115
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, scripts, agents, size: L, extensions: qa-lab, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 automation, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-05T05:03:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `agents.defaults.memoryInjection` with `full`, `core-only`, and `recall-only` modes - add `agents.defaults.memorySearch.autoRecall` for per-turn memory recall injection in `memory-core` - update memory docs and schema metadata for the new conf

### #65149 Add final reply payloads plugin hook

- bucket: needs_proof
- author: bogdanovich
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-05T05:03:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a new `final_reply_payloads` plugin hook at the final reply assembly stage - expose resolved `providerUsed`, `modelUsed`, `responseUsageMode`, and `responseUsageLine` - let plugins modify finalized reply payloads before the usage footer is app

### #65242 fix: CompletionDeliveryGate to prevent duplicate ACP completion delivery

- bucket: needs_proof
- author: richardclawbot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-05T05:04:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Introduces a `CompletionDeliveryGate` module that uses first-writer-wins compare-and-swap to ensure exactly one delivery path handles each ACP/subagent completion event - Integrates gate checks into the three competing delivery paths: task registr

### #65423 feat(agents): shuffle auth profile candidates for subagent runs

- bucket: needs_proof
- author: ryanngit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider
- gitcrawl snapshot updated: 2026-06-05T05:04:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When multiple subagents spawn concurrently with the same provider, they all iterate `profileOrder` from index 0, causing a thundering herd on the first auth profile and cascading 429 errors. ## Fix - Add Fisher-Yates shuffle helper - Detect subagent

### #65727 docs: add hook-pack publishing guide

- bucket: needs_proof
- author: snowshadow
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-05T05:04:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a dedicated Publishing Hook Packs guide under automation docs - clarify in Hooks docs that public sharing already works through npm-distributed hook packs - link the Hooks CLI docs to the new publishing guide ## Why OpenClaw already supports h

### #64800 fix(plugins): iterate all providers in wrapProviderStreamFn

- bucket: needs_proof
- author: klin3867
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-05T05:05:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `wrapProviderStreamFn()` only checked a single provider via `resolveProviderHookPlugin()`. When a built-in provider (e.g. Anthropic) owned the provider ID, external plugins with matching `hookAliases` could never contribute their own 

