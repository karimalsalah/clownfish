---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238857-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104024390"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104024390"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.397Z"
canonical: "https://github.com/openclaw/openclaw/pull/67023"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/67023"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238857-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104024390](https://github.com/openclaw/clownfish/actions/runs/25104024390)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/67023

## Summary

Hydrated live state shows no open candidates remain. The original canonical hint #65654 is closed and non-actionable, while hydrated merged PR #67023 is the canonical fix path for the dreaming session leak reports that remain relevant. No GitHub mutations are planned because every target in the cluster is already closed.

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
| #65653 | keep_closed | skipped | fixed_by_candidate | Already closed in live hydrated state, so closure/comment/label mutations are invalid for this worker result. |
| #65654 | keep_closed | skipped | independent | The canonical hint is obsolete because #65654 is closed and does not contain actionable duplicate evidence. |
| #66358 | keep_closed | skipped | fixed_by_candidate | Already closed in live hydrated state and covered by the hydrated merged fix path #67023. |
| #67023 | keep_closed | skipped | canonical | This is the best hydrated canonical fix path, but it is already merged and closed. |
| #67611 | keep_closed | skipped | fixed_by_candidate | Already closed in live hydrated state; no further closeout is valid in this cluster run. |

## Needs Human

- none
