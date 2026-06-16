---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1953-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27597513799"
workflow_run_id: "27597513799"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597513799"
head_sha: "ea38411ccee73488f92b6963fa93366cd993f2d1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:04:13.481Z"
canonical: "#36314"
canonical_issue: "#36314"
canonical_pr: null
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1953-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597513799](https://github.com/openclaw/clownfish/actions/runs/27597513799)

Workflow conclusion: success

Worker result: planned

Canonical: #36314

## Summary

Planned non-mutating classification only. The original representative #43551 is closed, so the only open non-security canonical path in this candidate set is #36314 for the Gateway resilience/self-healing family. Security-sensitive open items are quarantined individually. Already-closed candidates are kept closed with no close actions.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
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
| #8719 | route_security | planned | security_sensitive | Security-profile architecture is out of ProjectClownfish cleanup scope and should be routed to central OpenClaw security handling. |
| #9993 | route_security | planned | security_sensitive | Reject-capable config mutation hooks touch sensitive write boundaries and should be quarantined to central security/product review. |
| #12506 | route_security | planned | security_sensitive | Unified security profile work is security-sensitive architecture, not safe dedupe closure. |
| #13362 | keep_closed | skipped | superseded | Already closed as duplicate/superseded; no mutation should be emitted. |
| #14526 | route_security | planned | security_sensitive | Update-integrated backup/restore and rollback can handle secrets and state; route security-sensitive decision only for this item. |
| #16351 | route_security | planned | security_sensitive | Secret-handling CLI behavior is security-sensitive and should not be deduped or closed by this worker. |
| #36314 | keep_canonical | planned | canonical | Best surviving non-security canonical for the Gateway resilience/self-healing portion of this cluster. |
| #38249 | keep_closed | skipped | duplicate | Already closed as duplicate of a broader scanner/security-sensitive path; keep closed only. |
| #40652 | keep_closed | skipped | fixed_by_candidate | Already closed in live state; no further action in this cluster. |
| #50561 | route_security | planned | security_sensitive | Unattended startup config mutation can affect auth, sandbox, channel, and plugin policy; route security-sensitive item only. |
| #55347 | keep_closed | skipped | duplicate | Already closed and consolidated under the current non-security canonical #36314. |
| #62455 | keep_closed | skipped | fixed_by_candidate | Already fixed and closed on main; no action needed. |

## Needs Human

- none
