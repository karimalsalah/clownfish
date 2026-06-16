---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2346-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27595850296"
workflow_run_id: "27595850296"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27595850296"
head_sha: "7a8b7ab269d4c8246a3837f1013f6d9715d17c5e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T05:21:58.188Z"
canonical: "https://github.com/openclaw/openclaw/issues/39847"
canonical_issue: "https://github.com/openclaw/openclaw/issues/39847"
canonical_pr: "https://github.com/openclaw/openclaw/pull/50520"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-2346-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27595850296](https://github.com/openclaw/clownfish/actions/runs/27595850296)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/39847

## Summary

The original representative #39894 is already closed and obsolete. The hydrated evidence points to #39847 as the canonical report and #50520 as the open repair path, but both live refs are security-sensitive and must be routed to central OpenClaw security handling. No close, merge, or fix action is planned by Clownfish; closed historical refs are kept closed only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #39847 | route_security | planned | security_sensitive | Security-sensitive canonical issue is out of scope for Clownfish backlog cleanup and must go to central OpenClaw security handling. |
| #50520 | route_security | planned | security_sensitive | Open canonical repair PR is security-sensitive and not eligible for Clownfish merge, closeout, or fix planning. |
| #39894 | keep_closed | skipped | security_sensitive | Closed historical PR; keep as evidence only. |
| #51653 | keep_closed | skipped | superseded | Closed superseded PR; keep as evidence only. |
| #28170 | keep_closed | skipped | related | Closed linked context issue; evidence only. |
| #30405 | keep_closed | skipped | related | Closed linked context issue; evidence only. |
| #41355 | keep_closed | skipped | related | Closed related issue; evidence only. |

## Needs Human

- Central OpenClaw security handling must decide #39847 and #50520. Clownfish should not close, merge, label, comment on, or repair those security-sensitive live refs.
