---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-166003-agentic-merge"
mode: "autonomous"
run_id: "25103710328"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103710328"
head_sha: "98c86abfe56e7ca0578fd667fdea3121315c5b1d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.340Z"
canonical: "https://github.com/openclaw/openclaw/pull/72614"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72614"
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-166003-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103710328](https://github.com/openclaw/clownfish/actions/runs/25103710328)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72614

## Summary

Hydrated state shows the original representative #56342 is already closed. The canonical path is the merged replacement PR #72614 on current main a1197b907524ff892341c5a5682b1e559850f2f6. Eight seed PRs are already closed and should remain untouched. The two open seed PRs are related follow-ups, not high-confidence duplicates: #59251 includes unique sessions_send argument-normalization work, and #66720 is a provider/gateway schema-filtering follow-up with unresolved review-bot activation/scope findings.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #40102 | keep_closed | skipped | superseded | Already closed and superseded by the merged canonical fix #72614. |
| #56342 | keep_closed | skipped | superseded | Representative drifted closed; merged #72614 is the current canonical fix. |
| #58686 | keep_closed | skipped | superseded | Already closed as superseded by merged #72614. |
| #59251 | keep_related | planned | related | Not a true duplicate; keep open as a related follow-up for broader sessions argument normalization. |
| #63121 | keep_closed | skipped | superseded | Already closed as superseded by merged #72614. |
| #64787 | keep_closed | skipped | superseded | Already closed and covered by the merged canonical sessions_spawn fix. |
| #65282 | keep_closed | skipped | superseded | Already closed as superseded by the credited replacement #72614. |
| #66720 | keep_related | planned | related | Related provider-compatibility follow-up with unresolved review-bot findings; not duplicate-closeable and not merge-ready in this cluster. |
| #68397 | keep_closed | skipped | superseded | Already closed as superseded by the credited replacement #72614. |
| #69170 | keep_closed | skipped | superseded | Already closed and superseded by the merged canonical fix path. |

## Needs Human

- none
