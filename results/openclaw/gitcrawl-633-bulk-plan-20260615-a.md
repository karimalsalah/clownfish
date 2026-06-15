---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-633-bulk-plan-20260615-a"
mode: "plan"
run_id: "27521532951"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27521532951"
head_sha: "c7fde105fe4b1bf849faf5ed130f10118614c64c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:58:15.025Z"
canonical: "#72111"
canonical_issue: "#72111"
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

# gitcrawl-633-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27521532951](https://github.com/openclaw/clownfish/actions/runs/27521532951)

Workflow conclusion: success

Worker result: planned

Canonical: #72111

## Summary

Plan-mode classification only. #72111 remains the open canonical issue for the mixed command+url MCP transport timeout. #72515 is an open PR linked to #72111, but the job explicitly marks it as a security-signal ref that must be routed rather than handled by Clownfish.

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
| #72111 | keep_canonical | planned | canonical | Keep #72111 as the canonical open issue because it is the live non-security report for the root cause and the only hydrated open issue in the cluster. |
| #72515 | route_security | planned | security_sensitive | The job explicitly marks #72515 as a security-signal ref requiring central security routing, so Clownfish should not close, merge, label, comment on, or repair this PR. |

## Needs Human

- none
