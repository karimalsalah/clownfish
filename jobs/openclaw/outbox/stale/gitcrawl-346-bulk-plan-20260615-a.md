---
repo: openclaw/openclaw
cluster_id: gitcrawl-346-bulk-plan-20260615-a
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
  - "#45314"
candidates:
  - "#45314"
cluster_refs:
  - "#45314"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#45315"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #45314 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 346 on 2026-06-15. Existing-overlap refs #45315 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 346

Generated from local gitcrawl run cluster 346 for `openclaw/openclaw`.

Display title:

> [Bug]: Early abort response templates are not populated.

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #45315
- representative: #45314, currently open in local store
- latest member update: 2026-06-14T04:46:03.677778Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45314 [Bug]: Early abort response templates are not populated.

Existing-overlap context refs:

- #45315 [security-signal] fix: resolve response prefix template variables in abort replies
