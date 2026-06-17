---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-385-autonomous-terminal-gap"
mode: "autonomous"
run_id: "27705469209"
workflow_run_id: "27705469209"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27705469209"
head_sha: "11055a7e49bd4d7a4f5c6d331788c99e8595d963"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T16:56:26.439Z"
canonical: "#41256"
canonical_issue: "#41256"
canonical_pr: "#41265"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-385-autonomous-terminal-gap

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27705469209](https://github.com/openclaw/clownfish/actions/runs/27705469209)

Workflow conclusion: success

Worker result: planned

Canonical: #41256

## Summary

Planned non-mutating classification only. #41256 remains the canonical open bug tracker for the Discord media MIME/WebP/animated-image regression. #41265 is a hydrated linked implementation path but is an existing-overlap context ref for this job, and merge/fixed-by closeout is blocked by dirty mergeability, failing checks, failed real behavior proof, and unresolved review-bot findings.

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
| #41256 | keep_canonical | planned | canonical | Keep #41256 open as the canonical bug tracker; the linked fix path has not passed merge or post-fix closeout gates. |
| #41265 | keep_related | skipped | related | Treat #41265 as the linked implementation context for #41256, but skip mutation in this job because it is an excluded existing-overlap ref and merge/fixed-by closeout gates are not satisfied. |

## Needs Human

- none
