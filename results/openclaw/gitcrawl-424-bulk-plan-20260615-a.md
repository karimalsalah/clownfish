---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-424-bulk-plan-20260615-a"
mode: "plan"
run_id: "27526051964"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526051964"
head_sha: "c7ad8e870b6f3caec4c09cae355087e2dab5e58d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:32:02.755Z"
canonical: "#76473"
canonical_issue: null
canonical_pr: "#76473"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-424-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526051964](https://github.com/openclaw/clownfish/actions/runs/27526051964)

Workflow conclusion: success

Worker result: planned

Canonical: #76473

## Summary

Plan-only classification: keep #76473 as the live canonical repair PR for the remaining actionable cluster scope. Do not close, merge, label, or open fixes. #76473 is blocked from merge/fixed-by-candidate closeout by the failed Real behavior proof check and the ClawSweeper review requiring maintainer proof/product confirmation. #38730 remains open but is excluded existing-overlap context owned by another job; #38731 is already closed and historical evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #76473 | keep_canonical | planned | canonical | #76473 is the best surviving open candidate for the remaining actionable scope, but it is not merge-ready and no closure/fix mutation is allowed in this job. |
| #38731 | keep_closed | skipped | superseded | Already closed; retain only as historical superseded source evidence and contributor-credit context. |
| #38730 | keep_related | skipped | related | #38730 is related context and likely the issue ultimately covered by #76473, but it is excluded from this job's actionable scope and must not be closed here. |

## Needs Human

- none
