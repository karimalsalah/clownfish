---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13637-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27599299209"
workflow_run_id: "27599299209"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599299209"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:46:59.476Z"
canonical: "https://github.com/openclaw/openclaw/issues/56488"
canonical_issue: "https://github.com/openclaw/openclaw/issues/56488"
canonical_pr: null
actions_total: 14
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13637-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599299209](https://github.com/openclaw/clownfish/actions/runs/27599299209)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/56488

## Summary

No GitHub mutations are planned. The job's named candidate PRs are already closed in the hydrated preflight state, so they are historical evidence only. The representative #42729 is obsolete; the only live hydrated item needing continued tracking is #56488 for the one-shot deleteAfterRun scheduler path. Current main 999d44340fa5436b5f8305e0df4dc537b74df83b still gates deleteAfterRun deletion on at schedules and only passes skipAtIfAlreadyRan on restart recovery, so #56488 should remain open rather than be deduped into the closed restart-catchup PRs.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 14 |
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
| #56488 | keep_canonical | planned | canonical | This is the only live hydrated canonical item in the deleteAfterRun one-shot subfamily, and it is not a duplicate of the closed restart-catchup PRs. |
| #42729 | keep_closed | skipped | superseded | Closed historical candidate; no mutation is valid. |
| #56509 | keep_closed | skipped | superseded | Closed mixed-branch contributor PR; keep #56488 as the live canonical issue. |
| #63871 | keep_closed | skipped | superseded | Closed superseded PR; no mutation is valid. |
| #64375 | keep_closed | skipped | related | Closed related PR from a different deleteAfterRun subfamily; no mutation is valid. |
| #49229 | keep_closed | skipped | independent | Closed independent crash-handling PR. |
| #52619 | keep_closed | skipped | independent | Closed independent crash-handling PR. |
| #61813 | keep_closed | skipped | superseded | Closed restart catch-up PR superseded by the existing main implementation. |
| #35351 | keep_closed | skipped | canonical | Merged historical canonical for the restart catch-up subfamily; no mutation is valid. |
| #42640 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented on current main. |
| #12744 | keep_closed | skipped | fixed_by_candidate | Closed historical restart catch-up issue. |
| #33092 | keep_closed | skipped | related | Closed historical restart catch-up issue. |
| #52563 | keep_closed | skipped | independent | Closed independent crash report. |
| #63770 | keep_closed | skipped | related | Closed related recurring deleteAfterRun issue; no mutation is valid. |

## Needs Human

- none
