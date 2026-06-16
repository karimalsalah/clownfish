---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2739-dedupe-only-20260429d"
mode: "autonomous"
run_id: "27585130935"
workflow_run_id: "27585130935"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585130935"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:18:21.275Z"
canonical: "#40948"
canonical_issue: "#40948"
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

# gitcrawl-2739-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585130935](https://github.com/openclaw/clownfish/actions/runs/27585130935)

Workflow conclusion: success

Worker result: planned

Canonical: #40948

## Summary

Classified the hydrated cluster without planning mutations: #40948 remains the best open canonical issue for the session-recap rendering bug; #41013 is already closed and must not receive a close action; closed linked PRs stay historical evidence; security-sensitive linked #92498 is quarantined only for central handling.

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
| #40948 | keep_canonical | planned | canonical | #40948 is the only open non-security primary item and carries the remaining user-visible bug and follow-up discussion. |
| #41013 | keep_closed | skipped | superseded | Already-closed PRs must not receive close actions; retain it as historical superseded evidence for #40948. |
| #22142 | keep_closed | skipped | related | #22142 is useful historical related work but is already closed and does not replace the still-open #40948 follow-up. |
| #22461 | keep_closed | skipped | related | #22461 is closed historical related work and should not receive any mutation. |
| #92498 | route_security | planned | security_sensitive | Security-sensitive linked refs are out of scope for Clownfish cleanup and must be routed without blocking unrelated non-security classification. |

## Needs Human

- none
