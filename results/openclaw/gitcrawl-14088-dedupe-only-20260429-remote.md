---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14088-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27595847469"
workflow_run_id: "27595847469"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27595847469"
head_sha: "7a8b7ab269d4c8246a3837f1013f6d9715d17c5e"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-16T05:19:46.837Z"
canonical: "https://github.com/openclaw/openclaw/pull/51267"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/51267"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# gitcrawl-14088-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27595847469](https://github.com/openclaw/clownfish/actions/runs/27595847469)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/pull/51267

## Summary

Hydrated preflight shows the obsolete representative #42331 and the only listed open candidate #42361 both return live GitHub 404/unavailable. The malformed text-block crash family has a landed canonical fix in #51267 on main at 6b38714cb9afa59f57cea85bc5b4afa1a53c269f, and closed context refs are already resolved. No close/comment/label action is safe because there is no open hydrated target with target_updated_at.

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
| Needs human | 2 |

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
| #51267 | keep_canonical | skipped | canonical | Canonical fix is already merged and closed; no mutation is allowed or needed for this target. |
| #39331 | keep_closed | skipped | superseded | Closed context ref only; already resolved by the merged canonical PR. |
| #34980 | keep_closed | skipped | superseded | Closed historical contributor PR; no action target remains open. |
| #34979 | keep_closed | skipped | fixed_by_candidate | Closed context issue; already covered by the merged canonical fix. |
| #42331 | needs_human | blocked | needs_human | Live GitHub state is unavailable for the representative ref; maintainer or planner should drop or rehydrate the ref before any action. |
| #42361 | needs_human | blocked | needs_human | The only open candidate could not be hydrated from live GitHub; cannot safely classify or mutate beyond reporting the blocked decision. |

## Needs Human

- #42331: representative/canonical hint is unavailable on live GitHub (HTTP 404); planner should remove or rehydrate before using it as canonical evidence.
- #42361: only listed open candidate is unavailable on live GitHub (HTTP 404); need refreshed live state to decide whether it is independent, already closed, renamed, or inaccessible.
