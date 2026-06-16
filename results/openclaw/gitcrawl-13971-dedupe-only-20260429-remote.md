---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13971-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27597513937"
workflow_run_id: "27597513937"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597513937"
head_sha: "ea38411ccee73488f92b6963fa93366cd993f2d1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:04:13.490Z"
canonical: "#7178"
canonical_issue: null
canonical_pr: "#7178"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13971-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597513937](https://github.com/openclaw/clownfish/actions/runs/27597513937)

Workflow conclusion: success

Worker result: planned

Canonical: #7178

## Summary

Classified the eight job candidates using the preflight artifact as live state. Security-shaped open refs are routed to central security handling only. Already-closed candidates are not given close actions. The only open non-security candidate lacks enough hydrated issue detail in the compacted artifact for a safe duplicate close, so it is kept related for maintainer follow-up rather than mutated.

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
| #12441 | route_security | planned | security_sensitive | Auth bootstrap and reverse-proxy bearer-token behavior is security-sensitive under the job security boundary. |
| #32473 | route_security | planned | security_sensitive | Remote insecure-context device identity behavior concerns auth/security posture. |
| #41740 | route_security | planned | security_sensitive | TLS fingerprint handling for exec approvals is security-sensitive enough to route this exact open issue. |
| #55600 | keep_related | planned | related | Same Control UI logo/favicon family, but not enough hydrated details to safely plan a close. |
| #63427 | keep_closed | skipped | fixed_by_candidate | Already closed in live state. |
| #65408 | keep_closed | skipped | fixed_by_candidate | Already closed in live state. |
| #66279 | keep_closed | skipped | security_sensitive | Already closed and security-sensitive; no mutation should be planned. |
| #66946 | keep_closed | skipped | related | Already closed in live state. |

## Needs Human

- none
