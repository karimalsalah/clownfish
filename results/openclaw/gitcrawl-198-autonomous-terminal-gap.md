---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-198-autonomous-terminal-gap"
mode: "autonomous"
run_id: "27623110804"
workflow_run_id: "27623110804"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27623110804"
head_sha: "c581a46e2e3e5a962635976dc02b3902304668dd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T14:15:48.714Z"
canonical: "https://github.com/openclaw/openclaw/pull/92287"
canonical_issue: "https://github.com/openclaw/openclaw/issues/92267"
canonical_pr: "https://github.com/openclaw/openclaw/pull/92287"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 1
---

# gitcrawl-198-autonomous-terminal-gap

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27623110804](https://github.com/openclaw/clownfish/actions/runs/27623110804)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/92287

## Summary

#92287 is the hydrated canonical fix candidate for #92267, but this worker should not merge or close yet. The PR is open, narrow, and editable, but merge gates are not satisfied because mergeability is unknown, the native Telegram proof check is failing, and there is no clean Codex /review merge preflight. #92267 is covered by #92287, but require_fix_before_close blocks closeout until the canonical fix lands.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #92267 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #92287 | keep_canonical | planned | canonical | Canonical fix candidate is clear, but merge gates and overlap ownership block merge from this cluster. |
| #92267 | close_fixed_by_candidate | blocked | fixed_by_candidate | Covered by #92287, but closeout must wait for the canonical fix to merge. |

## Needs Human

- #92287 merge/finalization remains blocked outside this cluster by a failing "Run agentic native Telegram proof" check, unknown mergeability, and missing Codex /review merge preflight.
