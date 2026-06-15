---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156851-autonomous-smoke"
mode: "autonomous"
run_id: "27584188983"
workflow_run_id: "27584188983"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27584188983"
head_sha: "3eaef20c39c95c760c2eeb4e61adf6ea57afc054"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T23:57:44.404Z"
canonical: "https://github.com/openclaw/openclaw/issues/51251"
canonical_issue: "https://github.com/openclaw/openclaw/issues/51251"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# ghcrawl-156851-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27584188983](https://github.com/openclaw/clownfish/actions/runs/27584188983)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/51251

## Summary

#51251 remains the live canonical issue. The other cluster candidates are already closed, so no closure action is valid. Current main intentionally preserves explicit or legacy user model overrides across reset paths while clearing auto fallback pins, and the remaining change is a compatibility-sensitive product decision already flagged for maintainer review.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #51251 | keep_canonical | planned | canonical | Canonical is clear, but an autonomous fix PR would require deciding whether explicit or legacy user-selected model overrides should survive /new, sessions.reset, and gateway restart; the hydrated artifact and current tests show that is a deliberate compatibility/product boundary, not a narrow implementation gap. |
| #66334 | keep_closed | skipped | duplicate | Already closed duplicate context; keep #51251 as the canonical live tracker. |
| #68472 | keep_closed | skipped | related | Already closed related context; it does not change the canonical choice for #51251. |
| #55063 | keep_closed | skipped | duplicate | Already closed duplicate context; no mutation is permitted or needed. |
| #64475 | keep_closed | skipped | duplicate | Already closed duplicate/child context; #51251 remains the live product-decision tracker. |
| #33577 | keep_closed | skipped | related | Closed historical context only. |
| #47381 | keep_closed | skipped | related | Closed related context only. |
| #50050 | keep_closed | skipped | related | Closed related context only. |

## Needs Human

- Maintainer/product decision needed for #51251: choose the supported contract for explicit and legacy user model pins across /new, sessions.reset, and gateway restart, including whether to clear them automatically, keep preserving them with clearer status/clear UX, or introduce a new reset mode.
