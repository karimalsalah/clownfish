---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1235-fix-reset-subagent-session-idle-timeout-on-successful-tool-calls"
mode: "plan"
run_id: "27801265980-1-12"
workflow_run_id: "27801265980"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27801265980"
head_sha: "3478e0a5cfdb7b026708259822cc80b242eb0e10"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T02:20:30.619Z"
canonical: "#94124"
canonical_issue: "#94124"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1235-fix-reset-subagent-session-idle-timeout-on-successful-tool-calls

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27801265980](https://github.com/openclaw/clownfish/actions/runs/27801265980)

Workflow conclusion: success

Worker result: planned

Canonical: #94124

## Summary

Read-only plan classification completed from the hydrated preflight artifact. #94124 remains the open canonical issue for subagent idle timeout during long tool calls. #94153 is related subagent session work, but it describes a distinct completion-announcement delivery failure and should stay open rather than be closed as a duplicate.

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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #94124 | keep_canonical | planned | canonical | #94124 is the best surviving canonical for the idle-timeout root cause described by this cluster. |
| #94153 | keep_related | planned | related | #94153 is in the same subagent/session timeout area, but it describes a distinct delivery/persistence problem and should not be closed as a duplicate of #94124. |

## Needs Human

- none
