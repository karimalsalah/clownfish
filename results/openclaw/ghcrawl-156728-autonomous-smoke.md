---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156728-autonomous-smoke"
mode: "autonomous"
run_id: "27597850130"
workflow_run_id: "27597850130"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597850130"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:13:26.870Z"
canonical: "https://github.com/openclaw/openclaw/tree/6aa83374d90d35226b9cf3577155c3876a91b4b3"
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

# ghcrawl-156728-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597850130](https://github.com/openclaw/clownfish/actions/runs/27597850130)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/6aa83374d90d35226b9cf3577155c3876a91b4b3

## Summary

No GitHub mutation is planned. The hydrated preflight state shows all four seed PRs are already closed, there are no security-sensitive items, and the target checkout at main SHA 6aa83374d90d35226b9cf3577155c3876a91b4b3 contains the current runtime/transcript and Control UI guards that replaced the stale UI-only PRs. Closed refs are retained only as skipped historical classifications.

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
| #50929 | keep_closed | skipped | fixed_by_candidate | The representative PR is obsolete and already closed; current main owns the canonical behavior, and no close, merge, or fix action is allowed for this closed target. |
| #57887 | keep_closed | skipped | related | The PR is already closed and is not part of an open actionable canonical path for this cluster. |
| #67036 | keep_closed | skipped | superseded | The PR is already closed and superseded by the shipped current-main runtime/transcript implementation. |
| #68518 | keep_closed | skipped | superseded | The PR is already closed and superseded by the current-main root-cause fix; no replacement fix artifact is needed for this closed candidate. |

## Needs Human

- none
