---
repo: "openclaw/openclaw"
cluster_id: "pr-close-canary-90819-current-main-20260618"
mode: "execute"
run_id: "27778309662"
workflow_run_id: "27778309662"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27778309662"
head_sha: "4aff6e4bcc12a4c3690b7901898a51349728d614"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-18T17:47:19.689Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-close-canary-90819-current-main-20260618

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27778309662](https://github.com/openclaw/clownfish/actions/runs/27778309662)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

#90819 is an open PR in the hydrated preflight, non-security, and current main already contains the same request-scoped plugin workspace-dir pin with focused regression coverage. Emit one planned close_fixed_by_candidate action; no merge, label, fix, or PR creation is planned.

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
| #90819 | close_fixed_by_candidate | executed | fixed_by_candidate | covered by the candidate fix |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| 1 | apply | #90819 | close_fixed_by_candidate | executed | covered by the candidate fix |
| 2 | apply | #90819 | close_fixed_by_candidate | executed | already closed with matching projectclownfish comment |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #90819 | close_fixed_by_candidate | planned | fixed_by_candidate |  |

## Needs Human

- none
