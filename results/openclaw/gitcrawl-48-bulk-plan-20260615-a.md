---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-48-bulk-plan-20260615-a"
mode: "plan"
run_id: "27521464774"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27521464774"
head_sha: "c7fde105fe4b1bf849faf5ed130f10118614c64c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:58:14.981Z"
canonical: "#90361"
canonical_issue: "#90361"
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-48-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27521464774](https://github.com/openclaw/clownfish/actions/runs/27521464774)

Workflow conclusion: success

Worker result: planned

Canonical: #90361

## Summary

Plan-mode classification only. #90361 remains the best live canonical for the open memory_search missing-metadata report family. Security-signal PRs #90453 and #90727 are quarantined with route_security per job notes. Other open items are related but not safe duplicate/merge/close candidates because they carry distinct failure slices, unresolved review findings, failing checks, or maintainer follow-up needs. #92187 is already closed and receives no close action.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #90361 | keep_canonical | planned | canonical | Best surviving open issue for the shared memory_search missing-metadata root family. |
| #77999 | keep_related | planned | related | Related memory-core recovery work with a distinct handle-reopen scope and unresolved review state. |
| #83712 | keep_related | planned | related | Related memory SQLite lifecycle issue, not a duplicate of the missing-metadata canonical. |
| #90414 | keep_related | planned | related | Same symptom family as #90361 with distinct persistence/cache details and no safe closure path. |
| #90453 | route_security | planned | security_sensitive | Exact job-designated security-signal ref; route to central OpenClaw security handling. |
| #90508 | keep_related | planned | related | Related active issue with broader lifecycle work; not safe to close as duplicate. |
| #90727 | route_security | planned | security_sensitive | Exact job-designated security-signal ref; route to central OpenClaw security handling. |
| #92187 | keep_closed | skipped | duplicate | Already closed in live preflight state; no closure action is valid. |
| #92509 | keep_related | planned | related | Related durability slice, but failing checks and unresolved review-bot comments block merge or fixed-by-candidate closeout. |
| #92515 | keep_related | planned | related | Related PR with unproven behavior and no allowed merge/fix action in this plan job. |

## Needs Human

- none
