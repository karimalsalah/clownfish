---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2084-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27590154117"
workflow_run_id: "27590154117"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27590154117"
head_sha: "207fe2e2134a14e5532e7b8b0d17a01bba81af38"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T02:36:05.563Z"
canonical: "https://github.com/openclaw/openclaw/issues/49740"
canonical_issue: "https://github.com/openclaw/openclaw/issues/49740"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2084-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27590154117](https://github.com/openclaw/clownfish/actions/runs/27590154117)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/49740

## Summary

Hydrated state makes #49740 the current open canonical issue for the remaining per-job recurring cron retry request. #38069, the other original open candidate, is already closed as a duplicate of #49740, so there are no safe close/comment/label mutations to plan in this dedupe-only job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #49740 | keep_canonical | planned | canonical | Representative #13609 is closed and covered by existing global retry/backoff behavior; #49740 is the live canonical thread for the remaining per-job recurring retry feature. |
| #38069 | keep_closed | skipped | duplicate | Already closed duplicate; no mutation is valid. |

## Needs Human

- none
