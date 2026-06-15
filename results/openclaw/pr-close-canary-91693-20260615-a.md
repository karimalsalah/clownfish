---
repo: "openclaw/openclaw"
cluster_id: "pr-close-canary-91693-20260615-a"
mode: "execute"
run_id: "27545122936"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27545122936"
head_sha: "1a47711b53828d58a62d5798b80ee89f4bb84218"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-15T12:12:57.948Z"
canonical: null
canonical_issue: null
canonical_pr: "#91950"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-close-canary-91693-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27545122936](https://github.com/openclaw/clownfish/actions/runs/27545122936)

Workflow conclusion: failure

Worker result: planned

Canonical: #91950

## Summary

#91693 remains open and is superseded by the already-merged #91950 implementation for the same web_fetch URL whitespace issue. #91950 is hydrated as merged but security-sensitive in the preflight artifact, so it is routed non-mutatingly while #91693 receives one planned close_superseded action with contributor-credit wording.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #91950 | route_security | planned | security_sensitive |  |
| #91693 | close_superseded | planned | superseded |  |

## Needs Human

- none
