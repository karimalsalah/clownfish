---
repo: openclaw/openclaw
cluster_id: gitcrawl-627-plan-wave-20260615-a
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
  - "#90743"
candidates:
  - "#90743"
  - "#90902"
cluster_refs:
  - "#90743"
  - "#90902"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #90743 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 627 on 2026-06-15."
---

# Gitcrawl Cluster 627

Generated from local gitcrawl run cluster 627 for `openclaw/openclaw`.

Display title:

> Browser screenshot fails MCP content validation after 2026.6.1 upgrade

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #90743, currently open in local store
- latest member update: 2026-06-14T04:46:05.31825Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90743 Browser screenshot fails MCP content validation after 2026.6.1 upgrade
- #90902 fix #90743: emit MCP screenshot image source
