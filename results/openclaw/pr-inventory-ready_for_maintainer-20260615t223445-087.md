---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-087"
mode: "plan"
run_id: "27580942551-1-87"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.513Z"
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
needs_human_count: 0
---

# pr-inventory-ready_for_maintainer-20260615T223445-087

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. The validator identified the hydrated open PR targets in this shard as security-sensitive for ProjectClownfish handling, so those exact hydrated targets are routed to central security handling with non-mutating route_security actions. No shared canonical was selected because the job explicitly identifies this as an independent PR inventory shard. Unhydrated job refs remain conservative non-mutating keep_independent classifications.

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
| #76092 | route_security | planned | security_sensitive | Security-sensitive target quarantined with non-mutating route_security. |
| #89168 | route_security | planned | security_sensitive | Security-sensitive target quarantined with non-mutating route_security. |
| #89483 | route_security | planned | security_sensitive | Security-sensitive target quarantined with non-mutating route_security. |
| #90305 | route_security | planned | security_sensitive | Security-sensitive target quarantined with non-mutating route_security. |
| #90356 | route_security | planned | security_sensitive | Security-sensitive target quarantined with non-mutating route_security. |
| #90468 | route_security | planned | security_sensitive | Security-sensitive target quarantined with non-mutating route_security. |
| #90474 | route_security | planned | security_sensitive | Security-sensitive target quarantined with non-mutating route_security. |
| #90490 | route_security | planned | security_sensitive | Security-sensitive target quarantined with non-mutating route_security. |
| #90503 | route_security | planned | security_sensitive | Security-sensitive target quarantined with non-mutating route_security. |
| #90514 | route_security | planned | security_sensitive | Security-sensitive target quarantined with non-mutating route_security. |
| #90517 | route_security | planned | security_sensitive | Security-sensitive target quarantined with non-mutating route_security. |
| #90547 | route_security | planned | security_sensitive | Security-sensitive target quarantined with non-mutating route_security. |
| #90566 | route_security | planned | security_sensitive | Security-sensitive target quarantined with non-mutating route_security. |
| #90572 | route_security | planned | security_sensitive | Security-sensitive target quarantined with non-mutating route_security. |
| #90592 | route_security | planned | security_sensitive | Security-sensitive target quarantined with non-mutating route_security. |
| #90622 | route_security | planned | security_sensitive | Security-sensitive target quarantined with non-mutating route_security. |
| #90648 | route_security | planned | security_sensitive | Security-sensitive target quarantined with non-mutating route_security. |
| #90703 | route_security | planned | security_sensitive | Security-sensitive target quarantined with non-mutating route_security. |
| #90727 | route_security | planned | security_sensitive | Security-sensitive target quarantined with non-mutating route_security. |
| #90745 | route_security | planned | security_sensitive | Security-sensitive target quarantined with non-mutating route_security. |
| #90749 | keep_independent | planned | independent | Conservative non-mutating classification for unhydrated job candidate. |
| #90750 | keep_independent | planned | independent | Conservative non-mutating classification for unhydrated job candidate. |
| #93291 | keep_independent | planned | independent | Conservative non-mutating classification for unhydrated job candidate. |
| #90902 | keep_independent | planned | independent | Conservative non-mutating classification for unhydrated job candidate. |
| #93276 | keep_independent | planned | independent | Conservative non-mutating classification for unhydrated job candidate. |

## Needs Human

- none
