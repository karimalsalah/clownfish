---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238871-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104042690"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104042690"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T03:54:22.401Z"
canonical: "https://github.com/openclaw/openclaw/pull/48945"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/48945"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-238871-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104042690](https://github.com/openclaw/clownfish/actions/runs/25104042690)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/pull/48945

## Summary

Hydrated state supports keeping #48945 as the current best representative for the Feishu group thread-follow-up mention policy, but no close or merge action is safe. #40530 is an overlapping useful implementation with a different API, and #63148 is a related but distinct DM topic-session isolation PR. Maintainer judgment is needed before superseding either group-thread implementation.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #48945 | keep_canonical | planned | canonical | #48945 is the best current representative for the group-thread mention policy, but it is not merge-ready and cannot be used to close overlapping contributor work. |
| #40530 | keep_related | planned | related | #40530 is a useful overlapping contributor implementation, not a high-confidence duplicate or superseded PR. Keep it open pending maintainer selection of the Feishu thread mention API. |
| #63148 | keep_related | planned | related | #63148 belongs to the same Feishu topic/thread family but is a separate DM-session isolation subproblem, so it should remain open as related work rather than be closed under #48945. |

## Needs Human

- Maintainer decision needed before any closeout in the group-thread mention subcluster: choose #48945's threadFollowUp active-topic model or #40530's requireMentionInThread boolean API, then repair/validate the chosen PR before superseding the other.
