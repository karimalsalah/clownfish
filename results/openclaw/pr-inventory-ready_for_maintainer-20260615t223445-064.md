---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-064"
mode: "plan"
run_id: "27583277062"
workflow_run_id: "27583277062"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583277062"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:55:40.829Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-inventory-ready_for_maintainer-20260615T223445-064

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583277062](https://github.com/openclaw/clownfish/actions/runs/27583277062)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. This shard has no shared canonical, so open non-security PRs are kept independent for maintainer review; already-closed PRs are skipped with keep_closed; one auth-boundary SMS command PR is routed to central security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
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
| #92817 | keep_closed | skipped |  | Already closed in live preflight state. |
| #88899 | keep_independent | planned | independent | Real PR with useful code but not closable or mergeable in this plan-only inventory shard. |
| #88919 | keep_independent | planned | independent | Independent candidate awaiting normal maintainer review. |
| #88681 | keep_independent | planned | independent | Independent diagnostic PR; no closure or merge action is allowed here. |
| #92877 | keep_independent | planned | independent | Independent open PR with author/maintainer follow-up still pending. |
| #92873 | keep_independent | planned | independent | Independent test-coverage PR awaiting maintainer decision. |
| #92819 | keep_independent | planned | independent | Independent high-risk open PR; keep for maintainer review. |
| #50177 | keep_independent | planned | independent | Useful but blocked open PR; no low-signal or duplicate closure is justified. |
| #51067 | keep_independent | planned | independent | Independent implementation PR with review blockers; keep open. |
| #92613 | keep_independent | planned | independent | Independent open PR requiring maintainer technical review. |
| #90998 | route_security | planned | security_sensitive | Scoped quarantine for an auth-boundary SMS command PR. |
| #92399 | keep_independent | planned | independent | Independent high-risk PR; keep for maintainer review. |
| #90846 | keep_closed | skipped |  | Already closed in live preflight state. |
| #90864 | keep_independent | planned | independent | Independent open PR with author follow-up pending; no closure path. |
| #90923 | keep_independent | planned | independent | Independent platform fix awaiting author/maintainer follow-up. |
| #92957 | keep_independent | planned | independent | Independent feature PR; keep for maintainer product/API review. |
| #92939 | keep_independent | planned | independent | Independent open PR with follow-up pending. |
| #66985 | keep_closed | skipped |  | Already closed in live preflight state. |
| #92947 | keep_independent | planned | independent | Independent channel fix for maintainer review. |
| #92990 | keep_independent | planned | independent | Independent CLI/doctor fix with author follow-up pending. |
| #89745 | keep_independent | planned | independent | Independent usage fix awaiting normal maintainer review. |
| #89767 | keep_independent | planned | independent | Independent workspace-routing PR for maintainer review. |
| #92996 | keep_independent | planned | independent | Independent CLI fix; no close/merge action in plan mode. |
| #75213 | keep_closed | skipped |  | Already closed in live preflight state. |
| #88901 | keep_closed | skipped | superseded | Already closed; no further action. |

## Needs Human

- none
