---
repo: openclaw/openclaw
cluster_id: gitcrawl-96-plan-ramp
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
  - "#92392"
candidates:
  - "#90371"
  - "#92374"
  - "#92392"
  - "#92440"
  - "#92762"
cluster_refs:
  - "#90371"
  - "#92374"
  - "#92392"
  - "#92440"
  - "#92762"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #92392 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 96 on 2026-06-14."
---

# Gitcrawl Cluster 96

Generated from local gitcrawl run cluster 96 for `openclaw/openclaw`.

Display title:

> #92374: fix(dispatch): include message_sending hooks when channel supplies custom beforeDeliver

Cluster shape from gitcrawl:

- total members: 5
- issues: 1
- pull requests: 4
- open candidates in local store: 5
- representative: #92392, currently open in local store
- latest member update: 2026-06-14T04:46:05.434292Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90371 fix(auto-reply): keep the message_sending gate when a channel sets beforeDeliver
- #92374 Plugin `message_sending` hooks silently bypassed on channel agent-reply delivery paths (2026.5.26, still present in 2026.6.1)
- #92392 #92374: fix(dispatch): include message_sending hooks when channel supplies custom beforeDeliver
- #92440 fix(dispatch): include message_sending hooks when channel supplies custom beforeDeliver (fixes #92374)
- #92762 fix(dispatch): include message_sending hooks when channel beforeDeliver is configured
