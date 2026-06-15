---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-590-bulk-plan-20260615-a"
mode: "plan"
run_id: "27521517346"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27521517346"
head_sha: "c7fde105fe4b1bf849faf5ed130f10118614c64c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:58:15.012Z"
canonical: "#90953"
canonical_issue: "#90953"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-590-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27521517346](https://github.com/openclaw/clownfish/actions/runs/27521517346)

Workflow conclusion: success

Worker result: planned

Canonical: #90953

## Summary

Plan mode only. #90953 remains the open canonical issue for the localized WSL version parsing/release-promotion problem. #91089 is an open PR linked to the same release-drift family, but the job explicitly marks it as a security-signal ref, so it is routed to central security handling instead of being merged, closed, or used for fixed-by-candidate closeout.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #90953 | keep_canonical | planned | canonical | #90953 is still the clearest live canonical for the original localized WSL installation failure and the remaining release-promotion/verification work. |
| #91089 | route_security | planned | security_sensitive | The job explicitly requires security-signal routing for #91089; no close, merge, label, comment, or fixed-by-candidate action should be planned for this item by Clownfish. |

## Needs Human

- none
