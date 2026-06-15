---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238892-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104089774"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104089774"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.414Z"
canonical: "https://github.com/openclaw/openclaw/issues/50248"
canonical_issue: "https://github.com/openclaw/openclaw/issues/50248"
canonical_pr: "https://github.com/openclaw/openclaw/pull/69954"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238892-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104089774](https://github.com/openclaw/clownfish/actions/runs/25104089774)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/50248

## Summary

Kept #50248 as the live canonical issue for the sessions cleanup --fix-missing stale sessionFile safety bug. No open duplicate is safe to close: #63897 is already closed, #46369 is a distinct cron.remove cleanup bug, #73471 is a distinct doctor orphan-archive bug, and #69954 remains the focused but not-yet-merge-ready implementation PR for #50248.

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
| #50248 | keep_canonical | planned | canonical | Best live canonical issue for the main cluster root cause. |
| #69954 | keep_canonical | planned | canonical | Canonical implementation path for #50248, but not merge-ready because an actionable bot review finding remains unresolved and this dedupe-only job cannot repair or merge it. |
| #63897 | keep_closed | skipped | duplicate | Historical duplicate of #50248, already closed before this worker run. |
| #46369 | keep_related | planned | related | Same session/cron maintenance area, but a different root cause and remediation path from #50248; keep open as a related subcluster. |
| #46506 | keep_related | planned | related | Useful but not merge-ready related PR for the separate #46369 cron.remove cleanup bug. |
| #73471 | keep_related | planned | related | Related session integrity/orphan-classification family, but distinct user-visible behavior and owner code path from #50248. |

## Needs Human

- none
