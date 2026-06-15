---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T095031-074
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
  - "#62937"
  - "#62528"
  - "#62338"
  - "#62503"
  - "#61675"
  - "#63015"
  - "#62956"
  - "#64540"
  - "#64907"
  - "#62722"
  - "#64703"
  - "#63113"
  - "#63025"
  - "#62403"
  - "#64335"
  - "#61521"
  - "#64749"
  - "#62966"
  - "#64416"
  - "#63062"
  - "#63193"
  - "#63057"
  - "#62307"
  - "#63789"
  - "#64384"
cluster_refs:
  - "#62937"
  - "#62528"
  - "#62338"
  - "#62503"
  - "#61675"
  - "#63015"
  - "#62956"
  - "#64540"
  - "#64907"
  - "#62722"
  - "#64703"
  - "#63113"
  - "#63025"
  - "#62403"
  - "#64335"
  - "#61521"
  - "#64749"
  - "#62966"
  - "#64416"
  - "#63062"
  - "#63193"
  - "#63057"
  - "#62307"
  - "#63789"
  - "#64384"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T09:50:31.581Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 74

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #62937 feat(exec): macOS sandbox-exec wrapper for host process isolation

- bucket: needs_proof
- author: Bobby-Bot-00
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docker, agents, size: M, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:47:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Implements macOS `sandbox-exec` wrapping for the `exec()` tool, addressing Issue #58730. ## Changes - **`src/agents/sandbox-exec-wrapper.ts`** — Built-in Seatbelt profile definitions for macOS sandbox - **`src/agents/bash-tools.sandbox-exec.test.ts`

### #62528 Gateway: add /hooks/message ingress with webhook auth parity

- bucket: needs_proof
- author: vrknetha
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XL, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-06T04:47:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a generic webhook ingress endpoint at `POST /hooks/message` with auth + safety parity to existing webhook routes, and enforces single-responsibility boundaries between `/hooks/agent` and `/hooks/message`. Closes #62526. ## Single-Responsibility

### #62338 doctor(memory): surface FTS5 unavailable state in doctor checks

- bucket: needs_proof
- author: ZanderH-code
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 automation
- gitcrawl snapshot updated: 2026-06-06T04:47:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #62328 by making `openclaw doctor` visibly report when SQLite FTS5 is unavailable in the running gateway. - Extend `doctor.memory.status` payload with `fts` probe fields (`enabled`, `available`, `error`) - Thread that payload through `probeGat

### #62503 feat: add devcontainer for cross-platform development

- bucket: needs_proof
- author: urtabajev
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:47:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: OpenClaw cannot be fully developed on Windows — shell-based tests and setup scripts require Linux. - Why it matters: Contributors on Windows need a portable, reproducible dev environment. - What changed: Added a `.devcontainer/` setup (Do

### #61675 feat: fire session reset hooks for daily and idle resets

- bucket: needs_proof
- author: salvormallow
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: L, clawsweeper, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-06T04:47:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Internal hooks and `before_reset` plugin hook only fire for manual `/new` and `/reset` commands, not for daily (4AM) or idle-timeout session resets. This means `session-memory` never saves on daily/idle resets. - Why it matters: 4 communi

### #63015 fix: honor filePath/path/media fallbacks in outbound reply normalization

- bucket: needs_proof
- author: tombensim
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-06T04:47:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `normalizeOutboundReplyPayload` only checked `payload.mediaUrl`, silently dropping media when agents returned `filePath`, `path`, or `media` fields - This caused WhatsApp (and other channel) auto-replies to send plain text instead of attachments (

### #62956 fix(tui): surface error details and elapsed time in status bar on agent failures

- bucket: needs_proof
- author: zons-zhaozhy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:47:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: When an agent run fails in the TUI, the status bar shows only `connected | error` with no diagnostic information. The user has no idea what went wrong (rate limit? timeout? model error?) or how long the operation ran before failing. -

### #64540 fix: treat empty heartbeat config as disabled (closes #64293)

- bucket: needs_proof
- author: xchunzhao
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-06T04:47:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Setting `agents.defaults.heartbeat: {}` in config does not disable heartbeats — they still fire every 30 minutes, burning ~2M+ input tokens/day with zero user activity. - **Why it matters:** Users expect `heartbeat: {}` to mean "disab

### #64907 Plugin SDK: add text-only tool_result_before_model hook

- bucket: needs_proof
- author: sjz-ks
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: XL, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-06T04:47:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: plugins had no typed seam to canonicalize successful tool-result text before it became model-visible by default, so noisy tool output could leak into same-turn and future-turn context. - What changed: added synchronous `tool_result_before

### #62722 fix(gateway): use already-aborted signal in stopChannel fallback

- bucket: needs_proof
- author: pruthvishetty
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: refactor-only, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-06T04:47:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - In `stopChannel`, when no `AbortController` exists for an account (i.e. no running task), the fallback `new AbortController().signal` creates a signal from an anonymous controller that **can never be aborted** - `stopAccount` implementations may u

### #64703 fix: parse scientific notation as number in parseConfigValue

- bucket: needs_proof
- author: Rahulkumar070
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-06T04:47:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `parseConfigValue` did not recognize scientific notation (e.g. `1e5`, `2.5e10`) as a number. The regex `/^-?\d+(\.\d+)?$/` only matched plain integers and decimals, so scientific notation was silently returned as a string instead of a num

### #63113 feat: add local coding agent bootstrap and selftests

- bucket: needs_proof
- author: yankhy-source
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, scripts, size: L, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:47:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a small local bootstrap script for reproducible coding-agent profiles in `~/.openclaw/openclaw.json` - add a local selftest entrypoint for `exec`, `read`, `patch`, plus optional GitHub and WhatsApp live checks - document the workflow under `qa

### #63025 fix(auto-reply): avoid silent completion when dispatch produces no sendable reply

- bucket: needs_proof
- author: Leon-llb
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:48:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This fixes a silent completion path in `dispatchReplyFromConfig`. In the current flow, a normal user message can make it through dispatch and still end with no sendable output, leaving the user with no reply and no visible error. In logs this shows 

### #62403 fix(ui): keep session label edits attached to correct row after sorting

- bucket: needs_proof
- author: edwardlong-ctrl
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-06T04:48:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary * Problem: Editing a session label could visually apply the change to the wrong row when the table reorders. * Why it matters: Users may accidentally modify the wrong session label due to DOM reuse after sorting. * What changed: Use Lit `repeat()` k

### #64335 fix(zai): rotate env-backed API keys on rate limit

- bucket: needs_proof
- author: serg0x
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, commands, agents, size: XL, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:48:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Z.AI env-based multi-key setups were not exposed as rotating runtime auth profiles for gateway runs, so rate-limit failover could stop at the first env key. - Why it matters: users configuring `ZAI_API_KEYS` or numbered `ZAI_API_KEY_*` en

### #61521 feat(channels): defer setup validation until config assembly

- bucket: needs_proof
- author: frznfrgg
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, commands, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider
- gitcrawl snapshot updated: 2026-06-06T04:48:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This is **PR 1 of a 3-PR VK stack**. Follow-up PRs: - PR 2: `fix(plugin-sdk): forward inbound typing callbacks` <https://github.com/frznfrgg/openclaw/pull/8> - PR 3: `feat(vk): add VK channel plugin` <https://github.com/frznfrgg/openclaw/pull/9> Des

### #64749 feat(tasks): add observable worker state snapshot

- bucket: needs_proof
- author: neofdezf-cloud
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, commands, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:48:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Adds a lightweight observable `worker-state.json` snapshot derived from the task registry so runtime worker/task state can be inspected without scraping sqlite internals. ### What changed - adds `src/tasks/task-registry.observable-state.ts` - persists `worker-

### #62966 feat: expose replyToId in inbound_claim hook metadata

- bucket: needs_proof
- author: david-lihangyuan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-06T04:48:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Expose `replyToId` and `replyToBody` in the `inbound_claim` plugin hook metadata, enabling plugins to implement reply-aware message routing. ## Motivation We're building a plugin that routes user replies to heartbeat messages back to the heartbeat s

### #64416 fix(acp): normalize completion delivery guidance

- bucket: needs_proof
- author: richardclawbot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:48:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What - keep parent-spawned ACP completions quiet and authoritative - prefer live completion output over cached interim chatter - add ACP session capability normalization guidance for ACP-backed turns ## Why - reduce duplicate or low-signal completion repost

### #63062 fix: apply cache_control to conversation messages on OpenRouter path

- bucket: needs_proof
- author: liu51115
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-06T04:48:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The OpenRouter code path (`applyAnthropicEphemeralCacheControlMarkers`) only applies `cache_control` markers to system/developer messages. Conversation messages (user/assistant) are never marked. This means on OpenRouter, only the system prompt is c

### #63193 [codex] finish android release handoff

- bucket: needs_proof
- author: Mquarmoc
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: android, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:49:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What changed This finishes the Android release handoff so the release process is reproducible from the repo instead of relying on chat history. - add a manual GitHub Actions workflow to build signed Android release AABs and upload them to a GitHub release -

### #63057 fix(anthropic): replace `|| 1024` fallback with safe `budget_tokens` guard

- bucket: needs_proof
- author: Zeesejo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-06T04:50:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem — issue #63016 In `buildAnthropicParams` (`src/agents/anthropic-transport-stream.ts`), the legacy budget-based thinking block was built with: ```ts params.thinking = { type: "enabled", budget_tokens: options.thinkingBudgetTokens || 1024, }; ``` The 

### #62307 feat(whatsapp): handle message edits and revocations

- bucket: needs_proof
- author: kencan666-ai
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: whatsapp-web, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-06T04:50:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR adds support for WhatsApp's native message edit feature, which was introduced in 2023. Currently, if a user accidentally sends an incomplete message and then edits it in WhatsApp, the OpenClaw agent processes the original (unedited) version 

### #63789 Proposal: add minimal agent-to-agent handoff protocol (Phase 1)

- bucket: needs_proof
- author: glfruit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-06T04:50:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This draft PR proposes a minimal formal handoff protocol for agent-to-agent delegation. The goal is to make `sessions_send`-style agent handoff explicitly observable and less vulnerable to silent ambiguity. ## Proposed Phase 1 scope - add `handoff_i

### #64384 fix(reply): gate preflight compaction fast-path on token threshold (#63892)

- bucket: needs_proof
- author: 070freebird070-ctrl
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-06T04:50:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #63892. After the first compaction, \`entry.totalTokensFresh\` is set to \`true\` by \`incrementRunCompactionCount\`. On subsequent runs, \`runPreflightCompactionIfNeeded\` unconditionally short-circuits at \`src/auto-reply/reply/agent-runner-

