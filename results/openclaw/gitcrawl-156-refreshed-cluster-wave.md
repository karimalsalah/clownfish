---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-156-refreshed-cluster-wave"
mode: "plan"
run_id: "27748373235"
workflow_run_id: "27748373235"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27748373235"
head_sha: "9806b5ae9d26b70b54504bfaa09dfefcb6f65e7b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-18T08:59:23.367Z"
canonical: "#81751"
canonical_issue: "#81751"
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

# gitcrawl-156-refreshed-cluster-wave

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27748373235](https://github.com/openclaw/clownfish/actions/runs/27748373235)

Workflow conclusion: success

Worker result: planned

Canonical: #81751

## Summary

Read-only plan classification for two hydrated open issue candidates. #81751 remains the canonical issue for the gateway-status false-positive root cause. #87199 is related LaunchAgent/gateway macOS work, but it reports a different user-visible failure and root-cause shape, so it should not be closed as a duplicate in this cluster.

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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #81751 | keep_canonical | planned | canonical | Best surviving hydrated canonical for the status false-positive root cause. |
| #87199 | keep_related | planned | related | Same macOS LaunchAgent/gateway service area, but distinct root cause and user-visible failure; duplicate closure would be unsafe. |

## Needs Human

- none
