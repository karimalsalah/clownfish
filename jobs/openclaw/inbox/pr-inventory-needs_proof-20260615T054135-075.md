---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T054135-075
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
  - "#55018"
  - "#54838"
  - "#56116"
  - "#54934"
  - "#58134"
  - "#57260"
  - "#57825"
  - "#58051"
  - "#58805"
  - "#58478"
cluster_refs:
  - "#55018"
  - "#54838"
  - "#56116"
  - "#54934"
  - "#58134"
  - "#57260"
  - "#57825"
  - "#58051"
  - "#58805"
  - "#58478"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:41:35.457Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 75

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies.

## Inventory

### #55018 fix: avoid O(N²) shallow-copy in mapSensitivePaths schema traversal

- bucket: needs_proof
- author: xdhuangyandi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- updated: 2026-06-10T05:03:21Z
- body excerpt: ## Summary - **Problem:** `mapSensitivePaths` performed `{ ...hints }` shallow copy on every recursive call while traversing the Zod schema tree, resulting in O(N²) allocation overhead. - **Why it matters:** For the full `OpenClawSchema` tree (hundreds of node

### #54838 Control UI: add toggle to expand tool call output by default in webchat (fixes #54478)

- bucket: needs_proof
- author: dingtao416
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: needs-real-behavior-proof, P3, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- updated: 2026-06-10T05:03:31Z
- body excerpt: ## Summary - **Problem:** In the webchat (Control UI), tool call output is always collapsed by default. Users must manually click to expand each output, which is inconvenient when debugging or tracking agent workflows. - **Why it matters:** The TUI already sup

### #56116 Improve Feishu streaming visibility and filter scratchpad text

- bucket: needs_proof
- author: mattclawcn
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: feishu, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- updated: 2026-06-10T05:04:04Z
- body excerpt: # Upstream Draft: Feishu IM Long-Task Visibility ## Issue Draft ### Title Feishu IM long-task visibility: status footer, last activity, completion confirmation, and scratchpad suppression ### Summary When OpenClaw is used through Feishu IM, long-running agent 

### #54934 Feishu: reject empty message cards

- bucket: needs_proof
- author: 08820048
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- updated: 2026-06-10T05:04:31Z
- body excerpt: ## Summary - Problem: Feishu message actions treated `card: {}` as a valid card-only payload, then forwarded it to Feishu and triggered a 400 API error. - Why it matters: proactive Feishu sends can fail when the model emits an empty card object, especially in 

### #58134 Improve confirmation message clarity

- bucket: needs_proof
- author: JayBazuzi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: XS, triage: blank-template, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- updated: 2026-06-10T05:07:32Z
- body excerpt: none

### #57260 fix: dedupe discord target-validation retries

- bucket: needs_proof
- author: josephbergvinson
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- updated: 2026-06-10T05:07:59Z
- body excerpt: ## Summary Fix a Discord messaging edge case where a failed send using a bare numeric recipient id can leave a stale `Message failed` warning visible even after an immediate successful retry using `channel:<id>`. This keeps the existing narrow behavior intact:

### #57825 Preserve session model overrides on generic persistence

- bucket: needs_proof
- author: realkim93
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- updated: 2026-06-10T05:08:06Z
- body excerpt: ## Summary Generic session persistence was clearing omitted override fields by default. That can drop a previously selected `/model` session override when a later non-model session write merges a partial entry. ## Repro 1. Set a per-session model with `/model`

### #58051 fix: primary probe should not consume transient probe slot for same-provider fallbacks

- bucket: needs_proof
- author: Nicholasweng
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- updated: 2026-06-10T05:10:28Z
- body excerpt: ## Problem When the primary model is in cooldown and gets probed (near expiry), the probe failure marks the provider in `cooldownProbeUsedProviders`. This blocks same-provider fallback candidates from getting their own probe attempt, causing the fallback chain

### #58805 Plugins: preserve manifest skills on loaded plugin records

- bucket: needs_proof
- author: novisfff
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- updated: 2026-06-10T05:10:35Z
- body excerpt: ## Summary - Problem: plugin manifests can declare `skills`, and `loadPluginManifestRegistry()` preserves that metadata, but loaded runtime `PluginRecord`s were dropping it. - Why it matters: runtime/status consumers end up seeing an incomplete plugin record e

### #58478 fix(android): resolve TLS handshake failure on Android 15

- bucket: needs_proof
- author: whisky0809
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: android, stale, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- updated: 2026-06-10T05:10:53Z
- body excerpt: ## Summary - Fixes a TLS handshake crash on Android 15 devices during gateway onboarding - Android's `RootTrustManager` requires hostname-aware `checkServerTrusted` when `<domain-config>` entries exist in `network_security_config.xml`, but the custom `X509Trus

