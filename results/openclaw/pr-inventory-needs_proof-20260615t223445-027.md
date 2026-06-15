---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-027"
mode: "plan"
run_id: "27583351385"
workflow_run_id: "27583351385"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583351385"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:55:41.418Z"
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
needs_human_count: 0
---

# pr-inventory-needs_proof-20260615T223445-027

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583351385](https://github.com/openclaw/clownfish/actions/runs/27583351385)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. No GitHub mutations are planned. Security-shaped PRs are routed to central security handling; the remaining hydrated PRs are kept as independent open candidates because this shard has no shared canonical and merge/fix actions are blocked. Unavailable refs are kept non-mutating because live state and updated_at were not available from the preflight artifact.

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
| #59517 | keep_closed | skipped | superseded | Already closed in live preflight state; no action needed. |
| #75138 | route_security | planned | security_sensitive | Security-sensitive secret/env handling signal must be routed to central OpenClaw security handling. |
| #75139 | keep_independent | planned | independent | Open, focused PR with missing proof/rebase; no close, merge, or fix action is allowed by the job. |
| #75141 | keep_independent | planned | independent | Open, focused PR still needs proof; no close, merge, or fix action is allowed by the job. |
| #75951 | route_security | planned | security_sensitive | Security-sensitive leaked-key/credential-remediation signal must be routed to central OpenClaw security handling. |
| #76034 | keep_independent | planned | independent | Open broad feature PR with failed proof/checks; no close, merge, or fix action is allowed by the job. |
| #76141 | keep_independent | planned | independent | Live preflight state unavailable; keep non-mutating and independent for a later hydrated run. |
| #76175 | keep_independent | planned | independent | Live preflight state unavailable; keep non-mutating and independent for a later hydrated run. |
| #76230 | keep_independent | planned | independent | Live preflight state unavailable; keep non-mutating and independent for a later hydrated run. |
| #76234 | keep_independent | planned | independent | Live preflight state unavailable; keep non-mutating and independent for a later hydrated run. |
| #76341 | keep_independent | planned | independent | Live preflight state unavailable; keep non-mutating and independent for a later hydrated run. |
| #76364 | keep_independent | planned | independent | Live preflight state unavailable; keep non-mutating and independent for a later hydrated run. |
| #76473 | keep_independent | planned | independent | Live preflight state unavailable; keep non-mutating and independent for a later hydrated run. |
| #76479 | keep_independent | planned | independent | Live preflight state unavailable; keep non-mutating and independent for a later hydrated run. |
| #76590 | keep_independent | planned | independent | Live preflight state unavailable; keep non-mutating and independent for a later hydrated run. |
| #76617 | keep_independent | planned | independent | Live preflight state unavailable; keep non-mutating and independent for a later hydrated run. |
| #76618 | keep_independent | planned | independent | Live preflight state unavailable; keep non-mutating and independent for a later hydrated run. |
| #76631 | keep_independent | planned | independent | Live preflight state unavailable; keep non-mutating and independent for a later hydrated run. |
| #76709 | keep_independent | planned | independent | Live preflight state unavailable; keep non-mutating and independent for a later hydrated run. |
| #76717 | keep_independent | planned | independent | Live preflight state unavailable; keep non-mutating and independent for a later hydrated run. |
| #77996 | keep_independent | planned | independent | Live preflight state unavailable; keep non-mutating and independent for a later hydrated run. |
| #78020 | keep_independent | planned | independent | Live preflight state unavailable; keep non-mutating and independent for a later hydrated run. |
| #78026 | keep_independent | planned | independent | Live preflight state unavailable; keep non-mutating and independent for a later hydrated run. |
| #78033 | keep_independent | planned | independent | Live preflight state unavailable; keep non-mutating and independent for a later hydrated run. |
| #78034 | keep_independent | planned | independent | Live preflight state unavailable; keep non-mutating and independent for a later hydrated run. |

## Needs Human

- none
