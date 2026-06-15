---
repo: openclaw/openclaw
cluster_id: gitcrawl-471-plan-wave-20260615-a
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
  - "#92244"
candidates:
  - "#92244"
  - "#92254"
cluster_refs:
  - "#92244"
  - "#92254"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #92244 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 471 on 2026-06-15."
---

# Gitcrawl Cluster 471

Generated from local gitcrawl run cluster 471 for `openclaw/openclaw`.

Display title:

> [bug] Telegram model picker call to applyModelOverrideToSessionEntry doesn't pass preserveAuthProfileOverride, causing silent destruction of auth profile overrides set by non-picker sources

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #92244, currently open in local store
- latest member update: 2026-06-14T04:46:04.345325Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92244 [bug] Telegram model picker call to applyModelOverrideToSessionEntry doesn't pass preserveAuthProfileOverride, causing silent destruction of auth profile overrides set by non-picker sources
- #92254 fix(model-picker): preserve auth profile override when selecting a model
