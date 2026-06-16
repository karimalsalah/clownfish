---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156695-autonomous-smoke"
mode: "autonomous"
run_id: "27597849177"
workflow_run_id: "27597849177"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597849177"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:13:26.837Z"
canonical: "https://github.com/openclaw/openclaw/pull/73361"
canonical_issue: "https://github.com/openclaw/openclaw/issues/45800"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73361"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156695-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597849177](https://github.com/openclaw/clownfish/actions/runs/27597849177)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73361

## Summary

Hydrated GitHub state shows the original canonical tracker #45800 and all seed candidates are already closed. The canonical path is merged PR #73361, which added confirmation for button-triggered New Session resets, preserved typed /new and /reset behavior, added regression coverage, and was used by maintainers to close #27065, #45800, and #56611. No GitHub mutation, fix PR, or merge is planned; closed refs are retained only as historical/classification evidence.

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
| #6784 | keep_closed | skipped | duplicate | Already closed historical duplicate context; no closure action is valid. |
| #27065 | keep_closed | skipped | fixed_by_candidate | Already closed as completed by the merged canonical fix; no additional action is valid. |
| #27110 | keep_closed | skipped | superseded | Closed unmerged contributor PR superseded by the landed canonical fix with attribution preserved in #73361. |
| #45800 | keep_closed | skipped | canonical | Original canonical tracker is already closed as completed by the merged canonical PR. |
| #45863 | keep_closed | skipped | superseded | Closed unmerged PR superseded by the landed canonical fix; no close or merge action is valid. |
| #54499 | keep_closed | skipped | duplicate | Already closed duplicate context now covered by the landed canonical fix. |
| #56611 | keep_closed | skipped | fixed_by_candidate | Already closed as covered by the landed canonical fix for the accidental reset risk; any broader placement work is separate follow-up scope. |
| #73361 | keep_closed | skipped | canonical | Canonical fix PR is already merged; no merge, fix, or post-merge action remains for this cluster. |

## Needs Human

- none
