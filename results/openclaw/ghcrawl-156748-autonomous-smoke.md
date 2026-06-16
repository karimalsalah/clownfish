---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156748-autonomous-smoke"
mode: "autonomous"
run_id: "27597851063"
workflow_run_id: "27597851063"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597851063"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:13:26.884Z"
canonical: "https://github.com/openclaw/openclaw/pull/72615"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72615"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156748-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597851063](https://github.com/openclaw/clownfish/actions/runs/27597851063)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72615

## Summary

All four job seed PRs are already closed in the hydrated preflight artifact, so no close, label, merge, or fix mutation is valid. The broader Memory Wiki bridge 0-artifacts path was already resolved by merged PR #72615; the closed seed PRs should remain historical evidence only.

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
| #63146 | keep_closed | skipped | related | Already closed; keep as related historical evidence only. |
| #65476 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented on main; no mutation needed. |
| #68121 | keep_closed | skipped | superseded | Already closed as superseded by the merged canonical bridge fix. |
| #69458 | keep_closed | skipped | superseded | Already closed as superseded by the merged narrower canonical fix. |
| #72615 | keep_closed | skipped | canonical | Merged canonical fix is already closed; record only as canonical evidence. |

## Needs Human

- none
