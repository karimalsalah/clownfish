---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-98-bulk-plan-20260615-a"
mode: "plan"
run_id: "1781509753422095"
run_url: null
head_sha: "ab8f3381c8b4c7ae549806f637732c055ad16c09"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T07:49:49.421Z"
canonical: "#92897"
canonical_issue: "#92207"
canonical_pr: "#92897"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-98-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: unknown

Workflow conclusion: success

Worker result: planned

Canonical: #92897

## Summary

Plan mode only. The original canonical issue #92207 is already closed, and the hydrated linked PR #92897 is the merged canonical fix on main. Already-closed duplicate PRs stay closed. Open security-signal PR #92430 is routed to central security handling as required by the job. Open duplicate PR #92759 can be closed as superseded by merged #92897 with contributor-credit wording.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #92207 | keep_closed | skipped | fixed_by_candidate | Already closed in live state; closure actions are invalid for closed refs. |
| #92245 | keep_closed | skipped | superseded | Already closed in live state; keep as historical superseded context. |
| #92378 | keep_closed | skipped | superseded | Already closed in live state; keep as superseded by the merged canonical fix. |
| #92430 | route_security | planned | security_sensitive | The job explicitly marks this ref as a security-signal route, so ProjectClownfish should not close, merge, label, comment, or fix it. |
| #92759 | close_superseded | planned | superseded | The same user-visible crash is already fixed by merged #92897; this open PR is a redundant superseded branch with failing checks. |
| #92897 | keep_canonical | planned | canonical | This is the merged canonical fix for the cluster. |

## Needs Human

- none
