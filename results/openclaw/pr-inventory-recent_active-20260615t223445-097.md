---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-recent_active-20260615T223445-097"
mode: "plan"
run_id: "27580942551-1-96"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.587Z"
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

# pr-inventory-recent_active-20260615T223445-097

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. The hydrated preflight artifact shows 25 PRs with no shared canonical and no allowed merge/fix/low-signal close path. Validator-required security-sensitive PRs #92860, #93034, and #73923 are routed to central security handling; unrelated open PRs are classified independently; already-closed PRs are kept closed with skipped actions.

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
| #88898 | keep_independent | planned | independent | Independent focused PR; not a duplicate or close candidate in this inventory shard. |
| #91776 | keep_closed | skipped |  | Already closed and merged; no planned mutation. |
| #91768 | keep_closed | skipped |  | Already closed and merged; no planned mutation. |
| #92430 | keep_closed | skipped |  | Already closed; no planned mutation. |
| #92440 | keep_closed | skipped |  | Already closed; no planned mutation. |
| #92156 | keep_closed | skipped |  | Already closed; no planned mutation. |
| #92570 | keep_closed | skipped |  | Already closed; no planned mutation. |
| #88845 | keep_independent | planned | independent | Independent broad release PR requiring normal maintainer/release review, not inventory closeout. |
| #92860 | route_security | planned | security_sensitive | Route this exact PR to central OpenClaw security handling; no ProjectClownfish mutation is planned. |
| #92953 | keep_independent | planned | independent | Independent focused bugfix awaiting normal proof/review. |
| #78031 | keep_independent | planned | independent | Independent docs/template PR with active review history; no closeout basis. |
| #76082 | keep_independent | planned | independent | Independent docs proposal; keep for normal maintainer/author path. |
| #93034 | route_security | planned | security_sensitive | Route this exact PR to central OpenClaw security handling; no ProjectClownfish mutation is planned. |
| #77629 | keep_independent | planned | independent | Independent docs clarification; keep for normal review. |
| #79846 | keep_independent | planned | independent | Independent docs PR; no authorized low-signal close path. |
| #90841 | keep_independent | planned | independent | Independent active bugfix PR; failing proof blocks merge-style conclusions but not classification. |
| #80924 | keep_independent | planned | independent | Independent i18n PR; keep for normal review. |
| #81305 | keep_independent | planned | independent | Independent focused bugfix; keep for normal review. |
| #84560 | keep_independent | planned | independent | Independent broad feature/churn PR; keep for maintainer review rather than automated cleanup. |
| #87932 | keep_independent | planned | independent | Independent feature PR; failing checks block merge-style conclusions but not classification. |
| #73923 | route_security | planned | security_sensitive | Route this exact PR to central OpenClaw security handling; no ProjectClownfish mutation is planned. |
| #87247 | keep_independent | planned | independent | Independent docs clarification; keep for normal author/maintainer path. |
| #89409 | keep_independent | planned | independent | Independent docs PR; keep for normal review. |
| #73989 | keep_independent | planned | independent | Independent Clownfish repair PR; failing checks and disabled merge/fix keep it out of automated mutation. |
| #79141 | keep_independent | planned | independent | Independent release-branch PR; keep for normal review and proof repair. |

## Needs Human

- none
