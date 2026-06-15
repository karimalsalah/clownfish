---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520795074"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520795074"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:56:52.496Z"
canonical: "#86023"
canonical_issue: "#86023"
canonical_pr: null
actions_total: 40
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520795074](https://github.com/openclaw/clownfish/actions/runs/27520795074)

Workflow conclusion: success

Worker result: planned

Canonical: #86023

## Summary

Read-only plan for 40 job candidates. The original representative #86053 is open but listed in the job security-signal set, so it is routed to central security handling rather than used for cleanup. Non-security items split into smaller families: semantic Codex thread/bootstrap ownership (#86023), prompt-build message projection (#88353/#89004), tool-schema hardening, Codex native exec behavior (#91774/#92238/#92294), and already-implemented sandbox shell routing (#80590/#83667).

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
| #80590 | close_superseded | planned | superseded |  |
| #83229 | keep_closed | skipped | superseded | Already closed items must not receive closure actions. |
| #83367 | keep_closed | skipped | superseded | Already closed items must not receive closure actions. |
| #83369 | keep_closed | skipped | superseded | Already closed items must not receive closure actions. |
| #84874 | route_security | planned | security_sensitive | Security-sensitive refs are read-only and routed to central OpenClaw security handling. |
| #85213 | route_security | planned | security_sensitive | Route only the affected security-signal item and continue unrelated non-security classification. |
| #85975 | keep_related | planned | related |  |
| #86023 | keep_canonical | planned | canonical |  |
| #86053 | route_security | planned | security_sensitive | The representative is routed, so it is not used as a cleanup canonical in this plan. |
| #86094 | route_security | planned | security_sensitive |  |
| #86160 | route_security | planned | security_sensitive |  |
| #88175 | keep_related | planned | related |  |
| #88206 | keep_related | planned | related |  |
| #88332 | route_security | planned | security_sensitive | Security-sensitive refs are read-only and routed to central OpenClaw security handling. |
| #88336 | route_security | planned | security_sensitive |  |
| #88353 | keep_canonical | planned | canonical |  |
| #88407 | keep_related | planned | related |  |
| #89004 | keep_related | planned | fixed_by_candidate |  |
| #89067 | keep_related | planned | related |  |
| #89068 | keep_related | planned | related |  |
| #89072 | keep_related | planned | related |  |
| #89292 | keep_related | planned | related |  |
| #89296 | keep_independent | planned | independent |  |
| #89301 | keep_related | planned | related |  |
| #89329 | keep_related | planned | related |  |
| #89737 | keep_related | planned | related |  |
| #89747 | keep_related | planned | related |  |
| #89837 | keep_canonical | planned | canonical |  |
| #89980 | keep_related | planned | related |  |
| #90268 | keep_related | planned | related |  |
| #90332 | keep_related | planned | related |  |
| #90633 | route_security | planned | security_sensitive |  |
| #90805 | route_security | planned | security_sensitive |  |
| #90868 | route_security | planned | security_sensitive |  |
| #90994 | route_security | planned | security_sensitive |  |
| #91289 | keep_related | planned | related |  |
| #91774 | keep_canonical | planned | canonical |  |
| #92238 | keep_canonical | planned | canonical |  |
| #92294 | keep_related | planned | fixed_by_candidate |  |
| #92847 | keep_related | planned | related |  |

## Needs Human

- none
