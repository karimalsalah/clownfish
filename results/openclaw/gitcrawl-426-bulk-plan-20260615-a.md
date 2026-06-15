---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-426-bulk-plan-20260615-a"
mode: "plan"
run_id: "27521426570"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27521426570"
head_sha: "c7fde105fe4b1bf849faf5ed130f10118614c64c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:58:14.914Z"
canonical: "#92536"
canonical_issue: "#92536"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-426-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27521426570](https://github.com/openclaw/clownfish/actions/runs/27521426570)

Workflow conclusion: success

Worker result: planned

Canonical: #92536

## Summary

Plan-only classification completed from the hydrated preflight artifact. #92536 remains the live canonical issue for the Dreaming sidecar allowlist activation bug. #92541 is explicitly listed as a security-signal ref in the job and is routed to central OpenClaw security handling without blocking the non-security canonical issue. Historical PR #65411 is already closed and kept only as context.

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
| #92536 | keep_canonical | planned | canonical | #92536 is the clearest surviving non-security canonical issue for the current allowlist-sidecar activation bug. |
| #92541 | route_security | planned | security_sensitive | #92541 is the exact security-signal ref in this cluster, so ProjectClownfish should not merge, close, label, comment on, or use it as fixed-by-candidate; central OpenClaw security handling should decide any further path. |
| #65411 | keep_closed | skipped | related | Already closed merged PR is related historical context, not an open candidate for this plan. |

## Needs Human

- #92541 is routed to central OpenClaw security handling because the job explicitly marks it as the security-signal ref.
