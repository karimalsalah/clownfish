---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2639-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585131006"
workflow_run_id: "27585131006"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585131006"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:18:21.277Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2639-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585131006](https://github.com/openclaw/clownfish/actions/runs/27585131006)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Routed the exact security-sensitive live refs #25574 and #38295 to central security handling. Closed context refs are already closed and remain historical evidence only; no close, merge, or fix action is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #25574 | route_security | planned | security_sensitive | The deterministic validator requires #25574 to be quarantined with route_security, so no canonical keep action is safe for this target. |
| #38295 | route_security | planned | security_sensitive | Security-sensitive PRs are out of scope for ProjectClownfish mutation and must be routed to central OpenClaw security handling. |
| #19428 | keep_closed | skipped | related | Already closed; no mutation is valid. |
| #40404 | keep_closed | skipped | related | Already closed; no mutation is valid. |
| #55633 | keep_closed | skipped | related | Already closed; no mutation is valid. |

## Needs Human

- none
