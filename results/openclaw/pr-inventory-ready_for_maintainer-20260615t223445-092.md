---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-092"
mode: "plan"
run_id: "27580942551-1-92"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.555Z"
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

# pr-inventory-ready_for_maintainer-20260615T223445-092

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification shard. Deterministic validation marked the hydrated PR targets as security-sensitive, so each affected item is quarantined with a non-mutating route_security action. Five job refs were not present as hydrated preflight items in the compacted artifact, so they remain blocked for human/live-state rehydration before any decision. No close, merge, label, comment, fix, or raise_pr mutation is planned.

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
| #91481 | route_security | planned | security_sensitive | Security-sensitive target is out of scope for ProjectClownfish backlog automation; route to central security handling. |
| #91963 | route_security | planned | security_sensitive | Security-sensitive target is out of scope for ProjectClownfish backlog automation; route to central security handling. |
| #91981 | route_security | planned | security_sensitive | Security-sensitive target is out of scope for ProjectClownfish backlog automation; route to central security handling. |
| #91984 | route_security | planned | security_sensitive | Security-sensitive target is out of scope for ProjectClownfish backlog automation; route to central security handling. |
| #92012 | route_security | planned | security_sensitive | Security-sensitive target is out of scope for ProjectClownfish backlog automation; route to central security handling. |
| #92035 | route_security | planned | security_sensitive | Security-sensitive target is out of scope for ProjectClownfish backlog automation; route to central security handling. |
| #92040 | route_security | planned | security_sensitive | Security-sensitive target is out of scope for ProjectClownfish backlog automation; route to central security handling. |
| #92063 | route_security | planned | security_sensitive | Security-sensitive target is out of scope for ProjectClownfish backlog automation; route to central security handling. |
| #93376 | needs_human | blocked | needs_human | Cannot classify or plan any action without hydrated live state from the artifact. |
| #93369 | needs_human | blocked | needs_human | Cannot classify or plan any action without hydrated live state from the artifact. |
| #92126 | route_security | planned | security_sensitive | Security-sensitive target is out of scope for ProjectClownfish backlog automation; route to central security handling. |
| #92147 | route_security | planned | security_sensitive | Security-sensitive target is out of scope for ProjectClownfish backlog automation; route to central security handling. |
| #92165 | route_security | planned | security_sensitive | Security-sensitive target is out of scope for ProjectClownfish backlog automation; route to central security handling. |
| #92178 | route_security | planned | security_sensitive | Security-sensitive target is out of scope for ProjectClownfish backlog automation; route to central security handling. |
| #92185 | route_security | planned | security_sensitive | Security-sensitive target is out of scope for ProjectClownfish backlog automation; route to central security handling. |
| #92223 | route_security | planned | security_sensitive | Security-sensitive target is out of scope for ProjectClownfish backlog automation; route to central security handling. |
| #92236 | route_security | planned | security_sensitive | Security-sensitive target is out of scope for ProjectClownfish backlog automation; route to central security handling. |
| #92237 | route_security | planned | security_sensitive | Security-sensitive target is out of scope for ProjectClownfish backlog automation; route to central security handling. |
| #92025 | route_security | planned | security_sensitive | Security-sensitive target is out of scope for ProjectClownfish backlog automation; route to central security handling. |
| #92261 | route_security | planned | security_sensitive | Security-sensitive target is out of scope for ProjectClownfish backlog automation; route to central security handling. |
| #92283 | route_security | planned | security_sensitive | Security-sensitive target is out of scope for ProjectClownfish backlog automation; route to central security handling. |
| #92287 | needs_human | blocked | needs_human | Cannot classify or plan any action without hydrated live state from the artifact. |
| #91245 | route_security | planned | security_sensitive | Security-sensitive target is out of scope for ProjectClownfish backlog automation; route to central security handling. |
| #92328 | needs_human | blocked | needs_human | Cannot classify or plan any action without hydrated live state from the artifact. |
| #92383 | needs_human | blocked | needs_human | Cannot classify or plan any action without hydrated live state from the artifact. |

## Needs Human

- #93376 lacks a hydrated preflight item in the compacted artifact; rehydrate before classification.
- #93369 lacks a hydrated preflight item in the compacted artifact; rehydrate before classification.
- #92287 lacks a hydrated preflight item in the compacted artifact; rehydrate before classification.
- #92328 lacks a hydrated preflight item in the compacted artifact; rehydrate before classification.
- #92383 lacks a hydrated preflight item in the compacted artifact; rehydrate before classification.
