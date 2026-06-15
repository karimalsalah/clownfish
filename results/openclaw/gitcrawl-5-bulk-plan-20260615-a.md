---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-5-bulk-plan-20260615-a"
mode: "plan"
run_id: "27521468883"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27521468883"
head_sha: "c7fde105fe4b1bf849faf5ed130f10118614c64c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:58:14.992Z"
canonical: "#90313"
canonical_issue: "#90313"
canonical_pr: "#90433"
actions_total: 40
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-5-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27521468883](https://github.com/openclaw/clownfish/actions/runs/27521468883)

Workflow conclusion: success

Worker result: planned

Canonical: #90313

## Summary

Read-only plan result for 40 job candidates. #90313 remains the live canonical issue for the Dreaming archive/subagent-parentage ingestion defect, with #90433 as the narrow open PR for the archive-exclusion subset. The cluster also contains several distinct related subclusters; security-signal refs are routed without blocking ordinary classifications. No GitHub mutations were executed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 40 |
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
| #71656 | keep_closed | skipped | related | Already closed by stale automation and only historically related; no closure action is valid. |
| #72546 | keep_closed | skipped | related | Already closed; keep as related historical context only. |
| #72611 | keep_related | planned | related | Same Dreaming ingestion family, but broader config/product scope remains unique. |
| #74639 | keep_closed | skipped | related | Already closed; no mutation is allowed or needed. |
| #75658 | keep_related | planned | related | Related through session archive artifacts, but it is a sessions cleanup root cause, not a duplicate of #90313. |
| #76456 | keep_related | planned | related | Distinct cron-retention subcluster; keep open until a safe fix lands. |
| #76545 | close_superseded | planned | superseded | Superseded by hydrated PR #90194; close plan includes credit and reopen path. |
| #79068 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for Clownfish backlog cleanup. |
| #79223 | keep_independent | planned | independent | Product feature request, not duplicate of Dreaming corpus archive/parentage bug. |
| #79507 | keep_related | planned | related | Related Dreaming ingestion hygiene issue with its own fix path. |
| #79547 | keep_related | planned | related | Useful related PR, not a merge candidate in plan mode. |
| #79916 | keep_independent | planned | independent | Independent feature/config request. |
| #80083 | route_security | planned | security_sensitive | Security-sensitive item must be quarantined from Clownfish cleanup. |
| #80664 | keep_related | planned | related | Related Dreaming corpus hygiene issue, not the same archive/parentage root cause. |
| #80666 | keep_related | planned | related | Useful related PR, but not canonical for #90313. |
| #83213 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; no action. |
| #83625 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; no action. |
| #84286 | keep_related | planned | related | Related Dreaming operations issue with unique unresolved behavior. |
| #84291 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; linked fix ref in comment was not a hydrated primary item for this job. |
| #84847 | keep_related | planned | related | Related memory-core Dreaming operations issue, but not a duplicate and not closable here. |
| #84848 | route_security | planned | security_sensitive | Security-signal ref must be routed to central handling. |
| #84882 | keep_independent | planned | independent | Distinct data-loss report requiring its own handling, not dedupe against #90313. |
| #85473 | keep_independent | planned | independent | Independent feature/API request. |
| #86178 | keep_related | planned | related | Related Dreaming cron operations issue with unique symptoms. |
| #86275 | keep_closed | skipped | related | Already closed; no close action is valid. |
| #88062 | keep_independent | planned | independent | Independent gateway/logging PR. |
| #88632 | keep_related | planned | related | Session-state maintenance subcluster, not duplicate of #90313. |
| #88919 | route_security | planned | security_sensitive | Security-signal ref must be quarantined from this cleanup plan. |
| #89200 | keep_related | planned | related | Related session cleanup issue, not duplicate of #90313 and no closable non-security fix path in this job. |
| #89209 | route_security | planned | security_sensitive | Security-signal ref must be routed to central handling. |
| #89288 | keep_related | planned | related | Useful related implementation candidate, not merge-ready and not a duplicate of #90313. |
| #89666 | keep_related | planned | related | Same cron-retention subcluster as #76456, but keep open until fix lands. |
| #89719 | keep_related | planned | related | Related/superseded candidate, but keeping non-mutating classification avoids closing useful contributor work before #90194 is resolved. |
| #89721 | needs_human | planned | needs_human | Maintainer decision needed on whether stable cron base rows should be preserved, pruned by retention, or handled through a separate cleanup path. |
| #90194 | keep_related | planned | related | Keep as canonical cron-retention PR for its subcluster; no merge action in plan mode. |
| #90313 | keep_canonical | planned | canonical | #90313 remains the best live canonical for the title root cause. |
| #90433 | keep_related | planned | related | Canonical open PR for the archive-ingestion subset of #90313; keep for maintainer review. |
| #91057 | keep_related | planned | related | Related session-maintenance implementation candidate; no merge action permitted. |
| #91182 | route_security | planned | security_sensitive | Security-signal ref is routed even though it is already closed; no close action is emitted. |
| #91267 | keep_closed | skipped | superseded | Already closed and superseded by #90433; no mutation needed. |

## Needs Human

- #89721: maintainer decision needed on cron base-session lifecycle semantics before deciding whether this test-only PR is useful, superseded, or should be closed.
