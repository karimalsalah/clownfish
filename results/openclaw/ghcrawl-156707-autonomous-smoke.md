---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156707-autonomous-smoke"
mode: "autonomous"
run_id: "27597849723"
workflow_run_id: "27597849723"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597849723"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:13:26.857Z"
canonical: "https://github.com/openclaw/openclaw/tree/main"
canonical_issue: null
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

# ghcrawl-156707-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597849723](https://github.com/openclaw/clownfish/actions/runs/27597849723)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/main

## Summary

Autonomous classification found no live mutation target. All four seed PRs are already closed in the hydrated preflight artifact. Current main 6aa83374 preserves the newer service-environment policy: generic proxy vars are not frozen into generated services, no launchctl proxy fallback remains, Gateway/embedded runtime bootstrap env-proxy dispatchers directly, and gateway install planning preserves safe durable/existing env entries. No merge, close, label, or fix PR action is planned.

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
| #41319 | keep_closed | skipped | superseded | Already closed and superseded by current main behavior; no mutation is valid for a closed PR. |
| #41593 | keep_closed | skipped | superseded | Already closed and superseded by the hydrated maintainer decision in #41263; no mutation is valid for a closed PR. |
| #51470 | keep_closed | skipped | fixed_by_candidate | Already closed and covered by current main's broader env-proxy runtime bootstrap; no mutation is valid for a closed PR. |
| #62673 | keep_closed | skipped | fixed_by_candidate | Already closed and covered by current main's broader durable/preserved service-env implementation; no mutation is valid for a closed PR. |

## Needs Human

- none
