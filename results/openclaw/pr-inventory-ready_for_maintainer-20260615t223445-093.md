---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-093"
mode: "plan"
run_id: "27580942551-1-93"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.563Z"
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

# pr-inventory-ready_for_maintainer-20260615T223445-093

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory shard. The validator identifies fourteen targets as security-sensitive, so those exact PRs are quarantined with non-mutating route_security actions. Remaining hydrated open PRs are classified independently; no close, merge, label, comment, or fix mutation is planned.

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
| #92445 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for ProjectClownfish inventory handling and must be routed to central security handling. |
| #69022 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for ProjectClownfish inventory handling and must be routed to central security handling. |
| #90259 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for ProjectClownfish inventory handling and must be routed to central security handling. |
| #92028 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for ProjectClownfish inventory handling and must be routed to central security handling. |
| #92359 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for ProjectClownfish inventory handling and must be routed to central security handling. |
| #91597 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for ProjectClownfish inventory handling and must be routed to central security handling. |
| #91656 | keep_independent | planned | independent | Independent test coverage PR; keep for maintainer review rather than plan a blocked merge. |
| #55901 | keep_independent | planned | independent | Independent open PR with failed proof and unresolved review-bot history; non-mutating classification only. |
| #59695 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for ProjectClownfish inventory handling and must be routed to central security handling. |
| #91955 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for ProjectClownfish inventory handling and must be routed to central security handling. |
| #93384 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for ProjectClownfish inventory handling and must be routed to central security handling. |
| #66150 | keep_independent | planned | independent | Independent PR with review-bot history and no merge authority; keep for maintainer follow-up. |
| #73649 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for ProjectClownfish inventory handling and must be routed to central security handling. |
| #74131 | keep_independent | planned | independent | Independent open PR with a failing check and review-bot history; no merge or close action is safe in this plan. |
| #74136 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for ProjectClownfish inventory handling and must be routed to central security handling. |
| #74185 | keep_independent | planned | independent | Independent open PR with auth-provider risk label and bot-review history; keep for maintainer follow-up. |
| #74252 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for ProjectClownfish inventory handling and must be routed to central security handling. |
| #74320 | keep_independent | planned | independent | Independent focused bugfix PR with positive review evidence; keep for maintainer action outside this non-mutating plan. |
| #74369 | keep_independent | planned | independent | Independent web UI PR; keep for maintainer review because merge is blocked and bot review details are not hydrated. |
| #74444 | keep_independent | planned | independent | Independent feature/config PR requiring maintainer product and compatibility review; no mutation is authorized. |
| #75157 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for ProjectClownfish inventory handling and must be routed to central security handling. |
| #77736 | keep_independent | planned | independent | Independent provider-routing PR; keep for maintainer review and do not plan blocked merge/fix actions. |
| #80947 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for ProjectClownfish inventory handling and must be routed to central security handling. |
| #83933 | keep_independent | planned | independent | Independent high-impact cron PR; non-mutating classification only. |
| #84792 | keep_independent | planned | independent | Independent session-state PR; keep for maintainer review under plan-mode constraints. |

## Needs Human

- none
