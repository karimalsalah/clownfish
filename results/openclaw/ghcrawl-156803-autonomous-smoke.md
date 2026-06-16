---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156803-autonomous-smoke"
mode: "autonomous"
run_id: "27597852332"
workflow_run_id: "27597852332"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597852332"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:13:26.905Z"
canonical: "https://github.com/openclaw/openclaw/pull/52400"
canonical_issue: "https://github.com/openclaw/openclaw/issues/52382"
canonical_pr: "https://github.com/openclaw/openclaw/pull/52400"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156803-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597852332](https://github.com/openclaw/clownfish/actions/runs/27597852332)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/52400

## Summary

Live preflight shows all provided and first-hop linked refs are already closed. The current canonical path is the merged PR #52400, landed as commit d90ab9a13f3fa2cb257c6769a9cdc5d61d808795; current main 6aa83374d90d35226b9cf3577155c3876a91b4b3 contains the 0-20 schema/runtime/docs/test updates. No GitHub mutation is planned because every target is already closed.

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
| #43972 | keep_closed | skipped | fixed_by_candidate | Already closed and covered by merged canonical PR #52400; no mutation allowed. |
| #44023 | keep_closed | skipped | superseded | Superseded branch is already closed; merged #52400 is the canonical fix path. |
| #45871 | keep_closed | skipped | superseded | Superseded branch is already closed; merged #52400 is the canonical fix path. |
| #52382 | keep_closed | skipped | fixed_by_candidate | Issue is already closed by merged candidate #52400; no post-merge close action remains. |
| #52400 | keep_closed | skipped | canonical | Canonical PR is already merged and closed; no merge or fix action remains. |

## Needs Human

- none
