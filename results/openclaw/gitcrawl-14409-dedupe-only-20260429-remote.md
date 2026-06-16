---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14409-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27599300020"
workflow_run_id: "27599300020"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599300020"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:46:59.512Z"
canonical: "https://github.com/openclaw/openclaw/pull/81094"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/81094"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14409-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599300020](https://github.com/openclaw/clownfish/actions/runs/27599300020)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/81094

## Summary

All hydrated refs are already closed. The obsolete representative #46687 is historical context; the current canonical path is merged PR #81094, which fixed #69536 and passed the hydrated CI/review proof. No GitHub mutation is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #46687 | keep_closed | skipped | fixed_by_candidate | Closed context ref only; keep as historical evidence and do not mutate. |
| #61384 | keep_closed | skipped | fixed_by_candidate | Already closed; retain as fixed historical context for the merged canonical PR. |
| #69536 | keep_closed | skipped | fixed_by_candidate | No planned close/comment action because the candidate is already closed by the hydrated merged fix. |
| #81094 | keep_closed | skipped | canonical | Merged PR #81094 is the canonical path; merge/post-merge actions are disabled by the job and unnecessary because the PR is already merged. |

## Needs Human

- none
