---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-290-fresh-plan-ramp"
mode: "plan"
run_id: "27665577567-1-26"
workflow_run_id: "27665577567"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27665577567"
head_sha: "4c098bd9122cabae12add972ef61ec0d2f47df96"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T04:27:39.692Z"
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

# gitcrawl-290-fresh-plan-ramp

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27665577567](https://github.com/openclaw/clownfish/actions/runs/27665577567)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only classification: #77344 is already closed and should receive no close action. #77574 is related to the clawdock-dashboard area but describes a different root cause, so it should remain open and should not replace #77344 as the live canonical for the published-port bug.

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
| #77344 | keep_closed | skipped | canonical | Already closed in hydrated live state; keep as historical canonical evidence only. |
| #77574 | keep_related | planned | related | Same clawdock-dashboard area, but not the same root cause or duplicate family; do not promote it as the live canonical for #77344's published-port bug. |

## Needs Human

- none
