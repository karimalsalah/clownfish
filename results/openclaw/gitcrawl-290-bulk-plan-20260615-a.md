---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-290-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520891359"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520891359"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:56:52.532Z"
canonical: "#77344"
canonical_issue: "#77344"
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

# gitcrawl-290-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520891359](https://github.com/openclaw/clownfish/actions/runs/27520891359)

Workflow conclusion: success

Worker result: planned

Canonical: #77344

## Summary

Plan mode only. #77344 remains the live canonical issue for the Docker-published ClawDock dashboard port bug. #75754 is quarantined because the job explicitly marks it as a security-signal ref. #77574 is related ClawDock dashboard work but tracks a different Docker Compose dependency/image-switching root cause, so it should stay open separately.

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
| #75754 | route_security | planned | security_sensitive | The job explicitly marks this PR as a security-signal ref, so it is out of scope for Clownfish backlog cleanup even though the artifact's generic security_sensitive flag is false. |
| #77344 | keep_canonical | planned | canonical | This remains the clearest non-security issue thread for the published host port bug. |
| #77574 | keep_related | planned | related | Same ClawDock dashboard helper area, but the root cause and repair path differ, so this should not be closed as a duplicate of #77344. |

## Needs Human

- none
