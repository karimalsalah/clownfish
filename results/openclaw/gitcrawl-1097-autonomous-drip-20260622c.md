---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1097-autonomous-drip-20260622c"
mode: "autonomous"
run_id: "27982702694"
workflow_run_id: "27982702694"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27982702694"
head_sha: "5477de734c7a613040ae5b56517bc7ee37dd7f7a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-22T20:47:25.905Z"
canonical: "https://github.com/openclaw/openclaw/issues/87156"
canonical_issue: "https://github.com/openclaw/openclaw/issues/87156"
canonical_pr: "https://github.com/openclaw/openclaw/pull/88311"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1097-autonomous-drip-20260622c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27982702694](https://github.com/openclaw/clownfish/actions/runs/27982702694)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/87156

## Summary

Classified #87156 as the canonical live issue for the Windows doctor/update Startup-folder fallback migration gap. The hydrated active fix candidate is #88311, but it is an excluded overlap PR, draft, broad, and has an unresolved ClawSweeper review, so this worker should not close, merge, or open a replacement fix PR for this cluster. Routed only the hydrated security-sensitive refs that preflight explicitly marked true.

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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #87156 | keep_canonical | planned | canonical | Keep #87156 open as the canonical issue. Do not close it before the excluded active fix path #88311 is repaired and landed. |
| #83736 | route_security | planned | security_sensitive | Route this exact hydrated security-sensitive issue to central OpenClaw security handling; it does not block keeping #87156 canonical. |
| #92726 | route_security | planned | security_sensitive | Route this exact hydrated security-sensitive PR to central OpenClaw security handling if any further handling is needed. |

## Needs Human

- none
