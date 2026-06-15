---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-395-plan-wave-20260615-a"
mode: "plan"
run_id: "27521391262"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27521391262"
head_sha: "c7fde105fe4b1bf849faf5ed130f10118614c64c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:58:14.861Z"
canonical: "#92275"
canonical_issue: "#92275"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-395-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27521391262](https://github.com/openclaw/clownfish/actions/runs/27521391262)

Workflow conclusion: success

Worker result: planned

Canonical: #92275

## Summary

Plan only. #92275 remains the live canonical issue for the Codex native app-server CODEX_HOME/auth-profile isolation bug. #92298 is related as the current proposed fix path, but it is not merge-ready because the hydrated preflight shows failed real-behavior proof and an incomplete ClawSweeper review. Closed linked PRs are historical evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #68284 | keep_closed | skipped | superseded | Already-closed historical context only. |
| #90326 | keep_closed | skipped | independent | Already closed and unrelated to the Codex auth-profile CODEX_HOME root cause. |
| #92275 | keep_canonical | planned | canonical | Best live canonical for the user-visible bug and still open pending validated fix. |
| #92298 | keep_related | planned | related | Related proposed fix path, but not canonical or merge-ready under the current gates. |

## Needs Human

- none
