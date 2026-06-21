---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1278-intake-20260621b"
mode: "plan"
run_id: "27898765789"
workflow_run_id: "27898765789"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27898765789"
head_sha: "235915800bae334c4c4446fe4ca178fb46b1cb9b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-21T08:34:48.430Z"
canonical: "#64334"
canonical_issue: "#64334"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1278-intake-20260621b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27898765789](https://github.com/openclaw/clownfish/actions/runs/27898765789)

Workflow conclusion: success

Worker result: planned

Canonical: #64334

## Summary

Plan-only classification: keep #64334 as the open canonical feature request. #94308 is the live related fix candidate already tracked by an existing overlap cluster, but it is not merge-ready because ClawSweeper reports needs-changes and current checks include failures. No GitHub mutations are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #64334 | keep_canonical | planned | canonical | #64334 remains the best live canonical because it is open, non-security, and still represents the root feature request. |
| #94308 | keep_related | planned | related | #94308 appears to be the active related fix path for #64334, but this worker should not merge or close around it: it is existing-overlap context and currently blocked by checks/review. |
| #73162 | keep_closed | skipped | independent | Already closed and independent of the #64334 status-cost cluster. |
| #89862 | keep_closed | skipped | superseded | Already closed historical attempt, superseded by the later open related fix path. |
| #91130 | keep_closed | skipped | superseded | Already closed historical attempt, superseded by the later open related fix path. |
| #92994 | keep_closed | skipped | superseded | Already closed historical attempt, superseded by the later open related fix path. |
| #93042 | keep_closed | skipped | superseded | Already closed historical attempt, superseded by the later open related fix path. |

## Needs Human

- none
