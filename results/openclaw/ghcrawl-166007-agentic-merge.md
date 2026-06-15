---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-166007-agentic-merge"
mode: "autonomous"
run_id: "25103718774"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103718774"
head_sha: "98c86abfe56e7ca0578fd667fdea3121315c5b1d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.343Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 17
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-166007-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103718774](https://github.com/openclaw/clownfish/actions/runs/25103718774)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Classified the hydrated installer cluster against preflight main a1197b907524ff892341c5a5682b1e559850f2f6. The representative low-memory PR #39463 is already closed as obsolete after maintainer verification, and the remaining open PRs split into independent installer subfamilies. No GitHub mutation, merge, close, or fix PR is safe from this cluster result because the open refs either need their own repair/review path or belong to an already-running Clownfish replacement path.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 17 |
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
| #39447 | keep_closed | skipped | fixed_by_candidate | Historical closed issue only; the low-memory reproduction was verified obsolete by maintainer comments. |
| #39463 | keep_closed | skipped | superseded | Original canonical hint is obsolete and closed; do not reopen or replace from this broad cluster. |
| #40839 | keep_closed | skipped | fixed_by_candidate | Closed historical Node-environment issue; no mutation needed. |
| #40850 | keep_closed | skipped | superseded | Closed as superseded by current main behavior, not a merge candidate. |
| #44365 | keep_closed | skipped | fixed_by_candidate | Historical closed issue covered by the separate #73890 replacement path. |
| #44700 | keep_closed | skipped | fixed_by_candidate | Closed linked feature request; current work remains in the separate #44986 PR. |
| #44986 | keep_related | planned | related | Keep open as a related follow-up; no close or merge action is safe from this over-broad cluster. |
| #49556 | keep_closed | skipped | fixed_by_candidate | Closed historical nvm installer issue; no mutation needed. |
| #49594 | keep_closed | skipped | superseded | Closed as superseded by current main nvm installer behavior. |
| #49673 | keep_closed | skipped | superseded | Closed as superseded by current main nvm installer behavior. |
| #49806 | keep_closed | skipped | independent | Closed independent context ref; no cluster action. |
| #50479 | keep_closed | skipped | superseded | Closed as superseded by the credited replacement PR #73890. |
| #51436 | keep_closed | skipped | superseded | Closed as superseded by direct main commits. |
| #58340 | keep_independent | planned | independent | Keep open as independent product/copy work; no close, merge, or fix action belongs in this cluster. |
| #67795 | keep_related | planned | related | Keep open as related installer follow-up; do not merge from this result. |
| #70411 | keep_closed | skipped | fixed_by_candidate | Closed historical macOS installer issue; no mutation needed. |
| #73890 | keep_canonical | planned | canonical | Keep #73890 as the canonical path for the prefix-warning subfamily, but do not merge it from this over-broad cluster. |

## Needs Human

- none
