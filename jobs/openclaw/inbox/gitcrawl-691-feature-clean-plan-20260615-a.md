---
repo: openclaw/openclaw
cluster_id: gitcrawl-691-feature-clean-plan-20260615-a
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
  - "#81117"
candidates:
  - "#81117"
  - "#92805"
cluster_refs:
  - "#81117"
  - "#92805"
overlap_policy: "skip-any"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #81117 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 691 on 2026-06-15."
---

# Gitcrawl Cluster 691

Generated from local gitcrawl run cluster 691 for `openclaw/openclaw`.

Display title:

> [Feature]: Control UI session picker should show derived titles instead of session IDs

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #81117, currently open in local store
- latest member update: 2026-06-14T04:46:05.6159Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #81117 [Feature]: Control UI session picker should show derived titles instead of session IDs
- #92805 feat(ui): show derived titles in session picker instead of raw session keys (fixes #81117)
