---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-024"
mode: "plan"
run_id: "27580942551-1-25"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.220Z"
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

# pr-inventory-needs_proof-20260615T223445-024

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was selected because the job is an inventory shard, not a dedupe cluster. Open PRs are kept as independent review/proof items; already closed PRs are recorded as skipped keep_closed actions. No security-sensitive refs were identified in the hydrated artifact.

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
| #92759 | keep_closed | skipped |  | Already closed in live preflight state. |
| #88192 | keep_independent | planned | independent | Distinct useful PR needing normal proof/review, not a duplicate in this inventory shard. |
| #88850 | keep_independent | planned | independent | Distinct channel fix; no canonical duplicate or closure basis in hydrated evidence. |
| #88883 | keep_independent | planned | independent | Independent technical correctness/CI item; not safe for merge or closeout. |
| #92822 | keep_independent | planned | independent | Independent channel behavior fix requiring proof/review. |
| #48396 | keep_independent | planned | independent | Independent UI enhancement; no safe low-signal closeout because that permission is disabled. |
| #92831 | keep_closed | skipped |  | Already closed in live preflight state. |
| #92716 | keep_independent | planned | independent | Independent candidate for normal maintainer review, not a dedupe closeout. |
| #92770 | keep_independent | planned | independent | Independent provider compatibility fix requiring normal merge review. |
| #52120 | keep_independent | planned | independent | Independent channel/session-state fix; no closure or merge action is safe. |
| #92847 | keep_independent | planned | independent | Independent extension fix requiring normal review; no dedupe action. |
| #92867 | keep_independent | planned | independent | Independent narrow bug fix requiring normal review. |
| #50454 | keep_independent | planned | independent | Independent session/transcript fix; keep for review/proof rather than close. |
| #92893 | keep_independent | planned | independent | Independent channel bug fix requiring normal review. |
| #92929 | keep_independent | planned | independent | Independent agent session-state fix; checks block merge/fixed-by closeout. |
| #55085 | keep_closed | skipped |  | Already closed in live preflight state. |
| #55390 | keep_independent | planned | independent | Independent broad WIP feature; not eligible for closure/merge in this plan shard. |
| #55742 | keep_closed | skipped |  | Already closed in live preflight state. |
| #55861 | keep_independent | planned | independent | Independent UI fix; failing checks block merge and fixed-by closeout. |
| #90833 | keep_independent | planned | independent | Independent feature PR; broad UI/i18n scope needs normal maintainer review. |
| #55770 | keep_closed | skipped |  | Already closed in live preflight state. |
| #57364 | keep_closed | skipped |  | Already closed in live preflight state. |
| #90855 | keep_independent | planned | independent | Independent large recovery PR requiring normal review. |
| #92936 | keep_independent | planned | independent | Independent doctor behavior fix; checks block merge/fixed-by closeout. |
| #54862 | keep_closed | skipped |  | Already closed in live preflight state. |

## Needs Human

- none
