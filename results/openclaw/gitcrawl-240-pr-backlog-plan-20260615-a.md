---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-240-pr-backlog-plan-20260615-a"
mode: "plan"
run_id: "27525110789"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27525110789"
head_sha: "416f3a943012e6a4f3b9e3e5baef7c4b408b4558"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:04:34.146Z"
canonical: "#91160"
canonical_issue: "#91160"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-240-pr-backlog-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27525110789](https://github.com/openclaw/clownfish/actions/runs/27525110789)

Workflow conclusion: success

Worker result: planned

Canonical: #91160

## Summary

Plan-mode classification only. #91160 remains the open canonical feature request. Job frontmatter explicitly marks #91220 and #91376 as security-signal refs requiring central routing, so both PRs are quarantined with non-mutating route_security actions rather than duplicate, supersede, merge, close, or fix planning.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #91160 | keep_canonical | planned | canonical | Open canonical feature request is still the safest non-security anchor for this cluster. |
| #91220 | route_security | planned | security_sensitive | Explicit job-level security-signal routing requires quarantine of this exact PR. |
| #91376 | route_security | planned | security_sensitive | Explicit job-level security-signal routing requires quarantine of this exact PR. |

## Needs Human

- none
