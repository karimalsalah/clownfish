---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-4491-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585130675"
workflow_run_id: "27585130675"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585130675"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:18:21.269Z"
canonical: "#54488"
canonical_issue: "#54488"
canonical_pr: null
actions_total: 13
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-4491-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585130675](https://github.com/openclaw/clownfish/actions/runs/27585130675)

Workflow conclusion: success

Worker result: planned

Canonical: #54488

## Summary

Planned non-mutating classification only. The obsolete representative #40140 is closed, so the current canonical path for this cluster is the open scheduler-fairness issue #54488. No close, merge, or fix actions are safe or allowed: #54488 remains open as canonical; linked open issues/PRs are related but narrower or product-design-adjacent; the exact security-sensitive ref #63864 is quarantined with route_security.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
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
| #1 | keep_closed | skipped | independent | Closed unrelated linked PR; historical evidence only. |
| #40140 | keep_closed | skipped | related | Obsolete closed representative; keep as historical related context and use #54488 as current canonical. |
| #41120 | keep_related | planned | related | Same responsiveness/scheduler family, but browser/workload lane routing is a distinct product/config scope, so it should stay open as related. |
| #47906 | keep_closed | skipped | related | Closed related context; no closure action is valid for an already-closed item. |
| #49225 | keep_closed | skipped | independent | Closed independent WhatsApp delivery-state issue. |
| #54488 | keep_canonical | planned | canonical | Best current canonical for the cluster's unresolved session-lane starvation/followup-drain fairness problem. |
| #57892 | keep_closed | skipped | related | Closed related context around session-lane channel responsiveness; no close action is valid. |
| #63864 | route_security | planned | security_sensitive | Exact security-sensitive linked PR must be routed to central OpenClaw security handling without blocking unrelated non-security classification. |
| #65504 | keep_closed | skipped | related | Closed related reliability/queue-attribution context; no mutation needed. |
| #66638 | keep_closed | skipped | related | Closed related but distinct context; historical only. |
| #74225 | keep_closed | skipped | independent | Closed independent linked issue. |
| #89238 | keep_related | planned | related | Related partial PR, but not a canonical fix and merge is blocked by dirty state, failing check, and unresolved review finding. Merge/fix actions are disallowed by job frontmatter. |
| #92284 | keep_related | planned | related | Useful related partial fix candidate, but not sufficient to close #54488 and merge is disallowed in this job. |

## Needs Human

- none
