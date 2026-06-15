---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156958-autonomous-smoke"
mode: "autonomous"
run_id: "27584189893"
workflow_run_id: "27584189893"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27584189893"
head_sha: "3eaef20c39c95c760c2eeb4e61adf6ea57afc054"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T23:57:44.410Z"
canonical: "https://github.com/openclaw/openclaw/issues/33975"
canonical_issue: "https://github.com/openclaw/openclaw/issues/33975"
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

# ghcrawl-156958-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27584189893](https://github.com/openclaw/clownfish/actions/runs/27584189893)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/33975

## Summary

Live hydrated state keeps #33975 as the canonical open issue. #41294 is already closed as duplicate/superseded by #33975, so no close action is valid. No merge or fix PR is planned because the remaining fallback-approval work is blocked on a maintainer product/API decision, while model attribution is already covered by current response-prefix/model metadata paths.

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
| #33975 | keep_canonical | planned | canonical | #33975 remains the best live canonical issue. The remaining work is not safe for an autonomous narrow fix artifact because maintainers still need to choose approval owner, interaction channel, timeout behavior, cancellation, and suspend/resume semantics. |
| #41294 | keep_closed | skipped | duplicate | Already closed duplicate/superseded context; preserve the existing consolidation under #33975 and do not emit another close/comment action. |

## Needs Human

- #33975: maintainer product/API decision remains for fallback-transition approval semantics: approval owner, interaction channel, timeout policy, cancellation, and suspend/resume behavior before a narrow implementation can be safely scoped.
