---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238876-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104053176"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104053176"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.403Z"
canonical: "https://github.com/openclaw/openclaw/pull/41880"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41860"
canonical_pr: "https://github.com/openclaw/openclaw/pull/41880"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238876-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104053176](https://github.com/openclaw/clownfish/actions/runs/25104053176)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/41880

## Summary

Classified the hydrated Feishu underscore-URL cluster without planning any direct GitHub mutation. #41880 remains the canonical focused PR for the original bare-URL reproduction; #41860 remains the linked tracking issue; #68514 is related broader URL-boundary work with unresolved review feedback; #41946 is already closed and must not receive another close action.

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
| #41860 | keep_canonical | planned | canonical | Keep the linked tracking issue open; the bug is not fixed on current main and no post-merge closeout is allowed in this job. |
| #41880 | keep_canonical | planned | canonical | The representative is still the best focused canonical PR, but this dedupe-only job blocks merge and fix work. |
| #41946 | keep_closed | skipped | superseded | Already closed as superseded; no additional mutation is valid. |
| #68514 | keep_related | planned | related | Keep open as related broader work; it is not a high-confidence duplicate/superseded close target while useful code and unresolved review feedback remain. |

## Needs Human

- none
