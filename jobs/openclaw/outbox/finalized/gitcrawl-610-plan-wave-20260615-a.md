---
repo: openclaw/openclaw
cluster_id: gitcrawl-610-plan-wave-20260615-a
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
  - "#75426"
candidates:
  - "#75426"
  - "#75427"
cluster_refs:
  - "#75426"
  - "#75427"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #75426 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 610 on 2026-06-15."
---

# Gitcrawl Cluster 610

Generated from local gitcrawl run cluster 610 for `openclaw/openclaw`.

Display title:

> [Bug]: Signal inbound/SSE listener appears wedged: outbound Signal works, channel probe OK, but inbound DMs do not reliably trigger agent responses and `channels status` times out

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #75426, currently open in local store
- latest member update: 2026-06-14T04:46:07.390941Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #75426 [Bug]: Signal inbound/SSE listener appears wedged: outbound Signal works, channel probe OK, but inbound DMs do not reliably trigger agent responses and `channels status` times out
- #75427 fix(signal): keep quiet SSE receive streams open
