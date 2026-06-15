---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238812-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25103908788"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103908788"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.377Z"
canonical: "https://github.com/openclaw/openclaw/issues/52618"
canonical_issue: "https://github.com/openclaw/openclaw/issues/52618"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73739"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238812-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103908788](https://github.com/openclaw/clownfish/actions/runs/25103908788)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/52618

## Summary

Canonical remains the open issue #52618, with #73739 as the current open implementation candidate. #72828 is a high-confidence duplicate planned for close; #42354 and #55532 remain related but not duplicate-clean; #68766 is already closed and is kept as historical fixed-by-#72411 evidence.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72828 | close_duplicate | blocked | duplicate | candidate fix is not listed in job refs |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #52618 | keep_canonical | planned | canonical | Best live canonical issue for the Feishu WebSocket retry-exhaustion recovery report. |
| #73739 | keep_canonical | planned | canonical | Current canonical implementation candidate should stay open for maintainer review; merge is out of scope and review-bot P2 proof remains before any future merge gate. |
| #42354 | keep_related | planned | related | Related Feishu WebSocket transport family, but it has unique initial-connection/domain/readiness details and is not a high-confidence duplicate of #52618. |
| #55532 | keep_related | planned | related | Related Feishu reconnect/backoff family, but unique token-cache poisoning and an unhydrated replacement path make duplicate closure unsafe. |
| #68766 | keep_closed | skipped | fixed_by_candidate | Already closed in live state; included only as historical fixed-by-#72411 evidence. |
| #72828 | close_duplicate | planned | duplicate | High-confidence duplicate of the open canonical issue #52618; closure is allowed because require_fix_before_close is false and the canonical thread remains open. |

## Needs Human

- none
