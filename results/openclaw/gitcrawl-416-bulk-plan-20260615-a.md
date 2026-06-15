---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-416-bulk-plan-20260615-a"
mode: "plan"
run_id: "27521421408"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27521421408"
head_sha: "c7fde105fe4b1bf849faf5ed130f10118614c64c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:58:14.900Z"
canonical: "#38762"
canonical_issue: "#38762"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-416-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27521421408](https://github.com/openclaw/clownfish/actions/runs/27521421408)

Workflow conclusion: success

Worker result: planned

Canonical: #38762

## Summary

Plan-mode classification only. #38762 remains the open canonical issue for the browser act top-level ref/request-shape bug. #81076 is an open PR touching the same fix path, but the job explicitly marks it as a security-signal ref requiring central routing, so no merge, close, comment, label, or fix action is planned for that PR. Hydrated linked closed refs are kept closed as historical evidence only.

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
| #38762 | keep_canonical | planned | canonical | #38762 is open, hydrated, and remains the clearest canonical issue for the shared browser act request-shape bug. |
| #81076 | route_security | planned | security_sensitive | The job explicitly requires routing #81076 as a security-signal ref. No merge, close, label, comment, or fix action should be planned for this item in ProjectClownfish. |
| #38790 | keep_closed | skipped | superseded | Already closed linked context item; historical evidence supports #38762 as canonical but no action is needed. |
| #81051 | keep_closed | skipped | duplicate | Already closed duplicate context item; keep closed and preserve as evidence only. |

## Needs Human

- none
