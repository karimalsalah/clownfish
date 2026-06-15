---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-515-bulk-plan-20260615-a"
mode: "plan"
run_id: "27521476489"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27521476489"
head_sha: "c7fde105fe4b1bf849faf5ed130f10118614c64c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:58:14.999Z"
canonical: "#59528"
canonical_issue: "#59528"
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

# gitcrawl-515-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27521476489](https://github.com/openclaw/clownfish/actions/runs/27521476489)

Workflow conclusion: success

Worker result: planned

Canonical: #59528

## Summary

Plan-mode classification only. Keep #59528 as the open canonical bug report. Route #87696 to central security handling because the job explicitly flags it as a security-signal ref, without blocking the unrelated non-security canonical issue.

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
| #59528 | keep_canonical | planned | canonical | #59528 is the best live canonical report for the non-security bug family and should remain open. |
| #87696 | route_security | planned | security_sensitive | The job explicitly requires central security routing for this exact ref. |

## Needs Human

- none
