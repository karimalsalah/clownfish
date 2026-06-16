---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156778-autonomous-smoke"
mode: "autonomous"
run_id: "27597851320"
workflow_run_id: "27597851320"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597851320"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:13:26.892Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156778-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597851320](https://github.com/openclaw/clownfish/actions/runs/27597851320)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

All job seed PRs are already closed in the hydrated live state, so no close/merge/comment mutation is safe or needed for them. The auto-reply root cause is still not present on current main at 6aa83374d90d35226b9cf3577155c3876a91b4b3: the target checkout has no fallback-aware typing TTL budgeting in get-reply.ts and still uses the default typing controller TTL. Because #41957 is closed, dirty, failing real-behavior proof, and not safely automatable as a contributor branch, the narrow path is a credited replacement fix artifact. Security-sensitive linked PR #43204 is quarantined separately with route_security only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #40760 | keep_closed | skipped | superseded | Already closed; do not emit a close action for a closed PR. |
| #41883 | keep_closed | skipped | superseded | Already closed broad source PR; no mutation. |
| #41956 | keep_closed | skipped | fixed_by_candidate | Already closed and outside the remaining auto-reply fix lane. |
| #41957 | keep_closed | skipped | superseded | Closed source PR should not be merged or closed again; replace with a narrow credited fix artifact. |
| #43204 | route_security | planned | security_sensitive | Quarantine only the exact security-sensitive linked PR; do not mutate it through Clownfish backlog cleanup. |
| #56343 | keep_closed | skipped | canonical | Merged historical Telegram canonical; no mutation. |
| cluster:ghcrawl-156778-autonomous-smoke | fix_needed | planned |  | No viable open canonical PR remains, but the non-security auto-reply bug still has a narrow executable replacement path. |
| cluster:ghcrawl-156778-autonomous-smoke | build_fix_artifact | planned |  | Emit a complete executable fix artifact for the deterministic fix executor. |

## Needs Human

- none
