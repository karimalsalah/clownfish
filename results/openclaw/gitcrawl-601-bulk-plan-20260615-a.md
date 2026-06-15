---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-601-bulk-plan-20260615-a"
mode: "plan"
run_id: "27521523839"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27521523839"
head_sha: "c7fde105fe4b1bf849faf5ed130f10118614c64c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:58:15.016Z"
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

# gitcrawl-601-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27521523839](https://github.com/openclaw/clownfish/actions/runs/27521523839)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only classification completed from the hydrated preflight artifact. #67174 is security-sensitive and must be routed to central security handling. #87169 covers the same Teams split Graph tenant feature area but is not merge-ready because real behavior proof failed and review did not complete. No close, merge, fix, label, or comment mutation is planned.

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
| #67174 | route_security | planned | security_sensitive | Security-sensitive PRs are out of scope for Clownfish backlog cleanup and must be routed to central OpenClaw security handling without further mutation. |
| #87169 | keep_related | planned | related | #87169 belongs to the same split Teams Graph tenant work family, but failing proof and incomplete review block merge or fixed-by-candidate closeout. Because fix and merge are blocked by job frontmatter, keep it as a related open PR rather than closing or promoting it. |
| #87200 | route_security | planned | security_sensitive | #87200 is a security-sensitive linked context ref. Route it to central security handling as read-only context and do not let it block classification of #87169. |

## Needs Human

- none
