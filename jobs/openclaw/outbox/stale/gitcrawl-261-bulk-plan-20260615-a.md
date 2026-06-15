---
repo: openclaw/openclaw
cluster_id: gitcrawl-261-bulk-plan-20260615-a
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
  - "#72572"
candidates:
  - "#72572"
cluster_refs:
  - "#72572"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#72650"
  - "#72713"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #72572 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 261 on 2026-06-15. Existing-overlap refs #72650, #72713 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 261

Generated from local gitcrawl run cluster 261 for `openclaw/openclaw`.

Display title:

> [Bug]: exec-policy still rejects symlinked ~/.openclaw after #72377 replacement for #64663

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #72650, #72713
- representative: #72572, currently open in local store
- latest member update: 2026-06-14T04:46:05.526177Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #72572 [Bug]: exec-policy still rejects symlinked ~/.openclaw after #72377 replacement for #64663

Existing-overlap context refs:

- #72650 fix(exec-policy): accept trusted ~/.openclaw symlink at home boundary
- #72713 [security-signal] [codex] fix: allow trusted .openclaw symlink
