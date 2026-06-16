---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156704-autonomous-smoke"
mode: "autonomous"
run_id: "27597849690"
workflow_run_id: "27597849690"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597849690"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:13:26.856Z"
canonical: "https://github.com/openclaw/openclaw/issues/48373"
canonical_issue: "https://github.com/openclaw/openclaw/issues/48373"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156704-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597849690](https://github.com/openclaw/clownfish/actions/runs/27597849690)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/48373

## Summary

The representative PR #48138 is closed and security-sensitive, so it is routed to central security handling only. The original four PR candidates are all closed and should not receive close actions. The only live non-security hydrated item is #48373, a linked Feishu create-content bug; current main at 6aa83374d90d35226b9cf3577155c3876a91b4b3 still routes create through createDoc() without writing supplied content, so a narrow credited replacement fix path is planned from the closed useful source PR #48377.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #39934 | keep_closed | skipped | related | Already closed; no mutation is valid. |
| #40747 | keep_closed | skipped | independent | Already closed and independent from the live fix lane. |
| #48138 | route_security | planned | security_sensitive | Exact-item quarantine to central OpenClaw security handling; unrelated non-security work continues. |
| #48373 | keep_canonical | planned | canonical | Best live non-security canonical item for the create-content subfamily. |
| #48377 | keep_closed | skipped | superseded | Closed useful source PR; replacement fix path preserves credit. |
| #53535 | keep_closed | skipped | related | Already closed and only related by Feishu area. |
| cluster:ghcrawl-156704-autonomous-smoke | fix_needed | planned |  | A narrow replacement PR is needed for the live non-security bug. |
| cluster:ghcrawl-156704-autonomous-smoke | build_fix_artifact | planned |  | Executable cluster-scoped fix artifact is available. |

## Needs Human

- none
