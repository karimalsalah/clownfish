---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-370-plan-wave-20260615-a"
mode: "plan"
run_id: "27521378927"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27521378927"
head_sha: "c7fde105fe4b1bf849faf5ed130f10118614c64c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:58:14.843Z"
canonical: "#42798"
canonical_issue: "#42798"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-370-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27521378927](https://github.com/openclaw/clownfish/actions/runs/27521378927)

Workflow conclusion: success

Worker result: planned

Canonical: #42798

## Summary

Read-only plan classification complete. #42798 remains the open canonical issue for the Tailscale Serve startup status-json race. #91553 is the related open candidate fix for the same root cause, but merge/fixed-by closeout is blocked by the failing Real behavior proof gate and missing merge preflight. #82727 is already closed and is historical evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #42798 | keep_canonical | planned | canonical | #42798 is still open, hydrated, non-security-sensitive, and remains the best canonical issue for the root cause; no closure is appropriate in plan mode. |
| #91553 | keep_related | planned | related | #91553 targets the same root cause as #42798 and should remain associated with the canonical issue, but failing proof and missing merge preflight block merge or fixed-by-candidate closeout. |
| #82727 | keep_closed | skipped | related | Already-closed linked PR; no mutation or closeout should be planned. |

## Needs Human

- none
