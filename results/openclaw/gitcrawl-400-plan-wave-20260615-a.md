---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-400-plan-wave-20260615-a"
mode: "plan"
run_id: "27521396464"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27521396464"
head_sha: "c7fde105fe4b1bf849faf5ed130f10118614c64c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:58:14.891Z"
canonical: "#91772"
canonical_issue: "#91772"
canonical_pr: "#91786"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-400-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27521396464](https://github.com/openclaw/clownfish/actions/runs/27521396464)

Workflow conclusion: success

Worker result: planned

Canonical: #91772

## Summary

#91772 remains the live canonical issue for the managed npm-root EOVERRIDE root cause. #91786 is a related open PR that directly attempts to fix #91772, but this plan job blocks merge/fix actions and the PR still lacks merge-ready preflight, so it should remain open for maintainer review rather than be closed or merged by this cluster.

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
| #91772 | keep_canonical | planned | canonical | Best surviving canonical report for the single root cause represented by the cluster. |
| #91786 | keep_related | planned | related | This PR is the apparent fix path for the canonical issue, but merge/fix actions are outside this job and merge readiness is not fully proven. |

## Needs Human

- none
