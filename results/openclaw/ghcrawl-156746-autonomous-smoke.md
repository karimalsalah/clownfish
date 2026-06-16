---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156746-autonomous-smoke"
mode: "autonomous"
run_id: "27597850985"
workflow_run_id: "27597850985"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597850985"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:13:26.880Z"
canonical: "https://github.com/openclaw/openclaw/tree/6aa83374d90d35226b9cf3577155c3876a91b4b3"
canonical_issue: "https://github.com/openclaw/openclaw/issues/63035"
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

# ghcrawl-156746-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597850985](https://github.com/openclaw/clownfish/actions/runs/27597850985)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/6aa83374d90d35226b9cf3577155c3876a91b4b3

## Summary

All seeded PRs are already closed in the hydrated preflight. Current main at 6aa83374d90d35226b9cf3577155c3876a91b4b3 contains the pairing-state recovery fix for #63035 across device and node pairing, with regression tests and changelog credit, so no close, merge, or fix PR action is valid for this run.

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
| #55113 | keep_closed | skipped | related | Already closed related context; no mutation allowed or needed. |
| #63035 | keep_closed | skipped | fixed_by_candidate | Canonical issue is already closed and verified fixed on current main; no post-merge close action applies to a closed item. |
| #63045 | keep_closed | skipped | superseded | Already closed narrower PR; superseded by the broader canonical #63035 fix that is present on main. |
| #63072 | keep_closed | skipped | superseded | Already closed overlapping PR; no additional action is valid. |
| #63078 | keep_closed | skipped | superseded | Already closed partial implementation; superseded by the current-main fix for the full #63035 scope. |
| #63081 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented on current main; no merge or close action is valid. |

## Needs Human

- none
