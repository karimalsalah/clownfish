---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T054135-056
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
  - "#66838"
  - "#67761"
  - "#69319"
  - "#66071"
  - "#69806"
  - "#69904"
  - "#68197"
  - "#69245"
  - "#70051"
  - "#67655"
cluster_refs:
  - "#66838"
  - "#67761"
  - "#69319"
  - "#66071"
  - "#69806"
  - "#69904"
  - "#68197"
  - "#69245"
  - "#70051"
  - "#67655"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:41:35.455Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 56

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #66838 fix(heartbeat): make cron event wrapper neutral so models execute embedded steps

- bucket: needs_proof
- author: rmfalco89
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-07T05:06:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Make the cron / scheduled-heartbeat event wrapper neutral so models execute the embedded step silently instead of replying with descriptive text as if it were a user-visible message. ## Why Models treated the scheduled-event wrapper as a user prompt

### #67761 fix: remove truncated preview from inbound system events

- bucket: needs_proof
- author: jaredgalloway
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, channel: slack, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-07T05:06:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Removes the truncated 160-char message preview from system event headers for Slack, MS Teams, and Mattermost channels. ## Problem System events were including a truncated preview of the message body: ``` System: [2026-04-15 21:56:40 MDT] Slack DM fr

### #69319 gateway: register skills.uninstall RPC (mirror of skills.install)

- bucket: needs_proof
- author: sk7n4k3d
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: macos, app: web-ui, gateway, agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-07T05:06:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #69299. Adds a `skills.uninstall` Gateway RPC method, mirroring `skills.install`, so operators can remove an installed ClawHub skill from the default agent workspace over the Gateway control plane. ## Changes - Schema: `SkillsUninstallParamsSchema` in `s

### #66071 Fix commentary leaks in OpenResponses HTTP streaming

- bucket: needs_proof
- author: cwmine
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-07T05:07:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - stop streaming assistant commentary deltas to OpenResponses HTTP clients before the phase is known - keep completed OpenResponses output items tagged with the right phase so commentary + tool-call turns still preserve structure - add regression co

### #69806 test: stabilize config validation tests and npm execpath handling

- bucket: needs_proof
- author: alvian888
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-07T05:07:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate npm release command resolution test from host npm env (`npm_execpath`) - mock doctor contract registry in config validation tests to avoid expensive plugin discovery - add same registry mock to allowlist/webhook validation tests to prevent

### #69904 fix: drop stale transient async notices after session advance

- bucket: needs_proof
- author: OpenSpek
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: M, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-07T05:07:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This narrows late async/system notices so transient success-style notices do not surface after the session has already advanced. It keeps durable blocked, error, and timeout notices intact. ## What changed - mark transient async completion notices w

### #68197 feat(line): add optional requireMentionForNonText group gate

- bucket: needs_proof
- author: revision-co-ltd
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: line, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-07T05:07:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When `requireMention: true` is set on a LINE group, text messages are correctly gated by `resolveInboundMentionDecision`, but non-text messages (image, sticker, video, audio, file, location) always bypass the gate via `canDetectMention: message.type

### #69245 feat: enable cache-ttl context pruning for openai-completions providers

- bucket: needs_proof
- author: g18166599417-svg
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-07T05:07:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Enable cache-ttl based context pruning for all providers using the \openai-completions\ API type. Currently, \isCacheTtlEligibleProvider\ only returns \ rue\ for Anthropic-family and Google-family providers (plus those registered via provider plugin

### #70051 [codex] suppress heartbeat-isolated exec self-wake loop

- bucket: needs_proof
- author: dashhuang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-07T05:07:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Suppress node-level `exec` system-event replay for synthetic heartbeat-isolated sessions. When a heartbeat run is already executing inside a synthetic `:heartbeat` session, any internal `exec.started` / `exec.finished` / `exec.denied` node event sho

### #67655 fix(exec): fail closed on Windows shell wrappers in allowlist mode

- bucket: needs_proof
- author: plgonzalezrx8
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, plugin: file-transfer, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-07T05:07:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Issue In Windows allowlist mode, the wrapper guard only failed closed for `cmd.exe`-style invocations. That left a gap where other shell-wrapper transports such as `powershell -Command` could still be analyzed like a normal allowlisted command, which is the

