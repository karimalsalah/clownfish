---
repo: "openclaw/openclaw"
cluster_id: "pr-close-canary-92156-20260615-a"
mode: "execute"
run_id: "27545122550"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27545122550"
head_sha: "1a47711b53828d58a62d5798b80ee89f4bb84218"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-15T12:12:57.947Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-close-canary-92156-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27545122550](https://github.com/openclaw/clownfish/actions/runs/27545122550)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Hydrated preflight state shows #92156 is still open and #76731 is a merged PR on main. Planned one credit-preserving close_fixed_by_candidate action for #92156 using #76731 as the merged candidate_fix; no merge, fix, raise_pr, or action against the already-merged #76731.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| #92156 | close_fixed_by_candidate | planned | fixed_by_candidate | #92156 is an overlapping contributor PR for the same Control UI chat composer/sidebar layout failure already addressed by merged #76731; because #76731 is closed/merged, it is used as candidate_fix rather than as an open canonical. |

## Needs Human

- none
