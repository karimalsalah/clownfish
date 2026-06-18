---
repo: "openclaw/openclaw"
cluster_id: "pr-close-canary-94489-20260618a"
mode: "execute"
run_id: "27754850372"
workflow_run_id: "27754850372"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27754850372"
head_sha: "092784fe636e4dbc0740c549e032528ea82d4509"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-18T11:02:00.234Z"
canonical: "#94453"
canonical_issue: null
canonical_pr: "#94453"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-close-canary-94489-20260618a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27754850372](https://github.com/openclaw/clownfish/actions/runs/27754850372)

Workflow conclusion: success

Worker result: planned

Canonical: #94453

## Summary

Planned one close-only superseded action for #94489. The hydrated run state has #94489 open and #94453 open as the canonical PR for the same cron runMode default fix.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 1 |
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
| #94489 | close_superseded | executed | superseded | superseded by the canonical candidate |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| 1 | apply | #94489 | close_superseded | executed | superseded by the canonical candidate |
| 2 | apply | #94489 | close_superseded | executed | already closed with matching projectclownfish comment |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #94453 | keep_canonical | planned | canonical |  |
| #94489 | close_superseded | planned | superseded |  |

## Needs Human

- none
