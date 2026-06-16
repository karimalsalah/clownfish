---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2743-dedupe-only-20260429d"
mode: "autonomous"
run_id: "27595853441"
workflow_run_id: "27595853441"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27595853441"
head_sha: "7a8b7ab269d4c8246a3837f1013f6d9715d17c5e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T05:21:58.197Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2743-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27595853441](https://github.com/openclaw/clownfish/actions/runs/27595853441)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Routed the validator-identified security-sensitive live refs #40982 and #79997 to central OpenClaw security handling as exact-ref route_security actions. #41022 is already closed and remains historical evidence only, with no close mutation planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #40982 | route_security | planned | security_sensitive | Security-sensitive refs are outside ProjectClownfish dedupe cleanup and must be routed to central OpenClaw security handling. |
| #41022 | keep_closed | skipped | superseded | Already-closed refs must not receive close actions. The closed PR remains historical evidence only. |
| #79997 | route_security | planned | security_sensitive | Security-sensitive refs are outside ProjectClownfish dedupe cleanup and must be routed to central OpenClaw security handling. |

## Needs Human

- none
