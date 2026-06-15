---
repo: "openclaw/openclaw"
cluster_id: "pr-close-canary-90512-20260615-volume-a"
mode: "execute"
run_id: "27545122490"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27545122490"
head_sha: "1a47711b53828d58a62d5798b80ee89f4bb84218"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-15T12:10:50.655Z"
canonical: "#91181"
canonical_issue: null
canonical_pr: "#91181"
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-close-canary-90512-20260615-volume-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27545122490](https://github.com/openclaw/clownfish/actions/runs/27545122490)

Workflow conclusion: failure

Worker result: planned

Canonical: #91181

## Summary

Close-only canary classification: #90512 remains open and is superseded by the already-merged canonical fix #91181. No security-sensitive signal was present in the hydrated refs, and no merge, fix, or PR creation action is planned.

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
| #90512 | close_fixed_by_candidate | planned | fixed_by_candidate | #90512 is an overlapping open PR for the Windows Scheduled Task name normalization bug, and #91181 is the hydrated merged fix that owns the canonical validation path. |

## Needs Human

- none
