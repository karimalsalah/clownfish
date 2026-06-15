---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238809-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25103902622"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103902622"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.375Z"
canonical: "https://github.com/openclaw/openclaw/pull/73923"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41545"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73923"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238809-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103902622](https://github.com/openclaw/clownfish/actions/runs/25103902622)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73923

## Summary

Hydrated state shows the original canonical hint #41546 and overlapping PRs #41552, #41718, and #42001 are already closed as superseded. The surviving canonical path is open issue #41545 with open PR #73923 as the canonical fix candidate; no new close/comment/label mutations are planned for this dedupe-only run.

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
| #41545 | keep_canonical | planned | canonical | Keep the root bug issue open as the canonical issue while #73923 owns fix validation. |
| #41546 | keep_closed | skipped | superseded | Already closed as superseded by the current canonical PR #73923. |
| #41552 | keep_closed | skipped | superseded | Already closed as superseded by the current canonical PR #73923. |
| #41718 | keep_closed | skipped | superseded | Already closed as superseded by the current canonical PR #73923. |
| #42001 | keep_closed | skipped | superseded | Already closed as superseded by replacement PR #73923 with contributor credit preserved. |
| #73923 | keep_canonical | planned | canonical | Open canonical fix PR remains the best surviving path; no mutation is needed from this dedupe-only worker. |

## Needs Human

- none
