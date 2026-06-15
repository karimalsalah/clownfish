---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-846-bulk-plan-20260615-a"
mode: "plan"
run_id: "27526175733"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526175733"
head_sha: "32e9de066550832a904e28c62eae1c4e36721a2b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:35:54.332Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-846-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526175733](https://github.com/openclaw/clownfish/actions/runs/27526175733)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Read-only plan only. The representative #75037 is already closed, so no closure action is valid for it and there is no live non-security canonical in the listed candidate set. The only open listed candidate, #75066, is explicitly marked by the job as a security-signal ref requiring route_security, so it is quarantined rather than deduped, merged, or closed. Linked #78059 is related session-reset work but has a distinct inbound-message-loss root cause and should remain separate.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #49515 | keep_closed | skipped | related | Closed historical context only. |
| #75037 | keep_closed | skipped | canonical | Former representative remains the best historical canonical for the root cause, but it is not a live canonical because it is closed. |
| #75066 | route_security | planned | security_sensitive | Explicit security-signal quarantine from the job; do not close, merge, or use as canonical in this ProjectClownfish cluster. |
| #78059 | keep_related | planned | related | Related session-reset family, not a duplicate of the closed representative or the quarantined PR. |

## Needs Human

- none
