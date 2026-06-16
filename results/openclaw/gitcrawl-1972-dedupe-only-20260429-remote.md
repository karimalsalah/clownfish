---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1972-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27595848819"
workflow_run_id: "27595848819"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27595848819"
head_sha: "7a8b7ab269d4c8246a3837f1013f6d9715d17c5e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T05:21:58.179Z"
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

# gitcrawl-1972-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27595848819](https://github.com/openclaw/clownfish/actions/runs/27595848819)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Hydrated preflight shows the original representative #45892 and most job candidates are already closed. No single open canonical safely replaces #45892 for the whole cluster: the remaining live candidates split into distinct gateway shutdown/systemd restart subfamilies. No close, merge, or fix PR action is safe or allowed here. Security-sensitive hydrated refs are routed exactly by ref; the three live non-security PRs are kept open as related follow-up work because each has unique scope plus failing proof/check or unresolved bot-review blockers.

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
| #40958 | route_security | planned | security_sensitive | Security-sensitive item must be quarantined to central OpenClaw security handling. |
| #42544 | route_security | planned | security_sensitive | Security-sensitive item must be quarantined to central OpenClaw security handling. |
| #43443 | route_security | planned | security_sensitive | Security-sensitive item must be quarantined to central OpenClaw security handling. |
| #47776 | route_security | planned | security_sensitive | Security-sensitive item must be quarantined to central OpenClaw security handling. |
| #48476 | route_security | planned | security_sensitive | Security-sensitive item must be quarantined to central OpenClaw security handling. |
| #57524 | route_security | planned | security_sensitive | Security-sensitive item must be quarantined to central OpenClaw security handling. |
| #78686 | route_security | planned | security_sensitive | Security-sensitive linked item must be quarantined to central OpenClaw security handling. |
| #56258 | keep_related | planned | related | Related but not a true duplicate: it targets a specific gateway shutdown availability gap with unresolved proof/review blockers. |
| #66735 | keep_related | planned | related | Related systemd restart work with useful code, but it is not the cluster-wide canonical and is not merge/close ready. |
| #70056 | keep_related | planned | related | Related but independently scoped gateway channel timeout bug; keep open because unresolved review blockers and proof failure prevent close or merge. |

## Needs Human

- none
