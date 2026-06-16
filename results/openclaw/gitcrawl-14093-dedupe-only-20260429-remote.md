---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14093-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585129849"
workflow_run_id: "27585129849"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585129849"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:18:21.257Z"
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

# gitcrawl-14093-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585129849](https://github.com/openclaw/clownfish/actions/runs/27585129849)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Planned security quarantine only for the hydrated Feishu WebSocket proxy refs. No close, label, comment, merge, or fix action is planned because the live artifact marks #65799, #65802, and linked PR #90324 as security-sensitive, and #65802 is already closed.

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
| #65799 | route_security | planned | security_sensitive | Security-sensitive open issue; quarantine exact item and avoid ProjectClownfish mutation. |
| #65802 | route_security | planned | security_sensitive | Security-sensitive historical candidate; route exact item only and do not emit a close action because it is already closed. |
| #90324 | route_security | planned | security_sensitive | Security-sensitive open linked PR; quarantine exact item and avoid merge/fix/close actions. |

## Needs Human

- none
