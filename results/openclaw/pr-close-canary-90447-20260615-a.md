---
repo: "openclaw/openclaw"
cluster_id: "pr-close-canary-90447-20260615-a"
mode: "execute"
run_id: "27548478357"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27548478357"
head_sha: "57ad2d2bfd56ba92140ceb35011e3a81fc402032"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T13:12:53.020Z"
canonical: null
canonical_issue: null
canonical_pr: "#90816"
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-close-canary-90447-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27548478357](https://github.com/openclaw/clownfish/actions/runs/27548478357)

Workflow conclusion: success

Worker result: planned

Canonical: #90816

## Summary

Hydrated preflight shows #90447 is still open and #90816 is still merged, so the close-only canary can safely plan one credit-preserving superseded close for #90447. No merge, fix, raise-PR, or close action is planned for the merged canonical PR.

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
| #90447 | close_superseded | executed | superseded | already closed with matching projectclownfish comment |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #90447 | close_superseded | planned | superseded |  |

## Needs Human

- none
