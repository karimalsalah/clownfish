---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-538-bulk-plan-20260615-a"
mode: "plan"
run_id: "27521480319"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27521480319"
head_sha: "c7fde105fe4b1bf849faf5ed130f10118614c64c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:58:15.001Z"
canonical: "#91744"
canonical_issue: "#91744"
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

# gitcrawl-538-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27521480319](https://github.com/openclaw/clownfish/actions/runs/27521480319)

Workflow conclusion: success

Worker result: planned

Canonical: #91744

## Summary

Plan-only classification: keep #91744 as the live canonical bug, route #91803 to central security handling because the job explicitly marks it as a security-signal ref, and treat linked #87089 as already-closed historical context only.

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
| #91744 | keep_canonical | planned | canonical | #91744 remains the best live canonical for the non-security bug path. |
| #91803 | route_security | planned | security_sensitive | Exact security-signal ref is quarantined to central OpenClaw security handling without blocking classification of #91744. |
| #87089 | keep_closed | skipped |  | Already-closed linked context item included only to document that it should not be mutated. |

## Needs Human

- none
