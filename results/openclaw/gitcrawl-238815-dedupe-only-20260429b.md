---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238815-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25103913422"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103913422"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.379Z"
canonical: "https://github.com/openclaw/openclaw/pull/45114"
canonical_issue: "https://github.com/openclaw/openclaw/issues/45020"
canonical_pr: "https://github.com/openclaw/openclaw/pull/45114"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238815-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103913422](https://github.com/openclaw/clownfish/actions/runs/25103913422)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/45114

## Summary

Hydrated state shows the original representative #45536 is already closed. The surviving line-clamp canonical path is open issue #45020 plus open PR #45114. The exec-approval modal refs in this cluster are a separate already-closed subfamily covered by current main/#67082, so no close/comment/label mutation is planned.

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
| #45020 | keep_canonical | planned | canonical | #45020 is the open canonical issue for the line-clamp bug; keep it open until the canonical PR path lands. |
| #45114 | keep_canonical | planned | canonical | #45114 is the best live canonical PR for the line-clamp family, but this dedupe-only job cannot merge or repair it. |
| #45536 | keep_closed | skipped | duplicate | Already-closed duplicate of the surviving canonical PR #45114; no mutation is needed or allowed for this target. |
| #50980 | keep_closed | skipped | superseded | Closed related exec-approval subfamily PR, superseded by the already-merged/current-main path represented by #67082. |
| #60031 | keep_closed | skipped | superseded | Closed related exec-approval command-scroll PR, superseded by the already-merged/current-main path represented by #67082. |
| #66658 | keep_closed | skipped | superseded | Closed related exec-approval modal PR, superseded by the already-merged/current-main path represented by #67082. |

## Needs Human

- none
