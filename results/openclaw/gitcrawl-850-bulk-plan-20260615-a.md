---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-850-bulk-plan-20260615-a"
mode: "plan"
run_id: "27526180581"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526180581"
head_sha: "32e9de066550832a904e28c62eae1c4e36721a2b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:35:54.333Z"
canonical: null
canonical_issue: "#74138"
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

# gitcrawl-850-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526180581](https://github.com/openclaw/clownfish/actions/runs/27526180581)

Workflow conclusion: success

Worker result: planned

Canonical: #74138

## Summary

Read-only plan: #74138 is already closed and must not receive a close action. #74223 is open but is explicitly listed by the job as a security-signal ref, so it is routed to central security handling instead of being merged, closed, or used as a normal fix candidate.

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
| #74138 | keep_closed | skipped | canonical | The representative issue was the local canonical hint, but live hydrated state shows it is already closed. Keep it as historical canonical context only. |
| #74223 | route_security | planned | security_sensitive | The job explicitly scopes #74223 as a security-signal ref. Route only this item to central OpenClaw security handling and do not mutate it through Clownfish backlog cleanup. |

## Needs Human

- none
