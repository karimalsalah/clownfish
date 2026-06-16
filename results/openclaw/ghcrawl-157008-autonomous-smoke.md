---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-157008-autonomous-smoke"
mode: "autonomous"
run_id: "27585131459"
workflow_run_id: "27585131459"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585131459"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:18:21.282Z"
canonical: "#40215"
canonical_issue: "#40215"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-157008-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585131459](https://github.com/openclaw/clownfish/actions/runs/27585131459)

Workflow conclusion: success

Worker result: planned

Canonical: #40215

## Summary

Hydrated preflight state leaves #40215 as the open canonical issue for cumulative context/model usage in the /usage footer. The duplicate candidate #65487 is already closed, and linked context issue #65477 is also already closed, so no closure, merge, or fix PR action should be emitted for this run.

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
| #40215 | keep_canonical | planned | canonical | #40215 remains the best live canonical because it is open, broader than the already-closed duplicate #65487, and still tracks unresolved product and implementation scope. |
| #65487 | keep_closed | skipped | duplicate | #65487 is already closed as a duplicate of #40215, so no close action is valid or needed. |
| #65477 | keep_closed | skipped | related | #65477 is closed historical context. It is related to #40215 through usage footer model display but is not an open candidate for mutation. |

## Needs Human

- none
