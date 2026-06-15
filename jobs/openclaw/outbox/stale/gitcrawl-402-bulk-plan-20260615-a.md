---
repo: openclaw/openclaw
cluster_id: gitcrawl-402-bulk-plan-20260615-a
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
canonical: []
candidates:
  - "#91222"
cluster_refs:
  - "#91222"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#61443"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #61443 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 402 on 2026-06-15. Existing-overlap refs #61443 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 402

Generated from local gitcrawl run cluster 402 for `openclaw/openclaw`.

Display title:

> feat: add configurable retry for LLM provider API calls

Cluster shape from gitcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #61443
- representative: #61443, currently open in local store
- latest member update: 2026-06-14T04:46:05.051312Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #91222 fix(google-vertex): retry transient pre-stream failures and stale ADC

Existing-overlap context refs:

- #61443 [security-signal] feat: add configurable retry for LLM provider API calls
