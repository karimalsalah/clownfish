---
repo: openclaw/openclaw
cluster_id: gitcrawl-612-plan-wave-20260615-a
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
  - "#64103"
candidates:
  - "#64103"
  - "#89101"
cluster_refs:
  - "#64103"
  - "#89101"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #64103 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 612 on 2026-06-15."
---

# Gitcrawl Cluster 612

Generated from local gitcrawl run cluster 612 for `openclaw/openclaw`.

Display title:

> Session `status` field values ("failed", "timeout", "done") mislead agents into spawning duplicate sessions

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #64103, currently open in local store
- latest member update: 2026-06-14T04:46:05.235183Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #64103 Session `status` field values ("failed", "timeout", "done") mislead agents into spawning duplicate sessions
- #89101 fix: add resumable field to prevent duplicate session spawns
