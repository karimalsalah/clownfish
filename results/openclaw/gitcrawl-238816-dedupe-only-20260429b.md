---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238816-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25103954695"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103954695"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T03:54:22.380Z"
canonical: "https://github.com/openclaw/openclaw/issues/47558"
canonical_issue: "https://github.com/openclaw/openclaw/issues/47558"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-238816-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103954695](https://github.com/openclaw/clownfish/actions/runs/25103954695)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/47558

## Summary

Canonical issue #47558 remains the live root thread. The representative PR #59658 is focused but not a safe canonical PR yet because hydrated review comments still flag docs inaccuracies, and the other open PRs are stale, blocked, or broad. No close/comment/label mutation is planned until a maintainer chooses or refreshes one canonical repair path.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #47558 | keep_canonical | planned | canonical | Keep the issue open as the canonical root thread; closing is blocked because no canonical fix has landed. |
| #47935 | keep_related | planned | related | Same root cause as #47558, but not safe to close or treat as fixed before a refreshed canonical PR lands. |
| #49430 | keep_related | planned | related | Related repair candidate, but not a safe canonical closeout target while review-bot and current-main refresh blockers remain. |
| #56157 | keep_related | planned | related | Related but broad and blocked; keep open rather than close a useful contributor PR without a clean replacement path. |
| #59658 | keep_related | planned | related | Representative is useful but obsolete as an automatic canonical PR; it needs maintainer selection plus refresh before any superseding closeout. |
| cluster:gitcrawl-238816-dedupe-only-20260429b | needs_human | blocked | needs_human | Maintainer should choose or request a refreshed narrow canonical docs PR before Clownfish closes or supersedes any contributor PRs. |

## Needs Human

- Choose the canonical repair path for #47558 before closeout. The issue is canonical, but no open PR is clean enough to become the automatic canonical PR from the hydrated evidence.
