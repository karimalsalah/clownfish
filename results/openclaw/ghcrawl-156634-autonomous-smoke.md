---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156634-autonomous-smoke"
mode: "autonomous"
run_id: "27597848883"
workflow_run_id: "27597848883"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597848883"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:13:26.826Z"
canonical: "https://github.com/openclaw/openclaw/tree/6aa83374d90d35226b9cf3577155c3876a91b4b3"
canonical_issue: "https://github.com/openclaw/openclaw/issues/72712"
canonical_pr: null
actions_total: 16
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156634-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597848883](https://github.com/openclaw/clownfish/actions/runs/27597848883)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/6aa83374d90d35226b9cf3577155c3876a91b4b3

## Summary

All job-seed and hydrated first-hop refs are already closed in the preflight artifact, so no close, comment, label, merge, or fix PR action is eligible. Current main at 6aa83374d90d35226b9cf3577155c3876a91b4b3 contains the relevant memory-core dreaming cleanup fixes: deterministic per-workspace narrative session keys, per-attempt pre-cleanup with expected request-scoped errors suppressed, final cleanup only for accepted runs, orphan scrub coverage, and plugin-owner-gated session deletion without broadening arbitrary operator.admin deletion.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 16 |
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
| #65653 | keep_closed | skipped | fixed_by_candidate | Already closed before this run; keep as historical fixed context. |
| #65654 | keep_closed | skipped | independent | Already closed as not actionable; not a live cluster target. |
| #66358 | keep_closed | skipped | fixed_by_candidate | Already closed as covered by the merged timestamp/session-key cleanup path. |
| #66801 | keep_closed | skipped | superseded | Closed historical mixed-scope issue; keep as context only. |
| #67023 | keep_closed | skipped | canonical | Merged historical canonical PR for the timestamp mismatch subfamily. |
| #67029 | keep_closed | skipped | duplicate | Already closed duplicate of the hydrated cleanup-scope canonical issue. |
| #67152 | keep_closed | skipped | fixed_by_candidate | Already closed as fixed on main. |
| #68074 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; keep as historical context. |
| #68252 | keep_closed | skipped | fixed_by_candidate | Former canonical issue is already closed by the mainline owner-gated cleanup fix. |
| #68364 | keep_closed | skipped | superseded | Already closed superseded contributor PR; replacement evidence is unhydrated and therefore not used as candidate_fix. |
| #68562 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented by the request-scoped fallback cleanup fix. |
| #69187 | keep_closed | skipped | fixed_by_candidate | Already closed and current main contains the relevant cleanup fixes. |
| #70402 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented on main. |
| #70464 | keep_closed | skipped | superseded | Already closed superseded source PR; no further mutation is allowed and the replacement ref is unhydrated evidence only. |
| #70554 | keep_closed | skipped | superseded | Already closed as superseded by a narrower shipped fix. |
| #72712 | keep_closed | skipped | canonical | Closed issue representing the current main canonical owner-gated cleanup path. |

## Needs Human

- none
