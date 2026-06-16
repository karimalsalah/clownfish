---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156708-autonomous-smoke"
mode: "autonomous"
run_id: "27597061925"
workflow_run_id: "27597061925"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597061925"
head_sha: "5eb0e9d20db7b218a6100af46add7e5315d26941"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:05:34.752Z"
canonical: "https://github.com/openclaw/openclaw/pull/73923"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41545"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73923"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156708-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597061925](https://github.com/openclaw/clownfish/actions/runs/27597061925)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73923

## Summary

Hydrated state shows the original representative #41546 and duplicate candidate PRs #41552, #41718, and #42001 are already closed. The linked issue #41545 remains open and current main e934e1cad78d6ff8016b059abfc54eb21357444e still clears the Gateway Token on ordinary WebSocket URL edits. The current canonical fix path is hydrated open PR #73923, but it is not merge-ready because it is dirty/unmergeable, has a failing relevant Real behavior proof check, and has an actionable ClawSweeper review asking for branch refresh and proof clarification. No direct GitHub mutations are planned; emit an executable repair artifact for #73923.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 1 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/73923 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #73923 | merge_canonical | executed | fix_pr | merged by ProjectClownfish post-flight |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #41545 | keep_canonical | planned | canonical |  |
| #41546 | keep_closed | skipped | superseded | Already closed; retained as credited historical evidence for the #73923 repair path. |
| #41552 | keep_closed | skipped | superseded | Already closed; retained as credited historical evidence for the #73923 repair path. |
| #41718 | keep_closed | skipped | superseded | Already closed; retained as credited historical evidence for the #73923 repair path. |
| #42001 | keep_closed | skipped | superseded | Already closed; retained as the primary credited source PR for the #73923 repair path. |
| #73923 | fix_needed | planned | canonical | Repair canonical PR #73923 before merge or post-merge closeout. |
| cluster:ghcrawl-156708-autonomous-smoke | build_fix_artifact | planned |  | Executable repair artifact for the canonical open PR path. |

## Needs Human

- none
