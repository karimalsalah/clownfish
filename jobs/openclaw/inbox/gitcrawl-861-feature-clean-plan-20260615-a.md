---
repo: openclaw/openclaw
cluster_id: gitcrawl-861-feature-clean-plan-20260615-a
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
  - "#73222"
candidates:
  - "#73222"
  - "#73311"
cluster_refs:
  - "#73222"
  - "#73311"
overlap_policy: "skip-any"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #73222 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 861 on 2026-06-15."
---

# Gitcrawl Cluster 861

Generated from local gitcrawl run cluster 861 for `openclaw/openclaw`.

Display title:

> [Feature Request] Control UI: Add session kind filter to session dropdown

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #73222, currently open in local store
- latest member update: 2026-06-14T04:46:06.605448Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #73222 [Feature Request] Control UI: Add session kind filter to session dropdown
- #73311 Add Control UI session kind filter
