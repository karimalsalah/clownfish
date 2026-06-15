---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-35-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520940283"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520940283"
head_sha: "33cef557e55ce52eac8e0a2528e6417f8a9b826a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:56:52.560Z"
canonical: "#90766"
canonical_issue: "#90766"
canonical_pr: "#92346"
actions_total: 15
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-35-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520940283](https://github.com/openclaw/clownfish/actions/runs/27520940283)

Workflow conclusion: success

Worker result: planned

Canonical: #90766

## Summary

Read-only plan using the hydrated preflight artifact. #90766 remains the live canonical issue for stale subagent orphan recovery. The job-designated security-signal refs are quarantined with scoped route_security actions. The cluster also contains two clear non-security subclusters: #90444 covered by #90505, and #92285 covered by #92454. No merge or fix PR is planned because the job blocks merge, fix, and raise_pr.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 15 |
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
| #61242 | route_security | planned | security_sensitive | Job-level security signal requires scoped quarantine despite the compacted artifact summary not flagging the item itself. |
| #73746 | keep_related | planned | related | Same task/session-state family, but broader and distinct from the canonical orphan recovery bug. |
| #74131 | keep_related | planned | related | Related subagent lifecycle resilience work, not the same root cause as #90766. |
| #84157 | route_security | planned | security_sensitive | Job-level security signal requires scoped central-security routing. |
| #90444 | close_fixed_by_candidate | planned | fixed_by_candidate | The open issue is covered by a hydrated, focused candidate PR that should own validation. |
| #90505 | keep_related | planned | related | Candidate fix for a separate non-security subcluster; no merge action is allowed in this job. |
| #90766 | keep_canonical | planned | canonical | Best live canonical for the stale subagent orphan recovery root cause. |
| #90817 | route_security | planned | security_sensitive | Scoped security routing is required for the exact job-designated ref. |
| #91611 | route_security | planned | security_sensitive | Scoped security routing is required for the exact job-designated ref. |
| #91668 | keep_related | planned | related | Overlapping but not safe for closeout or merge; preserve as related context while #92346 is the clearer non-security candidate fix. |
| #92285 | close_fixed_by_candidate | planned | fixed_by_candidate | The issue is clearly covered by a hydrated candidate PR with passing proof/checks. |
| #92301 | close_superseded | planned | superseded | Same subcluster as #92454, with #92454 the stronger hydrated candidate fix. |
| #92346 | keep_related | planned | related | Best non-security candidate PR for the #90766 root cause, but merge is out of scope for this job. |
| #92454 | keep_related | planned | related | Candidate fix for the #92285 subcluster; no merge action is allowed in this job. |
| #92697 | keep_related | planned | related | Related status-surfacing work with a distinct product scope. |

## Needs Human

- none
