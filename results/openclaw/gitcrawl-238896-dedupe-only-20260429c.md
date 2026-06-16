---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238896-dedupe-only-20260429c"
mode: "autonomous"
run_id: "27595852788"
workflow_run_id: "27595852788"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27595852788"
head_sha: "7a8b7ab269d4c8246a3837f1013f6d9715d17c5e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T05:19:46.845Z"
canonical: "https://github.com/openclaw/openclaw/pull/72984"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72984"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238896-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27595852788](https://github.com/openclaw/clownfish/actions/runs/27595852788)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72984

## Summary

Classified the hydrated subagent model-resolution cluster without mutating GitHub. #72984 remains the best live canonical PR, but it is not merge-ready and this job forbids merge/fix work. #58823 and linked issue #58822 should stay open as related narrower precedence work until the canonical path lands or maintainers choose to split it. #47994 is already closed and receives no close action.

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
| #72984 | keep_canonical | planned | canonical | Best live canonical PR, but only non-mutating classification is allowed because merge and fix actions are blocked. |
| #58823 | keep_related | planned | related | Keep open as related narrower work; not a safe duplicate or superseded close while the canonical PR is still unmerged and needs changes. |
| #58822 | keep_related | planned | related | Open related canonical-family issue should remain open until the selected canonical fix path lands. |
| #47994 | keep_closed | skipped | related | Already closed candidate; retained only as historical evidence. |

## Needs Human

- none
