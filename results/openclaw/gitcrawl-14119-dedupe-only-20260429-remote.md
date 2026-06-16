---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14119-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27599299743"
workflow_run_id: "27599299743"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599299743"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:46:59.507Z"
canonical: "https://github.com/openclaw/openclaw/issues/65544"
canonical_issue: "https://github.com/openclaw/openclaw/issues/65544"
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

# gitcrawl-14119-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599299743](https://github.com/openclaw/clownfish/actions/runs/27599299743)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/65544

## Summary

Live preflight shows the supposed open candidates are already closed. No GitHub mutations are planned; closed refs are recorded as skipped keep_closed actions only.

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
| #65544 | keep_closed | skipped | canonical | Closed canonical context only; no open canonical replacement is needed because the representative issue is already closed as fixed on main. |
| #48534 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented by hydrated merged PR #83147; no further close/comment action is allowed or needed. |
| #52353 | keep_closed | skipped | related | Already closed as implemented on main; related timeout-observability context only, not an open duplicate target. |

## Needs Human

- none
