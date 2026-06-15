---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-17-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520814001"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520814001"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:56:52.501Z"
canonical: "#73163"
canonical_issue: null
canonical_pr: "#73163"
actions_total: 38
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-17-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520814001](https://github.com/openclaw/clownfish/actions/runs/27520814001)

Workflow conclusion: success

Worker result: planned

Canonical: #73163

## Summary

Plan-only classification for 38 job candidate refs. #73163 remains the live canonical PR for the insecure Control UI startup warning. Security-sensitive refs are quarantined with route_security, #91197 is already closed, and the remaining non-security refs are related but separate startup/auth/channel/plugin root causes that should not be forced into the #73163 duplicate family.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 38 |
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
| #56830 | route_security | planned | security_sensitive |  |
| #68146 | keep_related | planned | related |  |
| #68280 | route_security | planned | security_sensitive |  |
| #71669 | route_security | planned | security_sensitive |  |
| #72013 | keep_related | planned | related |  |
| #72418 | route_security | planned | security_sensitive |  |
| #72932 | route_security | planned | security_sensitive |  |
| #73163 | keep_canonical | planned | canonical |  |
| #79625 | keep_related | planned | related |  |
| #79756 | keep_related | planned | related |  |
| #79983 | route_security | planned | security_sensitive |  |
| #80392 | keep_related | planned | related |  |
| #80836 | route_security | planned | security_sensitive |  |
| #81792 | route_security | planned | security_sensitive |  |
| #82894 | keep_related | planned | related |  |
| #85366 | keep_related | planned | related |  |
| #85399 | keep_related | planned | related |  |
| #86314 | keep_related | planned | related |  |
| #86711 | keep_related | planned | related |  |
| #88374 | route_security | planned | security_sensitive |  |
| #88379 | keep_related | planned | related |  |
| #88497 | keep_related | planned | related |  |
| #88584 | route_security | planned | security_sensitive |  |
| #89647 | keep_related | planned | related |  |
| #89650 | keep_related | planned | related |  |
| #90154 | route_security | planned | security_sensitive |  |
| #90296 | keep_related | planned | related |  |
| #90654 | route_security | planned | security_sensitive |  |
| #90779 | keep_related | planned | related |  |
| #91129 | route_security | planned | security_sensitive |  |
| #91151 | keep_related | planned | related |  |
| #91197 | keep_closed | skipped | security_sensitive | already closed |
| #91346 | route_security | planned | security_sensitive |  |
| #91932 | keep_related | planned | related |  |
| #92149 | route_security | planned | security_sensitive |  |
| #92178 | keep_related | planned | related |  |
| #92206 | route_security | planned | security_sensitive |  |
| #92307 | route_security | planned | security_sensitive |  |

## Needs Human

- none
