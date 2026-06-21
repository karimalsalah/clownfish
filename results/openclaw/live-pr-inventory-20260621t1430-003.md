---
repo: "openclaw/openclaw"
cluster_id: "live-pr-inventory-20260621T1430-003"
mode: "plan"
run_id: "27907383719"
workflow_run_id: "27907383719"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27907383719"
head_sha: "366a80239ced7494a64c3f420f9e1eb37c44239f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-21T14:29:58.507Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 16
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# live-pr-inventory-20260621T1430-003

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27907383719](https://github.com/openclaw/clownfish/actions/runs/27907383719)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only inventory result. No merge recommendation is safe because none of the open PRs has complete merge preflight proving Codex /review and resolved review state. No combined fix artifact is emitted because the open PRs cover separate remediation paths.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 16 |
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
| #49061 | keep_closed | skipped | superseded | Already closed historical PR. |
| #63975 | keep_closed | skipped | independent | Already closed historical PR. |
| #82085 | keep_related | planned | related | Related compaction-abort work, but distinct surface and blocked by failing proof. |
| #89606 | keep_related | planned | related | Keep issue open pending the candidate PR path. |
| #89713 | keep_closed | skipped | superseded | Already closed superseded PR. |
| #89795 | keep_independent | planned | independent | Retain as a separate draft remediation path; do not merge or replace in plan mode. |
| #89857 | keep_related | planned | related | Related plugin cleanup metadata work with unresolved changes. |
| #89865 | keep_independent | planned | independent | Retain as its own channel startup metadata remediation path. |
| #89868 | keep_related | planned | related | Keep issue open pending the candidate PR path. |
| #89882 | keep_canonical | planned | canonical | Canonical PR for the plugin policy-refresh family, retained for maintainer review rather than merge recommendation. |
| #89886 | keep_canonical | planned | canonical | Canonical PR for the context-engine abortSignal bridge family, retained until merge preflight is complete. |
| #89888 | keep_independent | planned | independent | Retain as its own active-runtime registry metadata remediation path. |
| #89889 | keep_closed | skipped | superseded | Already closed related/superseded PR. |
| #90309 | keep_closed | skipped | fixed_by_candidate | Already closed as fixed on main. |
| #90821 | keep_related | planned | related | Related compaction cancellation work, but distinct and currently blocked by a failing check. |
| #93248 | keep_closed | skipped | superseded | Already closed duplicate/superseded PR. |

## Needs Human

- none
