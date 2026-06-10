---
repo: "openclaw/openclaw"
cluster_id: "clawsweeper-commit-openclaw-openclaw-4932e91517ad"
mode: "autonomous"
run_id: "27255672367"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27255672367"
head_sha: "4d68a57d74f80f0760501e93bcef4aa07dc72150"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-10T05:40:20.767Z"
canonical: "https://github.com/openclaw/openclaw/tree/main"
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

# clawsweeper-commit-openclaw-openclaw-4932e91517ad

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27255672367](https://github.com/openclaw/clownfish/actions/runs/27255672367)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/main

## Summary

No fix PR is planned. The ClawSweeper finding is already fixed on current openclaw/openclaw main at 92418fc9da1a5837c9770a2a7366e83d87de2fd3: the Windows smoke path now runs through the TypeScript implementation, captures failed gateway probes with check:false, and keeps the retry/start recovery loop alive.

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
| cluster:clawsweeper-commit-openclaw-openclaw-4932e91517ad | keep_related | skipped | related | No fix artifact is needed because latest main already contains the narrow non-throwing probe/retry/recovery behavior requested by the ClawSweeper finding. |

## Needs Human

- none
