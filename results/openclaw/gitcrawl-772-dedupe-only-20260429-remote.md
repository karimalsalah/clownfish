---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-772-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27590154384"
workflow_run_id: "27590154384"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27590154384"
head_sha: "207fe2e2134a14e5532e7b8b0d17a01bba81af38"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T02:36:05.566Z"
canonical: "https://github.com/openclaw/openclaw/pull/65359"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/65359"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 0
---

# gitcrawl-772-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27590154384](https://github.com/openclaw/clownfish/actions/runs/27590154384)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/65359

## Summary

Classified #65359 as the canonical active PR for the GroupChatSchema historyLimit: 0 fix. #65305 is covered by that PR but should remain open until the PR lands because current main still rejects 0 and the candidate is not merged. #65425 is already closed as superseded by #65359 and should not receive another close action.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #65305 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #65359 | keep_canonical | planned | canonical | #65359 is the best live canonical path for the exact root cause and remains open for maintainer review. |
| #65305 | close_fixed_by_candidate | blocked | fixed_by_candidate | Closeout is blocked on the canonical fix path #65359 landing; this is a clear fixed-by-candidate relationship but not a safe instant close yet. |
| #65425 | keep_closed | skipped | superseded | Already closed historical context; no mutation is valid for this target. |

## Needs Human

- none
