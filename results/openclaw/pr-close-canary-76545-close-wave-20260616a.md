---
repo: "openclaw/openclaw"
cluster_id: "pr-close-canary-76545-close-wave-20260616a"
mode: "execute"
run_id: "27582173703"
workflow_run_id: "27582173703"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27582173703"
head_sha: "628bd0577548681836c70f54751ba86a83a56eba"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:06:37.227Z"
canonical: "#90194"
canonical_issue: null
canonical_pr: "#90194"
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-close-canary-76545-close-wave-20260616a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27582173703](https://github.com/openclaw/clownfish/actions/runs/27582173703)

Workflow conclusion: success

Worker result: planned

Canonical: #90194

## Summary

Close-only canary classification: #76545 remains open and is superseded by the surviving open canonical PR #90194. No merge, fix, or PR creation is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| #76545 | close_superseded | executed | superseded | already closed with matching projectclownfish comment |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #76545 | close_superseded | planned | superseded | Both hydrated PRs cover the same cron session reaper root cause; the job explicitly authorizes close-only superseded cleanup when #76545 and #90194 remain open. |

## Needs Human

- none
