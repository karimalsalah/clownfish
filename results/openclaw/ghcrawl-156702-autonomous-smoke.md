---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156702-autonomous-smoke"
mode: "autonomous"
run_id: "27597849642"
workflow_run_id: "27597849642"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597849642"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:13:26.852Z"
canonical: "https://github.com/openclaw/openclaw/pull/72417"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72417"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156702-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597849642](https://github.com/openclaw/clownfish/actions/runs/27597849642)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72417

## Summary

Live preflight shows the original four candidate PRs are already closed. The canonical path is the merged replacement PR #72417, which landed as be6263da4f51a86a0351e2a88673c22fcf8fd58a and is present on current main 6aa83374d90d35226b9cf3577155c3876a91b4b3. No GitHub mutation is valid or needed for this cluster.

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
| #72417 | keep_closed | skipped | canonical | Canonical fix already landed; the PR is closed/merged, so no merge or close action is valid. |
| #39921 | keep_closed | skipped | superseded | Already closed and superseded by merged replacement #72417; closed targets must not receive close actions. |
| #42586 | keep_closed | skipped | superseded | Already closed as superseded by merged #72417; no further mutation is valid. |
| #46527 | keep_closed | skipped | superseded | Already closed as superseded by merged #72417; no close, merge, or fix action remains. |
| #52770 | keep_closed | skipped | superseded | Already closed as superseded by merged #72417; no mutation is valid for this closed PR. |

## Needs Human

- none
