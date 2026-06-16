---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14076-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27599299313"
workflow_run_id: "27599299313"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599299313"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:46:59.487Z"
canonical: "https://github.com/openclaw/openclaw/issues/41860"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41860"
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

# gitcrawl-14076-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599299313](https://github.com/openclaw/clownfish/actions/runs/27599299313)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/41860

## Summary

No mutating actions are safe or needed for this dedupe-only pass. The representative PR #68514 is now closed, and all job-listed PR candidates are already closed. The live canonical path is the hydrated open issue #41860, which tracks the Feishu underscore URL rendering bug on current main; fixes and replacement PRs are disallowed by this job.

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
| #41860 | keep_canonical | planned | canonical | The original canonical PR drifted closed, but the hydrated open issue is the best surviving canonical tracker for the same root cause. |
| #41880 | keep_closed | skipped | superseded | Already-closed historical PR; keep as evidence only. |
| #41946 | keep_closed | skipped | superseded | Already-closed superseded implementation candidate for the canonical issue. |
| #44829 | keep_closed | skipped | independent | Closed historical PR for a different, not-reproduced Feishu colon claim. |
| #48394 | keep_closed | skipped | related | Closed related context; not a live duplicate target. |
| #68514 | keep_closed | skipped | superseded | The hinted canonical PR materially changed to closed; canonical path moves to the hydrated open issue. |
| #44776 | keep_closed | skipped | independent | Closed independent context issue for a non-reproduced colon claim. |

## Needs Human

- none
