---
repo: openclaw/openclaw
cluster_id: gitcrawl-1182-fix-ui-scroll-to-cron-run-history
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
  - "#59902"
  - "#67629"
cluster_refs:
  - "#59902"
  - "#67629"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#94361"
  - "#94368"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #94361 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1182 on 2026-06-19. Existing-overlap refs #94361, #94368 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1182

Generated from local gitcrawl run cluster 1182 for `openclaw/openclaw`.

Display title:

> fix(ui): scroll to cron run history

Cluster shape from gitcrawl:

- total members: 4
- issues: 2
- pull requests: 2
- open candidates in local store: 2
- excluded existing-overlap refs: #94361, #94368
- representative: #94361, currently open in local store
- latest member update: 2026-06-19T02:13:00.24118Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #59902 [Feature]: UI Custometic - Clicking History BUtton looks like no Ops
- #67629 [Feature]: I want each timed task cron to show if it is running or not, add an identifier

Existing-overlap context refs:

- #94361 fix(ui): scroll to cron run history
- #94368 feat(ui): show cron job ids and running state
