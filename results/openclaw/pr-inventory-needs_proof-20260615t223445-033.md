---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-033"
mode: "plan"
run_id: "27583351803"
workflow_run_id: "27583351803"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583351803"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T23:55:41.439Z"
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
needs_human_count: 19
---

# pr-inventory-needs_proof-20260615T223445-033

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583351803](https://github.com/openclaw/clownfish/actions/runs/27583351803)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Plan-only PR inventory shard. The artifact has no security-sensitive items. Six candidate PRs had usable live state: one is already closed and five remain open, distinct, and not closable in this shard. Nineteen listed candidates could not be safely classified because the preflight artifact has unavailable live state from GitHub API rate limiting, so each is scoped to needs_human rather than inferred from stale inventory text.

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
| Needs human | 19 |

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
| #79556 | keep_closed | skipped | superseded | Already closed in live preflight state; closure actions are not valid for closed refs. |
| #93046 | keep_independent | planned | independent | Distinct open PR in an inventory shard; do not invent a shared canonical or close it. |
| #93040 | keep_independent | planned | independent | Distinct open PR in an inventory shard; keep it separate for normal review instead of closing or merging. |
| #81417 | keep_independent | planned | independent | Not a duplicate or low-signal close candidate; it remains an independent open PR blocked on proof/checks. |
| #81832 | keep_independent | planned | independent | Useful distinct PR with proof/check context; no close action is justified in this inventory shard. |
| #82079 | keep_independent | planned | independent | Distinct open PR with hydrated proof and checks; no dedupe, close, or merge action is available in this plan-mode shard. |
| #82179 | needs_human | blocked | needs_human | Cannot safely classify or plan a mutation without hydrated kind/state/updated_at. |
| #82213 | needs_human | blocked | needs_human | Cannot safely classify or plan a mutation without hydrated kind/state/updated_at. |
| #82240 | needs_human | blocked | needs_human | Cannot safely classify or plan a mutation without hydrated kind/state/updated_at. |
| #93079 | needs_human | blocked | needs_human | Cannot safely classify or plan a mutation without hydrated kind/state/updated_at. |
| #82355 | needs_human | blocked | needs_human | Cannot safely classify or plan a mutation without hydrated kind/state/updated_at. |
| #82379 | needs_human | blocked | needs_human | Cannot safely classify or plan a mutation without hydrated kind/state/updated_at. |
| #82435 | needs_human | blocked | needs_human | Cannot safely classify or plan a mutation without hydrated kind/state/updated_at. |
| #82505 | needs_human | blocked | needs_human | Cannot safely classify or plan a mutation without hydrated kind/state/updated_at. |
| #82519 | needs_human | blocked | needs_human | Cannot safely classify or plan a mutation without hydrated kind/state/updated_at. |
| #82520 | needs_human | blocked | needs_human | Cannot safely classify or plan a mutation without hydrated kind/state/updated_at. |
| #82536 | needs_human | blocked | needs_human | Cannot safely classify or plan a mutation without hydrated kind/state/updated_at. |
| #77899 | needs_human | blocked | needs_human | Cannot safely classify or plan a mutation without hydrated kind/state/updated_at. |
| #78836 | needs_human | blocked | needs_human | Cannot safely classify or plan a mutation without hydrated kind/state/updated_at. |
| #78886 | needs_human | blocked | needs_human | Cannot safely classify or plan a mutation without hydrated kind/state/updated_at. |
| #82587 | needs_human | blocked | needs_human | Cannot safely classify or plan a mutation without hydrated kind/state/updated_at. |
| #79562 | needs_human | blocked | needs_human | Cannot safely classify or plan a mutation without hydrated kind/state/updated_at. |
| #79872 | needs_human | blocked | needs_human | Cannot safely classify or plan a mutation without hydrated kind/state/updated_at. |
| #80251 | needs_human | blocked | needs_human | Cannot safely classify or plan a mutation without hydrated kind/state/updated_at. |
| #80646 | needs_human | blocked | needs_human | Cannot safely classify or plan a mutation without hydrated kind/state/updated_at. |

## Needs Human

- #82179 requires fresh hydration before classification.
- #82213 requires fresh hydration before classification.
- #82240 requires fresh hydration before classification.
- #93079 requires fresh hydration before classification.
- #82355 requires fresh hydration before classification.
- #82379 requires fresh hydration before classification.
- #82435 requires fresh hydration before classification.
- #82505 requires fresh hydration before classification.
- #82519 requires fresh hydration before classification.
- #82520 requires fresh hydration before classification.
- #82536 requires fresh hydration before classification.
- #77899 requires fresh hydration before classification.
- #78836 requires fresh hydration before classification.
- #78886 requires fresh hydration before classification.
- #82587 requires fresh hydration before classification.
- #79562 requires fresh hydration before classification.
- #79872 requires fresh hydration before classification.
- #80251 requires fresh hydration before classification.
- #80646 requires fresh hydration before classification.
