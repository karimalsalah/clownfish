---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-312-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520909372"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520909372"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:56:52.543Z"
canonical: "#84821"
canonical_issue: "#84821"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-312-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520909372](https://github.com/openclaw/clownfish/actions/runs/27520909372)

Workflow conclusion: success

Worker result: planned

Canonical: #84821

## Summary

Plan-mode classification only. #84821 remains the open canonical issue for the websocket tool-event amplification family. #84823 is explicitly listed by the job as a security-signal ref and is routed to central security handling without blocking unrelated non-security classification. #84850 is related but not a duplicate because it tracks broader gateway CPU/event-loop pressure and a remaining throttled exec-update path after the primary session-tool dedupe landed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #84821 | keep_canonical | planned | canonical | Best live canonical for the non-security websocket tool-event amplification family. |
| #84823 | route_security | planned | security_sensitive | Explicit job-level security-signal routing requirement for this exact ref. |
| #84850 | keep_related | planned | related | Related gateway fanout/performance family, but distinct remaining scope and validation needs. |

## Needs Human

- none
