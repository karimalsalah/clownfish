---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1227-bug-line-channel-messages-silently-lost-due-to-reply-token-expir"
mode: "plan"
run_id: "27801265980-1-9"
workflow_run_id: "27801265980"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27801265980"
head_sha: "3478e0a5cfdb7b026708259822cc80b242eb0e10"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T02:20:30.623Z"
canonical: "#86012"
canonical_issue: "#86012"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1227-bug-line-channel-messages-silently-lost-due-to-reply-token-expir

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27801265980](https://github.com/openclaw/clownfish/actions/runs/27801265980)

Workflow conclusion: success

Worker result: planned

Canonical: #86012

## Summary

Plan-mode classification only. #86012 remains the open canonical for the LINE reply-token-expiry and push-fallback message-loss root cause. #85987 is related but not a duplicate because it combines possible delivery failure with separate Markdown table/code-block rendering issues, so it should stay open for separate product/repro review rather than being closed into #86012.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #86012 | keep_canonical | planned | canonical | Best hydrated canonical for the reply-token-expiry and push-fallback message-loss problem. |
| #85987 | keep_related | planned | related | Related LINE channel message-loss family, but not a true duplicate of #86012 because it includes a distinct Markdown rendering issue and unresolved product/repro scope. |

## Needs Human

- none
