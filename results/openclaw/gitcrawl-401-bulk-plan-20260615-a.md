---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-401-bulk-plan-20260615-a"
mode: "plan"
run_id: "27526000896"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526000896"
head_sha: "df80d4eec7f44faa70d7ec54ce187a7ddabe040a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:31:02.381Z"
canonical: "#38829"
canonical_issue: "#38829"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-401-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526000896](https://github.com/openclaw/clownfish/actions/runs/27526000896)

Workflow conclusion: success

Worker result: planned

Canonical: #38829

## Summary

Plan-mode classification completed from the hydrated preflight artifact. The only actionable open candidate, #73402, is explicitly marked security-sensitive and should be routed to central OpenClaw security handling without Clownfish close, merge, label, comment, or fix action. Existing-overlap issue #38829 remains the non-actionable context tracker for the underlying TUI live transcript bug; closed linked refs are historical evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #73402 | route_security | planned | security_sensitive | Security-sensitive PR must be routed to central OpenClaw security handling; no Clownfish mutation is planned in plan mode. |
| #38829 | keep_related | skipped | related | Existing-overlap context is not actionable in this cluster; retain as the contextual canonical tracker for the non-security TUI live transcript bug. |
| #41964 | keep_closed | skipped | superseded | Already closed historical PR; no action planned. |
| #43341 | keep_closed | skipped | duplicate | Already closed duplicate context; no action planned. |
| #51691 | keep_closed | skipped | related | Already closed related context; no action planned. |

## Needs Human

- none
