---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156691-autonomous-smoke"
mode: "autonomous"
run_id: "27597849261"
workflow_run_id: "27597849261"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597849261"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:13:26.841Z"
canonical: "https://github.com/openclaw/openclaw/tree/6aa83374d90d35226b9cf3577155c3876a91b4b3"
canonical_issue: "https://github.com/openclaw/openclaw/issues/19075"
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

# ghcrawl-156691-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597849261](https://github.com/openclaw/clownfish/actions/runs/27597849261)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/6aa83374d90d35226b9cf3577155c3876a91b4b3

## Summary

All job seed refs are now closed in the hydrated preflight state. Current main 6aa83374d90d35226b9cf3577155c3876a91b4b3 already contains Brave Search baseUrl support, including plugin schema exposure, runtime URL validation/resolution, web and llm-context endpoint routing, and cache-key isolation by baseUrl. No GitHub mutation or replacement PR is needed.

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
| #19075 | keep_closed | skipped | fixed_by_candidate | The canonical issue is already closed and the requested Brave baseUrl behavior is present on current main; no further closeout or fix PR is required. |
| #45729 | keep_closed | skipped | duplicate | Already-closed duplicate of #19075; no mutation is valid or needed. |
| #51658 | keep_closed | skipped | duplicate | Already-closed duplicate of #19075; no mutation is valid or needed. |
| #57194 | keep_closed | skipped | fixed_by_candidate | Already-closed SearXNG PR covered by merged #57317; no mutation is valid or needed. |
| cluster:ghcrawl-156691-autonomous-smoke | build_fix_artifact | skipped | fixed_by_candidate | Audited no-PR outcome: the requested fix is already present on current main. |

## Needs Human

- none
