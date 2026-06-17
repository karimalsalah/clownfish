---
repo: "openclaw/openclaw"
cluster_id: "pr-close-canary-77559-20260616-live-a"
mode: "execute"
run_id: "27665545313"
workflow_run_id: "27665545313"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27665545313"
head_sha: "4c098bd9122cabae12add972ef61ec0d2f47df96"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T04:22:49.715Z"
canonical: "#77502"
canonical_issue: null
canonical_pr: "#77502"
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# pr-close-canary-77559-20260616-live-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27665545313](https://github.com/openclaw/clownfish/actions/runs/27665545313)

Workflow conclusion: success

Worker result: planned

Canonical: #77502

## Summary

#77559 remains open and is covered by merged #77502. Plan one close_fixed_by_candidate action for #77559; no action for already-merged #77502.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #77559 | close_fixed_by_candidate | blocked | fixed_by_candidate | target author association is MEMBER |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #77559 | close_fixed_by_candidate | planned | fixed_by_candidate | The job explicitly asks for a close-only canary: close #77559 if it remains open and #77502 remains merged, using candidate_fix because #77502 is already merged/closed. |

## Needs Human

- none
