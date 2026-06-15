---
repo: openclaw/openclaw
cluster_id: gitcrawl-653-plan-wave-20260615-a
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
  - "#89152"
candidates:
  - "#89152"
  - "#89154"
cluster_refs:
  - "#89152"
  - "#89154"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #89152 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 653 on 2026-06-15."
---

# Gitcrawl Cluster 653

Generated from local gitcrawl run cluster 653 for `openclaw/openclaw`.

Display title:

> feat(hooks): add agent turn end hook

Cluster shape from gitcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- representative: #89152, currently open in local store
- latest member update: 2026-06-14T04:46:05.43701Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #89152 feat(hooks): add agent turn end hook
- #89154 feat(hooks): add ACP turn transcript save hook
