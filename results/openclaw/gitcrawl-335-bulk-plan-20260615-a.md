---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-335-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520926178"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520926178"
head_sha: "33cef557e55ce52eac8e0a2528e6417f8a9b826a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:56:52.554Z"
canonical: null
canonical_issue: null
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

# gitcrawl-335-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520926178](https://github.com/openclaw/clownfish/actions/runs/27520926178)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode classification only. Both listed open candidates are security-sensitive or security-signal items involving pre-auth device-signature CPU DoS / gateway availability, so they are routed to central OpenClaw security handling. No close, label, comment, merge, or fix action is planned.

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
| #77492 | route_security | planned | security_sensitive | The PR itself is a security-boundary/availability fix for a pre-auth DoS path, and the job explicitly marks it as a security-signal ref requiring quarantine. |
| #77979 | route_security | planned | security_sensitive | The issue is an open security-sensitive report about unauthenticated pre-auth CPU DoS and must be routed to central OpenClaw security handling rather than backlog cleanup. |

## Needs Human

- none
