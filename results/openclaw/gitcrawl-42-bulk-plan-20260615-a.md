---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-42-bulk-plan-20260615-a"
mode: "plan"
run_id: "27521424025"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27521424025"
head_sha: "c7fde105fe4b1bf849faf5ed130f10118614c64c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:58:14.911Z"
canonical: "#92451"
canonical_issue: "#92451"
canonical_pr: "#92339"
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-42-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27521424025](https://github.com/openclaw/clownfish/actions/runs/27521424025)

Workflow conclusion: success

Worker result: planned

Canonical: #92451

## Summary

Plan-only classification for 10 hydrated open candidates. Security-sensitive refs are quarantined item-by-item; unrelated non-security items are split into prompt/context, Slack plugin regression, memory-prefix, and low-proof PR subfamilies.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #90349 | keep_related | planned | related | Same prompt-budget family as #92451 but broader product scope and not safely closable as a duplicate. |
| #91804 | route_security | planned | security_sensitive | Security-sensitive reasoning leakage report must be routed to central OpenClaw security handling, not backlog cleanup. |
| #91873 | keep_related | planned | related | Distinct non-security Slack/plugin regression; no safe hydrated candidate fix is available in this plan. |
| #92339 | keep_canonical | planned | canonical | Best hydrated non-routed representative PR for the #91804 fix attempt, but not mergeable or closable in plan mode. |
| #92354 | route_security | planned | security_sensitive | Security-sensitive PR is out of scope for ProjectClownfish mutation and should be routed item-by-item. |
| #92372 | keep_related | planned | related | Same general memory/ENOENT area as historical items but a distinct current reproduction claim, so it should stay open. |
| #92432 | keep_related | planned | related | Related to #92372 by claimed issue link, but failing proof and unrelated diff shape block fixed-by-candidate or closure. |
| #92451 | keep_canonical | planned | canonical | Best live canonical for the current prompt-bloat regression subcluster. |
| #92455 | keep_related | planned | related | Related to #92451 by claimed issue link, but failing proof and weak diff fit block fixed-by-candidate or closure. |
| #92723 | route_security | planned | security_sensitive | Security-sensitive/provider-secrets PR must be routed to central security handling and must not block non-security Slack issue classification. |

## Needs Human

- none
