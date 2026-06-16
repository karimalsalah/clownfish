---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3592-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585130378"
workflow_run_id: "27585130378"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585130378"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:18:21.265Z"
canonical: null
canonical_issue: null
canonical_pr: "#80169"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-3592-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585130378](https://github.com/openclaw/clownfish/actions/runs/27585130378)

Workflow conclusion: success

Worker result: planned

Canonical: #80169

## Summary

The original representative #9132 is already closed as implemented by merged PR #80169. The only job-listed open candidate, #51184, is not a duplicate of #9132 because it tracks remaining CLI/TUI /status and statusline label rendering work, while #9132 covered the Control UI Sessions table lifecycle/status badges. No close, merge, label, or fix action is planned.

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
| #9132 | keep_closed | skipped | fixed_by_candidate | Already closed items must not receive closure actions. |
| #51184 | keep_related | planned | related | Related session-state UX work, but not the same root cause or same completed Control UI status-table scope as #9132/#80169. |

## Needs Human

- none
