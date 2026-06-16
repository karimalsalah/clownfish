---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2347-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27595850354"
workflow_run_id: "27595850354"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27595850354"
head_sha: "7a8b7ab269d4c8246a3837f1013f6d9715d17c5e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T05:19:46.839Z"
canonical: "https://github.com/openclaw/openclaw/issues/39923"
canonical_issue: "https://github.com/openclaw/openclaw/issues/39923"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2347-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27595850354](https://github.com/openclaw/clownfish/actions/runs/27595850354)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/39923

## Summary

Classified the hydrated cluster without GitHub mutations. #39923 remains the open canonical issue, #40392 is a related open implementation PR that is not close/merge-ready, and #39982 is already closed historical context.

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
| #39923 | keep_canonical | planned | canonical | Keep the open issue as the canonical tracking item while the linked implementation remains unresolved. |
| #39982 | keep_closed | skipped | superseded | Already-closed PR is historical evidence only; no mutation is valid. |
| #40392 | keep_related | planned | related | Keep the implementation PR open and related to the canonical issue; closure or merge would be unsafe under the current gates. |

## Needs Human

- none
