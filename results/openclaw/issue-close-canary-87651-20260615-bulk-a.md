---
repo: "openclaw/openclaw"
cluster_id: "issue-close-canary-87651-20260615-bulk-a"
mode: "execute"
run_id: "27545120278"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27545120278"
head_sha: "1a47711b53828d58a62d5798b80ee89f4bb84218"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-15T12:10:50.654Z"
canonical: "#87639"
canonical_issue: null
canonical_pr: "#87639"
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-close-canary-87651-20260615-bulk-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27545120278](https://github.com/openclaw/clownfish/actions/runs/27545120278)

Workflow conclusion: failure

Worker result: planned

Canonical: #87639

## Summary

Planned one close-only fixed-by-candidate action for open issue #87651 because hydrated PR #87639 is merged and covers the same aggregate persisted tool-result session poisoning report. No merge, fix, label, or PR action is proposed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 1 |
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
| #87651 | close_fixed_by_candidate | executed | fixed_by_candidate | already closed with matching projectclownfish comment |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #87651 | close_fixed_by_candidate | planned | fixed_by_candidate | Issue #87651 is clearly covered by the merged candidate fix #87639, and the job explicitly allows close-only fixed-by-candidate cleanup when #87651 remains open and #87639 remains merged. |

## Needs Human

- none
