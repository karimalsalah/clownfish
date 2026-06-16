---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238882-dedupe-only-20260429c"
mode: "autonomous"
run_id: "27599300177"
workflow_run_id: "27599300177"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599300177"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:46:59.518Z"
canonical: "https://github.com/openclaw/openclaw/tree/main"
canonical_issue: null
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238882-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599300177](https://github.com/openclaw/clownfish/actions/runs/27599300177)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/main

## Summary

Hydrated live state shows all three job refs are already closed, with no security-sensitive items and no open candidates remaining. No GitHub mutations are planned; the cluster is closed out by prior main fixes and prior duplicate/superseded closeout comments.

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
| #44354 | keep_closed | skipped | fixed_by_candidate | Already closed after a maintainer-confirmed main fix; no open target remains for duplicate closeout. |
| #46494 | keep_closed | skipped | duplicate | Already closed as a duplicate of hydrated canonical issue #59287; no further action is allowed or needed. |
| #59287 | keep_closed | skipped | fixed_by_candidate | Already closed after reporter-confirmed fixed behavior on a later release; no open target remains for a close or label action. |

## Needs Human

- none
