---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156791-autonomous-smoke"
mode: "autonomous"
run_id: "27597851660"
workflow_run_id: "27597851660"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597851660"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:13:26.897Z"
canonical: "https://github.com/openclaw/openclaw/tree/6aa83374d90d35226b9cf3577155c3876a91b4b3"
canonical_issue: "https://github.com/openclaw/openclaw/issues/61434"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156791-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597851660](https://github.com/openclaw/clownfish/actions/runs/27597851660)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/6aa83374d90d35226b9cf3577155c3876a91b4b3

## Summary

All three seed refs are already closed in the hydrated preflight state. Current main at 6aa83374d90d35226b9cf3577155c3876a91b4b3 contains the Signal SSE node:http/node:https implementation and regression coverage for receiving SSE events without fetch, so no close, comment, label, merge, or fix PR action is planned.

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
| #42553 | keep_closed | skipped | fixed_by_candidate | Already closed in live hydrated state; closed refs must not receive closure actions. |
| #61434 | keep_closed | skipped | canonical | The canonical representative has already been closed after verification; no open canonical issue remains for duplicate routing. |
| #62711 | keep_closed | skipped | duplicate | Already closed in live hydrated state; no duplicate close action is valid. |

## Needs Human

- none
