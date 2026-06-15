---
repo: "openclaw/openclaw"
cluster_id: "pr-close-canary-80590-20260615-bulk-a"
mode: "execute"
run_id: "27545119851"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27545119851"
head_sha: "1a47711b53828d58a62d5798b80ee89f4bb84218"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-15T12:12:57.941Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-close-canary-80590-20260615-bulk-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27545119851](https://github.com/openclaw/clownfish/actions/runs/27545119851)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Planned one close-only cleanup action for #80590. Hydrated preflight shows #80590 is still open and #83667 is already closed and merged as the landed fix, so #83667 is treated as a merged candidate fix rather than an open canonical target. No GitHub mutation was performed by the worker.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #83667 | keep_closed | skipped | fixed_by_candidate | #83667 is already closed and merged, so it cannot be emitted as an open canonical action. |
| #80590 | close_fixed_by_candidate | planned | fixed_by_candidate |  |

## Needs Human

- none
