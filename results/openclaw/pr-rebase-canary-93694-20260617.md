---
repo: "openclaw/openclaw"
cluster_id: "pr-rebase-canary-93694-20260617"
mode: "autonomous"
run_id: "27645089987"
workflow_run_id: "27645089987"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27645089987"
head_sha: "ba9dcd2b5d4572051186957de5160efdff841daa"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T20:30:09.464Z"
canonical: "https://github.com/openclaw/openclaw/pull/93694"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/93694"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-rebase-canary-93694-20260617

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27645089987](https://github.com/openclaw/clownfish/actions/runs/27645089987)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/93694

## Summary

#93694 is the sole open canonical PR. The hydrated artifact shows a maintainer-editable contributor branch with clean mergeability and passing checks, but the calibrated canary requires a bounded rebase/validation/Codex review pass before finalization. No close, merge, label, replacement PR, or security routing is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | blocked |  |  | rebase-only repair stopped: Codex /review timed out after 333034ms |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #93694 | fix_needed | planned | canonical | The job is rebase_only and merge is blocked. A planned repair of the maintainer-editable contributor branch is the executable canonical path. |
| cluster:pr-rebase-canary-93694-20260617 | build_fix_artifact | planned |  | Build a bounded repair artifact for the existing maintainer-editable contributor branch so the executor can rebase, validate, run /review, and push the same PR branch. |

## Needs Human

- none
