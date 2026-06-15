---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T054135-055
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
  - "#68283"
  - "#68127"
  - "#66442"
  - "#68129"
  - "#67836"
  - "#67460"
  - "#66098"
  - "#68986"
  - "#67727"
  - "#70156"
cluster_refs:
  - "#68283"
  - "#68127"
  - "#66442"
  - "#68129"
  - "#67836"
  - "#67460"
  - "#66098"
  - "#68986"
  - "#67727"
  - "#70156"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:41:35.455Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 55

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #68283 fix(approvals): back off native handler bootstrap retries

- bucket: needs_proof
- author: TheDillonHall
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-07T05:05:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes a native approval handler bootstrap retry storm observed in production when the handler could not connect to the gateway because the local device lacked `operator.approvals`. The previous behavior retried every 1000ms for all startup failures.

### #68127 fix: prevent toLowerCase error when model.id or model.name is undefined

- bucket: needs_proof
- author: nightq
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-07T05:05:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the "f.toLowerCase is not a function" error that occurs in the agent:bootstrap hook when model.id or model.name is undefined. ## Root Cause In `canonicalizeLegacyResolvedModel()` (src/agents/pi-embedded-runner/model.ts), the code called `.trim

### #66442 fix(skills): support Discord multi-account config in skills check

- bucket: needs_proof
- author: YangManBOBO
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 auth-provider
- gitcrawl snapshot updated: 2026-06-07T05:05:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #66088. - Add generic anyConfig requirement support so a skill can be eligible when any one config path is satisfied. - Update bundled Discord skill gating to accept either channels.discord.token or multi-account channels.discord.accounts. -

### #68129 Fix delivery-ready verification blockers

- bucket: needs_proof
- author: likewen-tech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, channel: matrix, app: web-ui, scripts, commands, agents, size: XL, extensions: qa-lab, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-07T05:05:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR closes the remaining delivery-ready verification blockers for the current branch. It completes three founder-visible fixes: - suppress non-actionable historical task delivery warning noise on operator surfaces - normalize heartbeat `0m` sema

### #67836 feat(memory-core): Memory v2 foundation — sidecar, ingest, rerank (all default-off)

- bucket: needs_proof
- author: BowieSequoia
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XL, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-07T05:05:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Additive foundation for a SQLite-backed Memory v2 sidecar and two pipelines (ingest, rerank). Every surface is wired behind a plugin-config flag and defaults to **off**, so this PR is behaviorally a no-op until a workspace opts in via `memoryV2.ingest.enabled`

### #67460 feat(mention-gating): suppress always-on agent when another agent is explicitly mentioned

- bucket: needs_proof
- author: MoeJaberr
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, channel: googlechat, channel: imessage, channel: line, channel: msteams, channel: nextcloud-talk, channel: signal, channel: slack, channel: telegram, channel: whatsapp-web, channel: zalouser, scripts, agents, size: M, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-07T05:05:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds `suppressIfOtherAgentMentioned?: boolean` to `InboundMentionPolicy` - Adds `suppressedByOtherAgentMention: boolean` to `InboundMentionDecision` - When the new policy flag is `true`, an always-on agent (`requireMention=false`) sets `shouldSkip

### #66098 fix(web-ui): respect effective chat defaults

- bucket: needs_proof
- author: Rohan5commit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-07T05:05:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the Web UI only looked at persisted session overrides, so a new session could already be running with effective thinking/reasoning defaults while the chat header still rendered the fallback model label or hid reasoning incorrectly - Why i

### #68986 fix: normalize visible assistant output before delivery

- bucket: needs_proof
- author: dutifulbob
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-07T05:05:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Gemma was sometimes leaking hidden internal text into Discord replies. This PR makes OpenClaw clean the final reply in one shared place before sending it. It adds regression tests for the real bad cases we saw, including leaked `<channel|>` markers 

### #67727 feat(messages): add botDebounceMs to inbound debounce config

- bucket: needs_proof
- author: Manuel-Jentic
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-07T05:06:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When two AI agents share a channel, they can exchange messages faster than any human — burning tokens and generating noise. The existing `messages.inbound.debounceMs` config applies uniformly to all senders; there is no way to enforce a longer coold

### #70156 chore: repo hygiene — gitignore generalization + large-file + exec-surface CI guards

- bucket: needs_proof
- author: clivemoore
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, stale, size: L, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 automation, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-07T05:06:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Three additive repo-hygiene improvements. Zero behavior change on the current tree — each CI check exits 0 today; the point is to keep the tree in that state. **Commit 1 — `.gitignore` generalization** (`aa5a9d1fc0`) Collapses per-kit `apps/shared/M

