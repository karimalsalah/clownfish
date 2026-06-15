---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T095031-095
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
  - "#55519"
  - "#54830"
  - "#55817"
  - "#56258"
  - "#56283"
  - "#55485"
  - "#54756"
  - "#55341"
  - "#56081"
  - "#54692"
  - "#54900"
  - "#55001"
  - "#55487"
  - "#54647"
  - "#55018"
  - "#55742"
  - "#54838"
  - "#56116"
  - "#55548"
  - "#54934"
  - "#55913"
  - "#54979"
  - "#55923"
  - "#58134"
  - "#57260"
cluster_refs:
  - "#55519"
  - "#54830"
  - "#55817"
  - "#56258"
  - "#56283"
  - "#55485"
  - "#54756"
  - "#55341"
  - "#56081"
  - "#54692"
  - "#54900"
  - "#55001"
  - "#55487"
  - "#54647"
  - "#55018"
  - "#55742"
  - "#54838"
  - "#56116"
  - "#55548"
  - "#54934"
  - "#55913"
  - "#54979"
  - "#55923"
  - "#58134"
  - "#57260"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T09:50:31.584Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 95

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #55519 Fix Feishu group session orchestration fallbacks

- bucket: needs_proof
- author: aaaw10055-pixel
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T05:02:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - allow `sessions_send` to target an `agentId` by resolving the most recent visible session - ignore ACP-only `streamTo` when `sessions_spawn` is running with `runtime: "subagent"` - tighten the agent system prompt guidance for long-running work in 

### #54830 feat: context provenance metadata for injected bootstrap segments

- bucket: needs_proof
- author: jack91620
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P3, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T05:02:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add optional `provenance` metadata (`source`, `injectedAt`, `volatile`) to `EmbeddedContextFile` type - Bootstrap context files (SOUL.md, AGENTS.md, TOOLS.md, etc.) are now tagged with provenance when assembled by `buildBootstrapContextFiles()` - 

### #55817 Ensure transcripts exist immediately after session rollover

- bucket: needs_proof
- author: openclawq
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-10T05:02:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix a session persistence consistency gap where `sessions.json` can be rotated to a fresh `sessionId` before the new transcript file exists on disk. With the current behavior, monitors and history UIs can see: - a live session key bound to a new `se

### #56258 fix(gateway): add per-subsystem timeouts to shutdown close handler

- bucket: needs_proof
- author: p3nchan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-10T05:02:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - A single hung subsystem `stop()` call (e.g. Telegram polling stuck during network recovery) can consume the entire 25 s `SHUTDOWN_TIMEOUT_MS` budget, preventing remaining subsystems from cleaning up and forcing users to `kill -9` the gateway proce

### #56283 feat(outbound): strip markdown for plain-text channels

- bucket: needs_proof
- author: richmondbagnall
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: refactor-only, triage: needs-real-behavior-proof, P3, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-10T05:02:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary LLMs produce Markdown formatting that renders correctly on Discord/Slack but shows as raw `**asterisks**` and `# headings` on iMessage, SMS, and IRC. OpenClaw already strips HTML for plain-text surfaces via `sanitizeForPlainText()` but Markdown pass

### #55485 Config: plumb opt-in SSRF policy for web fetch, citation redirects, and remote media

- bucket: needs_proof
- author: code-sayuri
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: mattermost, channel: msteams, channel: signal, channel: zalouser, agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T05:02:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR converts the previously proven dist-level SSRF benchmark-range hotfix into a source-level, config-driven, opt-in implementation. It adds shared `ssrfPolicy` config plumbing for three scoped paths: - `tools.web.fetch.ssrfPolicy` - `tools.web.

### #54756 fix: prefer index.js for gateway update refresh

- bucket: needs_proof
- author: fdovarela
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-10T05:02:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Prefer `dist/index.js` over `dist/entry.js` in update-related gateway entrypoint resolution paths. This aligns the update refresh / auto-update fallback behavior with the gateway service expectation already enforced elsewhere by package metadata and

### #55341 Persist refreshed Twitch tokens and fix OpenProse fast-loop exits

- bucket: needs_proof
- author: pomarie
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: open-prose, channel: twitch, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T05:02:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - persist refreshed Twitch OAuth tokens back to config for config-backed Twitch accounts, covering both base-level default config and named account entries - add Twitch unit coverage for refresh writeback and `onRefresh` persistence wiring - fix the

### #56081 feat: include model in response usage footer

- bucket: needs_proof
- author: Ghabs95
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-10T05:02:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - include the actual answering provider/model in the response usage footer - pass `providerUsed` and `modelUsed` into `formatResponseUsageLine` - keep existing cost/session behavior unchanged ## Example Before: ```text Usage: 12k in / 970 out ``` Af

### #54692 CLI: clarify gateway url override auth hints

- bucket: needs_proof
- author: gmays
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P3, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-10T05:02:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - improve the gateway URL override auth error with source-specific follow-up hints - tell CLI users they can remove `--url` when they meant the default local or SSH-tunneled gateway - tell env override users to set `OPENCLAW_GATEWAY_TOKEN` or `OPENC

### #54900 fix(delivery-queue): skip stale first-attempt entries during startup recovery

- bucket: needs_proof
- author: Drickon
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-10T05:02:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When the gateway restarts, the delivery queue replays pending entries from previous runs. This is the correct behavior for messages that genuinely failed to send (network errors, provider downtime, etc.). However, messages that were *enqueued but no

### #55001 Fix /queue steer directive

- bucket: needs_proof
- author: changergosum
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-10T05:02:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: The hasInlineDirective block unintentionally strips /queue steer and other directives that accompany a prompt. This preserves those directives. ## Summary Describe the problem and fix in 2–5 bullets: - Problem: Sending to chat "/queue steer prompt" doesn't wor

### #55487 fix(gateway): survive transient network/TLS errors in uncaughtException handler

- bucket: needs_proof
- author: sfwn
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T05:03:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The `uncaughtException` handler exits unconditionally on any error, but transient network/TLS errors (e.g. `Client network socket disconnected before secure TLS connection was established`) are non-fatal I/O failures that should not crash the gatewa

### #54647 Fix ACP session model reporting in sessions list

- bucket: needs_proof
- author: cyan-ember
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider
- gitcrawl snapshot updated: 2026-06-10T05:03:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - read the ACP runtime model from session entry ACP metadata when resolving session model identity - avoid falling back to the configured default model for ACP session rows when no explicit ACP model is known - add regression coverage for ACP sessio

### #55018 fix: avoid O(N²) shallow-copy in mapSensitivePaths schema traversal

- bucket: needs_proof
- author: xdhuangyandi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T05:03:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `mapSensitivePaths` performed `{ ...hints }` shallow copy on every recursive call while traversing the Zod schema tree, resulting in O(N²) allocation overhead. - **Why it matters:** For the full `OpenClawSchema` tree (hundreds of node

### #55742 feat(plugins): inject execute context (agentId) into plugin tool calls

- bucket: needs_proof
- author: justinjkline
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider
- gitcrawl snapshot updated: 2026-06-10T05:03:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: **Author: 📐 Drew Prints** (`mcfiddles_architect_51132`) ## Problem Plugin tools that need the calling agent's identity (e.g. `platform_tasks_complete`, `platform_comms_inbox`) have no reliable way to resolve `agentId` at execute time. The plugin tool factory 

### #54838 Control UI: add toggle to expand tool call output by default in webchat (fixes #54478)

- bucket: needs_proof
- author: dingtao416
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: needs-real-behavior-proof, P3, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-10T05:03:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** In the webchat (Control UI), tool call output is always collapsed by default. Users must manually click to expand each output, which is inconvenient when debugging or tracking agent workflows. - **Why it matters:** The TUI already sup

### #56116 Improve Feishu streaming visibility and filter scratchpad text

- bucket: needs_proof
- author: mattclawcn
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: feishu, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T05:04:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # Upstream Draft: Feishu IM Long-Task Visibility ## Issue Draft ### Title Feishu IM long-task visibility: status footer, last activity, completion confirmation, and scratchpad suppression ### Summary When OpenClaw is used through Feishu IM, long-running agent 

### #55548 fix: include message_id in Telegram callback_query data (#55462)

- bucket: needs_proof
- author: bugkill3r
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-10T05:04:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #55462 - Telegram callback_query handler now includes `callback_message_id` from the source message - Enables agents to use editMessage in response to inline button clicks ## Test plan - Send a message with inline buttons via Telegram bot - 

### #54934 Feishu: reject empty message cards

- bucket: needs_proof
- author: 08820048
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T05:04:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Feishu message actions treated `card: {}` as a valid card-only payload, then forwarded it to Feishu and triggered a 400 API error. - Why it matters: proactive Feishu sends can fail when the model emits an empty card object, especially in 

### #55913 fix(agents): add Doubao/BytePlus context caching prices and correct per-Mtok rates

- bucket: needs_proof
- author: jiangwenwei818
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-10T05:04:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Set non-zero `cacheRead` and `cacheWrite` pricing for Doubao (Volcengine) and BytePlus model catalogs - Corrected `input`/`output` prices from placeholder per-1K-token values to actual Volcano Engine published rates (per 1M tokens) - Added regress

### #54979 feat(feishu): add cardHeader config to hide card title header

- bucket: needs_proof
- author: tankyhsu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: feishu, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T05:05:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem In the Feishu message list, each message preview only shows the card title (e.g. `🤖 Friday`), hiding the actual reply content. This makes it hard to scan conversations without opening each message. Introduced by #29938. ## Solution Add a `cardHeade

### #55923 fix: surface fake tool runs, placeholder replies, and legacy WS auth failures

- bucket: needs_proof
- author: cgdusek
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, size: L, clawsweeper, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-10T05:05:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Focused extraction of the core fix pieces from #40150 (which has merge conflicts and significant scope creep), targeting the remaining open symptoms of #40082 that were not addressed by #40008 (kimi tool schema, merged Mar 9) or #50930 (mid-turn 429

### #58134 Improve confirmation message clarity

- bucket: needs_proof
- author: JayBazuzi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: XS, triage: blank-template, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T05:07:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: none

### #57260 fix: dedupe discord target-validation retries

- bucket: needs_proof
- author: josephbergvinson
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T05:07:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix a Discord messaging edge case where a failed send using a bare numeric recipient id can leave a stale `Message failed` warning visible even after an immediate successful retry using `channel:<id>`. This keeps the existing narrow behavior intact:

