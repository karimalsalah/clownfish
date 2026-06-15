---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-345-pr-backlog-plan-20260615-a"
mode: "plan"
run_id: "27525116763"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27525116763"
head_sha: "416f3a943012e6a4f3b9e3e5baef7c4b408b4558"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:04:34.151Z"
canonical: "#45501"
canonical_issue: "#45501"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-345-pr-backlog-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27525116763](https://github.com/openclaw/clownfish/actions/runs/27525116763)

Workflow conclusion: success

Worker result: planned

Canonical: #45501

## Summary

Plan-mode classification only. The listed actionable candidate #75314 is already closed in the hydrated preflight state, so no close/comment/label mutation is planned. No remaining non-overlap open candidate can become a new live canonical; #45501 is the best surviving reset-startup canonical context but is explicitly excluded as existing-overlap and owned by another job.

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
| #45501 | keep_canonical | planned | canonical | #45501 remains the best live canonical context for the reset startup prompt/config family, but it is excluded from actionable refs by overlap policy. |
| #63295 | keep_closed | skipped | related | Already closed; no closure action is valid. Keep as closed historical related evidence only. |
| #70330 | keep_closed | skipped | independent | Already closed and a different root cause; keep as closed independent context only. |
| #75235 | keep_closed | skipped | independent | Already closed and materially independent from the configurable reset startup prompt issue. |
| #75314 | keep_closed | skipped | related | The only listed candidate changed to closed before this plan. No close action is allowed, and no remaining non-overlap open candidate exists to promote as live canonical. |
| #78430 | keep_closed | skipped | related | Already closed; keep as closed related context and do not emit a closure action. |

## Needs Human

- none
