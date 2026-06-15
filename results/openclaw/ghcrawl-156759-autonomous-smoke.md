---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156759-autonomous-smoke"
mode: "autonomous"
run_id: "27584188087"
workflow_run_id: "27584188087"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27584188087"
head_sha: "3eaef20c39c95c760c2eeb4e61adf6ea57afc054"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:57:44.397Z"
canonical: "https://github.com/openclaw/openclaw/pull/73491"
canonical_issue: "https://github.com/openclaw/openclaw/issues/57976"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73491"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156759-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27584188087](https://github.com/openclaw/clownfish/actions/runs/27584188087)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73491

## Summary

The GPU-only request has already landed on current main via #73491, carrying forward #58124 and closing #57976 with credit. The still-open #29384 asks for host IPC and is security-sensitive, so it is routed to central security handling. The hydrated #73491 record also contains a security bot finding about GPU passthrough isolation, so that closed PR is routed as a security-sensitive historical item instead of being kept as an ordinary closed canonical action.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #29384 | route_security | planned | security_sensitive | The unresolved `--ipc=host` request would deliberately relax sandbox namespace isolation and is already labeled/triaged as security-sensitive, so central OpenClaw security handling owns it. |
| #57976 | keep_closed | skipped | fixed_by_candidate | The original GPU passthrough request was fixed by the already-merged canonical PR #73491; no mutation is valid because the issue is already closed. |
| #58124 | keep_closed | skipped | superseded | The contributor PR was already superseded by the landed replacement #73491 with credit preserved, so no further action is planned. |
| #73491 | route_security | planned | security_sensitive | Because the hydrated PR record contains a security bot finding about sandbox isolation, the only safe non-mutating repair is to route #73491 to central security handling while preserving the already-closed historical evidence path. |

## Needs Human

- none
