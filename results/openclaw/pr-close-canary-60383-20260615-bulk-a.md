---
repo: "openclaw/openclaw"
cluster_id: "pr-close-canary-60383-20260615-bulk-a"
mode: "execute"
run_id: "27545120420"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27545120420"
head_sha: "1a47711b53828d58a62d5798b80ee89f4bb84218"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-15T12:12:57.945Z"
canonical: "#72397"
canonical_issue: null
canonical_pr: "#72397"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-close-canary-60383-20260615-bulk-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27545120420](https://github.com/openclaw/clownfish/actions/runs/27545120420)

Workflow conclusion: failure

Worker result: planned

Canonical: #72397

## Summary

Preflight marks #60383 as security-sensitive, so the close-only canary is blocked for that PR and must be routed to central security handling instead of closed. #72397 remains the merged canonical context item.

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
| #60383 | route_security | planned | security_sensitive | Security-sensitive target must be quarantined instead of closed. |
| #72397 | keep_canonical | planned | canonical | Canonical context remains merged; no mutation needed. |

## Needs Human

- none
