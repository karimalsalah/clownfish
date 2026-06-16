---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2108-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585130361"
workflow_run_id: "27585130361"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585130361"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:18:21.263Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2108-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585130361](https://github.com/openclaw/clownfish/actions/runs/27585130361)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Routed the only open candidate, #42039, to central OpenClaw security handling because deterministic validation flagged the target as security-sensitive. No close, label, merge, comment, or fix action is planned for this ProjectClownfish run.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| #42039 | route_security | planned | security_sensitive | #42039 must be quarantined to central OpenClaw security handling per deterministic validator output; ProjectClownfish should not continue canonical dedupe classification for this exact ref. |

## Needs Human

- none
