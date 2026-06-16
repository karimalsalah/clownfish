---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-110-dedupe-cleanup-wave"
mode: "autonomous"
run_id: "27608148324"
workflow_run_id: "27608148324"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27608148324"
head_sha: "d39befcd6309943509cd00e8e3cd0ee7c314e6be"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T09:37:55.094Z"
canonical: "https://github.com/openclaw/openclaw/pull/91134"
canonical_issue: "https://github.com/openclaw/openclaw/issues/80536"
canonical_pr: "https://github.com/openclaw/openclaw/pull/91134"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-110-dedupe-cleanup-wave

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27608148324](https://github.com/openclaw/clownfish/actions/runs/27608148324)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/91134

## Summary

Classified the open cluster around #80536/#91134 using the hydrated preflight artifact. #91134 remains the canonical open PR for the bundled channel config metadata CI guard; #80536 is covered by that canonical PR and can be closed with a credit-preserving comment. Paperclip and Telegram UI refs are not duplicates of this CI metadata guard. Security-sensitive linked #63924 is routed only to central security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 1 |
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
| #80536 | close_fixed_by_candidate | executed | fixed_by_candidate | already closed with matching projectclownfish comment |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #91134 | keep_canonical | planned | canonical | Best surviving canonical path for #80536; merge is not allowed by this job. |
| #80536 | close_fixed_by_candidate | planned | fixed_by_candidate | The issue is covered by the hydrated canonical PR #91134, and require_fix_before_close is false. |
| #74974 | keep_independent | planned | independent | Different root cause and user-visible failure from the bundled channel config metadata CI guard. |
| #87759 | keep_related | planned | related | Related config-schema surface, but not the same work item or same root cause. |
| #63380 | keep_closed | skipped | related | Closed historical context only. |
| #74635 | keep_closed | skipped | independent | Closed historical context for an independent Paperclip Gateway subfamily. |
| #63924 | route_security | planned | security_sensitive | Exact linked ref is security-sensitive and must be routed to central OpenClaw security handling only. |

## Needs Human

- none
