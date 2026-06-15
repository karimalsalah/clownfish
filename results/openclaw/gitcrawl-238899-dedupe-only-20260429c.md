---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238899-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104105976"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104105976"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.417Z"
canonical: "https://github.com/openclaw/openclaw/pull/66225"
canonical_issue: "https://github.com/openclaw/openclaw/issues/65867"
canonical_pr: "https://github.com/openclaw/openclaw/pull/66225"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238899-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104105976](https://github.com/openclaw/clownfish/actions/runs/25104105976)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/66225

## Summary

Hydrated state supports keeping #66225 as the current narrow canonical PR for the Gemini <final/> self-closing and attributed final-tag leak. No close, label, merge, or fix mutations are planned: #65867 should stay open until #66225 lands or is replaced, #48593 remains a related overlapping PR with unresolved review/check blockers, and #41494 remains the broader Gemini plain-text reasoning leak tracker.

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
| #66225 | keep_canonical | planned | canonical | Current canonical narrow PR, but not merge-ready or merge-allowed in this job. |
| #65867 | keep_related | planned | fixed_by_candidate | Covered by #66225 but not safe to close before the candidate fix lands or is otherwise finalized. |
| #48593 | keep_related | planned | related | Do not close a useful contributor PR while overlap with #66225 still needs maintainer review. |
| #41494 | keep_related | planned | related | Related follow-up tracker, not a duplicate of the narrow final-tag cluster. |

## Needs Human

- none
