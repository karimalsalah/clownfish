---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238889-dedupe-only-20260429c"
mode: "autonomous"
run_id: "27595851727"
workflow_run_id: "27595851727"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27595851727"
head_sha: "7a8b7ab269d4c8246a3837f1013f6d9715d17c5e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T05:21:58.190Z"
canonical: "https://github.com/openclaw/openclaw/pull/48673"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/48673"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238889-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27595851727](https://github.com/openclaw/clownfish/actions/runs/27595851727)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/48673

## Summary

Classified the three job candidate PRs using the hydrated preflight artifact and target checkout. The original representative #48673 is now closed and carried forward on current main by maintainer patch 713cc74bff; #45900 is already closed as superseded. Deterministic validation flagged #72409 as security-sensitive, so this repaired result quarantines only that exact PR with route_security and leaves the unrelated closed-ref classifications unchanged.

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
| #45900 | keep_closed | skipped | superseded | Already closed; no mutation planned. |
| #48673 | keep_closed | skipped | canonical | Canonical cluster path is already closed after a maintainer patch landed on main. |
| #72409 | route_security | planned | security_sensitive | Validator-flagged security-sensitive PR is quarantined to central security handling; no GitHub mutation is planned by this worker. |

## Needs Human

- none
