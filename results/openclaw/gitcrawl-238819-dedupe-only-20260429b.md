---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238819-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25103961705"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103961705"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.382Z"
canonical: "https://github.com/openclaw/openclaw/issues/63491"
canonical_issue: "https://github.com/openclaw/openclaw/issues/63491"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238819-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103961705](https://github.com/openclaw/clownfish/actions/runs/25103961705)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/63491

## Summary

Live canonical drifted from #67544 to #63491. #67544 and #67416 are already closed on main, #63491 should remain the canonical open Scheduled Task post-ready liveness issue, #73889 should remain open as a related candidate PR, #68493 is related but distinct, and #56284 can be closed as fixed by merged #71465 with #63491 left open for remaining liveness follow-up.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #56284 | close_fixed_by_candidate | blocked | fixed_by_candidate | candidate fix is not listed in job refs |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #63491 | keep_canonical | planned | canonical | Best live canonical issue for the remaining unresolved Windows Scheduled Task post-ready liveness symptom. |
| #73889 | keep_related | planned | related | Open focused candidate for #63491, but not merge-ready and not a closeout target in this dedupe-only job. |
| #56284 | close_fixed_by_candidate | planned | fixed_by_candidate | Merged #71465 covers the active-task drain and session-recovery root of #56284; any remaining Windows post-ready liveness work belongs on #63491. |
| #68493 | keep_related | planned | related | Related Windows restart/EADDRINUSE area, but it has unique hot-reload and stale-lock reproduction details, so it should remain open. |
| #67416 | keep_closed | skipped | fixed_by_candidate | Already closed in live state; no close action is valid. |
| #67544 | keep_closed | skipped | fixed_by_candidate | Historical representative is obsolete because it is already closed as implemented; no close action is valid. |

## Needs Human

- none
