---
repo: openclaw/openclaw
cluster_id: gitcrawl-593-plan-wave-20260615-a
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
  - "#68857"
candidates:
  - "#68857"
  - "#92714"
cluster_refs:
  - "#68857"
  - "#92714"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #68857 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 593 on 2026-06-15."
---

# Gitcrawl Cluster 593

Generated from local gitcrawl run cluster 593 for `openclaw/openclaw`.

Display title:

> feat: add gateway.nodes.invokeTimeoutMs config option

Cluster shape from gitcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- representative: #68857, currently open in local store
- latest member update: 2026-06-14T04:46:05.119314Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #68857 feat: add gateway.nodes.invokeTimeoutMs config option
- #92714 feat(gateway): make the default node.invoke timeout configurable
