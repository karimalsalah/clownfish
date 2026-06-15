---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238877-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104055577"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104055577"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.404Z"
canonical: "https://github.com/openclaw/openclaw/pull/42482"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/42482"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238877-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104055577](https://github.com/openclaw/clownfish/actions/runs/25104055577)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/42482

## Summary

No GitHub mutations planned. #42482 remains the best live canonical PR for the remaining per-attempt AbortController/fallback-poisoning work; #42680 is already closed and must stay untouched; #52365 is related but not a duplicate because it targets a separate fallback-budget gate.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #42482 | keep_canonical | planned | canonical | #42482 is still the clearest live canonical path for the unresolved per-attempt AbortController part of the cron timeout/fallback cluster. |
| #42680 | keep_closed | skipped | superseded | #42680 is historical evidence for the deferred-timeout half and is not an open mutation target. |
| #52365 | keep_related | planned | related | #52365 should stay open as related follow-up work, not be closed as a duplicate or treated as the canonical PR for #42482. |

## Needs Human

- none
