---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-393-bulk-plan-20260615-a"
mode: "plan"
run_id: "27521388861"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27521388861"
head_sha: "c7fde105fe4b1bf849faf5ed130f10118614c64c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:58:14.859Z"
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

# gitcrawl-393-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27521388861](https://github.com/openclaw/clownfish/actions/runs/27521388861)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Both open refs are routed out of ProjectClownfish mutation. #39680 is marked security-sensitive in the hydrated preflight artifact, and #85166 is explicitly listed by the job as a security-signal ref requiring route_security. No duplicate, closure, merge, or fix action is planned.

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
| #39680 | route_security | planned | security_sensitive | OpenClaw security-policy routing applies to this exact item; ProjectClownfish should not close, label, comment on, or fix it. |
| #85166 | route_security | planned | security_sensitive | The job explicitly requires route_security for this PR; merge and close actions are blocked, and fix/raise_pr are not allowed in this plan job. |

## Needs Human

- none
