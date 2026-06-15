---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-403-bulk-plan-20260615-a"
mode: "plan"
run_id: "27526042151"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526042151"
head_sha: "c7ad8e870b6f3caec4c09cae355087e2dab5e58d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:31:02.382Z"
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

# gitcrawl-403-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526042151](https://github.com/openclaw/clownfish/actions/runs/27526042151)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode classification only. Both hydrated refs are marked security-sensitive by the preflight artifact and must be quarantined to central OpenClaw security handling; no close, label, merge, or fix action is planned. #73887 is already closed, so no closure action is emitted for it.

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
| #48940 | route_security | planned | security_sensitive | Security-sensitive PR is outside ProjectClownfish cleanup scope and should be routed to central OpenClaw security handling. |
| #73887 | route_security | planned | security_sensitive | Security-sensitive linked PR is already closed, but the item itself is still out of scope for ProjectClownfish triage and should remain quarantined to central security handling. |

## Needs Human

- none
