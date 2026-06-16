---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-maintainer_owned-20260615T223445-008"
mode: "plan"
run_id: "27580942551-1-7"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "needs_human"
published_at: "2026-06-16T19:01:33.366Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# pr-inventory-maintainer_owned-20260615T223445-008

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: needs_human

Canonical: unknown

## Summary

Plan-mode PR inventory classification could not safely classify or plan close actions because the cluster preflight artifact has unavailable live state for every listed ref after GitHub API rate limits. No mutations are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #87927 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |
| #87958 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |
| #88142 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |
| #88175 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |
| #88181 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |
| #88212 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |
| #93118 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |
| #88296 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |
| #88300 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |
| #88311 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |
| #88361 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |
| #88379 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |
| #88384 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |
| #93178 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |
| #89972 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |
| #88750 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |
| #93181 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |
| #93174 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |
| #70596 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |
| #80426 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |
| #75025 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |
| #74068 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |
| #83169 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |
| #24661 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |
| #39046 | needs_human | blocked | needs_human | Live PR state is unavailable, so conservative inventory classification and closure planning are blocked. |

## Needs Human

- All 25 listed refs require a refreshed preflight artifact with live kind, state, and updated_at before inventory classification or any close-style planned action can be emitted.
