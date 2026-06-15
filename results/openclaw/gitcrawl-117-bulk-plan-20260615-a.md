---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-117-bulk-plan-20260615-a"
mode: "plan"
run_id: "1781509752422092"
run_url: null
head_sha: "ab8f3381c8b4c7ae549806f637732c055ad16c09"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T07:49:48.899Z"
canonical: "#89245"
canonical_issue: "#89245"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-117-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: unknown

Workflow conclusion: success

Worker result: planned

Canonical: #89245

## Summary

Read-only plan. The representative #75151 is already closed as implemented by merged PR #70479. The remaining open candidates are not one duplicate family: #89245 should be the live canonical for the remaining reset/new missing-transcript session-state branch; #87610 should stay open as the non-security exec/tool failure-banner UX branch; #89247 is related to that UX branch but broader Feishu/product-proof work; linked security-sensitive #88332 is routed to central security handling only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #75151 | keep_closed | skipped | fixed_by_candidate | Historical representative is already closed as implemented; keep it as closed evidence and do not emit any close action. |
| #89245 | keep_canonical | planned | canonical | Best live canonical for the remaining session-state missing-transcript branch after #75151 closed; unique reset/new evidence makes duplicate closure unsafe. |
| #87610 | keep_canonical | planned | canonical | Separate non-security user-visible exec/tool warning UX branch, not a duplicate of the sessionFile/session-state canonical. |
| #89247 | keep_related | planned | related | Related to #87610's user-visible failure-banner family, but the Feishu breadth and generic fallback evidence are distinct enough to keep open. |
| #88332 | route_security | planned | security_sensitive | Exact linked ref is security-sensitive and must route to central OpenClaw security handling without poisoning unrelated non-security candidates. |

## Needs Human

- none
