---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-012"
mode: "plan"
run_id: "27526341267"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526341267"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:41:43.051Z"
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
needs_human_count: 2
---

# pr-inventory-mixed-20260615T0529-012

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526341267](https://github.com/openclaw/clownfish/actions/runs/27526341267)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was selected because the job is an inventory shard. Security-sensitive PRs are routed to central security handling; unrelated non-security PRs are kept open for normal maintainer/review flow. No GitHub mutations are planned.

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
| Needs human | 2 |

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
| #84590 | route_security | planned | security_sensitive | Secret/credential residue scanning is security-shaped and the artifact explicitly routes this ref to central security handling. |
| #84680 | keep_independent | planned | independent | Focused active PR with no duplicate/superseded evidence in this inventory shard. |
| #78742 | needs_human | planned | needs_human | The artifact shows active author follow-up and a failed proof gate; maintainer judgment is needed on whether the supplied smoke satisfies the policy gate. |
| #84738 | keep_independent | planned | independent | Active non-security provider/config hardening PR; no inventory evidence supports duplicate, superseded, or low-signal closure. |
| #84761 | route_security | planned | security_sensitive | The PR explicitly concerns plaintext provider API key residue and is listed by the security boundary for route-only handling. |
| #84763 | needs_human | planned | needs_human | The PR is active and not closable from inventory evidence, but failed proof plus config/runtime behavior changes require maintainer/technical judgment. |
| #84689 | keep_independent | planned | independent | Active focused PR with no hydrated evidence that it is a duplicate or superseded by another listed candidate. |
| #81104 | route_security | planned | security_sensitive | Runtime trusted-tool attestation enforcement crosses the security boundary and must be handled by central security review. |
| #84868 | keep_independent | planned | independent | Active non-security auth-provider/config PR; no clear duplicate/superseded relation is established in this inventory shard. |
| #84955 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation should be planned. |

## Needs Human

- #78742: failed proof gate with later author-supplied smoke report needs maintainer judgment.
- #84763: failed Real behavior proof on ACPX provider env scrubbing needs maintainer/technical judgment.
