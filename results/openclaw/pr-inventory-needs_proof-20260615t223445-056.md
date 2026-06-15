---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-056"
mode: "plan"
run_id: "27583353695"
workflow_run_id: "27583353695"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583353695"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:55:41.568Z"
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
needs_human_count: 5
---

# pr-inventory-needs_proof-20260615T223445-056

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583353695](https://github.com/openclaw/clownfish/actions/runs/27583353695)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification for 25 candidate PRs. No GitHub mutations executed. One open source PR is planned for superseded closeout because a hydrated merged replacement already carries the fix and a credit-preserving Clownfish comment is already present; one already-closed PR is kept closed; five security-sensitive or validator-quarantined PRs are routed to central security handling; the remaining open PRs are kept independent or related for ordinary review/proof handling.

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
| Needs human | 5 |

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
| #90192 | keep_independent | planned | independent |  |
| #90216 | route_security | planned | security_sensitive | Security-sensitive item quarantined by validator; no close, merge, label, comment, or fix action planned. |
| #90252 | keep_closed | skipped | superseded | Already closed in hydrated preflight state. |
| #90754 | keep_related | planned | related |  |
| #65409 | close_superseded | planned | superseded |  |
| #93335 | keep_independent | planned | independent |  |
| #93343 | route_security | planned | security_sensitive | Security-sensitive item quarantined by validator; no close, merge, label, comment, or fix action planned. |
| #92711 | keep_independent | planned | independent |  |
| #93285 | keep_independent | planned | independent |  |
| #93352 | route_security | planned | security_sensitive | Security-sensitive item quarantined; no close, merge, label, comment, or fix action planned. |
| #92696 | keep_independent | planned | independent |  |
| #92898 | keep_independent | planned | independent |  |
| #92712 | keep_independent | planned | independent |  |
| #93332 | keep_independent | planned | independent |  |
| #92217 | keep_independent | planned | independent |  |
| #93350 | keep_independent | planned | independent |  |
| #70630 | keep_independent | planned | independent |  |
| #93365 | route_security | planned | security_sensitive | Security-sensitive item quarantined by validator; no close, merge, label, comment, or fix action planned. |
| #93368 | route_security | planned | security_sensitive | Security-sensitive item quarantined; no close, merge, label, comment, or fix action planned. |
| #93315 | keep_independent | planned | independent |  |
| #93268 | keep_independent | planned | independent |  |
| #93304 | keep_independent | planned | independent |  |
| #93372 | keep_independent | planned | independent |  |
| #40311 | keep_independent | planned | independent |  |
| #40877 | keep_independent | planned | independent |  |

## Needs Human

- #90216 routed to central OpenClaw security handling because deterministic validation marks it security-sensitive.
- #93343 routed to central OpenClaw security handling because deterministic validation marks it security-sensitive.
- #93352 routed to central OpenClaw security handling because the preflight security boundary marks it security-sensitive.
- #93365 routed to central OpenClaw security handling because deterministic validation marks it security-sensitive.
- #93368 routed to central OpenClaw security handling because the PR body describes untrusted context-file injection outside the workspace boundary.
