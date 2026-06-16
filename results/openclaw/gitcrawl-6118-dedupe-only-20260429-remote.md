---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-6118-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27599301767"
workflow_run_id: "27599301767"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599301767"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:46:59.539Z"
canonical: "https://github.com/openclaw/openclaw/pull/93020"
canonical_issue: "https://github.com/openclaw/openclaw/issues/56096"
canonical_pr: "https://github.com/openclaw/openclaw/pull/93020"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-6118-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599301767](https://github.com/openclaw/clownfish/actions/runs/27599301767)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/93020

## Summary

No GitHub mutations are planned. The hydrated preflight shows both originally open candidates (#45759 and #56096) are already closed, with no security-sensitive refs. The live canonical representative drifted: #45759 is closed, #56096 is also closed, and the hydrated linked PR #55886 records that the validated replacement fix landed via PR #93020, but #93020 itself is not hydrated in this artifact, so it is used as evidence only rather than an action-field candidate_fix.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #45759 | keep_closed | skipped | duplicate | Already closed before this run; no action allowed or needed. |
| #56096 | keep_closed | skipped | fixed_by_candidate | Already closed before this run; no action allowed or needed. |
| #39536 | keep_closed | skipped | related | Closed context ref; evidence only. |
| #48892 | keep_closed | skipped | independent | Closed independent context ref; no cluster action. |
| #55811 | keep_closed | skipped | related | Closed context ref; evidence only. |
| #45836 | keep_closed | skipped | superseded | Closed historical PR; no close, merge, or fix action is allowed in this job. |
| #55886 | keep_closed | skipped | superseded | Already superseded and closed before this run. |
| #48908 | keep_closed | skipped | independent | Closed merged independent PR; evidence only. |

## Needs Human

- none
