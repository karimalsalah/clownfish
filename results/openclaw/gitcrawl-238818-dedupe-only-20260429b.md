---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238818-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25103959518"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103959518"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T03:54:22.381Z"
canonical: "https://github.com/openclaw/openclaw/issues/55532"
canonical_issue: "https://github.com/openclaw/openclaw/issues/55532"
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-238818-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103959518](https://github.com/openclaw/clownfish/actions/runs/25103959518)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/55532

## Summary

Hydrated state shows the representative PR #55619 is already closed. The best stable canonical tracker is open issue #55532, but the remaining fix route is split between open overlapping PRs #73945 and #73998. #73998 is the likely stronger candidate because checks pass and the diff is narrower, but it still has an actionable PingTimeout review finding, while #73945 has failing checks and ClawSweeper explicitly asked for maintainer routing. No close, merge, or fix action is safe in this dedupe-only job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #42354 | keep_related | planned | related | Related Feishu WebSocket failure family, but not a true duplicate of the reconnect/backoff tracker because it carries unique Lark domain and startup-readiness evidence. |
| #45674 | keep_closed | skipped | superseded | Already closed after replacement by merged #72411; preserve as historical credit evidence only. |
| #46472 | keep_closed | skipped | superseded | Already closed as superseded by #72411; keep as historical credit evidence only. |
| #55532 | keep_canonical | planned | canonical | Best open canonical issue for the remaining reconnect/backoff work while the canonical PR route remains unresolved. |
| #55619 | keep_closed | skipped | superseded | Already closed after replacement planning; candidate fix is intentionally null because the successor route is currently split between #73945 and #73998. |
| #68766 | keep_closed | skipped | fixed_by_candidate | Already closed as fixed by merged #72411; keep as historical evidence only. |
| #68865 | keep_closed | skipped | superseded | Already closed as superseded by merged #72411; keep as historical credit evidence only. |
| #72411 | keep_closed | skipped | related | Merged historical fix for part of the family, but not the remaining canonical PR for #55532. |
| #73945 | needs_human | blocked | needs_human | Conflicting open PR with failing checks and explicit maintainer-routing request; do not close or supersede automatically. |
| #73998 | needs_human | blocked | needs_human | Likely stronger canonical PR candidate, but unresolved review finding plus overlapping open #73945 make the canonical PR decision a maintainer call. |

## Needs Human

- Choose the canonical remaining Feishu reconnect/backoff PR for #55532 between open #73945 and #73998, or decide how to combine them. #73998 has passing checks and a narrower SDK-hook approach but an actionable PingTimeout review finding; #73945 has failing checks and overlapping implementation, and ClawSweeper explicitly asked for maintainer routing.
