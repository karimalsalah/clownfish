---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238874-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104048857"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104048857"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.402Z"
canonical: "https://github.com/openclaw/openclaw/pull/41265"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41256"
canonical_pr: "https://github.com/openclaw/openclaw/pull/41265"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238874-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104048857](https://github.com/openclaw/clownfish/actions/runs/25104048857)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/41265

## Summary

Canonical path remains the linked bug #41256 plus open implementation PR #41265. The two overlapping contributor PRs #41419 and #41714 are already closed as superseded by #41265, so this run emits no new close/comment/label mutation. #41265 is not merge-ready and merge/fix work is blocked by the job frontmatter, failing checks, and unresolved hydrated review-bot findings.

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
| #41256 | keep_canonical | planned | canonical | Keep the canonical bug issue open until the selected implementation path lands and validation completes. |
| #41265 | keep_canonical | planned | canonical | #41265 is the best surviving implementation candidate, but it cannot be merged or repaired by this dedupe-only job and is not clean enough for fixed-by-candidate closeout. |
| #41419 | keep_closed | skipped | superseded | Already closed as superseded by the canonical PR #41265; closed refs are historical evidence only. |
| #41714 | keep_closed | skipped | superseded | Already closed as superseded by the canonical PR #41265; closed refs are historical evidence only. |

## Needs Human

- none
