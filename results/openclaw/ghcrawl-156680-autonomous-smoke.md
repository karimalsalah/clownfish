---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156680-autonomous-smoke"
mode: "autonomous"
run_id: "27597849125"
workflow_run_id: "27597849125"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597849125"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:13:26.836Z"
canonical: "https://github.com/openclaw/openclaw/pull/51399"
canonical_issue: "https://github.com/openclaw/openclaw/issues/51355"
canonical_pr: "https://github.com/openclaw/openclaw/pull/51399"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156680-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597849125](https://github.com/openclaw/clownfish/actions/runs/27597849125)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/51399

## Summary

Live preflight shows the representative PR #51399 is no longer open: it was merged on 2026-04-29 and current main contains the Slack attachment vision documentation. All job-provided candidates are already closed, so there are no close, merge, or fix mutations to plan. One linked historical issue contains a hydrated secret-scanning notice and is routed to central security handling as an exact-item quarantine only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #28037 | route_security | planned | security_sensitive | Exact linked historical ref contains secret-leakage evidence; central OpenClaw security handling owns that quarantine while unrelated docs classifications continue. |
| #51354 | keep_closed | skipped | related | Already closed; no close action is valid. It is related manual validation context, not an open duplicate needing mutation. |
| #51355 | keep_closed | skipped | fixed_by_candidate | Already closed and covered by merged hydrated PR #51399; no post-merge close action is valid against a closed issue. |
| #51399 | keep_closed | skipped | canonical | This is the canonical path for the attachment vision docs work, but it is already merged and closed; no merge action remains. |
| #53112 | keep_closed | skipped | independent | Already closed and merged as a separate Slack docs fix; it is not a duplicate of the attachment vision docs canonical path. |
| #67650 | keep_closed | skipped | independent | Already closed by maintainer product decision; no autonomous close, merge, or replacement path is appropriate for this cluster. |

## Needs Human

- none
