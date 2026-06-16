---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-5533-dedupe-only-20260429d"
mode: "autonomous"
run_id: "27585131063"
workflow_run_id: "27585131063"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585131063"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:18:21.278Z"
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

# gitcrawl-5533-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585131063](https://github.com/openclaw/clownfish/actions/runs/27585131063)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Routed the exact hydrated refs #43797 and #43835 as security-sensitive items. No GitHub mutation, closure, merge, label, comment, or fix PR action is planned for this cluster.

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
| #43797 | route_security | planned | security_sensitive | #43797 is the exact issue ref identified by deterministic validation as security-sensitive and must be routed instead of kept as canonical. |
| #43835 | route_security | planned | security_sensitive | #43835 is the exact security-sensitive PR ref identified by the preflight artifact and must be quarantined from ProjectClownfish mutation. |

## Needs Human

- none
