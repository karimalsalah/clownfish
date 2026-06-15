---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-087"
mode: "plan"
run_id: "27583278568"
workflow_run_id: "27583278568"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583278568"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:55:41.160Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 26
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 20
---

# pr-inventory-ready_for_maintainer-20260615T223445-087

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583278568](https://github.com/openclaw/clownfish/actions/runs/27583278568)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode inventory classification only. The hydrated artifact shows no shared canonical for this shard, so no duplicate/superseded closure is planned. Open PRs with ready-maintainer labels or unresolved review/technical gates are kept for human maintainer judgment; waiting-on-author/WIP items are kept open as independent inventory items. The linked security-sensitive issue #69799 is routed to central security handling only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 26 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 20 |

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
| #69799 | route_security | planned | security_sensitive | Security-sensitive linked item is out of scope for Clownfish backlog cleanup. |
| #76092 | keep_independent | planned | independent | Useful open contributor PR with active author/review follow-up; no close, merge, or fix action is allowed in this plan job. |
| #89168 | needs_human | planned | needs_human | Requires maintainer technical judgment on browser process-control behavior and review-bot finding; no merge is allowed by this job. |
| #89483 | needs_human | planned | needs_human | Automerge is armed but explicitly paused for human review; no merge action is permitted in plan mode. |
| #90305 | needs_human | planned | needs_human | Requires maintainer technical judgment on service supervisor semantics; no merge action is allowed. |
| #90356 | needs_human | planned | needs_human | Provider-auth compatibility change needs maintainer judgment before any merge path. |
| #90468 | needs_human | planned | needs_human | Prompt parsing compatibility behavior needs normal maintainer review; no closure is warranted. |
| #90474 | keep_independent | planned | independent | Keep open as an independent contributor PR pending author/maintainer follow-up; no low-signal or superseded closure is safe. |
| #90490 | keep_independent | planned | independent | Useful open PR with active follow-up; keep open independently rather than closing or merging. |
| #90503 | needs_human | planned | needs_human | Needs normal maintainer technical review of session-store cleanup behavior. |
| #90514 | needs_human | planned | needs_human | Session/auth-provider behavior change requires maintainer judgment before merge. |
| #90517 | needs_human | planned | needs_human | Needs maintainer review of gateway/web-login error-message behavior. |
| #90547 | needs_human | planned | needs_human | Attribution mapping is not low-signal; it needs maintainer review rather than automated closure. |
| #90566 | needs_human | planned | needs_human | Needs maintainer review of cron/subagent warning behavior; no closeout is appropriate. |
| #90572 | needs_human | planned | needs_human | Channel message-delivery semantics need maintainer review before merge. |
| #90592 | needs_human | planned | needs_human | Needs maintainer review; already-closed linked issue prevents any closure action. |
| #90622 | needs_human | planned | needs_human | Partial mitigation requires maintainer decision; it is not a duplicate/superseded closeout candidate. |
| #90648 | needs_human | planned | needs_human | Discord mention rewriting behavior needs maintainer review before merge. |
| #90703 | keep_independent | planned | independent | Open feature/compatibility PR with author follow-up pending; keep independently, with no closure or merge action. |
| #90727 | needs_human | planned | needs_human | Memory index/session-state behavior requires maintainer review. |
| #90745 | needs_human | planned | needs_human | Requires maintainer judgment and failing-check repair outside this plan job. |
| #90749 | needs_human | planned | needs_human | Voice-call provider contract and message-delivery behavior need maintainer review. |
| #90750 | needs_human | planned | needs_human | Diagnostics state and telemetry contract changes need maintainer review. |
| #93291 | needs_human | planned | needs_human | Message-thread dedupe behavior needs maintainer review; no closure action applies. |
| #90902 | needs_human | planned | needs_human | Protocol/data-format boundary change requires maintainer review before merge. |
| #93276 | keep_independent | planned | independent | WIP useful PR with unresolved review feedback and author follow-up; keep open independently. |

## Needs Human

- #89168 browser managed-Chrome process-control and review finding
- #89483 automerge/human-review pause
- #90305 gateway supervisor stop policy
- #90356 legacy OAuth provider-usage compatibility
- #90468 prompt-template parsing compatibility
- #90503 session temp-file sweep behavior
- #90514 stale fallback model/session reset behavior
- #90517 web-login repair-hint behavior
- #90547 contributor attribution mapping
- #90566 cron announce skip warning behavior
- #90572 Feishu self-authored echo handling
- #90592 Synology Chat deliver timeout removal
- #90622 partial lsof batching mitigation
- #90648 Discord mention rewriting behavior
- #90727 memory index handle refresh behavior
- #90745 reply metadata/runtime-context change with failing checks
- #90749 realtime voice-call provider contract
- #90750 diagnostics activity/telemetry contract
- #93291 Mattermost partial send reconciliation
- #90902 MCP image result schema boundary
