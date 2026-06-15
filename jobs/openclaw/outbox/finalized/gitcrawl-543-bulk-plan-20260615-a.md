---
repo: openclaw/openclaw
cluster_id: gitcrawl-543-bulk-plan-20260615-a
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
  - "#54373"
candidates:
  - "#54373"
  - "#54830"
cluster_refs:
  - "#54373"
  - "#54830"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#54830"
canonical_hint: "gitcrawl representative #54373 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 543 on 2026-06-15. Security-signal refs #54830 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 543

Generated from local gitcrawl run cluster 543 for `openclaw/openclaw`.

Display title:

> [RFC] Context Provenance: Add source/volatility metadata to injected context segments

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- security-signal refs requiring route_security: #54830
- representative: #54373, currently open in local store
- latest member update: 2026-06-14T04:46:04.857026Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #54373 [RFC] Context Provenance: Add source/volatility metadata to injected context segments
- #54830 [security-signal] feat: context provenance metadata for injected bootstrap segments
