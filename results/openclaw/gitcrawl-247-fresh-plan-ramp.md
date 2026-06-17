---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-247-fresh-plan-ramp"
mode: "plan"
run_id: "27665577567-1-21"
workflow_run_id: "27665577567"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27665577567"
head_sha: "4c098bd9122cabae12add972ef61ec0d2f47df96"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T04:27:39.690Z"
canonical: "#90941"
canonical_issue: "#90941"
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

# gitcrawl-247-fresh-plan-ramp

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27665577567](https://github.com/openclaw/clownfish/actions/runs/27665577567)

Workflow conclusion: success

Worker result: planned

Canonical: #90941

## Summary

Classified #90941 as the live canonical issue for the symlinked launcher sandbox setup lookup failure. Classified #90951 as related but not a duplicate because it reports a separate published-package packaging/product gap after the symlink fix path, so no closure is recommended in this plan.

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
| #90941 | keep_canonical | planned | canonical | #90941 remains the best canonical for the symlinked launcher root cause. |
| #90951 | keep_related | planned | related | #90951 is in the same doctor sandbox-image symptom family, but its root cause is package contents and product behavior for published installs, not symlink resolution. |

## Needs Human

- none
