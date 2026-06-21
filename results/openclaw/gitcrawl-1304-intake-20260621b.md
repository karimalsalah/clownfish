---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1304-intake-20260621b"
mode: "plan"
run_id: "27898766027"
workflow_run_id: "27898766027"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27898766027"
head_sha: "235915800bae334c4c4446fe4ca178fb46b1cb9b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-21T08:34:48.444Z"
canonical: "#78177"
canonical_issue: "#78177"
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

# gitcrawl-1304-intake-20260621b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27898766027](https://github.com/openclaw/clownfish/actions/runs/27898766027)

Workflow conclusion: success

Worker result: planned

Canonical: #78177

## Summary

Plan-mode classification only. #78177 remains the live canonical issue. #94112 is a hydrated read-only existing-overlap PR and appears to be the active candidate fix for the same root cause, but merge/fix/post-merge closeout are blocked by this job. #78189 is already closed and should receive no closure action.

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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #78177 | keep_canonical | planned | canonical | #78177 is the only open issue in the actionable candidate set and remains the best canonical report for this root cause. |
| #94112 | keep_related | planned | fixed_by_candidate | #94112 is related as the active candidate fix for the canonical issue, but this worker should not recommend merge or closeout because the job explicitly excludes this overlap ref from actionable scope and blocks merge/fix actions. |
| #78189 | keep_closed | skipped | superseded | Closed historical PRs must not receive closure actions; keep it as closed context and preserve its evidence as prior related work. |

## Needs Human

- none
