---
repo: openclaw/openclaw
cluster_id: gitcrawl-449-plan-wave-20260615-a
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
  - "#92452"
candidates:
  - "#92452"
  - "#92516"
cluster_refs:
  - "#92452"
  - "#92516"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #92452 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 449 on 2026-06-15."
---

# Gitcrawl Cluster 449

Generated from local gitcrawl run cluster 449 for `openclaw/openclaw`.

Display title:

> msteams: ClawHub install can never pass the 6.x keyed-store trust gate (official catalog is npmSpec-only) — channel crash-loops with no actionable error

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #92452, currently open in local store
- latest member update: 2026-06-14T04:46:04.183978Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92452 msteams: ClawHub install can never pass the 6.x keyed-store trust gate (official catalog is npmSpec-only) — channel crash-loops with no actionable error
- #92516 Containerized/self-hosted deploys can't use externalized channel plugins: openKeyedStore is gated to trusted plugins, with no supported way to trust a self-hosted channel
