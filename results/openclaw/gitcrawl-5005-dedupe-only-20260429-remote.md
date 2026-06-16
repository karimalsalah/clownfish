---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-5005-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27599301728"
workflow_run_id: "27599301728"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599301728"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:46:59.538Z"
canonical: "https://github.com/openclaw/openclaw/pull/84595"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/84595"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-5005-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599301728](https://github.com/openclaw/clownfish/actions/runs/27599301728)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/84595

## Summary

No GitHub mutations planned. The representative PR #41987 is already closed as superseded, and the hydrated canonical fix #84595 is also already merged and closed. All hydrated cluster and first-hop refs are closed historical context.

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
| #84595 | keep_closed | skipped | canonical | Canonical fix path is already merged and closed; no mutation is valid. |
| #41987 | keep_closed | skipped | superseded | Already closed as superseded by the hydrated merged canonical PR #84595. |
| #40350 | keep_closed | skipped | related | Related browser-plugin/tool-description context, but not the same root cause as the image sanitization fix and already closed. |
| #45811 | keep_closed | skipped | related | Related screenshot area, but a different root cause and already closed. |
| #55539 | keep_closed | skipped | related | Related screenshot area, but a different already-closed viewport behavior fix. |
| #31085 | keep_closed | skipped | related | Related browser remote-CDP context, but not part of this dedupe closeout and already closed. |
| #32031 | keep_closed | skipped | related | Related browser configuration context, but not the same root cause and already closed. |

## Needs Human

- none
