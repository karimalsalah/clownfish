---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-006"
mode: "plan"
run_id: "27526333438"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526333438"
head_sha: "57af288206309caab74909b4675b5447af9d7915"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:41:43.041Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-inventory-mixed-20260615T0529-006

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526333438](https://github.com/openclaw/clownfish/actions/runs/27526333438)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification for 10 listed PRs. Four open PRs are security-sensitive and routed to central security handling; five open non-security PRs are kept independently for maintainer review because merge/close/fix actions are blocked or not justified; one listed PR is already closed and is kept closed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #80967 | route_security | planned | security_sensitive | Open PR touches plugin runtime LLM trust/auth-profile behavior and is explicitly security-sensitive in the hydrated artifact. |
| #82435 | keep_independent | planned | independent | Independent open fix candidate; keep for maintainer review rather than close or merge in this plan-only inventory shard. |
| #82349 | route_security | planned | security_sensitive | Open PR concerns skill setup execution/plugin trust boundary and must be routed to central security handling. |
| #82520 | keep_independent | planned | independent | Independent open candidate with proof/check blockers and broader product context still open; keep for maintainer review. |
| #82536 | keep_independent | planned | independent | Independent follow-up performance candidate with validation blockers; not closable as duplicate or superseded on current evidence. |
| #82561 | keep_independent | planned | independent | Independent feature PR needing maintainer/product review and proof; no safe close or merge action in this shard. |
| #82577 | route_security | planned | security_sensitive | Open PR changes external plugin/channel discovery behavior across a security boundary and is explicitly marked route-only. |
| #82530 | keep_closed | skipped | fixed_by_candidate | Already closed; closure actions are invalid for closed refs, so keep_closed records the no-op classification. |
| #82505 | keep_independent | planned | independent | Independent open bug-fix candidate paired with an open issue; keep for maintainer review and proof rather than close. |
| #82373 | route_security | planned | security_sensitive | Open PR touches gateway startup/network probe behavior with a hydrated security scanner comment and explicit route-only classification. |

## Needs Human

- none
