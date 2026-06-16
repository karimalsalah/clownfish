---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156684-autonomous-smoke"
mode: "autonomous"
run_id: "27597848971"
workflow_run_id: "27597848971"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597848971"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:13:26.831Z"
canonical: "https://github.com/openclaw/openclaw/pull/72406"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72406"
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156684-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597848971](https://github.com/openclaw/clownfish/actions/runs/27597848971)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72406

## Summary

All job-provided PR candidates are already closed in the hydrated preflight artifact, so no close, merge, or fix mutation is valid. Current main at 6aa83374d90d35226b9cf3577155c3876a91b4b3 already contains the landed replacement path from #72406: workspace-rooted bootstrap-file path dedupe in src/agents/bootstrap-files.ts and long-lived session bootstrap refresh in src/agents/bootstrap-cache.ts. Treat #72406 as the canonical merged implementation and keep all closed refs as historical evidence only.

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
| #24170 | keep_closed | skipped | independent | Closed historical linked issue; not a target for this cluster. |
| #56698 | keep_closed | skipped | fixed_by_candidate | Already closed and covered by the merged replacement implementation #72406. |
| #56721 | keep_closed | skipped | superseded | Already closed; superseded by the merged replacement implementation #72406. |
| #56725 | keep_closed | skipped | superseded | Already closed; superseded by the merged replacement implementation #72406. |
| #57587 | keep_closed | skipped | related | Closed historical representative; related to the bootstrap area but not the canonical landed fix path. |
| #59319 | keep_closed | skipped | fixed_by_candidate | Already closed and covered by current main via #72406. |
| #59344 | keep_closed | skipped | superseded | Already closed; superseded by replacement PR #72406 with credit preserved. |
| #64871 | keep_closed | skipped | fixed_by_candidate | Already closed and replaced by merged PR #72406. |
| #72406 | keep_closed | skipped | canonical | Canonical merged implementation is already closed; keep as evidence only. |

## Needs Human

- none
