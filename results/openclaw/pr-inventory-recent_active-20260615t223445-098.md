---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-recent_active-20260615T223445-098"
mode: "plan"
run_id: "27583354720"
workflow_run_id: "27583354720"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583354720"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T23:55:41.611Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 4
---

# pr-inventory-recent_active-20260615T223445-098

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583354720](https://github.com/openclaw/clownfish/actions/runs/27583354720)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Plan-mode PR inventory shard classified independently with no shared canonical. No merge, fix, or close-by-candidate actions are planned because the job blocks merge/fix/raise_pr, low-signal closeout is disabled, and several PRs lack live hydrated state. Hydrated open PRs with distinct scopes are kept independent; already-closed #93290 is kept closed; #93392 is quarantined to central security handling per validator security-sensitive routing; unavailable listed refs need fresh hydration before classification or mutation.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 4 |

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
| #93290 | keep_closed | skipped | superseded | Already closed in hydrated live state; no closure action is valid. |
| #90151 | keep_independent | planned | independent | Distinct docs PR with active author follow-up and no duplicate/supersession evidence inside this inventory shard. |
| #92196 | keep_independent | planned | independent | Distinct memory-search fix with maintainer-review and merge-preflight blockers; no close or merge action is safe in this plan. |
| #93392 | route_security | planned | security_sensitive | Quarantine #93392 to central OpenClaw security handling; do not close, merge, label, comment, or open a fix PR for this item in ProjectClownfish. |
| #91408 | keep_independent | planned | independent | Distinct Telegram/ACP feature PR with useful code and proof but unresolved review/merge-risk evidence; keep it on normal maintainer review path. |
| #92491 | keep_related | planned | related | Likely superseded, but the proposed canonical #92484 is not hydrated enough for a close_superseded action in this run. |
| #93098 | needs_human | blocked | needs_human | Fresh hydration is required before this listed PR can be classified or targeted safely. |
| #91714 | needs_human | blocked | needs_human | Fresh hydration is required before this listed PR can be classified or targeted safely. |
| #93402 | needs_human | blocked | needs_human | Fresh hydration is required before this listed PR can be classified or targeted safely. |

## Needs Human

- #93098 requires fresh GitHub hydration; the preflight artifact has null kind/state/updated_at for this listed candidate.
- #91714 requires fresh GitHub hydration; the preflight artifact has null kind/state/updated_at for this listed candidate.
- #93402 requires fresh GitHub hydration; the preflight artifact has null kind/state/updated_at for this listed candidate.
- #92491 should be re-planned with #92484 hydrated before any superseded-close action is considered.
