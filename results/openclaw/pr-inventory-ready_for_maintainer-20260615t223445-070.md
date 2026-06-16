---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-070"
mode: "plan"
run_id: "27580942551-1-70"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.372Z"
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
needs_human_count: 7
---

# pr-inventory-ready_for_maintainer-20260615T223445-070

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. No shared canonical was selected; hydrated open non-security PRs are kept as independent maintainer-review candidates, #82458 is already merged/closed, and security-sensitive refs #89635, #82495, and #79041 are routed to central security handling. Unhydrated non-security PRs are kept non-mutating with missing live timestamps noted.

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
| Needs human | 7 |

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
| #79747 | keep_independent | planned | independent |  |
| #80033 | keep_independent | planned | independent |  |
| #81243 | keep_independent | planned | independent |  |
| #89635 | route_security | planned | security_sensitive | Security-sensitive signal appears in the job evidence and live hydrated state for this ref is unavailable. |
| #81300 | keep_independent | planned | independent |  |
| #81641 | keep_independent | planned | independent |  |
| #81778 | keep_independent | planned | independent |  |
| #90365 | keep_independent | planned | independent | Live hydrated state is unavailable in the artifact. |
| #90401 | keep_independent | planned | independent | Live hydrated state is unavailable in the artifact. |
| #89517 | keep_independent | planned | independent | Live hydrated state is unavailable in the artifact. |
| #81794 | keep_independent | planned | independent |  |
| #81825 | keep_independent | planned | independent |  |
| #81907 | keep_independent | planned | independent |  |
| #81916 | keep_independent | planned | independent |  |
| #82458 | keep_closed | skipped | fixed_by_candidate | Already merged/closed in live hydrated state. |
| #82495 | route_security | planned | security_sensitive | Security-sensitive signal appears in hydrated PR evidence because the stated bug involves disclosure of other users' OpenClaw state paths. |
| #82514 | keep_independent | planned | independent |  |
| #82552 | keep_independent | planned | independent |  |
| #82562 | keep_independent | planned | independent |  |
| #78916 | keep_independent | planned | independent |  |
| #82585 | keep_independent | planned | independent |  |
| #79041 | route_security | planned | security_sensitive | Security-sensitive signal appears in hydrated PR evidence because the fix concerns Webhooks plugin session-boundary access control. |
| #82618 | keep_independent | planned | independent | Live hydrated state is unavailable in the artifact. |
| #79339 | keep_independent | planned | independent |  |
| #79405 | keep_independent | planned | independent |  |

## Needs Human

- #89635: routed to central security because only unhydrated job evidence is available and the PR is explicitly security-shaped.
- #82495: routed to central security because hydrated PR evidence describes disclosure of other users' OpenClaw state paths.
- #79041: routed to central security because hydrated PR evidence describes Webhooks plugin session-boundary access control.
- #90365: live hydrated state unavailable; no mutating action planned.
- #90401: live hydrated state unavailable; no mutating action planned.
- #89517: live hydrated state unavailable; no mutating action planned.
- #82618: live hydrated state unavailable; no mutating action planned.
