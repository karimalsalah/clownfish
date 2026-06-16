---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-054"
mode: "plan"
run_id: "27580942551-1-55"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.300Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 13
---

# pr-inventory-needs_proof-20260615T223445-054

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification. No GitHub mutations are planned because the job disallows merge/fix/raise_pr and low-signal/instant close is disabled. Hydrated open PRs are classified independently; refs with unavailable live state are blocked for human rehydration.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 13 |

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
| #91511 | keep_independent | planned | independent | Independent open PR candidate; no close, merge, or fix action is allowed or sufficiently proven in plan mode. |
| #91535 | keep_independent | planned | independent | Independent open PR candidate; keep open for normal proof/review path. |
| #91544 | keep_independent | planned | independent | Independent open PR candidate with unresolved review/proof gates; no closure basis. |
| #91584 | keep_independent | planned | independent | Independent open PR candidate needing normal behavior proof and validation. |
| #91603 | keep_independent | planned | independent | Independent open PR candidate; no dedupe or closure target is established. |
| #91606 | keep_independent | planned | independent | Independent open PR candidate with no safe close or merge path in this job. |
| #91609 | keep_independent | planned | independent | Independent open PR candidate; normal review/proof remains required. |
| #91610 | keep_independent | planned | independent | Independent open CI PR candidate; merge is blocked by missing checks/review preflight and job policy. |
| #91611 | keep_independent | planned | independent | Independent open PR candidate; no shared canonical or closure basis. |
| #91682 | keep_independent | planned | independent | Independent open PR candidate; keep open for normal lightweight review. |
| #91857 | keep_independent | planned | independent | Independent open PR candidate; related follow-up may exist but this cluster should not close it. |
| #91875 | keep_independent | planned | independent | Independent provider-metadata PR candidate requiring normal proof/review. |
| #61335 | needs_human | blocked | needs_human | Live state unavailable; rehydration is required before classification or mutation. |
| #64649 | needs_human | blocked | needs_human | Live state unavailable; rehydration is required before classification or mutation. |
| #65180 | needs_human | blocked | needs_human | Live state unavailable; rehydration is required before classification or mutation. |
| #65198 | needs_human | blocked | needs_human | Live state unavailable; rehydration is required before classification or mutation. |
| #68127 | needs_human | blocked | needs_human | Live state unavailable; rehydration is required before classification or mutation. |
| #68197 | needs_human | blocked | needs_human | Live state unavailable; rehydration is required before classification or mutation. |
| #69245 | needs_human | blocked | needs_human | Live state unavailable; rehydration is required before classification or mutation. |
| #69355 | needs_human | blocked | needs_human | Live state unavailable; rehydration is required before classification or mutation. |
| #69413 | needs_human | blocked | needs_human | Live state unavailable; rehydration is required before classification or mutation. |
| #69426 | needs_human | blocked | needs_human | Live state unavailable; rehydration is required before classification or mutation. |
| #91877 | needs_human | blocked | needs_human | Live state unavailable; rehydration is required before classification or mutation. |
| #91885 | needs_human | blocked | needs_human | Live state unavailable; rehydration is required before classification or mutation. |
| #93279 | needs_human | blocked | needs_human | Live state unavailable; rehydration is required before classification or mutation. |

## Needs Human

- #61335 requires rehydration because live state is unavailable from the preflight artifact.
- #64649 requires rehydration because live state is unavailable from the preflight artifact.
- #65180 requires rehydration because live state is unavailable from the preflight artifact.
- #65198 requires rehydration because live state is unavailable from the preflight artifact.
- #68127 requires rehydration because live state is unavailable from the preflight artifact.
- #68197 requires rehydration because live state is unavailable from the preflight artifact.
- #69245 requires rehydration because live state is unavailable from the preflight artifact.
- #69355 requires rehydration because live state is unavailable from the preflight artifact.
- #69413 requires rehydration because live state is unavailable from the preflight artifact.
- #69426 requires rehydration because live state is unavailable from the preflight artifact.
- #91877 requires rehydration because live state is unavailable from the preflight artifact.
- #91885 requires rehydration because live state is unavailable from the preflight artifact.
- #93279 requires rehydration because live state is unavailable from the preflight artifact.
