---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143798-bug-managed-browser-and-user-browser-attach-both-fail-on-macos-d"
mode: "plan"
run_id: "27186831879"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27186831879"
head_sha: "f96b185866c5f19d02623dc4dd6fdc3d62bf826a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-09T06:00:22.052Z"
canonical: "#62288"
canonical_issue: "#62288"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-143798-bug-managed-browser-and-user-browser-attach-both-fail-on-macos-d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27186831879](https://github.com/openclaw/clownfish/actions/runs/27186831879)

Workflow conclusion: success

Worker result: planned

Canonical: #62288

## Summary

Plan-only classification from the hydrated artifact: #65125 is closed and should not be revived as canonical. #62288 is the best hydrated open canonical for the remaining existing-session attach/fallback diagnostics family. #47879, #48037, and #62706 are already closed by the hydrated #71560 fix path. #48867 remains open as a related but distinct Android/Termux process-lifecycle bug. #48183 is an independent Feishu cleanup issue linked only by analogy.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #62288 | keep_canonical | planned | canonical | Use #62288 as the live open canonical replacement for the remaining existing-session attach/fallback diagnostics family. |
| #65125 | keep_closed | skipped | fixed_by_candidate | Already closed items must not receive close actions; keep the historical representative closed. |
| #47879 | keep_closed | skipped | fixed_by_candidate | Already closed by the hydrated #71560 fix path; no closure action is valid. |
| #48037 | keep_closed | skipped | fixed_by_candidate | Already closed by the hydrated #71560 fix path; no closure action is valid. |
| #62706 | keep_closed | skipped | fixed_by_candidate | Already closed by the hydrated #71560 fix path; no closure action is valid. |
| #48867 | keep_related | planned | related | Related browser existing-session area, but distinct Termux subprocess lifecycle root cause; keep it open rather than closing as a duplicate of #62288. |
| #48183 | keep_independent | planned | independent | Independent first-hop linked issue; do not include it in the browser attach dedupe family. |

## Needs Human

- none
