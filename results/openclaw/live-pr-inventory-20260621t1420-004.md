---
repo: "openclaw/openclaw"
cluster_id: "live-pr-inventory-20260621T1420-004"
mode: "plan"
run_id: "27907254723"
workflow_run_id: "27907254723"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27907254723"
head_sha: "39bb8be9042ea4510e853fb488dbe722ea7d91d5"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-21T14:24:32.291Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# live-pr-inventory-20260621T1420-004

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27907254723](https://github.com/openclaw/clownfish/actions/runs/27907254723)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only classification: no merge recommendation has complete merge preflight, and no single narrow fix artifact can cover these independent PRs. Keep the listed PRs open for maintainer/fix-lane follow-up; no GitHub mutation is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
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
| #72445 | keep_closed | skipped | related | Closed historical context only; closure and merge actions are invalid for already-closed refs. |
| #83026 | keep_closed | skipped | related | Closed historical context only; no action planned. |
| #87199 | keep_related | planned | related | Related issue with a linked candidate PR, but no closeout is allowed or merge-ready in this plan. |
| #89967 | keep_related | planned | related | Useful focused contributor PR, but merge recommendation is blocked by missing complete merge preflight. |
| #90063 | keep_related | planned | related | Retain as an independent ready-for-maintainer PR; merge is not safe to recommend without merge preflight. |
| #90099 | keep_related | planned | related | Draft uneditable branch without complete merge preflight; retain rather than emit merge or combined fix artifact. |
| #90130 | keep_related | planned | related | Related manifest/provider hardening shard; no mutation or merge path is planned in this cluster. |
| #90135 | keep_related | planned | related | Related shard retained for separate maintainer/fix review. |
| #90136 | keep_related | planned | related | Retain as a separate plugin activation-planning guard PR; not merge-ready and not safely combinable into one fix artifact. |
| #90150 | keep_related | planned | related | Retain as a separate doctor allowlist manifest guard PR; merge/fix artifact gates are not met. |
| #90518 | keep_related | planned | related | Keep as related follow-up context, not a duplicate or close target. |
| #90923 | keep_related | planned | related | Keep related and avoid merging or combining broad external-APFS work into this PR remediation shard. |

## Needs Human

- none
