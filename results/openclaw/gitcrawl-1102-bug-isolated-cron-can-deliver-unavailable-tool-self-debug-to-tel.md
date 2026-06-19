---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1102-bug-isolated-cron-can-deliver-unavailable-tool-self-debug-to-tel"
mode: "plan"
run_id: "27801265980-1-1"
workflow_run_id: "27801265980"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27801265980"
head_sha: "3478e0a5cfdb7b026708259822cc80b242eb0e10"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T02:20:30.618Z"
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

# gitcrawl-1102-bug-isolated-cron-can-deliver-unavailable-tool-self-debug-to-tel

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27801265980](https://github.com/openclaw/clownfish/actions/runs/27801265980)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Both actionable open candidates are explicitly marked security-sensitive in the preflight artifact, so this read-only plan routes only those exact refs to central OpenClaw security handling. No canonical issue, duplicate closeout, merge, or fix artifact is safe or allowed for this cluster in plan mode.

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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #46548 | route_security | planned | security_sensitive | Security-sensitive hydrated item is out of scope for ProjectClownfish cleanup; route only this ref to central OpenClaw security handling. |
| #93251 | route_security | planned | security_sensitive | Security-sensitive hydrated item is out of scope for ProjectClownfish cleanup; route only this ref to central OpenClaw security handling. |

## Needs Human

- none
