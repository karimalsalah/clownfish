---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-90-bulk-plan-20260615-a"
mode: "plan"
run_id: "1781509753422094"
run_url: null
head_sha: "ab8f3381c8b4c7ae549806f637732c055ad16c09"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T07:49:49.234Z"
canonical: "#92715"
canonical_issue: "#92715"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-90-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: unknown

Workflow conclusion: success

Worker result: planned

Canonical: #92715

## Summary

Plan mode only. Live canonical shifts from closed PR #92730 to open issue #92715. #81260 is routed to security per job security-signal override. Open PRs #92755 and #92822 remain related but not closable or mergeable: both overlap #92715, both need real behavior proof or have failing checks, and job disallows merge/fix PR work.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #61953 | keep_closed | skipped | independent | Historical linked context only; no mutation is valid for an already closed unrelated issue. |
| #80046 | keep_closed | skipped | related | Already merged historical context; no close or merge action is valid. |
| #81260 | route_security | planned | security_sensitive | Explicit job security-signal override requires central security routing for this exact ref without blocking unrelated non-security classification. |
| #92715 | keep_canonical | planned | canonical | Best surviving canonical for the non-security Discord status-reaction root cause. |
| #92730 | keep_closed | skipped | related | Closed unmerged useful contributor PR remains evidence and possible future credit source, but cannot be mutated in plan mode. |
| #92755 | keep_related | planned | related | Same root cause family as #92715, but not merge-ready or closable under current gates. |
| #92822 | keep_related | planned | related | Related overlapping partial fix for #92715, but failing proof and incomplete path coverage make it non-canonical. |

## Needs Human

- none
