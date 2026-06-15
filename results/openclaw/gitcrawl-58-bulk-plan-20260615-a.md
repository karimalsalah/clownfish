---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-58-bulk-plan-20260615-a"
mode: "plan"
run_id: "27521512878"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27521512878"
head_sha: "c7fde105fe4b1bf849faf5ed130f10118614c64c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:58:15.010Z"
canonical: "#90421"
canonical_issue: null
canonical_pr: "#90421"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-58-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27521512878](https://github.com/openclaw/clownfish/actions/runs/27521512878)

Workflow conclusion: success

Worker result: planned

Canonical: #90421

## Summary

Plan-only classification for eight open candidates. #90421 remains the best live canonical for the stale Skill Workshop proposal reconciliation family. #90756/#91535 form a separate non-security UI agent-scope family. #89932 is a docs/tool-visibility follow-up to already-fixed #87570, not part of the #90421 root cause. #90770 and #92733 are routed as security-signal/security-sensitive items per job notes and artifact safety gates.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #89932 | keep_related | planned | related | Related Skill Workshop area, but different root cause and the linked issue is already fixed on main; no closure planned because the job says do not close anything. |
| #90388 | keep_related | planned | fixed_by_candidate | The issue is covered by #90421, but plan mode and job goal prohibit closure actions. |
| #90421 | keep_canonical | planned | canonical | Best live canonical for the stale proposal reconciliation family. |
| #90493 | keep_related | planned | superseded | Overlapping useful contributor PR, but #90421 is the broader and cleaner canonical path; no supersede close planned in this read-only job. |
| #90756 | keep_related | planned | related | Related Skill Workshop family but distinct root cause; #91535 is the better non-security candidate for this subcluster because #90770 is routed per job security-signal notes. |
| #90770 | route_security | planned | security_sensitive | Routed as a job-specified security-signal item; no close, merge, label, or comment action planned. |
| #91535 | keep_related | planned | related | Separate UI agent-scope subcluster with unresolved proof/check blockers; keep related rather than close or merge. |
| #92733 | route_security | planned | security_sensitive | Security-sensitive boundary-changing PR; out of scope for Clownfish backlog cleanup. |

## Needs Human

- none
