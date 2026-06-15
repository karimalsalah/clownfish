---
repo: openclaw/openclaw
cluster_id: gitcrawl-677-plan-wave-20260615-a
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
  - "#67288"
candidates:
  - "#67288"
  - "#81208"
cluster_refs:
  - "#67288"
  - "#81208"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #67288 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 677 on 2026-06-15."
---

# Gitcrawl Cluster 677

Generated from local gitcrawl run cluster 677 for `openclaw/openclaw`.

Display title:

> [Bug]: amazon-bedrock-mantle lacks config.discovery.enabled gate, unnecessary discovery runs on every request

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #67288, currently open in local store
- latest member update: 2026-06-14T04:46:05.545634Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #67288 [Bug]: amazon-bedrock-mantle lacks config.discovery.enabled gate, unnecessary discovery runs on every request
- #81208 fix(amazon-bedrock-mantle): gate implicit discovery on AWS creds presence (#67288)
