---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-409-bulk-plan-20260615-a"
mode: "plan"
run_id: "27526047601"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526047601"
head_sha: "c7ad8e870b6f3caec4c09cae355087e2dab5e58d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:32:02.753Z"
canonical: "#78034"
canonical_issue: "#67915"
canonical_pr: "#78034"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-409-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526047601](https://github.com/openclaw/clownfish/actions/runs/27526047601)

Workflow conclusion: success

Worker result: planned

Canonical: #78034

## Summary

Plan-mode classification only. #78034 is the best live in-scope canonical PR for the local attachment bootstrap-roots bug, but it is not merge-ready because review/CI still require real behavior proof and checks are failing. #67915 remains related context owned by an existing overlap job, #67916 is historical closed source work, and #78026 is an independent Control UI rendering PR for a different root cause.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #78034 | keep_canonical | planned | canonical | Keep #78034 as the canonical in-scope PR, but do not merge or close anything because plan mode forbids mutations and the PR still has proof/check blockers. |
| #67915 | keep_related | planned | related | Same root bug as #78034, but this ref is excluded overlap context and should not receive a close action from this worker. |
| #67916 | keep_closed | skipped | superseded | Already closed source PR for the same fix family; keep it as credited historical evidence only. |
| #78026 | keep_independent | planned | independent | Same UI file area but different user-visible failure and root cause; do not force it into the local attachment duplicate family. |

## Needs Human

- none
