---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-157023-autonomous-smoke"
mode: "autonomous"
run_id: "27597060313"
workflow_run_id: "27597060313"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597060313"
head_sha: "5eb0e9d20db7b218a6100af46add7e5315d26941"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T05:53:05.998Z"
canonical: "https://github.com/openclaw/openclaw/pull/73989"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73989"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-157023-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597060313](https://github.com/openclaw/clownfish/actions/runs/27597060313)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73989

## Summary

The original ghcrawl representative #41030 and source PR #45712 are already closed. The current canonical path is the open Clownfish replacement PR #73989, but it is not merge-ready: the hydrated artifact shows dirty merge state, failing checks, a June 15 ClawSweeper needs-changes review, and one unresolved Greptile style finding. Plan a bounded repair of #73989 rather than closing or merging anything in this pass.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #41030 | keep_closed | skipped | superseded | Already closed; useful historical evidence only. |
| #45712 | keep_closed | skipped | superseded | Already closed after replacement path was opened; keep as credited source evidence. |
| #73989 | fix_needed | planned | canonical | Open canonical replacement exists but is dirty, failing checks, and has actionable review findings; repair is allowed and safer than merge. |
| cluster:ghcrawl-157023-autonomous-smoke | build_fix_artifact | planned |  | Fix-enabled autonomous job with a viable but not merge-ready canonical PR. |

## Needs Human

- none
