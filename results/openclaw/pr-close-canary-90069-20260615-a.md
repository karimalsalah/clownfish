---
repo: "openclaw/openclaw"
cluster_id: "pr-close-canary-90069-20260615-a"
mode: "execute"
run_id: "27750121909"
workflow_run_id: "27750121909"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27750121909"
head_sha: "ea6165ebd756db2ce6fd83f91cd39ddd1d1fff54"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-18T09:32:36.557Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-close-canary-90069-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27750121909](https://github.com/openclaw/clownfish/actions/runs/27750121909)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Close-only canary classification: #90069 remains open and is covered by the merged candidate fix in #92343; emit one planned fixed-by-candidate close action for #90069 and no mutation for the already-merged candidate.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 1 |
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
| #90069 | close_fixed_by_candidate | executed | fixed_by_candidate | covered by the candidate fix |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| 1 | apply | #90069 | close_fixed_by_candidate | executed | covered by the candidate fix |
| 2 | apply | #90069 | close_fixed_by_candidate | executed | already closed with matching projectclownfish comment |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #90069 | close_fixed_by_candidate | planned | fixed_by_candidate |  |

## Needs Human

- none
