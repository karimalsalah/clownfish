---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-20-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520837489"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520837489"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:56:52.516Z"
canonical: "#78562"
canonical_issue: "#78562"
canonical_pr: null
actions_total: 29
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-20-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520837489](https://github.com/openclaw/clownfish/actions/runs/27520837489)

Workflow conclusion: success

Worker result: planned

Canonical: #78562

## Summary

Plan-only classification. #78562 remains the live canonical for the repeated post-compaction overflow-loop family. The cluster contains several related but distinct session-state, compaction, provider, and restart/recovery subclusters, so no duplicate closeout is planned. #81190 is routed to central security handling because the job explicitly marks it as a security-signal ref.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 29 |
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
| #45503 | keep_related | planned | related |  |
| #70334 | keep_related | planned | related |  |
| #75740 | keep_closed | skipped | superseded | Already closed in hydrated state. |
| #78380 | keep_independent | planned | independent |  |
| #78562 | keep_canonical | planned | canonical |  |
| #80638 | keep_related | planned | related |  |
| #80639 | keep_related | planned | related |  |
| #80889 | keep_related | planned | related |  |
| #81182 | keep_related | planned | related |  |
| #81190 | route_security | planned | security_sensitive | Security-signal ref explicitly identified by the job. |
| #84536 | keep_related | planned | related |  |
| #84602 | keep_related | planned | related |  |
| #84777 | keep_related | planned | related |  |
| #87402 | keep_independent | planned | independent |  |
| #87996 | keep_related | planned | related |  |
| #88870 | keep_related | planned | related |  |
| #88925 | keep_related | planned | related |  |
| #89051 | keep_closed | skipped | fixed_by_candidate | Already closed in hydrated state. |
| #89160 | keep_closed | skipped | fixed_by_candidate | Already closed in hydrated state. |
| #89528 | keep_independent | planned | independent |  |
| #89604 | keep_independent | planned | independent |  |
| #90526 | keep_related | planned | related |  |
| #92043 | keep_related | planned | related |  |
| #92194 | keep_independent | planned | independent |  |
| #92270 | keep_related | planned | related |  |
| #92303 | keep_related | planned | related |  |
| #92519 | keep_related | planned | related |  |
| #92598 | keep_related | planned | related |  |
| #92712 | keep_related | planned | related |  |

## Needs Human

- none
