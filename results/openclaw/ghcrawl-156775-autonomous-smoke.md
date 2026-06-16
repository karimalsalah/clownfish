---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156775-autonomous-smoke"
mode: "autonomous"
run_id: "27597851278"
workflow_run_id: "27597851278"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597851278"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:13:26.891Z"
canonical: "https://github.com/openclaw/openclaw/pull/75584"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/75584"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156775-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597851278](https://github.com/openclaw/clownfish/actions/runs/27597851278)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/75584

## Summary

No GitHub mutation is planned. The preflight shows all three seed PRs are already closed, and the hydrated linked PR #75584 is the merged canonical fix for Discord component/modal registry persistence on current main SHA 6aa83374d90d35226b9cf3577155c3876a91b4b3.

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
| #75584 | keep_closed | skipped | canonical | Already merged canonical fix; closed PR is historical evidence and must not receive a close or merge action. |
| #40288 | keep_closed | skipped | fixed_by_candidate | Closed historical PR covered by the merged canonical fix #75584. |
| #47818 | keep_closed | skipped | fixed_by_candidate | Closed historical PR covered by the merged canonical fix #75584. |
| #66241 | keep_closed | skipped | fixed_by_candidate | Closed historical PR superseded by and covered by merged canonical fix #75584. |

## Needs Human

- none
