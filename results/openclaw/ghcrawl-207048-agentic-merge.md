---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-207048-agentic-merge"
mode: "autonomous"
run_id: "25103775172"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103775172"
head_sha: "98c86abfe56e7ca0578fd667fdea3121315c5b1d"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T03:54:22.355Z"
canonical: "https://github.com/openclaw/openclaw/issues/55532"
canonical_issue: "https://github.com/openclaw/openclaw/issues/55532"
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# ghcrawl-207048-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103775172](https://github.com/openclaw/clownfish/actions/runs/25103775172)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/55532

## Summary

Hydrated state shows the original PR candidates are already closed. The surviving canonical issue for the backoff/PingInterval family is #55532, but the current implementation path is not merge-ready: #73945 is open with failing checks and unresolved review-bot findings, and its ClawSweeper review reports overlap with unhydrated #73998. No close, merge, or fix PR action is safe from this cluster until that implementation canonical is chosen.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #42354 | keep_related | planned | related | Related Feishu WebSocket failure, but it has unique Lark/domain/readiness scope and should remain open outside this closeout. |
| #45674 | keep_closed | skipped | superseded | Already closed and superseded by merged replacement #72411 with credit preserved. |
| #46472 | keep_closed | skipped | superseded | Already closed and superseded by merged replacement #72411. |
| #55532 | keep_canonical | planned | canonical | Best surviving canonical issue for this family; keep open while the implementation canonical is unresolved. |
| #55619 | keep_closed | skipped | superseded | Already closed as superseded by replacement PR #73945; #73945 is not merge-ready yet. |
| #68766 | keep_closed | skipped | fixed_by_candidate | Already closed after merged candidate #72411. |
| #68865 | keep_closed | skipped | superseded | Already closed as superseded by merged replacement #72411. |
| #72411 | keep_closed | skipped | canonical | Merged historical canonical for the heartbeat/app-layer reconnect subset; no worker mutation is valid for this closed PR. |
| #73945 | needs_human | blocked | needs_human | Implementation canonical is unclear because #73945 is not merge-ready and overlaps an unhydrated competing PR #73998; maintainer routing is required before merge, closeout, or another fix PR. |

## Needs Human

- Choose the implementation canonical for #55532/#55619: hydrated #73945 is open with failing checks and unresolved review-bot findings, and the hydrated ClawSweeper comment reports overlap with unhydrated #73998.
