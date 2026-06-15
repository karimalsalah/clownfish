---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238893-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104092004"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104092004"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.414Z"
canonical: "https://github.com/openclaw/openclaw/issues/46776"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46776"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238893-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104092004](https://github.com/openclaw/clownfish/actions/runs/25104092004)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/46776

## Summary

Hydrated state leaves #46776 as the current open canonical issue. #43563 is related but not a duplicate. #58107 and #67687 are already closed, and #67508 is merged historical fix evidence only; no close, comment, label, merge, or fix mutation is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #46776 | keep_canonical | planned | canonical | #46776 remains the live canonical issue for the unresolved Feishu group multi-agent delivery/session-continuity behavior. |
| #43563 | keep_related | planned | related | #43563 should stay open as a related Feishu cross-bot broadcast feature gap, coordinated with but not closed into #46776. |
| #58107 | keep_closed | skipped | fixed_by_candidate | #58107 is already closed and covered by hydrated merged PR #67508; no mutation is valid. |
| #67508 | keep_closed | skipped | related | #67508 is historical merged fix evidence, not an actionable target in this dedupe-only cluster. |
| #67687 | keep_closed | skipped | related | #67687 is already closed and related, not a live duplicate target for this cluster. |

## Needs Human

- none
