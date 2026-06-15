---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-315-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520911644"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520911644"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:56:52.545Z"
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

# gitcrawl-315-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520911644](https://github.com/openclaw/clownfish/actions/runs/27520911644)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Read-only plan produced from the provided cluster preflight artifact. All three open PRs are routed to central OpenClaw security handling: #80922 and #84172 are explicit job security-signal refs, and #84118 is marked security_sensitive by the live preflight artifact. No GitHub mutations are planned.

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
| #80922 | route_security | planned | security_sensitive | Explicit security-signal ref in the job; route to central OpenClaw security handling. |
| #84118 | route_security | planned | security_sensitive | Hydrated live preflight marks this PR security-sensitive; central security handling owns further triage. |
| #84172 | route_security | planned | security_sensitive | Explicit security-signal ref in the job; route to central OpenClaw security handling. |

## Needs Human

- none
