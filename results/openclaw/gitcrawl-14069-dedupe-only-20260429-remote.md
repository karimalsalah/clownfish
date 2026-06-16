---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14069-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27599299474"
workflow_run_id: "27599299474"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599299474"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:46:59.498Z"
canonical: "https://github.com/openclaw/openclaw/issues/49104"
canonical_issue: "https://github.com/openclaw/openclaw/issues/49104"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14069-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599299474](https://github.com/openclaw/clownfish/actions/runs/27599299474)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/49104

## Summary

Hydrated state shows the old representative #49337 is closed and superseded by the still-open canonical issue #49104. Both job candidate PRs #48512 and #49996 are now closed and security-sensitive in the preflight artifact, so they are routed only to central security handling; no close/comment/label/merge/fix mutation is planned.

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
| #49104 | keep_canonical | planned | canonical | Keep the live canonical issue open; this dedupe-only job cannot raise a fix PR. |
| #48512 | route_security | planned | security_sensitive | Quarantine only this exact security-sensitive ref to central OpenClaw security handling. |
| #49996 | route_security | planned | security_sensitive | Quarantine only this exact security-sensitive ref to central OpenClaw security handling. |
| #49337 | keep_closed | skipped | superseded | Closed context ref; evidence only. |
| #51915 | keep_closed | skipped | fixed_by_candidate | Closed context ref; evidence only. |
| #53064 | keep_closed | skipped | related | Closed context ref; evidence only. |
| #70742 | keep_closed | skipped | fixed_by_candidate | Closed context ref; evidence only. |

## Needs Human

- none
