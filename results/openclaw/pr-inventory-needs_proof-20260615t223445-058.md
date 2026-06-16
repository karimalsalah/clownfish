---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-058"
mode: "plan"
run_id: "27580942551-1-59"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.310Z"
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

# pr-inventory-needs_proof-20260615T223445-058

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. The hydrated artifact contains no shared canonical and the job explicitly says this is not a dedupe cluster, so hydrated open PRs are kept independent for normal review/proof handling. Five listed candidates were not present in the compacted hydrated item matrix, so those specific decisions need a refreshed preflight artifact before classification.

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
| #92254 | keep_independent | planned | independent |  |
| #92284 | keep_independent | planned | independent |  |
| #92298 | keep_independent | planned | independent |  |
| #92303 | keep_independent | planned | independent |  |
| #92342 | keep_independent | planned | independent |  |
| #92351 | keep_independent | planned | independent |  |
| #92375 | needs_human | blocked | needs_human | Needs refreshed hydration before a reliable PR classification can be emitted. |
| #92394 | needs_human | blocked | needs_human | Needs refreshed hydration before a reliable PR classification can be emitted. |
| #92456 | needs_human | blocked | needs_human | Needs refreshed hydration before a reliable PR classification can be emitted. |
| #92310 | keep_independent | planned | independent |  |
| #92363 | keep_independent | planned | independent |  |
| #91549 | keep_independent | planned | independent |  |
| #91553 | keep_independent | planned | independent |  |
| #93379 | needs_human | blocked | needs_human | Needs refreshed hydration before a reliable PR classification can be emitted. |
| #93328 | needs_human | blocked | needs_human | Needs refreshed hydration before a reliable PR classification can be emitted. |
| #41299 | keep_independent | planned | independent |  |
| #50483 | keep_independent | planned | independent |  |
| #54692 | keep_independent | planned | independent |  |
| #86551 | keep_independent | planned | independent |  |
| #60183 | keep_independent | planned | independent |  |
| #90931 | keep_independent | planned | independent |  |
| #61329 | keep_independent | planned | independent |  |
| #61396 | keep_independent | planned | independent |  |
| #63375 | keep_independent | planned | independent |  |
| #64064 | keep_independent | planned | independent |  |

## Needs Human

- #92375 missing from compacted hydrated preflight item matrix; refresh hydration before classification.
- #92394 missing from compacted hydrated preflight item matrix; refresh hydration before classification.
- #92456 missing from compacted hydrated preflight item matrix; refresh hydration before classification.
- #93379 missing from compacted hydrated preflight item matrix; refresh hydration before classification.
- #93328 missing from compacted hydrated preflight item matrix; refresh hydration before classification.
