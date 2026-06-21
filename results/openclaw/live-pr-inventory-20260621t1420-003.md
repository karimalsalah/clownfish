---
repo: "openclaw/openclaw"
cluster_id: "live-pr-inventory-20260621T1420-003"
mode: "plan"
run_id: "27907254686"
workflow_run_id: "27907254686"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27907254686"
head_sha: "39bb8be9042ea4510e853fb488dbe722ea7d91d5"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-21T14:24:32.285Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 14
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# live-pr-inventory-20260621T1420-003

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27907254686](https://github.com/openclaw/clownfish/actions/runs/27907254686)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only classification for the PR remediation shard. No merge_candidate is safe because none of the open PRs has complete merge preflight with passed Codex /review and resolved review evidence. No cluster-scoped fix artifact is emitted because the open PRs are unrelated independent repairs and no single narrow executable artifact covers the cluster.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 14 |
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
| #92236 | keep_independent | planned | independent | Retain as an independent open PR; merge is blocked by missing complete merge preflight, and there is no narrow cluster-scoped fix artifact for this unrelated PR. |
| #92114 | keep_independent | planned | independent | Retain as an independent open PR; merge is blocked by missing complete merge preflight. |
| #90218 | keep_independent | planned | independent | Retain as an independent open PR; merge is blocked by missing complete merge preflight, and close/supersede actions are blocked by job frontmatter. |
| #90182 | keep_independent | planned | independent | Retain as an independent draft PR; no merge recommendation is safe and no bounded single-cluster fix artifact covers this unrelated repair. |
| #90160 | keep_independent | planned | independent | Retain as an independent draft PR; no merge recommendation is safe and no bounded single-cluster fix artifact covers this unrelated repair. |
| #92102 | keep_related | planned | related | Keep related to #92114; closure is disabled and the candidate PR is not merge-ready under the required preflight. |
| #92764 | keep_related | planned | related | Keep as related context, not a duplicate; it has a different user-visible progress surface from #92236. |
| #89465 | keep_closed | skipped |  | Closed context ref only; no closure action is valid. |
| #89489 | keep_closed | skipped |  | Closed context ref only; no closure action is valid. |
| #89505 | keep_closed | skipped |  | Closed context ref only; no closure action is valid. |
| #89530 | keep_closed | skipped |  | Closed context ref only; no closure action is valid. |
| #92266 | keep_closed | skipped |  | Closed context ref only; no closure action is valid. |
| #93268 | keep_closed | skipped |  | Closed context ref only; no closure action is valid. |
| #93287 | keep_closed | skipped |  | Closed context ref only; no closure action is valid. |

## Needs Human

- none
