---
repo: openclaw/openclaw
cluster_id: gitcrawl-1004-bulk-plan-20260615-a
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
  - "#80141"
cluster_refs:
  - "#80141"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#58687"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #58687 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1004 on 2026-06-15. Existing-overlap refs #58687 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1004

Generated from local gitcrawl run cluster 1004 for `openclaw/openclaw`.

Display title:

> [Bug]: Security prompt is too long to approve, and clicking "Allow All" on the security prompt is ineffective

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #58687
- representative: #58687, currently open in local store
- latest member update: 2026-06-14T04:46:07.521446Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #80141 fix(approvals): summarize long approval prompts

Existing-overlap context refs:

- #58687 [Bug]: Security prompt is too long to approve, and clicking "Allow All" on the security prompt is ineffective
