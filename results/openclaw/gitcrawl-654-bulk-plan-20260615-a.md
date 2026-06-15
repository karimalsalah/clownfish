---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-654-bulk-plan-20260615-a"
mode: "plan"
run_id: "27526143482"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526143482"
head_sha: "e7afb37030cc6d436522c8e9ca7202262840e10b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:34:46.318Z"
canonical: "#90205"
canonical_issue: null
canonical_pr: "#90205"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-654-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526143482](https://github.com/openclaw/clownfish/actions/runs/27526143482)

Workflow conclusion: success

Worker result: planned

Canonical: #90205

## Summary

Plan-mode classification only. The original representative #90330 is no longer open and is also listed by the job as a security-signal ref requiring quarantine, so it is routed read-only. The only open candidate, #90487, overlaps the shipped missing-content-type stream fix but contains additional hardening against the same transport area and has useful contributor code, so it should stay open as related rather than be closed in this cluster.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #90330 | route_security | planned | security_sensitive | The job explicitly marks #90330 as a security-signal ref requiring scoped route_security. This is non-mutating and does not block classifying #90487. |
| #90487 | keep_related | planned | related | #90487 shares the transport symptom family with merged #90205 but appears to carry additional hardening scope rather than a pure duplicate. Keep it related for maintainer review instead of closing or merging in this plan-mode, no-merge/no-fix job. |

## Needs Human

- none
