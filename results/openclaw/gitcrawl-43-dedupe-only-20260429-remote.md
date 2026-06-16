---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-43-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27586126080"
workflow_run_id: "27586126080"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27586126080"
head_sha: "cd27262aa84c91b6795825f85982447d9f04143d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:46:07.241Z"
canonical: "https://github.com/openclaw/openclaw/issues/38730"
canonical_issue: "https://github.com/openclaw/openclaw/issues/38730"
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-43-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27586126080](https://github.com/openclaw/clownfish/actions/runs/27586126080)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/38730

## Summary

Classified the hydrated cluster without mutations. #38730 is quarantined to central OpenClaw security handling because deterministic validation marked the target security-sensitive. #76473 remains an open related PR for the high-frequency cron warning, but merge/fix/post-merge actions are disabled and its Real behavior proof check is failing. Closed refs are retained only as skipped historical context.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #38730 | route_security | planned | security_sensitive | #38730 is treated as security-sensitive for this repaired result and must be quarantined to central OpenClaw security handling without ProjectClownfish close, label, comment, merge, or fix mutation. |
| #76473 | keep_related | planned | related | #76473 is related to the routed canonical issue and may become the fix path after appropriate handling, but this dedupe-only job cannot repair, raise a fix PR, merge, or close #38730 as fixed by it. |
| #38731 | keep_closed | skipped | superseded | Already-closed PRs must not receive close actions; #38731 is historical superseded context for #76473. |
| #69829 | keep_closed | skipped | related | Closed context ref only; no mutation is valid. |
| #12092 | keep_closed | skipped | independent | Closed linked context only; independent from the cluster's remaining canonical path. |
| #14064 | keep_closed | skipped | related | Closed linked context only; no close or fixed-by-candidate action is valid. |
| #24800 | keep_closed | skipped | related | Closed linked context only; no mutation is valid. |
| #29906 | keep_closed | skipped | related | Closed linked context only; no mutation is valid. |
| #40295 | keep_closed | skipped | related | Closed linked context only; no mutation is valid. |

## Needs Human

- none
