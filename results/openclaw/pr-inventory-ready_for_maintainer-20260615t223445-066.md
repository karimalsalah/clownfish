---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-066"
mode: "plan"
run_id: "27583277109"
workflow_run_id: "27583277109"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583277109"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:55:40.847Z"
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
needs_human_count: 15
---

# pr-inventory-ready_for_maintainer-20260615T223445-066

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583277109](https://github.com/openclaw/clownfish/actions/runs/27583277109)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No GitHub mutations, merge, fix PR, or close actions are planned. The hydrated artifact reports no cluster-level security signal; #77538 is quarantined separately because the PR text touches auth token/password frame bounds. Missing compacted live state is handled with non-mutating classifications only.

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
| Needs human | 15 |

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
| #78438 | needs_human | planned | needs_human | Maintainer review is the unresolved decision, and live target_updated_at is unavailable in the compacted artifact. |
| #78452 | keep_independent | planned | independent | Waiting-on-author feature work is not a duplicate/close candidate in this inventory shard. |
| #78554 | needs_human | planned | needs_human | Provider/auth-provider correctness requires maintainer review; no mutation is planned without hydrated live state. |
| #92955 | keep_independent | planned | independent | Waiting-on-author provider catalog work is not closable or mergeable in this plan-only shard. |
| #64490 | needs_human | planned | needs_human | Maintainer review remains required and checks are not clean enough for any merge/fixed-by-candidate path. |
| #78094 | keep_independent | planned | independent | Waiting-on-author session-state work is not a duplicate or close candidate in this shard. |
| #66257 | keep_independent | planned | independent | The PR should stay open for author/maintainer follow-up; no close or merge action is available in plan mode. |
| #68986 | keep_independent | planned | independent | Draft PR with unresolved review findings and failing proof should remain open, not be closed or merged. |
| #76094 | needs_human | planned | needs_human | Maintainer judgment is needed for this low-signal docs PR because closure and merge are both unavailable here. |
| #76666 | needs_human | planned | needs_human | Maintainer review is required and failing proof blocks any merge/fixed-by-candidate path. |
| #76744 | needs_human | planned | needs_human | This is a clean-looking maintainer approval decision, but merge is blocked by job permissions. |
| #76920 | needs_human | planned | needs_human | High-impact Telegram routing correctness needs maintainer review; merge is not allowed by the job. |
| #89817 | needs_human | planned | needs_human | Maintainer correctness review is needed, but no mutation is safe without hydrated live state. |
| #89859 | needs_human | planned | needs_human | Maintainer review is required and live state is unavailable in the compacted artifact. |
| #89899 | needs_human | planned | needs_human | Packaging contract correctness needs maintainer review; no mutating action is planned without hydrated state. |
| #77158 | needs_human | planned | needs_human | Maintainer judgment is needed for a large performance/refactor PR; merge is not allowed in this job. |
| #77184 | needs_human | planned | needs_human | Additive SDK API surface needs maintainer approval; merge is not allowed in this job. |
| #77232 | keep_independent | planned | independent | Failing checks/proof make this non-mergeable; low-signal or closeout actions are not enabled, so keep it open independently. |
| #77325 | keep_independent | planned | independent | Waiting-on-author PR with a failing check should remain open for author/maintainer follow-up. |
| #77339 | needs_human | planned | needs_human | Maintainer review is the remaining decision; merge is not allowed by this plan job. |
| #77432 | needs_human | planned | needs_human | Doctor/provider catalog behavior needs maintainer approval; merge is disabled in this job. |
| #77537 | needs_human | planned | needs_human | Maintainer review is required and no mutation is safe without hydrated live state. |
| #77538 | route_security | planned | security_sensitive | Route only this auth/pre-auth-frame PR to central security handling; continue classifying unrelated non-security PRs. |
| #77638 | keep_independent | planned | independent | Waiting-on-author agent edit behavior work is not a duplicate/close candidate in this shard. |
| #90118 | keep_independent | planned | independent | Waiting-on-author docs/wizard work should remain open independently; no close or merge path is available. |

## Needs Human

- #78438 maintainer review with missing compacted live target_updated_at
- #78554 maintainer/provider correctness review with missing compacted live target_updated_at
- #64490 maintainer review; checks/proof not clean for merge
- #76094 maintainer judgment for low-signal docs PR; closure disabled
- #76666 maintainer review; Real behavior proof failing
- #76744 maintainer approval for autogenerated docs PR
- #76920 maintainer review for Telegram topic routing behavior
- #89817 maintainer review with missing compacted live target_updated_at
- #89859 maintainer review with missing compacted live target_updated_at
- #89899 maintainer review with missing compacted live target_updated_at
- #77158 maintainer review for large performance/refactor PR
- #77184 maintainer review for SDK API surface
- #77339 maintainer review for auto-reply runtime cache fix
- #77432 maintainer review for doctor/provider catalog behavior
- #77537 maintainer review with missing compacted live target_updated_at
