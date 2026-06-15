---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-348-plan-wave-20260615-a"
mode: "plan"
run_id: "27520939212"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520939212"
head_sha: "33cef557e55ce52eac8e0a2528e6417f8a9b826a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:56:52.557Z"
canonical: "#44294"
canonical_issue: "#44294"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-348-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520939212](https://github.com/openclaw/clownfish/actions/runs/27520939212)

Workflow conclusion: success

Worker result: planned

Canonical: #44294

## Summary

Read-only plan: #44294 remains the live canonical issue. #91603 is the linked implementation PR for the same ACP error-kind behavior, but it is not merge-ready or a fixed-by-candidate closeout path because real behavior proof is failing and review-bot blockers remain unresolved.

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
| Needs human | 1 |

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
| #44294 | keep_canonical | planned | canonical | #44294 is the best live canonical because it is the open source report with the clearest problem statement, acceptance criteria, and current ClawSweeper review context. |
| #91603 | keep_related | planned | related | #91603 is a related implementation candidate for #44294, but plan mode and blocked merge/fix actions plus failing proof and unresolved bot findings mean it should be kept open for maintainer review rather than merged, closed, or used to close the issue. |

## Needs Human

- #91603 needs maintainer/product review of the client-visible ACP error contract before it can become a merge or fixed-by-candidate closeout path, especially because the PR changes some error paths from resolved stopReason results to RequestError rejections and its Real behavior proof check is failing.
