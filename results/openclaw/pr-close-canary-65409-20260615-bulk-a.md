---
repo: "openclaw/openclaw"
cluster_id: "pr-close-canary-65409-20260615-bulk-a"
mode: "execute"
run_id: "27545119922"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27545119922"
head_sha: "1a47711b53828d58a62d5798b80ee89f4bb84218"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-15T12:12:57.942Z"
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

# pr-close-canary-65409-20260615-bulk-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27545119922](https://github.com/openclaw/clownfish/actions/runs/27545119922)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Planned a single close-only cleanup action: #65409 is still open and is fixed by the hydrated, merged replacement #83828. #83828 is already merged/closed, so it is retained only as non-mutating evidence and is not treated as an open canonical target.

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
| #65409 | close_fixed_by_candidate | planned | fixed_by_candidate |  |
| #83828 | keep_closed | skipped | fixed_by_candidate | Already-closed refs must not receive close or keep_canonical actions. |

## Needs Human

- none
