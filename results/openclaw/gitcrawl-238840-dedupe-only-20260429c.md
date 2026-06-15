---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238840-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25103997625"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103997625"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.393Z"
canonical: "https://github.com/openclaw/openclaw/pull/72328"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72328"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238840-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103997625](https://github.com/openclaw/clownfish/actions/runs/25103997625)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72328

## Summary

Hydrated state shows #72328 is the merged canonical fix for the narrow agent-switch stale model selector bug. #43013 and #54724 are related but not safe closeouts because they carry distinct default-selector and broader catalog-hydration scope, while #46275 is already closed.

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
| #43013 | keep_related | planned | related | Keep open as related follow-up work; it is not a duplicate of the merged switch-remount fix. |
| #46275 | keep_closed | skipped | superseded | Historical closed candidate only; no mutation planned. |
| #54724 | keep_related | planned | related | Keep open as related broader follow-up; not a high-confidence duplicate or fixed-by-candidate closeout. |
| #72328 | keep_closed | skipped | canonical | Merged canonical fix path; already closed, so no mutation planned. |

## Needs Human

- none
