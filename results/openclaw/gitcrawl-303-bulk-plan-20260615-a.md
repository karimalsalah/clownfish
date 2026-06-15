---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-303-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520905812"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520905812"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:56:52.540Z"
canonical: "#87320"
canonical_issue: "#87320"
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

# gitcrawl-303-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520905812](https://github.com/openclaw/clownfish/actions/runs/27520905812)

Workflow conclusion: success

Worker result: planned

Canonical: #87320

## Summary

Plan-mode classification only. #87320 remains the live canonical issue for the npm unpublished exact-version dry-run/apply mismatch. #88529 is quarantined because the job explicitly marks it as a security-signal ref. #88683 is related to the canonical issue and appears to be the stronger non-security fix candidate, but merge and fix work are blocked by this job and the PR still needs maintainer review for the broader fail-closed behavior.

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
| #87320 | keep_canonical | planned | canonical | #87320 is still the clearest live canonical issue for the user-visible failure. |
| #88529 | route_security | planned | security_sensitive | The job explicitly requires scoped security routing for #88529. |
| #88683 | keep_related | planned | related | #88683 is related and likely the best non-security fix path, but it is not merge-plannable in this job and still needs maintainer review for broad behavior. |

## Needs Human

- none
