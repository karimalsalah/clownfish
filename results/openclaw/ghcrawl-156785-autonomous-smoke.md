---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156785-autonomous-smoke"
mode: "autonomous"
run_id: "27597852065"
workflow_run_id: "27597852065"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597852065"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:13:26.901Z"
canonical: "https://github.com/openclaw/openclaw/pull/72585"
canonical_issue: "https://github.com/openclaw/openclaw/issues/65565"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72585"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156785-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597852065](https://github.com/openclaw/clownfish/actions/runs/27597852065)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72585

## Summary

Current main 6aa83374d90d35226b9cf3577155c3876a91b4b3 already contains the landed Control UI fix from #72585: Set Default now stages agents.list[].default through stageDefaultAgentConfigEntry instead of writing agents.defaultId, with regression coverage. The original job candidates are already closed, so no close/comment/merge/fix mutation is planned. Linked #52928 is a related but distinct Gateway RPC feature request and should remain open.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #72585 | keep_canonical | planned | canonical | #72585 is the landed canonical fix path for the Control UI agents.defaultId save failure. |
| #59070 | keep_closed | skipped | fixed_by_candidate | Already closed and covered by the merged #72585 fix; no mutation needed. |
| #65565 | keep_closed | skipped | fixed_by_candidate | Already closed after the canonical fix landed; no mutation needed. |
| #41344 | keep_closed | skipped | related | Closed historical related report; no current cluster mutation is needed. |
| #52928 | keep_related | planned | related | Related agents defaulting area, but a distinct additive Gateway RPC feature request that should remain open. |
| #46275 | keep_closed | skipped | superseded | Closed historical PR in the broader Agents UI symptom family; no mutation needed. |
| #59200 | keep_closed | skipped | superseded | Closed superseded implementation path; #72585 is the landed fix. |
| #59202 | keep_closed | skipped | superseded | Closed superseded implementation path; #72585 is the landed fix. |

## Needs Human

- none
