---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-411-plan-wave-20260615-a"
mode: "plan"
run_id: "27521399138"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27521399138"
head_sha: "c7fde105fe4b1bf849faf5ed130f10118614c64c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:58:14.895Z"
canonical: "#65404"
canonical_issue: "#65404"
canonical_pr: "#83828"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-411-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27521399138](https://github.com/openclaw/clownfish/actions/runs/27521399138)

Workflow conclusion: success

Worker result: planned

Canonical: #65404

## Summary

Plan-only classification: #65404 remains the open canonical issue for the historical codex-cli systemPromptReport tool-reporting bug. #65409 is the same-author PR for that issue, but it is not merge-ready and is superseded by the already-merged hydrated replacement/fix path #83828; no GitHub mutations are emitted in this read-only plan.

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
| #65404 | keep_canonical | planned | canonical | #65404 is still the best live canonical issue for the root-cause family, even though the historical behavior appears fixed on main by hydrated merged PR #83828. |
| #65409 | keep_related | planned | superseded | #65409 overlaps the canonical issue and attempted the same fix, but the landed hydrated fix path #83828 owns the implemented behavior while #65409 remains blocked by failing proof and unresolved bot review findings. |

## Needs Human

- none
