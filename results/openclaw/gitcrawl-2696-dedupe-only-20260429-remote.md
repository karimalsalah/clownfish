---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2696-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27599301203"
workflow_run_id: "27599301203"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599301203"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:46:59.525Z"
canonical: "https://github.com/openclaw/openclaw/commit/658be7f1c721138ce6c0110eeed60506442f9c9e"
canonical_issue: null
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

# gitcrawl-2696-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599301203](https://github.com/openclaw/clownfish/actions/runs/27599301203)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/commit/658be7f1c721138ce6c0110eeed60506442f9c9e

## Summary

No GitHub mutations are planned. The hydrated preflight shows the originally open candidates are no longer open: #51596 was merged, and #59650 was closed after its useful docs contribution was absorbed into main via commit 658be7f1c721138ce6c0110eeed60506442f9c9e. All hydrated refs in this cluster are closed, so closure/merge/fix actions are skipped.

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
| #59650 | keep_closed | skipped | fixed_by_candidate | Representative #59650 is obsolete as a live canonical because it is already closed; the canonical path is the main-branch absorption commit cited in its close comment. |
| #51596 | keep_closed | skipped | canonical | This was the canonical landed path for the skill-name mismatch subfamily, not an open target for this run. |
| #39948 | keep_closed | skipped | superseded | Closed historical PR; useful only as evidence for the advanced-features docs subfamily. |
| #67153 | keep_closed | skipped | fixed_by_candidate | Already closed as fixed by the hydrated, merged candidate #51596. |
| #39681 | keep_closed | skipped | superseded | Closed linked context issue for the advanced-features docs subfamily. |
| #76510 | keep_closed | skipped | fixed_by_candidate | Closed linked context issue; no action remains in this dedupe-only cluster. |

## Needs Human

- none
