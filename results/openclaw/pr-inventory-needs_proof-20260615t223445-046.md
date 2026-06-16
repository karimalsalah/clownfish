---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-046"
mode: "plan"
run_id: "27580942551-1-47"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.286Z"
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
needs_human_count: 6
---

# pr-inventory-needs_proof-20260615T223445-046

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification shard. No shared canonical was selected. Hydrated non-security open PRs are kept open for proof/review rather than closure or merge; #55789 is routed to central security handling due to internal HTTP session override/session-key boundary signals; already-closed PRs are recorded as skipped keep_closed; five job candidates lacked hydrated preflight live state and need a refreshed plan before classification.

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
| Needs human | 6 |

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
| #89768 | keep_closed | skipped | superseded | Already closed in live preflight state. |
| #89772 | needs_human | blocked | needs_human | Missing hydrated live state for this listed candidate. |
| #89645 | keep_independent | planned | independent | Distinct open PR needing proof/review, not a duplicate closeout target. |
| #93241 | needs_human | blocked | needs_human | Missing hydrated live state for this listed candidate. |
| #93244 | needs_human | blocked | needs_human | Missing hydrated live state for this listed candidate. |
| #91315 | needs_human | blocked | needs_human | Missing hydrated live state for this listed candidate. |
| #91479 | needs_human | blocked | needs_human | Missing hydrated live state for this listed candidate. |
| #55018 | keep_independent | planned | independent | Small independent performance PR remains open pending proof. |
| #55211 | keep_independent | planned | independent | Potentially useful independent PR, but this plan cannot merge or close it. |
| #55487 | keep_independent | planned | independent | Independent availability fix candidate with failing checks/proof. |
| #55644 | keep_independent | planned | independent | Trivial independent PR, but closeout is not enabled and proof is failing. |
| #55766 | keep_independent | planned | independent | Independent feature PR pending proof/check repair. |
| #55789 | route_security | planned | security_sensitive | Internal HTTP session-key override handling is security-boundary-shaped and must be routed to central security handling rather than backlog cleanup automation. |
| #56258 | keep_independent | planned | independent | Independent availability/session-state fix candidate pending proof. |
| #56861 | keep_independent | planned | independent | Independent channel feature PR needing real behavior proof. |
| #57597 | keep_independent | planned | independent | Independent session-state fix candidate with proof failures. |
| #58051 | keep_independent | planned | independent | Independent provider fallback fix pending proof/check review. |
| #58482 | needs_human | blocked | needs_human | Actionable review/technical correctness issue requires maintainer or repair follow-up. |
| #59013 | keep_independent | planned | independent | Independent Windows availability fix candidate with failing checks. |
| #68590 | keep_closed | skipped | superseded | Already closed in live preflight state. |
| #71887 | keep_independent | planned | independent | Independent docs/CLI cleanup PR pending proof. |
| #72535 | keep_independent | planned | independent | Independent config UX fix candidate needing proof. |
| #72749 | keep_independent | planned | independent | Broad independent PR with low-signal indicators, but not eligible for planned closure here. |
| #75011 | keep_independent | planned | independent | Low-signal independent docs PR kept open because closeout is disabled. |
| #75024 | keep_independent | planned | independent | Independent channel fix candidate pending proof. |

## Needs Human

- #89772 missing hydrated preflight item/updated_at in compacted artifact.
- #93241 missing hydrated preflight item/updated_at in compacted artifact.
- #93244 missing hydrated preflight item/updated_at in compacted artifact.
- #91315 missing hydrated preflight item/updated_at in compacted artifact.
- #91479 missing hydrated preflight item/updated_at in compacted artifact.
- #58482 has an actionable hydrated review excerpt about dropped Voyage debug/initial parameters and cannot be repaired in this job.
