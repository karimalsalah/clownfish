---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156944-autonomous-smoke"
mode: "autonomous"
run_id: "27584189332"
workflow_run_id: "27584189332"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27584189332"
head_sha: "3eaef20c39c95c760c2eeb4e61adf6ea57afc054"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:57:44.406Z"
canonical: "https://github.com/openclaw/openclaw/issues/14344"
canonical_issue: "https://github.com/openclaw/openclaw/issues/14344"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156944-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27584189332](https://github.com/openclaw/clownfish/actions/runs/27584189332)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/14344

## Summary

The hydrated preflight marks #14344 and linked PR #70813 as security-sensitive, so Clownfish must quarantine those exact refs and avoid close/merge/fix mutations. #38723 is already closed and remains historical duplicate evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #14344 | route_security | planned | security_sensitive | Security-sensitive open issue must be quarantined to central OpenClaw security handling; Clownfish should not classify it for duplicate closeout or build a fix path. |
| #38723 | keep_closed | skipped | duplicate | Already closed duplicate context ref; no mutation should be planned. |
| #70813 | route_security | planned | security_sensitive | Security-sensitive linked PR must be routed to central OpenClaw security handling; merge, repair, replacement fix, and closeout are out of scope for this worker. |

## Needs Human

- none
