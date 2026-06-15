---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-076"
mode: "plan"
run_id: "27583277982"
workflow_run_id: "27583277982"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583277982"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:55:41.050Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 28
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 7
---

# pr-inventory-ready_for_maintainer-20260615T223445-076

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583277982](https://github.com/openclaw/clownfish/actions/runs/27583277982)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification for openclaw/openclaw. The shard has no shared canonical; each hydrated PR is classified independently. No GitHub mutation, merge, fix, or low-signal close is planned. Open security-sensitive linked refs are routed to central security handling only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 28 |
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
| #75036 | route_security | planned | security_sensitive |  |
| #85335 | route_security | planned | security_sensitive |  |
| #86210 | route_security | planned | security_sensitive |  |
| #86085 | keep_independent | planned | independent |  |
| #86088 | keep_independent | planned | independent |  |
| #90731 | keep_closed | skipped | superseded |  |
| #86224 | keep_independent | planned | independent |  |
| #86233 | needs_human | planned | needs_human | Maintainer judgment needed for retention defaults and operator-facing behavior. |
| #86608 | needs_human | planned | needs_human | Maintainer decision needed before changing default agent instructions. |
| #86649 | keep_independent | planned | independent |  |
| #86674 | keep_independent | planned | independent |  |
| #86676 | keep_independent | planned | independent |  |
| #86776 | keep_independent | planned | independent |  |
| #86893 | keep_related | planned | related |  |
| #86900 | needs_human | planned | needs_human | Maintainer judgment needed for compaction outage policy. |
| #86913 | needs_human | planned | needs_human | Maintainer judgment needed for the new operator RPC contract. |
| #87061 | keep_independent | planned | independent |  |
| #88908 | needs_human | planned | needs_human | Maintainer judgment needed for operator-facing shutdown timeout behavior. |
| #87121 | keep_independent | planned | independent |  |
| #87205 | keep_related | planned | related |  |
| #87231 | keep_independent | planned | independent |  |
| #79568 | keep_independent | planned | independent |  |
| #92340 | needs_human | planned | needs_human | Maintainer judgment needed for Feishu meeting-invite activation boundary. |
| #87343 | keep_independent | planned | independent |  |
| #89154 | needs_human | planned | needs_human | Maintainer judgment needed for new internal hook API and save-ordering contract. |
| #90970 | keep_independent | planned | independent |  |
| #90992 | keep_closed | skipped | independent |  |
| #84540 | keep_independent | planned | independent |  |

## Needs Human

- #86233: maintainer decision on Codex log-retention defaults and upstream-vs-OpenClaw ownership.
- #86608: maintainer decision on making existing-solutions guardrails default agent instructions.
- #86900: maintainer decision on compaction circuit-breaker outage policy threshold.
- #86913: maintainer decision on new gateway.restart.pending operator RPC contract.
- #88908: maintainer decision on operator-facing gateway post-shutdown exit timeout.
- #92340: maintainer decision on Feishu VC meeting invite activation/opt-in boundary.
- #89154: maintainer decision on new ACP transcript-save hook API and save-ordering contract.
