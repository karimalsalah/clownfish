---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-56-bulk-plan-20260615-a"
mode: "plan"
run_id: "27521487767"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27521487767"
head_sha: "c7fde105fe4b1bf849faf5ed130f10118614c64c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:58:15.007Z"
canonical: "#89683"
canonical_issue: "#89683"
canonical_pr: "#90122"
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-56-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27521487767](https://github.com/openclaw/clownfish/actions/runs/27521487767)

Workflow conclusion: success

Worker result: planned

Canonical: #89683

## Summary

Plan-only classification for cluster gitcrawl-56-bulk-plan-20260615-a. #89683 remains the live canonical issue. #90122 is the narrow candidate fix for #89683 but merge is blocked by job policy and missing merge preflight proof. #83497 is explicitly listed as a security-signal ref in the job and is routed to central security handling without blocking unrelated non-security classifications.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #81630 | keep_closed | skipped | superseded | Already closed in live hydrated state. |
| #83494 | keep_related | planned | related | Related Control UI chat display problem with distinct successful message-tool projection scope. |
| #83497 | route_security | planned | security_sensitive | Explicit job-level security-signal routing requirement for this exact ref. |
| #83527 | keep_closed | skipped | superseded | Already closed in live hydrated state. |
| #89668 | keep_related | planned | related | Related symptom family, distinct reproduction and root-cause evidence. |
| #89683 | keep_canonical | planned | canonical | Best live canonical for the failed internal tool-call red-banner root cause. |
| #89781 | keep_related | planned | related | Related Control UI/WebChat display issue with separate successful-tool-output/product-decision scope. |
| #89975 | keep_related | planned | related | Related non-terminal tool-error leak fix on a different surface; not a duplicate and not mergeable in this job. |
| #90122 | merge_candidate | blocked | canonical | Best candidate fix for #89683, but merge is blocked by job policy and missing merge preflight. |

## Needs Human

- none
