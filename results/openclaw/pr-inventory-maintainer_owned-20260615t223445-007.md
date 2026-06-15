---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-maintainer_owned-20260615T223445-007"
mode: "plan"
run_id: "27583279389"
workflow_run_id: "27583279389"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583279389"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:55:41.270Z"
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

# pr-inventory-maintainer_owned-20260615T223445-007

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583279389](https://github.com/openclaw/clownfish/actions/runs/27583279389)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. No shared canonical was selected because the job explicitly says this is not a dedupe cluster; open hydrated PRs are kept as independent review items, already-closed hydrated PRs are skipped as closed, and unhydrated candidates are left for human/live-state refresh before any actionable decision.

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
| #85235 | keep_independent | planned | independent |  |
| #85403 | keep_independent | planned | independent |  |
| #90908 | needs_human | planned | needs_human | Refresh live PR state before classification. |
| #85404 | keep_independent | planned | independent |  |
| #85471 | keep_closed | skipped | fixed_by_candidate |  |
| #85478 | keep_independent | planned | independent |  |
| #85788 | keep_independent | planned | independent |  |
| #85845 | keep_independent | planned | independent |  |
| #86094 | keep_independent | planned | independent |  |
| #86285 | keep_independent | planned | independent |  |
| #86540 | keep_independent | planned | independent |  |
| #86541 | keep_independent | planned | independent |  |
| #86793 | needs_human | planned | needs_human | Refresh live PR state before classification. |
| #86795 | needs_human | planned | needs_human | Refresh live PR state before classification. |
| #86796 | needs_human | planned | needs_human | Refresh live PR state before classification. |
| #86797 | needs_human | planned | needs_human | Refresh live PR state before classification. |
| #86932 | needs_human | planned | needs_human | Refresh live PR state before classification. |
| #87433 | needs_human | planned | needs_human | Refresh live PR state before classification. |
| #87437 | needs_human | planned | needs_human | Refresh live PR state before any close-style decision. |
| #93114 | needs_human | planned | needs_human | Refresh live PR state before classification. |
| #93076 | needs_human | planned | needs_human | Refresh live PR state before classification. |
| #87774 | needs_human | planned | needs_human | Refresh live PR state before classification. |
| #87814 | needs_human | planned | needs_human | Refresh live PR state before classification. |
| #87850 | needs_human | planned | needs_human | Refresh live PR state before classification. |
| #87895 | needs_human | planned | needs_human | Refresh live PR state before classification. |

## Needs Human

- Refresh live preflight hydration for #90908, #86793, #86795, #86796, #86797, #86932, #87433, #87437, #93114, #93076, #87774, #87814, #87850, and #87895 before making per-PR classifications with target_updated_at.
