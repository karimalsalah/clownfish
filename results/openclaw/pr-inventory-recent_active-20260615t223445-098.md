---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-recent_active-20260615T223445-098"
mode: "plan"
run_id: "27580942551-1-97"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.591Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-inventory-recent_active-20260615T223445-098

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. No shared canonical was selected because the job is an independent PR inventory shard. No GitHub mutations, close actions, merge actions, or fix artifacts are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #93290 | keep_closed | skipped | superseded | Already closed in live preflight state; historical context only. |
| #90151 | keep_independent | planned | independent | Standalone docs PR with no duplicate/supersession evidence in this cluster. |
| #92196 | keep_independent | planned | independent | Useful independent candidate; failing checks and merge being blocked limit this run to classification. |
| #93392 | keep_independent | planned | independent | Independent candidate with useful scoped code, not safe or allowed to merge/close in this run. |
| #91408 | keep_independent | planned | independent | Large feature PR with author/maintainer follow-up and failing checks; independent of the rest of this inventory shard. |
| #92491 | keep_independent | planned | independent | Independent candidate awaiting normal review/author path, not a closure target. |
| #93098 | keep_independent | planned | independent | Independent useful PR with failing check/author-follow-up signal; keep out of closeout automation. |
| #91714 | keep_independent | planned | independent | Independent candidate requiring normal maintainer/author workflow, not dedupe or closure. |
| #93402 | keep_independent | planned | independent | Independent gateway PR with unstable/failing checks; keep for maintainer review. |

## Needs Human

- none
