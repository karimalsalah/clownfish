---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3294-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585130971"
workflow_run_id: "27585130971"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585130971"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:18:21.276Z"
canonical: "#43455"
canonical_issue: "#43455"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-3294-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585130971](https://github.com/openclaw/clownfish/actions/runs/27585130971)

Workflow conclusion: success

Worker result: planned

Canonical: #43455

## Summary

Planned non-mutating classification only. The closed representative #58646 is historical context, #43455 is the current surviving open canonical for the Browserbase session/API lifecycle problem, #67728 is already closed as fixed on main, and security-sensitive linked PR #83306 must be routed to central OpenClaw security handling without closing or merging anything in this cluster.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #43455 | keep_canonical | planned | canonical | Keep #43455 as the current open canonical issue for the Browserbase session API problem; no close action is safe or appropriate. |
| #58646 | keep_closed | skipped | related | Closed representative remains historical evidence only and must not receive a close action. |
| #67728 | keep_closed | skipped | related | Already-closed related issue; no closure action is valid. |
| #83306 | route_security | planned | security_sensitive | Route only #83306 to central OpenClaw security handling; continue non-security classification without treating it as a closeable candidate fix. |

## Needs Human

- none
