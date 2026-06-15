---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T054135-073
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
  - "#55093"
  - "#56031"
  - "#55982"
  - "#55037"
  - "#55766"
  - "#54765"
  - "#55874"
  - "#55901"
  - "#55592"
  - "#55973"
cluster_refs:
  - "#55093"
  - "#56031"
  - "#55982"
  - "#55037"
  - "#55766"
  - "#54765"
  - "#55874"
  - "#55901"
  - "#55592"
  - "#55973"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:41:35.457Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 73

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #55093 Stabilize runtime facade builds and mark dirty local versions

- bucket: needs_proof
- author: forestsong
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-10T05:01:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - emit `src/**/*.runtime.ts` files as stable dist entries so long-lived processes do not keep importing stale hashed runtime chunks after rebuilds - add a tsdown config test that locks runtime facade entries into the main dist graph - mark local dir

### #56031 fix(pi-runner): use post-hook assistant for expect-final payloads

- bucket: needs_proof
- author: ninjaa
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T05:01:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Makes `--expect-final` payloads reflect the post-hook assistant message when `before_message_write` hooks are active, instead of reusing stale raw `assistantTexts`. ## What changes - `src/agents/pi-embedded-runner/run.ts`: when `before_message_write

### #55982 feat(cron): add skipWhenIdle option to skip jobs during idle sessions

- bucket: needs_proof
- author: Dave-Pataky
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, cli, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-10T05:01:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds a new `skipWhenIdle` option on cron jobs that skips execution when the main session has had no user interaction for a configurable duration. This is the inverse of `deferWhileActive` — it prevents periodic jobs from burning API tokens when nobody 

### #55037 feat(routing): support per-binding workspace override

- bucket: needs_proof
- author: voicewitness
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T05:01:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds an optional `workspace` field to route bindings so that the same agent can operate in different directories depending on which chat/peer it responds to. - Threads the workspace through `ResolvedAgentRoute` so downstream consumers can use it. 

### #55766 feat(acp): forward image blocks in tool call results

- bucket: needs_proof
- author: David553
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T05:01:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `extractToolCallContent()` in the ACP event mapper previously only extracted `type: "text"` blocks from tool results, silently dropping image content blocks - ACP clients (Feishu, Discord, etc.) could not display images produced by tools (e.g. the

### #54765 sessions: fix durable restore after recovery

- bucket: needs_proof
- author: CyberSpencer
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-10T05:01:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - restore the registry from a snapshot so failed restore attempts do not poison later init cycles - reset the restore latch after a transient restore failure so the next init retries cleanly - harden the targeted registry tests by mocking orphan-rec

### #55874 feat(config): add safety posture presets for sandbox and session isolation

- bucket: needs_proof
- author: JasonOA888
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: moonshot, extensions: kilocode, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T05:01:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Implements #7827 Adds SafetyPostureConfig with development/balanced/strict presets, agent tool profiles (full/limited/public), and sandbox presets for secure-by-default installations. Extracted from #34185 (split into focused PRs).

### #55901 feat(irc): support markdown messages via draft/multiline

- bucket: needs_proof
- author: grepsuzette
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: irc, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-10T05:02:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds support for sending markdown-formatted messages over IRC using the `draft/multiline` CAP extension. This preserves newlines in bot responses, allowing IRC clients to properly render markdown content. ## Motivation OpenClaw bots typically genera

### #55592 fix(ui): sync message delete to session transcript backend

- bucket: needs_proof
- author: Hou-Yufan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, app: macos, app: web-ui, gateway, scripts, size: M, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T05:02:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Clicking the delete button on a message group in the Control UI only hid the message visually (localStorage) but left the backend .jsonl transcript untouched. The AI could still see the "deleted" content on the next turn. - **Why it m

### #55973 feat: show Created and Last Used timestamps in devices list

- bucket: needs_proof
- author: shortstack
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, triage: needs-real-behavior-proof, P3, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-10T05:02:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds **Created** and **Last Used** columns to the `openclaw devices list` paired table - Uses `formatRelativeTimestamp` with `dateFallback: true` — recent timestamps show as "5m ago" / "3d ago", older ones as "Mar 5" - "Last Used" derives the most

