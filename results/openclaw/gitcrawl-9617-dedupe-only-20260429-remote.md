---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-9617-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27599301817"
workflow_run_id: "27599301817"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599301817"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:46:59.541Z"
canonical: "https://github.com/openclaw/openclaw/issues/86743"
canonical_issue: "https://github.com/openclaw/openclaw/issues/86743"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-9617-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599301817](https://github.com/openclaw/clownfish/actions/runs/27599301817)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/86743

## Summary

Live hydrated state shows the original representative #57627 and the listed candidate #63005 are already closed. The current open non-security canonical path is #86743, the refreshed raw external session-key split issue. #83368 is a related open implementation PR but is not merge-ready and merge/fix actions are blocked by this job. #55351 is explicitly security-sensitive in the preflight artifact and is routed only to central security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #45697 | keep_closed | skipped | related | Historical related session-state context only. |
| #49202 | keep_closed | skipped | related | Historical related UUID-session context only. |
| #55351 | route_security | planned | security_sensitive | Quarantine the exact security-sensitive PR only; continue non-security classification for the rest of the cluster. |
| #57627 | keep_closed | skipped | related | Obsolete closed representative; not the current canonical for the remaining open raw-key split lane. |
| #60543 | keep_closed | skipped | related | Historical related session-state context only. |
| #63005 | keep_closed | skipped | superseded | Already superseded by the current open canonical issue #86743. |
| #83368 | keep_related | planned | related | Useful related PR, but not merge-ready and no repair/merge action is allowed in this job. |
| #86743 | keep_canonical | planned | canonical | Best surviving non-security canonical issue for the remaining open raw external session-key split lane. |

## Needs Human

- none
