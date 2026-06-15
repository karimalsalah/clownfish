---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-092"
mode: "plan"
run_id: "27583278320"
workflow_run_id: "27583278320"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583278320"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:55:41.112Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 27
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-inventory-ready_for_maintainer-20260615T223445-092

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583278320](https://github.com/openclaw/clownfish/actions/runs/27583278320)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Planned conservative classification for the PR inventory shard. No shared canonical was selected, no GitHub mutation was planned, and security-linked refs were quarantined separately.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 27 |
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
| #52664 | route_security | planned | security_sensitive | Security-sensitive linked PR is out of ProjectClownfish backlog-cleanup scope. |
| #89217 | route_security | planned | security_sensitive | Security-sensitive linked issue should be handled by central OpenClaw security review. |
| #91481 | route_security | planned | security_sensitive | Security-linked approval-delivery PR should be routed to central OpenClaw security handling rather than backlog-cleanup triage. |
| #91963 | keep_independent | planned | independent | Standalone PR with active validation blockers; keep it open for author/maintainer follow-up. |
| #91981 | keep_independent | planned | independent | Standalone ready-for-maintainer PR; no cleanup action is appropriate. |
| #91984 | keep_independent | planned | independent | Standalone PR with proof blocker; keep open for author/maintainer follow-up. |
| #92012 | keep_independent | planned | independent | Low-signal closure is not enabled; keep as an independent docs PR for maintainer review. |
| #92035 | keep_independent | planned | independent | Standalone feature/bug PR with active check and review blockers; keep open. |
| #92040 | keep_independent | planned | independent | Standalone provider PR with validation blockers; keep open. |
| #92063 | keep_independent | planned | independent | Standalone ready-for-maintainer PR; no duplicate or superseded evidence. |
| #93376 | keep_independent | planned | independent | Standalone PR with broad validation failures; keep open for maintainer/author follow-up. |
| #93369 | keep_independent | planned | independent | Standalone PR with validation blockers; keep open. |
| #92126 | keep_independent | planned | independent | Standalone open PR; closed historical alternatives do not justify a close action. |
| #92147 | keep_independent | planned | independent | Standalone compatibility PR requiring maintainer review; no cleanup action is supported. |
| #92165 | keep_independent | planned | independent | Standalone PR with author/review follow-up pending; keep open. |
| #92178 | keep_independent | planned | independent | Standalone active PR; no duplicate or superseded target is established. |
| #92185 | route_security | planned | security_sensitive | Validator-required security quarantine for exec/gateway-output PR; route to central OpenClaw security handling. |
| #92223 | keep_independent | planned | independent | Standalone large PR for maintainer review. |
| #92236 | keep_independent | planned | independent | Standalone ready-for-maintainer PR. |
| #92237 | keep_independent | planned | independent | Standalone ready-for-maintainer PR. |
| #92025 | keep_independent | planned | independent | Standalone PR with validation blockers; keep open. |
| #92261 | keep_independent | planned | independent | Standalone PR with author/maintainer follow-up pending. |
| #92283 | keep_independent | planned | independent | Standalone PR with author/maintainer follow-up pending. |
| #92287 | keep_independent | planned | independent | Standalone PR with Telegram proof blocker; keep open. |
| #91245 | keep_independent | planned | independent | Standalone PR with active dependency/check blockers; keep open. |
| #92328 | keep_independent | planned | independent | Standalone replacement PR; keep it open for maintainer review. |
| #92383 | keep_independent | planned | independent | Standalone ready-for-maintainer PR. |

## Needs Human

- none
