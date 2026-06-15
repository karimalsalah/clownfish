---
repo: openclaw/openclaw
cluster_id: gitcrawl-622-plan-wave-20260615-a
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
  - "#87247"
candidates:
  - "#87247"
  - "#87535"
cluster_refs:
  - "#87247"
  - "#87535"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #87247 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 622 on 2026-06-15."
---

# Gitcrawl Cluster 622

Generated from local gitcrawl run cluster 622 for `openclaw/openclaw`.

Display title:

> docs: clarify LanceDB dreaming settings vs vector-native plugins

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #87247, currently open in local store
- latest member update: 2026-06-14T04:46:06.84891Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #87247 docs: clarify LanceDB dreaming settings vs vector-native plugins
- #87535 docs: note LanceDB dreaming v0.2.3 via memory-lancedb-dreaming plugin
