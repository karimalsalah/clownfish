---
repo: "openclaw/openclaw"
cluster_id: "pr-close-canary-92756-close-wave-20260616a"
mode: "execute"
run_id: "27582533011"
workflow_run_id: "27582533011"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27582533011"
head_sha: "49c3b7a7e488d8827bdcd870f37e5eaf2b5b8c63"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:16:27.439Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-close-canary-92756-close-wave-20260616a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27582533011](https://github.com/openclaw/clownfish/actions/runs/27582533011)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

No GitHub mutations are planned. Deterministic validation marked both hydrated PR targets as security-sensitive, so both #92682 and #92756 are quarantined with route_security instead of canonical/closeout actions.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #92682 | route_security | planned | security_sensitive | Deterministic validation classified the target as security-sensitive; quarantine the exact item with a non-mutating route_security action. |
| #92756 | route_security | planned | security_sensitive | Deterministic validation classified the target as security-sensitive; the previous close_superseded action is not safely replayable. |

## Needs Human

- none
