---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238841-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104000163"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104000163"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.394Z"
canonical: "https://github.com/openclaw/openclaw/pull/43808"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/43808"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238841-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104000163](https://github.com/openclaw/clownfish/actions/runs/25104000163)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/43808

## Summary

Classified the four job refs from hydrated preflight state. #43808 remains the canonical open PR for the cron delivery.threadId schema/plumbing and remaining failure-destination deduplication path. #49704 is related but not a duplicate because it covers Telegram target parsing, isolated plugin-bootstrap behavior, and delivery-error propagation. #64708 and #73030 are already closed, so no close/comment/label mutations are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #43808 | keep_canonical | planned | canonical | #43808 is still the best live canonical path for the delivery.threadId family, but this dedupe-only autonomous job cannot merge or repair it. |
| #49704 | keep_related | planned | related | #49704 shares the Telegram cron announce symptom family but has a materially different root cause and unresolved review/check blockers, so it should stay open rather than be closed as a duplicate of #43808. |
| #64708 | keep_closed | skipped | superseded | Already closed and superseded by hydrated replacement path #72326; no mutation should be emitted. |
| #73030 | keep_closed | skipped | duplicate | Already closed as a duplicate of #43808; keep it closed in the action matrix only for candidate coverage. |

## Needs Human

- none
