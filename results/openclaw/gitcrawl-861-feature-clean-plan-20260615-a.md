---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-861-feature-clean-plan-20260615-a"
mode: "plan"
run_id: "27524081247"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27524081247"
head_sha: "de7f04531ee5dc9f893acf11ec663303a6dc0dda"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:31:31.903Z"
canonical: "#73311"
canonical_issue: "#73222"
canonical_pr: "#73311"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-861-feature-clean-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27524081247](https://github.com/openclaw/clownfish/actions/runs/27524081247)

Workflow conclusion: success

Worker result: planned

Canonical: #73311

## Summary

Plan only. Original canonical issue #73222 is already closed, so no close action is valid for it. The open PR #73311 is the best live canonical for the original session-kind-filter feature, but it is not merge-ready because it is dirty, has failing checks, lacks real behavior proof, and has unresolved review-bot/Codex findings. Linked issue #89774 is related but distinct product/UX scope, and merged PR #81858 is closed historical context.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #73222 | keep_closed | skipped | canonical | Already closed live state; retain as historical canonical issue evidence and move live canonical tracking to #73311. |
| #73311 | keep_canonical | planned | canonical | Best live canonical implementation for #73222, but merge/fixed-by-candidate closeout is blocked by dirty merge state, failing checks, missing proof, and unresolved review findings. |
| #81858 | keep_closed | skipped | related | Merged historical context in the same session-picker area; no action is needed or valid. |
| #89774 | keep_related | planned | related | Same Control UI session-picker family, but distinct product/UX scope from #73222/#73311; keep open and do not force into duplicate closeout. |

## Needs Human

- none
