---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1127-inbound-system-event-preview-truncates-body-at-160-chars-and-fus"
mode: "plan"
run_id: "27801265980-1-5"
workflow_run_id: "27801265980"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27801265980"
head_sha: "3478e0a5cfdb7b026708259822cc80b242eb0e10"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T02:20:30.621Z"
canonical: "#94549"
canonical_issue: "#94549"
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

# gitcrawl-1127-inbound-system-event-preview-truncates-body-at-160-chars-and-fus

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27801265980](https://github.com/openclaw/clownfish/actions/runs/27801265980)

Workflow conclusion: success

Worker result: planned

Canonical: #94549

## Summary

Classified the two hydrated open issue candidates. #94549 remains the best live canonical for the inbound system-event preview truncation/body-fusion bug. #93966 is related inbound metadata/runtime-context leakage work, but its body describes broader metadata exposure across delivery paths and models, so it should not be closed as a duplicate of #94549 on the current evidence.

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
| #94549 | keep_canonical | planned | canonical |  |
| #93966 | keep_related | planned | related | Related same subsystem and symptom family, but not a proven duplicate of #94549. |

## Needs Human

- none
