---
repo: "openclaw/openclaw"
cluster_id: "issue-close-canary-91036-20260615-a"
mode: "execute"
run_id: "27545120008"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27545120008"
head_sha: "1a47711b53828d58a62d5798b80ee89f4bb84218"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-15T12:12:57.943Z"
canonical: "#92779"
canonical_issue: null
canonical_pr: "#92779"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-close-canary-91036-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27545120008](https://github.com/openclaw/clownfish/actions/runs/27545120008)

Workflow conclusion: failure

Worker result: planned

Canonical: #92779

## Summary

Hydrated preflight shows #91036 remains open and non-security-sensitive, while canonical PR #92779 is merged and landed the Workspace Files collapsed-by-default behavior. Plan one close_fixed_by_candidate action for #91036; no merge, fix, PR, or action against the merged candidate is needed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #91036 | close_fixed_by_candidate | executed | fixed_by_candidate | already closed with matching projectclownfish comment |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #92779 | keep_canonical | planned | canonical |  |
| #91036 | close_fixed_by_candidate | planned | fixed_by_candidate |  |

## Needs Human

- none
