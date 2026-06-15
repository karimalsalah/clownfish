---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-041"
mode: "plan"
run_id: "27583353109"
workflow_run_id: "27583353109"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583353109"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:55:41.499Z"
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
needs_human_count: 1
---

# pr-inventory-needs_proof-20260615T223445-041

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583353109](https://github.com/openclaw/clownfish/actions/runs/27583353109)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was selected because the job explicitly says this is not a dedupe cluster. Hydrated open non-security PRs are kept independent for ordinary maintainer review/proof; #72449 is routed to central security handling; candidates without live hydrated state are blocked for fresh hydration.

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
| Needs human | 1 |

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
| #71885 | keep_independent | planned | independent |  |
| #71902 | keep_independent | planned | independent |  |
| #72005 | keep_independent | planned | independent |  |
| #72254 | keep_independent | planned | independent |  |
| #72351 | keep_independent | planned | independent |  |
| #72449 | route_security | planned | security_sensitive |  |
| #72510 | keep_independent | planned | independent |  |
| #72513 | keep_independent | planned | independent |  |
| #72771 | keep_independent | planned | independent |  |
| #72987 | keep_independent | planned | independent |  |
| #73159 | keep_independent | planned | independent |  |
| #75679 | keep_independent | planned | independent |  |
| #75786 | needs_human | blocked | needs_human | Fresh live GitHub hydration is required before classification. |
| #80146 | needs_human | blocked | needs_human | Fresh live GitHub hydration is required before classification. |
| #80651 | needs_human | blocked | needs_human | Fresh live GitHub hydration is required before classification. |
| #80789 | needs_human | blocked | needs_human | Fresh live GitHub hydration is required before classification. |
| #80921 | needs_human | blocked | needs_human | Fresh live GitHub hydration is required before classification. |
| #81147 | needs_human | blocked | needs_human | Fresh live GitHub hydration is required before classification. |
| #81293 | needs_human | blocked | needs_human | Fresh live GitHub hydration is required before classification. |
| #81374 | needs_human | blocked | needs_human | Fresh live GitHub hydration is required before classification. |
| #81531 | needs_human | blocked | needs_human | Fresh live GitHub hydration is required before classification. |
| #81613 | needs_human | blocked | needs_human | Fresh live GitHub hydration is required before classification. |
| #92995 | needs_human | blocked | needs_human | Fresh live GitHub hydration is required before classification. |
| #81766 | needs_human | blocked | needs_human | Fresh live GitHub hydration is required before classification. |
| #81939 | needs_human | blocked | needs_human | Fresh live GitHub hydration is required before classification. |

## Needs Human

- Fresh live hydration is required for #75786, #80146, #80651, #80789, #80921, #81147, #81293, #81374, #81531, #81613, #92995, #81766, and #81939 because the preflight artifact has no kind/state/updated_at for those listed candidates.
