---
repo: "openclaw/openclaw"
cluster_id: "pr-close-canary-90061-20260615-bulk-a"
mode: "execute"
run_id: "27545121963"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27545121963"
head_sha: "1a47711b53828d58a62d5798b80ee89f4bb84218"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-15T12:12:57.946Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# pr-close-canary-90061-20260615-bulk-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27545121963](https://github.com/openclaw/clownfish/actions/runs/27545121963)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Planned one credit-preserving closeout for open PR #90061 as fixed by merged PR #89350. No merge, fix, raise-pr, label, or direct GitHub mutation is recommended by this worker result.

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
| #90061 | close_fixed_by_candidate | blocked | fixed_by_candidate | target author association is MEMBER |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #90061 | close_fixed_by_candidate | planned | fixed_by_candidate | #90061 remains open while #89350 is hydrated as merged, and the hydrated job data identifies #89350 as the landed implementation for the same prompt-cache tool-name guard cleanup. |

## Needs Human

- none
