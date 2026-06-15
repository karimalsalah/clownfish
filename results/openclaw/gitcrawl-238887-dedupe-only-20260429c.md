---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238887-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104078312"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104078312"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.412Z"
canonical: "https://github.com/openclaw/openclaw/issues/45550"
canonical_issue: "https://github.com/openclaw/openclaw/issues/45550"
canonical_pr: "https://github.com/openclaw/openclaw/pull/45613"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238887-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104078312](https://github.com/openclaw/clownfish/actions/runs/25104078312)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/45550

## Summary

Preflight shows #45550 remains the open canonical tracking issue and #45613 is the open canonical implementation path. #45592 and #45555 are already closed historical/superseded PRs, so no close actions are planned. Merge/fixed-by-candidate closeout is not planned because #45613 still has review/check blockers and this job disallows merge and fix actions.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #45550 | keep_canonical | planned | canonical | The tracking issue is still the best canonical issue and must remain open until the canonical fix path lands. |
| #45613 | keep_canonical | planned | canonical | This is the clearest canonical implementation path, but merge/fixed-by-candidate closeout is blocked by unresolved review/check evidence and by job permissions. |
| #45592 | keep_closed | skipped | superseded | Already closed; retained only as superseded historical evidence. |
| #45555 | keep_closed | skipped | superseded | Already closed wrong-branch PR; no mutation is valid. |

## Needs Human

- none
