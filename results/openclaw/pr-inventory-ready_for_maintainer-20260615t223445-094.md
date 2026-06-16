---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-094"
mode: "plan"
run_id: "27580942551-1-94"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.572Z"
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
needs_human_count: 5
---

# pr-inventory-ready_for_maintainer-20260615T223445-094

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory repair. Deterministic validation marked 19 hydrated open PRs as security-sensitive, so those exact items are quarantined with non-mutating route_security actions. #89183 remains already closed. Five job candidates were not present in the compacted preflight item matrix, so those refs still need fresh hydration before classification.

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
| Needs human | 5 |

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
| #86607 | route_security | planned | security_sensitive | Security-sensitive item routed to central security handling. |
| #89183 | keep_closed | skipped | fixed_by_candidate | Already closed in live preflight state. |
| #89334 | route_security | planned | security_sensitive | Security-sensitive item routed to central security handling. |
| #89567 | route_security | planned | security_sensitive | Security-sensitive item routed to central security handling. |
| #89618 | route_security | planned | security_sensitive | Security-sensitive item routed to central security handling. |
| #89628 | route_security | planned | security_sensitive | Security-sensitive item routed to central security handling. |
| #89671 | route_security | planned | security_sensitive | Security-sensitive item routed to central security handling. |
| #89783 | route_security | planned | security_sensitive | Security-sensitive item routed to central security handling. |
| #90095 | route_security | planned | security_sensitive | Security-sensitive item routed to central security handling. |
| #90184 | route_security | planned | security_sensitive | Security-sensitive item routed to central security handling. |
| #90206 | route_security | planned | security_sensitive | Security-sensitive item routed to central security handling. |
| #90267 | route_security | planned | security_sensitive | Security-sensitive item routed to central security handling. |
| #91474 | route_security | planned | security_sensitive | Security-sensitive item routed to central security handling. |
| #91660 | route_security | planned | security_sensitive | Security-sensitive item routed to central security handling. |
| #91663 | route_security | planned | security_sensitive | Security-sensitive item routed to central security handling. |
| #91674 | route_security | planned | security_sensitive | Security-sensitive item routed to central security handling. |
| #62063 | route_security | planned | security_sensitive | Security-sensitive item routed to central security handling. |
| #91797 | route_security | planned | security_sensitive | Security-sensitive item routed to central security handling. |
| #91803 | route_security | planned | security_sensitive | Security-sensitive item routed to central security handling. |
| #91810 | route_security | planned | security_sensitive | Security-sensitive item routed to central security handling. |
| #91870 | needs_human | blocked | needs_human | Needs fresh preflight hydration. |
| #91889 | needs_human | blocked | needs_human | Needs fresh preflight hydration. |
| #91907 | needs_human | blocked | needs_human | Needs fresh preflight hydration. |
| #91921 | needs_human | blocked | needs_human | Needs fresh preflight hydration. |
| #91967 | needs_human | blocked | needs_human | Needs fresh preflight hydration. |

## Needs Human

- Fresh hydration required for #91870 because it is listed in the job candidates but missing from the compacted preflight artifact.
- Fresh hydration required for #91889 because it is listed in the job candidates but missing from the compacted preflight artifact.
- Fresh hydration required for #91907 because it is listed in the job candidates but missing from the compacted preflight artifact.
- Fresh hydration required for #91921 because it is listed in the job candidates but missing from the compacted preflight artifact.
- Fresh hydration required for #91967 because it is listed in the job candidates but missing from the compacted preflight artifact.
