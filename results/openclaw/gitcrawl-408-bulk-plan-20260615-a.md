---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-408-bulk-plan-20260615-a"
mode: "plan"
run_id: "27526045995"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526045995"
head_sha: "c7ad8e870b6f3caec4c09cae355087e2dab5e58d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:32:02.752Z"
canonical: null
canonical_issue: null
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

# gitcrawl-408-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526045995](https://github.com/openclaw/clownfish/actions/runs/27526045995)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only classification from the provided preflight artifact. The representative #67796 is already closed, so no close action is valid. #87964 is explicitly security-sensitive and should be routed to central security handling. No open non-security item in this cluster should replace #67796 as canonical; #52120 is related Mattermost thread-context work, not the same filePath/path attachment fallback root.

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

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #67796 | keep_closed | skipped | fixed_by_candidate | Representative #67796 is already closed and should remain closed; no mutation is planned. |
| #87964 | route_security | planned | security_sensitive | The item is explicitly marked security-sensitive by the job and preflight artifact, so it is read-only and out of ProjectClownfish cleanup scope. |
| #52120 | keep_related | planned | related | Related Mattermost message-delivery work, but a different root cause and not a replacement canonical for the closed #67796 fallback PR. |
| #58439 | keep_closed | skipped | fixed_by_candidate | Historical linked PR is already closed; no close action is valid. |
| #67784 | keep_closed | skipped | related | Historical linked issue is already closed and broader than the #67796 fallback branch. |
| #87930 | keep_closed | skipped | related | Historical linked issue is already closed; no mutation is valid. |

## Needs Human

- none
