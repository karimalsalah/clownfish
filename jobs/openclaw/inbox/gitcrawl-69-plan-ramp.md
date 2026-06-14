---
repo: openclaw/openclaw
cluster_id: gitcrawl-69-plan-ramp
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
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#90975"
candidates:
  - "#84527"
  - "#90975"
  - "#91282"
  - "#91295"
  - "#91473"
  - "#91474"
  - "#91477"
cluster_refs:
  - "#84527"
  - "#90975"
  - "#91282"
  - "#91295"
  - "#91473"
  - "#91474"
  - "#91477"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #90975 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 69 on 2026-06-14."
---

# Gitcrawl Cluster 69

Generated from local gitcrawl run cluster 69 for `openclaw/openclaw`.

Display title:

> feat(google): add Antigravity CLI backend

Cluster shape from gitcrawl:

- total members: 7
- issues: 3
- pull requests: 4
- open candidates in local store: 7
- representative: #90975, currently open in local store
- latest member update: 2026-06-14T04:46:05.476821Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #84527 [Feature]: Add Antigravity CLI (agy) as CLI backend to replace deprecated google-gemini-cli
- #90975 feat(google): add Antigravity CLI backend
- #91282 feat(plugin-sdk): add optional CliBackendPlugin.estimateUsage hook for text-output backends
- #91295 feat(plugin-sdk): add optional CliBackendPlugin.transformAssistantText hook for post-parse text rewrites
- #91473 feat(google): filter English "I will"/"I am" pre-tool narration from antigravity-cli
- #91474 feat(google): enable raw-transcript reseed for antigravity-cli (multi-turn context fix)
- #91477 feat(plugin-sdk): add optional CliBackendPlugin.estimateUsage hook for text-output backends
