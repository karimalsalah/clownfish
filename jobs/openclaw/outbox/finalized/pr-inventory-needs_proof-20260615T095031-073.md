---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T095031-073
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
  - "#62206"
  - "#61704"
  - "#62648"
  - "#62417"
  - "#62740"
  - "#62092"
  - "#62070"
  - "#61576"
  - "#62552"
  - "#62733"
  - "#62021"
  - "#61807"
  - "#61735"
  - "#90617"
  - "#62157"
  - "#61973"
  - "#61624"
  - "#62710"
  - "#63061"
  - "#62195"
  - "#63710"
  - "#61522"
  - "#62201"
  - "#60830"
  - "#62822"
cluster_refs:
  - "#62206"
  - "#61704"
  - "#62648"
  - "#62417"
  - "#62740"
  - "#62092"
  - "#62070"
  - "#61576"
  - "#62552"
  - "#62733"
  - "#62021"
  - "#61807"
  - "#61735"
  - "#90617"
  - "#62157"
  - "#61973"
  - "#61624"
  - "#62710"
  - "#63061"
  - "#62195"
  - "#63710"
  - "#61522"
  - "#62201"
  - "#60830"
  - "#62822"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T09:50:31.581Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 73

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #62206 feat: add assistant conclusion freshness gate

- bucket: needs_proof
- author: avatasia
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-06T04:45:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This change adds an experimental assistant-conclusion freshness gate for high-risk environment-state questions. The goal is to reduce cases where the model reuses stale assistant conclusions for questions about current OpenClaw state, especially whe

### #61704 fix: improve gmail watcher log message for external webhook setups

- bucket: needs_proof
- author: Soham-o
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-06T04:45:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Improves Gmail watcher log message to better clarify behavior when using external webhook setups (e.g. gog + Pub/Sub). ## Problem Users may see: > gmail watcher not started: gmail topic required This can be confusing, as external webhook setups do n

### #62648 fix: include property name in additionalProperties validation errors

- bucket: needs_proof
- author: thirumaleshp
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-06T04:45:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Enhanced `additionalProperties` AJV validation errors to include the offending property name - Before: `must NOT have additional properties` — unhelpful for debugging - After: `must NOT have additional properties (unexpected property: 'dreaming')`

### #62417 feat: add workspace file management for agents

- bucket: needs_proof
- author: WilShi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, app: web-ui, gateway, size: XL, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:45:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Agents have workspace directories but no way to browse or manage files through the Control UI. - Why it matters: Users need to inspect, edit, and organize agent workspace files without SSH or CLI access. - What changed: Added `agents.work

### #62740 fix(zalo): check response.ok before parsing JSON body

- bucket: needs_proof
- author: oliviareid-svg
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: zalo, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-06T04:45:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `callZaloApi` in `extensions/zalo/src/api.ts` calls `response.json()` without checking `response.ok` - On HTTP errors (5xx, gateway timeouts), the response body may be HTML or plain text, causing a `SyntaxError: Unexpected token` instead of a clea

### #62092 memory-core: don't abort auto provider selection on auth/config errors

- bucket: needs_proof
- author: ricardoshiroma14
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 auth-provider
- gitcrawl snapshot updated: 2026-06-06T04:45:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Problem When `memorySearch.provider` is set to `auto` (the default), the first remote embedding provider candidate can throw on missing API key / unauthorized errors. Because the adapter doesn't always provide `shouldContinueAutoSelection`, this aborts aut

### #62070 fix: sanitize OpenAI compat gateway images and surface streaming errors

- bucket: needs_proof
- author: htplbc
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-06T04:45:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #59913 - **Bug 1**: Gateway-provided images (via OpenAI compat `/v1/chat/completions` `image_url` parts) bypassed the sanitization/resize pipeline. `detectAndLoadPromptImages()` early-returned `existingImages` unsanitized when no image refs we

### #61576 feat: Rust/GTK4 Linux companion app (#75, alternative track)

- bucket: needs_proof
- author: 00xglitch
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XL, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:45:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a native Linux desktop companion under `apps/linux-gtk/` written in **Rust + GTK4 + libadwaita** - Alternative-track contribution for [#75](https://github.com/openclaw/openclaw/issues/75) alongside @tiagonix's C/GTK4 work at `apps/linux/` — d

### #62552 fix(acp): stabilize bridge session keys

- bucket: needs_proof
- author: kong373
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:46:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # PR: fix(acp): stabilize bridge session keys ## Summary - Use `acp-bridge:<uuid>` for ACP bridge fallback sessions created without metadata. - Match pending ACP prompts across raw and Gateway-canonical session keys, e.g. `acp-bridge:<uuid>` and `agent:main:ac

### #62733 Fix local memory embedding VRAM fallback and logging file resolution

- bucket: needs_proof
- author: nSPIR3D
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-06T04:46:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This fixes two issues in local OpenClaw setups: 1. Logging could ignore a valid configured `logging.file` path because the logging runtime depended on a fragile built-module require path. 2. Local memory embeddings could fail hard on VRAM-fit initia

### #62021 fix(macos): rewrite wildcard A2UI host to loopback

- bucket: needs_proof
- author: ThanhNguyxn07
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-06T04:46:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes macOS node A2UI URL resolution by rewriting wildcard canvas hosts (`0.0.0.0` / `::`) to loopback before appending the A2UI path. - Keeps the change minimal and isolated to macOS node runtime URL handling, so existing non-wildcard host behavi

### #61807 fix(feishu): extract video thumbnail via ffmpeg for native video bubbles

- bucket: needs_proof
- author: raylanlin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-06T04:46:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #38554 — Feishu video messages now display a native cover thumbnail instead of a plain file attachment. ## Problem Feishu's `media` message type requires both `file_key` **and** `image_key` in the content payload. Without `image_key`, the vide

### #61735 fix: apply Gemini schema cleaning when modelId indicates Gemini behind proxy

- bucket: needs_proof
- author: pod4g
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-06T04:46:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix HTTP 400 errors when using Gemini through OpenAI-compatible proxies (e.g., NewAPI, OneAPI) - Add `modelId` check to Gemini provider detection in `normalizeToolParameterSchema()`, so `cleanSchemaForGemini()` triggers even when `modelProvider` i

### #90617 Add Entroly context compression skill

- bucket: needs_proof
- author: juyterman1000
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: low-signal-docs, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-06T04:46:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What this PR adds Adds an **Entroly** skill to the skills directory — a local context compression engine that reduces LLM input tokens by 70-95% on large repos. ### How it works - Ranks repo files by query relevance (BM25 + entropy + dependency graph) - Sel

### #62157 fix: only drop streamed payloads, not all final payloads

- bucket: needs_proof
- author: ericyoshida
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-06T04:46:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When block streaming is enabled (`blockStreamingDefault: "on"`), text generated by the agent **before** tool calls is correctly streamed to the user. However, text generated **after** tool calls (final payloads) is silently dropped and never deliver

### #61973 feat(update): add `openclaw update review` pre-upgrade risk assessment

- bucket: needs_proof
- author: ziggy2socks
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: L, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-06T04:46:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What this adds `openclaw update review` — a read-only pre-upgrade risk assessment subcommand. Run it before `openclaw update` to understand what changed and whether it is safe to upgrade right now. ``` openclaw update review openclaw update review --json op

### #61624 feat(whatsapp): add dmRequireMention for DM trigger gating

- bucket: needs_proof
- author: mubbie
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, size: S, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-06T04:46:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds `dmRequireMention` config option to WhatsApp channel (and base `ExtensionChannelConfig`) that gates DM replies behind mention-pattern matching - Reuses existing `mentionPatterns` + `resolveMentionGating` infrastructure — no new pattern config

### #62710 fix(auth): stop new sessions inheriting auto-selected auth profile overrides

- bucket: needs_proof
- author: zeynalnia
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-06T04:46:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: New sessions inherit `authProfileOverride` from rate-limited or cooldown backup profiles instead of using the default/best available profile. The auto-failover override persists across gateway restarts, `/new`, `/reset`, and manual sessio

### #63061 CLI: align profile state dir with OPENCLAW_HOME

- bucket: needs_proof
- author: wpq3142
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: cli, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:46:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Problem When both `OPENCLAW_HOME` (physical isolation) and `--profile` / `OPENCLAW_PROFILE` are used, the daemon resolves state under `$OPENCLAW_HOME/.openclaw`, but the CLI forced `$OPENCLAW_HOME/.openclaw-<profile>`, so CLI commands could not reach the r

### #62195 feat(cron): add preHook gate for pre-run script checks

- bucket: needs_proof
- author: scottgl9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: macos, app: web-ui, gateway, agents, size: L, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-06T04:46:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds an optional `preHook` configuration for cron jobs and heartbeat triggers that runs a shell command before agent execution. This gates agent runs on system preconditions (disk space, network, API availability) — eliminating wasteful runs on reso

### #63710 fix(image): mixed-source image input for vision-capable models

- bucket: needs_proof
- author: xiaoHEI-312
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-06T04:46:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: In WebUI, when a prompt mixes an uploaded inline image with an explicit HTTP(S) image URL, only the inline image is included in the first native vision request. The HTTP(S) URL remains plain text and is effectively ignored unless the mode

### #61522 config/io: add proper logging for IO error handling

- bucket: needs_proof
- author: soumojit-D48
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-06T04:46:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Config IO catches errors with empty catch blocks, making it impossible to debug configuration issues (disk full, permission denied, locked files) - **Why it matters:** Operators cannot see why config operations fail; silent data loss 

### #62201   fix: mitigate stale toolResult replay pollution

- bucket: needs_proof
- author: avatasia
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-06T04:46:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This change mitigates stale diagnostic `toolResult` replay pollution in session history. It adds structured replay metadata for transient environment-diagnostic tool results, then omits stale results during replay when they are either: - older than 

### #60830 fix(agents): detect empty provider responses as failures, improve Telegram error routing

- bucket: needs_proof
- author: garnetlyx
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-06T04:46:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds `EmptyResponseError` typed class in `model-fallback.ts`; replaces the fragile string-matched `new Error("Empty response content received from provider")` - In `runFallbackAttempt`: treats a raw provider response with `content: []` and no `met

### #62822 Speed up Discord permission audits

- bucket: needs_proof
- author: RONNYKHALIL
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-06T04:47:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - speed up the Discord permission audit path that feeds `channels.status` - audit Discord channel permissions with a small bounded worker pool while preserving output order - cache Discord bot and guild/member permission context for 30 seconds to av

