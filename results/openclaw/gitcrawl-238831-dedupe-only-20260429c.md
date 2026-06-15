---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238831-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25103981042"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103981042"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.390Z"
canonical: "https://github.com/openclaw/openclaw/issues/25592"
canonical_issue: "https://github.com/openclaw/openclaw/issues/25592"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238831-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103981042](https://github.com/openclaw/clownfish/actions/runs/25103981042)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/25592

## Summary

Canonical drift verified: #51065 is already closed, so #25592 is the best live canonical issue for the broad messaging-channel text leak family. No close actions are safe in this pass: #71575 is related but has a distinct Telegram tool-progress-preview path that current hydrated review says should stay open, while #51065 and #66161 are already closed and must not receive closure actions.

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
| #25592 | keep_canonical | planned | canonical | Best surviving live canonical for the broad messaging-channel intermediate-text leak family. |
| #51065 | keep_closed | skipped | duplicate | Already closed; treat as historical duplicate evidence for #25592 without mutation. |
| #66161 | keep_closed | skipped | duplicate | Already closed; retain as historical duplicate/implemented context under the #25592 family. |
| #71575 | keep_related | planned | related | Related Telegram-specific follow-up remains open; duplicate closeout would lose unique behavior and product-scope detail. |

## Needs Human

- none
