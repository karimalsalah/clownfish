---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-028"
mode: "plan"
run_id: "27580942551-1-29"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.223Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 8
---

# pr-inventory-needs_proof-20260615T223445-028

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was selected because the job explicitly says this is not a dedupe cluster. Deterministically security-sensitive PRs are routed to central security handling with non-mutating route_security actions; unavailable live-state refs remain blocked for human review; already-closed refs stay skipped.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 8 |

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
| #78075 | route_security | planned | security_sensitive | Quarantine exact PR to central OpenClaw security handling; no close, merge, label, comment, or fix action is planned. |
| #78085 | route_security | planned | security_sensitive | Quarantine exact PR to central OpenClaw security handling; no close, merge, label, comment, or fix action is planned. |
| #78124 | route_security | planned | security_sensitive | Quarantine exact PR to central OpenClaw security handling; no close, merge, label, comment, or fix action is planned. |
| #78129 | route_security | planned | security_sensitive | Quarantine exact PR to central OpenClaw security handling; no close, merge, label, comment, or fix action is planned. |
| #78130 | route_security | planned | security_sensitive | Quarantine exact PR to central OpenClaw security handling; no close, merge, label, comment, or fix action is planned. |
| #78154 | route_security | planned | security_sensitive | Quarantine exact PR to central OpenClaw security handling; no close, merge, label, comment, or fix action is planned. |
| #78410 | route_security | planned | security_sensitive | Quarantine exact PR to central OpenClaw security handling; no close, merge, label, comment, or fix action is planned. |
| #78440 | route_security | planned | security_sensitive | Quarantine exact PR to central OpenClaw security handling; no close, merge, label, comment, or fix action is planned. |
| #78453 | route_security | planned | security_sensitive | Quarantine exact PR to central OpenClaw security handling; no close, merge, label, comment, or fix action is planned. |
| #78459 | needs_human | blocked | needs_human | Specific human review signal blocks automated classification beyond noting it as an open candidate. |
| #78486 | route_security | planned | security_sensitive | Quarantine exact PR to central OpenClaw security handling; no close, merge, label, comment, or fix action is planned. |
| #78507 | route_security | planned | security_sensitive | Quarantine exact draft PR to central OpenClaw security handling; no close, merge, label, comment, or fix action is planned. |
| #42908 | route_security | planned | security_sensitive | Quarantine exact PR to central OpenClaw security handling; no close, merge, label, comment, or fix action is planned. |
| #93059 | route_security | planned | security_sensitive | Quarantine exact draft PR to central OpenClaw security handling; no close, merge, label, comment, or fix action is planned. |
| #43951 | route_security | planned | security_sensitive | Quarantine exact PR to central OpenClaw security handling; no close, merge, label, comment, or fix action is planned. |
| #56785 | route_security | planned | security_sensitive | Quarantine exact PR to central OpenClaw security handling; no close, merge, label, comment, or fix action is planned. |
| #58732 | route_security | planned | security_sensitive | Quarantine exact PR to central OpenClaw security handling; no close, merge, label, comment, or fix action is planned. |
| #59821 | keep_closed | skipped |  | Already closed in live artifact; no mutation should be planned. |
| #60445 | needs_human | blocked | needs_human | Specific live-state gap prevents conservative PR classification for this ref. |
| #60922 | needs_human | blocked | needs_human | Specific live-state gap prevents reliable non-mutating classification. |
| #64503 | needs_human | blocked | needs_human | Specific live-state gap prevents classification. |
| #64800 | needs_human | blocked | needs_human | Specific live-state gap prevents classification. |
| #78036 | needs_human | blocked | needs_human | Specific live-state gap prevents classification. |
| #78544 | needs_human | blocked | needs_human | Specific live-state gap prevents classification. |
| #78556 | needs_human | blocked | needs_human | Specific live-state gap prevents classification. |

## Needs Human

- #78459 has explicit clawsweeper:human-review signal and unhydrated discussion, requiring maintainer review before automation can classify beyond open candidate status.
- #60445 live state unavailable from preflight artifact due GitHub API rate limit.
- #60922 live state unavailable from preflight artifact due GitHub API rate limit.
- #64503 live state unavailable from preflight artifact due GitHub API rate limit.
- #64800 live state unavailable from preflight artifact due GitHub API rate limit.
- #78036 live state unavailable from preflight artifact due GitHub API rate limit.
- #78544 live state unavailable from preflight artifact due GitHub API rate limit.
- #78556 live state unavailable from preflight artifact due GitHub API rate limit.
