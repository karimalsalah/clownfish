---
repo: openclaw/openclaw
cluster_id: gitcrawl-658-plan-wave-20260615-a
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
  - "#89868"
candidates:
  - "#89868"
  - "#89886"
cluster_refs:
  - "#89868"
  - "#89886"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #89868 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 658 on 2026-06-15."
---

# Gitcrawl Cluster 658

Generated from local gitcrawl run cluster 658 for `openclaw/openclaw`.

Display title:

> Bug: Stop-button abort races with compaction completion, causing model confusion

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #89868, currently open in local store
- latest member update: 2026-06-14T04:46:05.617204Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #89868 Bug: Stop-button abort races with compaction completion, causing model confusion
- #89886 fix(context-engine): forward abortSignal through delegation bridge to runtime compaction
