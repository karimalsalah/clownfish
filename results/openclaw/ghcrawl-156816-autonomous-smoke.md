---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156816-autonomous-smoke"
mode: "autonomous"
run_id: "27597932909"
workflow_run_id: "27597932909"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597932909"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:14:49.725Z"
canonical: "https://github.com/openclaw/openclaw/pull/72411"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72411"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156816-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597932909](https://github.com/openclaw/clownfish/actions/runs/27597932909)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72411

## Summary

All three job candidate PRs are already closed in the hydrated preflight state, so no comment, close, label, merge, or fix PR action is safe or necessary. The best hydrated canonical path for the heartbeat/wsConfig portion is merged PR #72411; #55619's reconnect/backoff lane was already superseded through closed replacement #73945 and later maintainer closeout evidence on #55532. The configured target checkout did not contain openclaw/openclaw files, so no local code verification was used for a new mutation path.

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
| #45674 | keep_closed | skipped | superseded | Already closed and superseded by the hydrated merged replacement PR #72411; no mutation remains. |
| #46472 | keep_closed | skipped | superseded | Already closed and superseded by hydrated merged PR #72411. |
| #55619 | keep_closed | skipped | superseded | Already closed and superseded through the replacement/backoff follow-up lane; no hydrated open target remains for this cluster. |
| #72411 | keep_closed | skipped | canonical | Merged canonical replacement evidence for the heartbeat/wsConfig lane; keep closed only. |

## Needs Human

- none
