---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-63-fresh-plan-ramp"
mode: "plan"
run_id: "27665577567-1-3"
workflow_run_id: "27665577567"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27665577567"
head_sha: "4c098bd9122cabae12add972ef61ec0d2f47df96"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T04:27:39.693Z"
canonical: "#84012"
canonical_issue: "#84012"
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

# gitcrawl-63-fresh-plan-ramp

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27665577567](https://github.com/openclaw/clownfish/actions/runs/27665577567)

Workflow conclusion: success

Worker result: planned

Canonical: #84012

## Summary

Plan-only classification completed from the hydrated preflight artifact. #84012 remains the best open canonical for the status CLI hang family. #84001 and #84698 are related status-hang reports with platform/version diagnostics that should stay open rather than be closed as duplicates. #85002 is a related CLI/gateway hang report with a different config-loading/high-CPU scope and should be split from the status canonical rather than forced into the duplicate family.

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
| #84012 | keep_canonical | planned | canonical | #84012 is the representative and best surviving canonical for the default status CLI hang family. |
| #84001 | keep_related | planned | related | Same symptom family as #84012, but unique Windows and status --all diagnostics make it related rather than a safe duplicate closeout. |
| #84698 | keep_related | planned | related | Related to the canonical status hang, but not a safe duplicate because it preserves distinct regression and Linux diagnostic evidence. |
| #85002 | keep_related | planned | related | Related CLI/gateway hang area, but likely a separate config-loading/high-CPU subcluster rather than a duplicate of the status CLI canonical. |

## Needs Human

- none
