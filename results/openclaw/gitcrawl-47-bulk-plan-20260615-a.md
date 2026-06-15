---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-47-bulk-plan-20260615-a"
mode: "plan"
run_id: "27521441910"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27521441910"
head_sha: "c7fde105fe4b1bf849faf5ed130f10118614c64c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:58:14.972Z"
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

# gitcrawl-47-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27521441910](https://github.com/openclaw/clownfish/actions/runs/27521441910)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Read-only plan for the 10 job-listed refs. The job marks #74163, #89724, #91107, #91176, #91438, #92081, and #92656 as security-signal refs, so those exact items are quarantined with route_security. The unrelated non-security work splits into separate Windows compatibility and QMD Windows path subclusters; no close, merge, fix, or PR-creation action is planned.

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
| #74163 | route_security | planned | security_sensitive | Security-signal refs are out of ProjectClownfish backlog cleanup scope. |
| #89724 | route_security | planned | security_sensitive | The item touches authentication, allowlists, bridge WebSocket behavior, and SecretRef-related surfaces, so it belongs in central security handling. |
| #90204 | keep_independent | planned | independent | This is a separate Windows compatibility PR, not a duplicate of the Microsoft tracker or Teams voice provider family. |
| #91107 | route_security | planned | security_sensitive | Already closed items receive no closure action; the security-signal classification is still routed read-only. |
| #91176 | route_security | planned | security_sensitive | The item touches call ingress, HMAC WebSocket media, and security-boundary-labeled behavior. |
| #91438 | route_security | planned | security_sensitive | Despite green checks, the job routes this exact Teams voice/video provider ref to central security handling. |
| #92081 | route_security | planned | security_sensitive | Security-signal routing is scoped to this item and does not block unrelated QMD/Windows classification. |
| #92302 | keep_related | planned | related | This issue and #92867 form a narrow QMD Windows path subcluster; keep related rather than closing before the fix lands. |
| #92656 | route_security | planned | security_sensitive | The item is explicitly security-sensitive in the hydrated artifact and linked to routed Teams CVI work. |
| #92867 | keep_related | planned | related | Keep as the candidate fix for the QMD Windows path subcluster; do not merge or close in this plan. |

## Needs Human

- none
