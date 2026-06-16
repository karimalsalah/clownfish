---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2030-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27599300219"
workflow_run_id: "27599300219"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599300219"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:46:59.520Z"
canonical: "https://github.com/openclaw/openclaw/issues/65971"
canonical_issue: "https://github.com/openclaw/openclaw/issues/65971"
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2030-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599300219](https://github.com/openclaw/clownfish/actions/runs/27599300219)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/65971

## Summary

Hydrated state shows the original representative and both named candidates are already closed, so no duplicate closeout is safe or needed. The closed #65971 path remains the best representative for the display-title Feishu gateway-stall report; #45102 had already been closed against the later stuck-session tracker #71127; #59945 is security-sensitive and is routed only to central security handling; the only open linked item, draft PR #76115, is related follow-up work but is not mergeable or closable in this dedupe-only job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #45100 | keep_closed | skipped | fixed_by_candidate | Already closed before this run; no live closeout target remains. |
| #45102 | keep_closed | skipped | duplicate | Candidate is already closed and was previously routed to the hydrated #71127 stuck-session recovery tracker. |
| #56192 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented on main. |
| #59945 | route_security | planned | security_sensitive | Security-sensitive token/config-redaction evidence is outside Clownfish backlog cleanup scope and must route to central OpenClaw security handling. |
| #62268 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; no live target remains. |
| #63020 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented on main. |
| #65971 | keep_closed | skipped | canonical | Closed canonical representative; keep as historical canonical evidence only. |
| #71127 | keep_closed | skipped | canonical | Closed canonical for the broader stuck-session subfamily. |
| #76115 | keep_related | planned | related | Related open draft PR is not a duplicate closeout target and is not eligible for merge or repair in this dedupe-only job. |

## Needs Human

- none
