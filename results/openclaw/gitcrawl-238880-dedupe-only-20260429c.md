---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238880-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104062030"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104062030"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.405Z"
canonical: "https://github.com/openclaw/openclaw/pull/44023"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/44023"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238880-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104062030](https://github.com/openclaw/clownfish/actions/runs/25104062030)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/44023

## Summary

Classified the cluster without planning mutations. #44023 remains the best canonical implementation path, but the overlapping open PRs and linked issue carry useful unique context or review blockers, so they should stay open rather than be closed by dedupe automation.

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
| #44023 | keep_canonical | planned | canonical | Best surviving canonical path for this dedupe-only cluster, but not merge-ready and merge/fix actions are blocked by the job. |
| #45871 | keep_related | planned | related | Overlaps the canonical fix family but has useful implementation and discussion details; keep open for maintainer comparison or later repair. |
| #52400 | keep_related | planned | related | Related implementation candidate with useful tests but unresolved bot findings, broader churn, and a failing check; keep open rather than close as a duplicate. |
| #52382 | keep_related | planned | related | Same family as the canonical cap increase, but it has unique incident and product-scope details, so it should remain open. |
| #43972 | keep_closed | skipped | superseded | Already closed; included only to record that no further action is planned. |

## Needs Human

- none
