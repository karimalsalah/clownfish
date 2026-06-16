---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238835-dedupe-only-20260429c"
mode: "autonomous"
run_id: "27595850378"
workflow_run_id: "27595850378"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27595850378"
head_sha: "7a8b7ab269d4c8246a3837f1013f6d9715d17c5e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T05:19:46.841Z"
canonical: "https://github.com/openclaw/openclaw/issues/65636"
canonical_issue: "https://github.com/openclaw/openclaw/issues/65636"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238835-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27595850378](https://github.com/openclaw/clownfish/actions/runs/27595850378)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/65636

## Summary

Canonical drift resolved: the hinted representative #65669 is already closed, and the live canonical path is the open feature issue #65636. The linked open PR #75065 is related useful contributor work but is not merge-ready because it is dirty/conflicting and blocked on real behavior proof; this job cannot fix, raise a PR, or merge, so no mutating close/merge/fix actions are planned. Closed PRs #40218, #65669, and #66023 remain historical evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #65636 | keep_canonical | planned | canonical | Best live canonical is the open feature issue; no duplicate closeout or fix action is allowed by this job. |
| #75065 | keep_related | planned | related | Related implementation candidate should stay open; it is not safe to close as duplicate or superseded while it carries useful work for the canonical issue. |
| #40218 | keep_closed | skipped | superseded | Already-closed historical PR; evidence only. |
| #65669 | keep_closed | skipped | superseded | Closed representative is obsolete; no mutation is valid. |
| #66023 | keep_closed | skipped | superseded | Already-closed PR; evidence only. |

## Needs Human

- none
