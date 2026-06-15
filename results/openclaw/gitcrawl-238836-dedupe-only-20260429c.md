---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238836-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25103987778"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103987778"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.391Z"
canonical: "https://github.com/openclaw/openclaw/pull/40423"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/40423"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238836-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103987778](https://github.com/openclaw/clownfish/actions/runs/25103987778)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/40423

## Summary

Representative #40423 remains the broad canonical PR for the runtime marker family. No close actions are safe: #72980 and #73349 are useful overlapping exec-focused PRs with different scope/semantics, #73349 has failing checks, and bot review comments remain unresolved. #68859 is already closed and should not receive a closure action.

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
| #40423 | keep_canonical | planned | canonical | Open broad canonical PR remains useful but cannot be merged or used to close related items in this dedupe-only job. |
| #66705 | keep_related | planned | related | Same feature family as #40423, but it is the open exec-specific tracking issue and should remain open until a fix lands. |
| #68859 | keep_closed | skipped | superseded | Already closed; record as historical superseded context only. |
| #72980 | keep_related | planned | related | Useful focused PR with distinct scope and semantics; keep open as related rather than closing as superseded. |
| #73349 | keep_related | planned | related | Focused exec candidate remains useful but failing checks and unresolved bot comments block any fixed-by-candidate closeout or merge recommendation. |

## Needs Human

- none
