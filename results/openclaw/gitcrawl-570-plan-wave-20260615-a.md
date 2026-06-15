---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-570-plan-wave-20260615-a"
mode: "plan"
run_id: "27516857512"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27516857512"
head_sha: "1aabb2d816f9888d8a4f648c6fa800f88117c1b4"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T00:23:41.182Z"
canonical: "#49944"
canonical_issue: "#49944"
canonical_pr: "#74398"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-570-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27516857512](https://github.com/openclaw/clownfish/actions/runs/27516857512)

Workflow conclusion: success

Worker result: planned

Canonical: #49944

## Summary

Plan-only classification: #49944 remains the live canonical issue for the Control UI verbose-default tool-card expansion bug. #74398 is the current focused canonical PR path for that issue, but no merge or fix action is planned because this job blocks merge/fix/raise_pr and the hydrated ClawSweeper review still calls out pre-merge cleanup. #50034 is already closed historical context and should not receive a mutation.

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
| #49944 | keep_canonical | planned | canonical | The representative issue is still open and remains the best canonical issue for the root user-visible failure; keep it open until the candidate fix path lands and is validated. |
| #74398 | keep_canonical | planned | canonical | This is the best open focused PR for the canonical issue, but it is not merge-planned in this read-only job because merge/fix are blocked and the hydrated review still has a pre-merge cleanup item. |
| #50034 | keep_closed | skipped | superseded | Already-closed historical PRs must not receive close actions; keep #50034 closed as superseded context for the active #74398 fix path. |

## Needs Human

- none
