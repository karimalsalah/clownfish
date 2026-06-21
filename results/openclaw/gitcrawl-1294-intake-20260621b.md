---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1294-intake-20260621b"
mode: "plan"
run_id: "27898766014"
workflow_run_id: "27898766014"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27898766014"
head_sha: "235915800bae334c4c4446fe4ca178fb46b1cb9b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-21T08:34:48.443Z"
canonical: "#80569"
canonical_issue: "#80569"
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

# gitcrawl-1294-intake-20260621b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27898766014](https://github.com/openclaw/clownfish/actions/runs/27898766014)

Workflow conclusion: success

Worker result: planned

Canonical: #80569

## Summary

Plan-only classification: #80569 remains the live canonical issue for the Telegram notify=false leak. Hydrated related PRs are already closed and should not receive closure actions.

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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #80569 | keep_canonical | planned | canonical | The representative is open, hydrated, non-security-sensitive, and remains the clearest surviving canonical issue for this root cause. |
| #80737 | keep_closed | skipped | superseded | Already closed; retain as historical related fix evidence only. |
| #81097 | keep_closed | skipped | superseded | Already closed as superseded; no action is available or needed. |
| #94051 | keep_closed | skipped | related | Excluded existing-overlap context and already closed; keep as related evidence without mutation. |
| #94667 | keep_closed | skipped | related | Already closed related PR; no closure, merge, or fix action is permitted in this plan job. |

## Needs Human

- none
