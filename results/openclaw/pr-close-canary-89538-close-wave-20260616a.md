---
repo: "openclaw/openclaw"
cluster_id: "pr-close-canary-89538-close-wave-20260616a"
mode: "execute"
run_id: "27582527727"
workflow_run_id: "27582527727"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27582527727"
head_sha: "49c3b7a7e488d8827bdcd870f37e5eaf2b5b8c63"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:16:27.426Z"
canonical: "#90503"
canonical_issue: null
canonical_pr: "#90503"
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-close-canary-89538-close-wave-20260616a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27582527727](https://github.com/openclaw/clownfish/actions/runs/27582527727)

Workflow conclusion: success

Worker result: planned

Canonical: #90503

## Summary

Close-only canary result: #89538 remains open and is superseded by the open canonical PR #90503, which owns the same session temp-file sweep with a narrower diff and passing proof/checks. No merge, fix, or PR creation is planned.

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
| #89538 | close_superseded | executed | superseded | already closed with matching projectclownfish comment |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #89538 | close_superseded | planned | superseded | The target PR remains open, the canonical PR remains open, and the hydrated evidence shows #90503 is the clearer surviving canonical path for the same root cause. |

## Needs Human

- none
