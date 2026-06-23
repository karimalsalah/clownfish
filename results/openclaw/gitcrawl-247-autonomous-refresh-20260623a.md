---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-247-autonomous-refresh-20260623a"
mode: "autonomous"
run_id: "28005070706"
workflow_run_id: "28005070706"
run_url: "https://github.com/openclaw/clownfish/actions/runs/28005070706"
head_sha: "c3d4877276db1f97103fe56d12a5ddad91fc73e0"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-23T05:48:15.616Z"
canonical: "https://github.com/openclaw/openclaw/issues/90941"
canonical_issue: "https://github.com/openclaw/openclaw/issues/90941"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-247-autonomous-refresh-20260623a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/28005070706](https://github.com/openclaw/clownfish/actions/runs/28005070706)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/90941

## Summary

Classified the cluster without GitHub mutation. #90941 remains the live canonical issue for the symlinked-launcher sandbox script resolver bug. #90951 is adjacent but distinct because it covers npm-package installs where the setup scripts are not shipped. #90942 is the hydrated linked candidate for #90941, but it is outside the actionable cluster refs and carries a merge-risk label plus unresolved ClawSweeper review, so no merge or executable fix artifact is planned. #75594 is quarantined because the preflight artifact marks it security-sensitive.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #4807 | keep_closed | skipped | related | Closed historical package-install context only. |
| #75485 | keep_closed | skipped | related | Closed historical package-install context only. |
| #75594 | route_security | planned | security_sensitive | Route only this exact hydrated security-sensitive PR to central OpenClaw security handling. |
| #90941 | keep_canonical | planned | canonical | Best live canonical for the symlinked-launcher sandbox setup script resolver bug; keep open until a validated fix lands. |
| #90942 | keep_related | planned | fixed_by_candidate | Related candidate fix for #90941, but not merge-ready or executable by this cluster. |
| #90951 | keep_related | planned | related | Same sandbox setup family, but distinct root cause and product decision surface; keep open separately. |

## Needs Human

- none
