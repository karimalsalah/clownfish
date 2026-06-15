---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-32-autonomous-issue-wave"
mode: "autonomous"
run_id: "27566390692"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27566390692"
head_sha: "92dd1476bea37dce223a72feeab1de2dc6693ecf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T18:13:51.424Z"
canonical: "https://github.com/openclaw/openclaw/issues/67419"
canonical_issue: "https://github.com/openclaw/openclaw/issues/67419"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 4
---

# gitcrawl-32-autonomous-issue-wave

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27566390692](https://github.com/openclaw/clownfish/actions/runs/27566390692)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/67419

## Summary

Classified the five actionable open candidates using the hydrated preflight artifact. No GitHub mutations are safe in this pass: #67419 remains the best live canonical issue for the general session bootstrap reinjection/default-policy family; #75184 is covered by the hydrated open fix PR #75217 but closure is blocked until that PR lands; #75189 and #80289 are related but carry distinct product-policy gaps; #86819 is independent provider/context accounting work.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 4 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #75184 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #67419 | keep_canonical | planned | canonical | Keep open as the canonical issue; the remaining fix requires maintainer product/API decision before changing defaults or restart semantics. |
| #75184 | close_fixed_by_candidate | blocked | fixed_by_candidate | Closure is fix-first blocked until the hydrated candidate PR #75217 is merged or current main otherwise proves the fix. |
| #75189 | keep_related | planned | related | Related but not a duplicate of #67419; it should stay open for the default-budget, generated-template, and small-model prompt-pressure decision. |
| #80289 | keep_related | planned | related | Related bootstrap-cost report with a distinct skill-command policy surface; do not close into #67419. |
| #86819 | keep_independent | planned | independent | Independent issue; it should not be closed or routed under the bootstrap-loading canonical. |

## Needs Human

- #67419 needs maintainer product/API judgment before changing default contextInjection or restart/continuation semantics.
- #75189 needs maintainer decision on bootstrap budgets, generated template compactness, tiering, and small-local-model warning scope.
- #80289 needs maintainer decision on whether skill-dispatched turns get a separate minimal context profile, plus live Telegram/Pi/Haiku latency proof.
- #86819 needs provider/runtime accounting diagnosis before a fix or closeout path is clear.
