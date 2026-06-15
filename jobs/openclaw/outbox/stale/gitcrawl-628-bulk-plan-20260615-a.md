---
repo: openclaw/openclaw
cluster_id: gitcrawl-628-bulk-plan-20260615-a
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
  - "#49523"
candidates:
  - "#49523"
cluster_refs:
  - "#49523"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#50454"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #49523 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 628 on 2026-06-15. Existing-overlap refs #50454 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 628

Generated from local gitcrawl run cluster 628 for `openclaw/openclaw`.

Display title:

> [Bug]: Session transcript mirroring writes header cwd from process.cwd(), allowing cross-agent workspace contamination

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #50454
- representative: #49523, currently open in local store
- latest member update: 2026-06-14T04:46:05.318547Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #49523 [Bug]: Session transcript mirroring writes header cwd from process.cwd(), allowing cross-agent workspace contamination

Existing-overlap context refs:

- #50454 fix: use explicit agent workspace when writing transcript headers
