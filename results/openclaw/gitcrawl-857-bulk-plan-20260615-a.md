---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-857-bulk-plan-20260615-a"
mode: "plan"
run_id: "27526188719"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526188719"
head_sha: "d0c2ce6836176348e45f3b39f68ebc189c9a9b3e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:35:54.335Z"
canonical: null
canonical_issue: null
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

# gitcrawl-857-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526188719](https://github.com/openclaw/clownfish/actions/runs/27526188719)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode classification only. The hinted canonical #73305 is already closed, so no close action is valid. The only open candidate, #73462, is explicitly listed by the job as a security-signal ref and is routed to central security handling instead of backlog cleanup. Linked closed PR #78456 remains historical context only.

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
| #73305 | keep_closed | skipped | canonical | Closed representatives are historical evidence only; no mutation is available in plan mode. |
| #73462 | route_security | planned | security_sensitive | The job explicitly scopes #73462 as a security-signal ref requiring central security routing; do not close, merge, or use it as a candidate fix in this worker result. |
| #78456 | keep_closed | skipped | related | Already-closed linked context ref; no close or merge action is valid. |

## Needs Human

- none
