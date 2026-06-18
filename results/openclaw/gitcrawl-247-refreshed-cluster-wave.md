---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-247-refreshed-cluster-wave"
mode: "plan"
run_id: "27748373341"
workflow_run_id: "27748373341"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27748373341"
head_sha: "9806b5ae9d26b70b54504bfaa09dfefcb6f65e7b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-18T08:59:23.368Z"
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

# gitcrawl-247-refreshed-cluster-wave

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27748373341](https://github.com/openclaw/clownfish/actions/runs/27748373341)

Workflow conclusion: success

Worker result: planned

Canonical: #90941

## Summary

Read-only plan: #90941 remains the live canonical issue for the symlinked launcher sandbox setup script lookup failure. #90951 is related but tracks a distinct package-publishing/product-decision problem where sandbox setup scripts are not shipped in npm-package installs, so it should not be closed as a duplicate of #90941.

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
| #90941 | keep_canonical | planned | canonical | #90941 is open, hydrated, and best represents the symlinked launcher root cause for this cluster. |
| #90951 | keep_related | planned | related | #90951 is in the same doctor/sandbox setup area, but it tracks a different remaining root cause: published package contents and product behavior for package-only installs. It should stay open as related rather than be closed as a duplicate of #90941. |

## Needs Human

- none
