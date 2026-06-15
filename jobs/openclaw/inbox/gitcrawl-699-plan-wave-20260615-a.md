---
repo: openclaw/openclaw
cluster_id: gitcrawl-699-plan-wave-20260615-a
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
  - "#65656"
candidates:
  - "#65656"
  - "#81299"
cluster_refs:
  - "#65656"
  - "#81299"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #65656 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 699 on 2026-06-15."
---

# Gitcrawl Cluster 699

Generated from local gitcrawl run cluster 699 for `openclaw/openclaw`.

Display title:

> # [Bug]: LINE reply — table flex messages silently dropped with 429 when text + table are returned together

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #65656, currently open in local store
- latest member update: 2026-06-14T04:46:05.702347Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #65656 # [Bug]: LINE reply — table flex messages silently dropped with 429 when text + table are returned together
- #81299 fix(line): pack Flex extras into Reply API slots before token is consumed (#65656)
