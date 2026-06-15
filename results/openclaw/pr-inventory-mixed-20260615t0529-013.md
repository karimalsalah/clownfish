---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-013"
mode: "plan"
run_id: "27526342550"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526342550"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:41:43.054Z"
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

# pr-inventory-mixed-20260615T0529-013

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526342550](https://github.com/openclaw/clownfish/actions/runs/27526342550)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only inventory classification for 10 listed PRs: 5 security-sensitive open PRs routed to central security handling, 2 non-security open PRs kept independently for normal maintainer/review follow-up, and 3 already-closed PRs kept closed with skipped actions.

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
| #84978 | route_security | planned | security_sensitive | Security-boundary automation/proof workflow changes are outside ProjectClownfish backlog cleanup; route this exact PR only. |
| #84934 | route_security | planned | security_sensitive | The PR crosses security-boundary/auth-provider-labeled surfaces and is explicitly routed by preflight. |
| #84987 | route_security | planned | security_sensitive | Plaintext API key handling and the linked security roadmap must go through central security handling. |
| #82354 | keep_independent | planned | independent | Useful open PR with unresolved validation/review blockers; keep it in the normal PR queue. |
| #84389 | route_security | planned | security_sensitive | Gateway endpoint surface with security-boundary routing should be quarantined to central security review. |
| #84547 | keep_independent | planned | independent | Useful but blocked open PR; no close, merge, or fix action is allowed by this plan job. |
| #61519 | route_security | planned | security_sensitive | Security-analysis findings on CI automation/tooling make this item out of scope for ProjectClownfish mutation. |
| #85098 | keep_closed | skipped | superseded | Already closed; preserve current state only. |
| #85147 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented on main; preserve current state only. |
| #85148 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented on main; preserve current state only. |

## Needs Human

- none
