---
repo: "openclaw/openclaw"
cluster_id: "pr-close-canary-41284-20260615-volume-a"
mode: "execute"
run_id: "27601172439"
workflow_run_id: "27601172439"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27601172439"
head_sha: "bbe4babf426d0186aca08f77e82b722e588a584c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T07:26:59.563Z"
canonical: "#22773"
canonical_issue: null
canonical_pr: "#22773"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-close-canary-41284-20260615-volume-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27601172439](https://github.com/openclaw/clownfish/actions/runs/27601172439)

Workflow conclusion: success

Worker result: planned

Canonical: #22773

## Summary

Hydrated state shows #41284 remains open and #22773 is merged on main. Plan one close_fixed_by_candidate action for #41284, preserving @fetzig attribution and naming #22773 as the landed fix path; #22773 itself remains historical closed canonical context only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 1 |
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
| #41284 | close_fixed_by_candidate | executed | fixed_by_candidate | already closed with matching projectclownfish comment |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #22773 | keep_closed | skipped | canonical | #22773 is the merged canonical fix and must not receive a close mutation. |
| #41284 | close_fixed_by_candidate | planned | fixed_by_candidate | #41284 is an open contributor PR for the same iOS Xcode team identifier failure already fixed by merged #22773; the useful context is preserved through attribution rather than merging the obsolete branch. |

## Needs Human

- none
