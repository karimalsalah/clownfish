---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156826-autonomous-smoke"
mode: "autonomous"
run_id: "27597934050"
workflow_run_id: "27597934050"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597934050"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:14:49.739Z"
canonical: "https://github.com/openclaw/openclaw/pull/73933"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73933"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156826-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597934050](https://github.com/openclaw/clownfish/actions/runs/27597934050)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73933

## Summary

All seed PRs in this cluster are already closed in the hydrated preflight state, so no close/comment/label/merge/fix mutation is planned. The original diagnostics PR #47398 was replaced and fixed by merged PR #73933, while the allowlist stat/read error lane was resolved by merged PR #63324; current target checkout at main SHA 6aa83374d90d35226b9cf3577155c3876a91b4b3 contains both fixes and focused tests.

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
| #47398 | keep_closed | skipped | fixed_by_candidate | Already closed and covered by merged hydrated replacement PR #73933; closure actions are invalid for closed targets. |
| #51556 | keep_closed | skipped | superseded | Already closed as superseded by merged hydrated PR #63324; no mutation is allowed or needed. |
| #63324 | keep_closed | skipped | canonical | Already merged and closed; keep as the canonical resolved PR for the allowlist stat/read error subfamily. |

## Needs Human

- none
