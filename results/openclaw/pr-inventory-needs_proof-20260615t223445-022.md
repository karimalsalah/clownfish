---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-022"
mode: "plan"
run_id: "27580942551-1-23"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.211Z"
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

# pr-inventory-needs_proof-20260615T223445-022

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No GitHub mutations planned. Open non-security PRs are kept independent for normal maintainer review/proof; already-closed non-security PRs are skipped as closed; vulnerability-shaped or security-boundary PRs are routed to central security handling.

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
| #90550 | keep_closed | skipped |  | Already closed in live preflight state. |
| #90617 | route_security | planned | security_sensitive | Security-boundary PRs are out of scope for ProjectClownfish cleanup and must route to central OpenClaw security handling. |
| #50250 | keep_independent | planned | independent | Independent open PR needing normal proof/review, not duplicate cleanup. |
| #47087 | keep_independent | planned | independent | Draft independent PR needing author/maintainer follow-up. |
| #91414 | keep_closed | skipped |  | Already closed in live preflight state. |
| #91545 | keep_closed | skipped |  | Already closed in live preflight state. |
| #91596 | keep_closed | skipped |  | Already closed in live preflight state. |
| #48690 | keep_independent | planned | independent | Independent open PR needing proof and review-bot resolution. |
| #44098 | route_security | planned | security_sensitive | The PR makes a vulnerability-shaped sandbox/availability claim, so it should be quarantined to central OpenClaw security handling. |
| #91655 | keep_closed | skipped |  | Already closed in live preflight state. |
| #91459 | keep_closed | skipped |  | Already closed in live preflight state. |
| #91812 | keep_closed | skipped |  | Already closed in live preflight state. |
| #60402 | keep_independent | planned | independent | Independent open PR needing proof and review-bot resolution. |
| #48278 | keep_independent | planned | independent | Independent config PR needing proof and review follow-up. |
| #87691 | keep_independent | planned | independent | Independent open PR needing real behavior proof. |
| #87707 | keep_independent | planned | independent | Independent open PR needing proof. |
| #88270 | keep_independent | planned | independent | Independent open PR needing proof and technical review. |
| #88506 | keep_independent | planned | independent | Draft broad feature PR needing maintainer review outside this cleanup shard. |
| #88507 | keep_independent | planned | independent | Draft broad feature PR needing proof and technical review. |
| #88522 | keep_independent | planned | independent | Draft channel behavior PR needing proof. |
| #88531 | keep_independent | planned | independent | Independent open PR that may be promising but cannot be merged from this plan-only shard. |
| #91994 | route_security | planned | security_sensitive | Security-sensitive PRs are out of scope for ProjectClownfish cleanup and must route to central OpenClaw security handling. |
| #88651 | keep_independent | planned | independent | Independent open PR requiring normal review gates. |
| #88668 | keep_independent | planned | independent | Draft feature PR needing proof and maintainer review. |
| #88684 | keep_independent | planned | independent | Independent open PR that may be promising but cannot be merged from this plan-only shard. |

## Needs Human

- none
