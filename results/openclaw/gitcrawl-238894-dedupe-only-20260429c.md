---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238894-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104094279"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104094279"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.415Z"
canonical: "https://github.com/openclaw/openclaw/issues/47555"
canonical_issue: "https://github.com/openclaw/openclaw/issues/47555"
canonical_pr: "https://github.com/openclaw/openclaw/pull/66000"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238894-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104094279](https://github.com/openclaw/clownfish/actions/runs/25104094279)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/47555

## Summary

Classified the cluster without mutations. #47555 remains the canonical open issue for the restart surface, #66000 is the active canonical implementation candidate, #65643 is related and should stay open because it carries the status-specific reproduction linked to #66000, and #65982 is already closed so no action is planned for it.

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
| #47555 | keep_canonical | planned | canonical | #47555 is still the best live canonical issue for the cluster because it covers the destructive gateway restart surface and remains open on the hydrated state. |
| #65643 | keep_related | planned | related | Keep open as related to #47555 and covered by the active #66000 candidate; closing now would discard useful status-specific reproduction while the PR remains unmerged. |
| #66000 | keep_canonical | planned | canonical | #66000 is the active canonical PR candidate for the stale launchd label/profile fix, but this dedupe-only job is not allowed to merge or create fix work. |
| #65982 | keep_closed | skipped | related | Already closed in hydrated state; no mutation is valid or needed. |

## Needs Human

- none
