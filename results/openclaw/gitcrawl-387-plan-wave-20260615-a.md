---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-387-plan-wave-20260615-a"
mode: "plan"
run_id: "27521385269"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27521385269"
head_sha: "c7fde105fe4b1bf849faf5ed130f10118614c64c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:58:14.853Z"
canonical: "#41750"
canonical_issue: "#41750"
canonical_pr: "#89168"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-387-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27521385269](https://github.com/openclaw/clownfish/actions/runs/27521385269)

Workflow conclusion: success

Worker result: planned

Canonical: #41750

## Summary

Plan-only classification: keep #41750 as the open canonical issue, keep #89168 as the related open candidate fix path for that issue without recommending merge, and record already-closed linked PR #41758 as historical superseded context only.

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
| #41750 | keep_canonical | planned | canonical | #41750 remains the best live canonical tracker because it is open, contains the source reproduction, and the open PR #89168 is explicitly linked as the candidate implementation path rather than replacing the issue as canonical. |
| #89168 | keep_related | planned | related | #89168 is related as the current candidate fix for the canonical issue, but this worker should not emit a merge recommendation because merge is blocked by job policy and the hydrated review still calls for maintainer review before any future merge. |
| #41758 | keep_closed | skipped | superseded | Already-closed historical PR; keep it as superseded context only and do not plan any mutation. |

## Needs Human

- none
