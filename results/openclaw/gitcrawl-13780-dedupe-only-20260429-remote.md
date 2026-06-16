---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13780-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27599299082"
workflow_run_id: "27599299082"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599299082"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:46:59.473Z"
canonical: "https://github.com/openclaw/openclaw/pull/72325"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72325"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13780-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599299082](https://github.com/openclaw/clownfish/actions/runs/27599299082)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72325

## Summary

All job-provided refs are already closed in the hydrated preflight state. No GitHub mutation is safe or needed. The obsolete representative #62497 and candidate #62454 are closed/superseded; #65115 is closed/superseded by current-main UI work. No security-sensitive refs were detected.

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
| #62454 | keep_closed | skipped | superseded | Already closed; keep as historical superseded context only. |
| #62497 | keep_closed | skipped | superseded | Already closed; obsolete representative is historical evidence only. |
| #65115 | keep_closed | skipped | superseded | Already closed; keep as historical superseded/related UI context only. |
| #72325 | keep_closed | skipped | canonical | Merged canonical evidence for the WebChat sub-scope only; no post-merge close action is allowed by this job. |
| #63535 | keep_closed | skipped | related | Closed related narrow PR; no action in this dedupe-only/no-fix job. |
| #63536 | keep_closed | skipped | related | Closed related narrow PR; no action in this dedupe-only/no-fix job. |

## Needs Human

- none
