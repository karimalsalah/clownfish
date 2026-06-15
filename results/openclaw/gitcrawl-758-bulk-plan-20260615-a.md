---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-758-bulk-plan-20260615-a"
mode: "plan"
run_id: "27526155739"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526155739"
head_sha: "bfcc40c5b46da4bbfb978e647e07c894fba40d90"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:35:54.326Z"
canonical: "#89003"
canonical_issue: "#89003"
canonical_pr: "#93072"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-758-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526155739](https://github.com/openclaw/clownfish/actions/runs/27526155739)

Workflow conclusion: success

Worker result: planned

Canonical: #89003

## Summary

Read-only plan: keep #89003 as the live canonical issue. #91690 is explicitly listed by the job as a security-signal ref requiring scoped security routing, but it is already closed and should receive no close/merge/comment mutation from this worker. The hydrated replacement PR #93072 is the active non-security fix path, but merge/fix/raise_pr are blocked by the job and the PR still needs maintainer review, so it is kept related rather than merged.

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
| #89003 | keep_canonical | planned | canonical |  |
| #89005 | keep_closed | skipped | superseded | Closed historical PR; evidence only. |
| #91690 | route_security | planned | security_sensitive | Security-signal ref is out of ProjectClownfish mutation scope. |
| #93072 | keep_related | planned | related | Open linked fix path, but merge/fix actions are blocked in this plan job. |

## Needs Human

- none
