---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-019"
mode: "plan"
run_id: "27526349321"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526349321"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:41:43.060Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-inventory-mixed-20260615T0529-019

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526349321](https://github.com/openclaw/clownfish/actions/runs/27526349321)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification for 10 open candidate PRs. No shared canonical was selected. Security-sensitive PRs were routed to central security handling; non-security PRs were kept for maintainer/backlog handling rather than closure or merge because this shard is not a dedupe cluster and merge/fix actions are blocked.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #72792 | keep_related | planned | related | Related to an already-fixed talk.config family, but recent maintainer activity and failing proof/checks make closure inappropriate. |
| #84472 | keep_related | planned | related | Substantial draft maintainer-review PR; keep in the inventory, no closure or merge action. |
| #73817 | route_security | planned | security_sensitive | Security-sensitive network/auth-boundary work is out of ProjectClownfish backlog-cleanup scope. |
| #76806 | keep_related | planned | related | Valid but blocked PR needing proof/conflict resolution; keep related to the inventory rather than close. |
| #77432 | keep_related | planned | related | Potentially useful focused PR, but it needs maintainer/review resolution outside this plan-only inventory pass. |
| #77784 | route_security | planned | security_sensitive | Delegated auth and token-boundary work must be routed to central security handling. |
| #85540 | keep_related | planned | related | Narrow Telegram behavior PR related to broader Telegram bot-mode work, but not safe to close or merge. |
| #79855 | keep_related | planned | related | Potentially useful channel/plugin SDK feature PR, blocked by proof/review status. |
| #78486 | route_security | planned | security_sensitive | The hydrated artifact explicitly marks this PR security-sensitive; route only this item and continue unrelated classifications. |
| #80386 | keep_related | planned | related | Strong candidate for maintainer review, but plan mode and blocked merge actions limit this to non-mutating classification. |

## Needs Human

- none
