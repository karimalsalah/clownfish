---
repo: openclaw/openclaw
cluster_id: gitcrawl-625-plan-wave-20260615-a
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
  - "#90755"
candidates:
  - "#90755"
  - "#90832"
cluster_refs:
  - "#90755"
  - "#90832"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #90755 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 625 on 2026-06-15."
---

# Gitcrawl Cluster 625

Generated from local gitcrawl run cluster 625 for `openclaw/openclaw`.

Display title:

> Bug: reconnecting to a running session only shows last user message, missing agent's in-progress response

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #90755, currently open in local store
- latest member update: 2026-06-14T04:46:05.310207Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90755 Bug: reconnecting to a running session only shows last user message, missing agent's in-progress response
- #90832 fix(gateway): surface in-progress assistant response on session reconnect
