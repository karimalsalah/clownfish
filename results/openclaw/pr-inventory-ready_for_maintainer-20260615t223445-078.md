---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-078"
mode: "plan"
run_id: "27580942551-1-78"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.432Z"
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

# pr-inventory-ready_for_maintainer-20260615T223445-078

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification shard. Used the provided cluster preflight artifact as live state; no GitHub mutations planned because this is not a dedupe cluster and merge/fix actions are blocked by job frontmatter. Validator-flagged security-sensitive targets are routed to central security handling without changing unrelated classifications.

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
| #93025 | keep_related | planned | related | Maintainer-review candidate; no duplicate or supersession evidence. |
| #93176 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #93182 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #91097 | keep_closed | skipped | superseded | Already closed in live state. |
| #91117 | keep_closed | skipped | fixed_by_candidate | Already merged and closed in live state. |
| #93185 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #93149 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #69729 | keep_related | planned | related | Needs author/maintainer follow-up; not closable as duplicate or low-signal. |
| #72009 | keep_related | planned | related | Viable feature/config PR awaiting follow-up. |
| #73163 | route_security | planned | security_sensitive | Security-sensitive target must be quarantined instead of kept as ordinary backlog inventory. |
| #73785 | keep_related | planned | related | Focused PR awaiting maintainer review. |
| #75857 | keep_related | planned | related | Keep for normal maintainer/author follow-up. |
| #80396 | keep_related | planned | related | Focused bugfix PR suitable for maintainer review. |
| #93188 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #81260 | keep_related | planned | related | Small behavior fix awaiting follow-up. |
| #81391 | route_security | planned | security_sensitive | Security-sensitive target must be quarantined instead of kept as ordinary backlog inventory. |
| #81397 | keep_related | planned | related | Substantive session-state fix needing review. |
| #81503 | keep_related | planned | related | Draft docs PR; keep for author/maintainer follow-up. |
| #81513 | keep_related | planned | related | Broad draft feature PR requiring follow-up. |
| #81621 | keep_related | planned | related | Important PR with failing proof/check requiring follow-up. |
| #81696 | route_security | planned | security_sensitive | Security-sensitive target must be quarantined instead of kept as ordinary backlog inventory. |
| #81731 | keep_related | planned | related | Small PR with failing checks requiring follow-up. |
| #81777 | keep_related | planned | related | Large draft feature PR requiring maintainer judgment. |
| #81787 | keep_related | planned | related | Focused diagnostics PR awaiting review/follow-up. |
| #82023 | keep_related | planned | related | Large feature PR needing maintainer/author follow-up. |

## Needs Human

- #93176 missing hydrated live state in compacted preflight artifact.
- #93182 missing hydrated live state in compacted preflight artifact.
- #93185 missing hydrated live state in compacted preflight artifact.
- #93149 missing hydrated live state in compacted preflight artifact.
- #93188 missing hydrated live state in compacted preflight artifact.
