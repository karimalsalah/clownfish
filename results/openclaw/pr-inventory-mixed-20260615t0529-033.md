---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-033"
mode: "plan"
run_id: "27527032070"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27527032070"
head_sha: "37c0e6443280c6799626053b1aa04915dc89839a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T06:03:52.242Z"
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
needs_human_count: 1
---

# pr-inventory-mixed-20260615T0529-033

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27527032070](https://github.com/openclaw/clownfish/actions/runs/27527032070)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification for 10 open PR candidates. No GitHub mutations were performed. One superseded closeout is planned for #81131 because the hydrated artifact shows it is open and already reviewed as superseded by the hydrated canonical issue #83511 and broader replacement PR #83988. Security-sensitive refs #87206 and #87046 are quarantined with route_security. The remaining open PRs are independent backlog items that should not be closed or merged by this shard.

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
| Needs human | 1 |

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
| #81131 | close_superseded | planned | superseded | The artifact provides live state for the target, canonical issue, and replacement PR. The PR is open, narrow, and already reviewed as superseded by a hydrated broader fix path. |
| #87061 | needs_human | planned | needs_human | This is a small independent PR with explicit maintainer-review gating; no close, merge, or fix action is appropriate in plan mode. |
| #87206 | route_security | planned | security_sensitive | The hydrated cluster artifact classifies this exact ref as security-sensitive, so it must be routed to central OpenClaw security handling only. |
| #87046 | route_security | planned | security_sensitive | The hydrated artifact identifies this exact PR as security-sensitive; quarantine only this item and continue classifying unrelated PRs. |
| #86716 | keep_independent | planned | independent | Standalone Discord delivery-accounting work; not a duplicate or closeout candidate in this shard. |
| #86681 | keep_independent | planned | independent | Small standalone documentation/comment cleanup with failing proof gate; keep open as independent rather than closing or routing security. |
| #87231 | keep_independent | planned | independent | Standalone Feishu feature/fix candidate with a hydrated open PR state and failing dependency/build gates; keep independent because this inventory shard should not close, merge, or invent a shared canonical. |
| #86577 | keep_independent | planned | independent | Standalone Discord reliability PR with unresolved change requests; keep independent in this inventory plan. |
| #86460 | keep_independent | planned | independent | Broad draft Control UI/dashboard PR that should remain open for its own review path, not closed or merged by this shard. |
| #86901 | keep_independent | planned | independent | Standalone Feishu message-delivery fix with review follow-up; not a closeout candidate in this inventory shard. |

## Needs Human

- #87061 requires maintainer review before any merge decision; no mutation is planned by this shard.
