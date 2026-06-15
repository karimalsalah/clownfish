---
repo: "openclaw/openclaw"
cluster_id: "live-replacement-smoke-20260429t032843z"
mode: "autonomous"
run_id: "25104112374"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104112374"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.418Z"
canonical: "https://github.com/openclaw/openclaw/pull/74050"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/74050"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# live-replacement-smoke-20260429t032843z

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104112374](https://github.com/openclaw/clownfish/actions/runs/25104112374)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/74050

## Summary

Hydrated state shows the replacement workflow already ran: source PR #74037 was closed after credited replacement PR #74050 opened, and #74050 was later closed by a maintainer as a temporary smoke artifact. No new close, merge, or fix PR action is safe or needed.

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
| #74037 | keep_closed | skipped | superseded | Already closed after the credited replacement path was opened; keep as closed historical source work. |
| #74050 | keep_closed | skipped | canonical | This is the canonical replacement smoke PR for the cluster, and it was intentionally closed by a maintainer without merge. |

## Needs Human

- none
