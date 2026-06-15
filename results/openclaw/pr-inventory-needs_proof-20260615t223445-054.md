---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-054"
mode: "plan"
run_id: "27583353624"
workflow_run_id: "27583353624"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583353624"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T23:55:41.555Z"
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
needs_human_count: 13
---

# pr-inventory-needs_proof-20260615T223445-054

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583353624](https://github.com/openclaw/clownfish/actions/runs/27583353624)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was provided or inferred. Hydrated open PRs are kept independently for normal maintainer review/proof work except #91603, which is quarantined with route_security per deterministic validation; already-closed PR #91875 is skipped; candidates without live hydrated state are scoped needs_human because target kind and updated_at are unavailable from the preflight artifact.

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
| Needs human | 13 |

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
| #91511 | keep_independent | planned | independent |  |
| #91535 | keep_independent | planned | independent |  |
| #91544 | keep_independent | planned | independent |  |
| #91584 | keep_independent | planned | independent |  |
| #91603 | route_security | planned | security_sensitive | Route #91603 to central OpenClaw security handling; do not close, merge, label, comment on, or open a fix PR for this item. |
| #91606 | keep_independent | planned | independent |  |
| #91609 | keep_independent | planned | independent |  |
| #91610 | keep_independent | planned | independent |  |
| #91611 | keep_independent | planned | independent |  |
| #91682 | keep_independent | planned | independent |  |
| #91857 | keep_independent | planned | independent |  |
| #91875 | keep_closed | skipped | superseded |  |
| #91877 | needs_human | blocked | needs_human | Live PR state, target_kind, and updated_at are unavailable from the preflight artifact. |
| #91885 | needs_human | blocked | needs_human | Live PR state, target_kind, and updated_at are unavailable from the preflight artifact. |
| #93279 | needs_human | blocked | needs_human | Live PR state, target_kind, and updated_at are unavailable from the preflight artifact. |
| #61335 | needs_human | blocked | needs_human | Live PR state, target_kind, and updated_at are unavailable from the preflight artifact. |
| #64649 | needs_human | blocked | needs_human | Live PR state, target_kind, and updated_at are unavailable from the preflight artifact. |
| #65180 | needs_human | blocked | needs_human | Live PR state, target_kind, and updated_at are unavailable from the preflight artifact. |
| #65198 | needs_human | blocked | needs_human | Live PR state, target_kind, and updated_at are unavailable from the preflight artifact. |
| #68127 | needs_human | blocked | needs_human | Live PR state, target_kind, and updated_at are unavailable from the preflight artifact. |
| #68197 | needs_human | blocked | needs_human | Live PR state, target_kind, and updated_at are unavailable from the preflight artifact. |
| #69245 | needs_human | blocked | needs_human | Live PR state, target_kind, and updated_at are unavailable from the preflight artifact. |
| #69355 | needs_human | blocked | needs_human | Live PR state, target_kind, and updated_at are unavailable from the preflight artifact. |
| #69413 | needs_human | blocked | needs_human | Live PR state, target_kind, and updated_at are unavailable from the preflight artifact. |
| #69426 | needs_human | blocked | needs_human | Live PR state, target_kind, and updated_at are unavailable from the preflight artifact. |

## Needs Human

- Hydrate and classify #91877; preflight artifact has unavailable live state and null updated_at.
- Hydrate and classify #91885; preflight artifact has unavailable live state and null updated_at.
- Hydrate and classify #93279; preflight artifact has unavailable live state and null updated_at.
- Hydrate and classify #61335; preflight artifact has unavailable live state and null updated_at.
- Hydrate and classify #64649; preflight artifact has unavailable live state and null updated_at.
- Hydrate and classify #65180; preflight artifact has unavailable live state and null updated_at.
- Hydrate and classify #65198; preflight artifact has unavailable live state and null updated_at.
- Hydrate and classify #68127; preflight artifact has unavailable live state and null updated_at.
- Hydrate and classify #68197; preflight artifact has unavailable live state and null updated_at.
- Hydrate and classify #69245; preflight artifact has unavailable live state and null updated_at.
- Hydrate and classify #69355; preflight artifact has unavailable live state and null updated_at.
- Hydrate and classify #69413; preflight artifact has unavailable live state and null updated_at.
- Hydrate and classify #69426; preflight artifact has unavailable live state and null updated_at.
