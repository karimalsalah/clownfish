---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-723-feature-clean-plan-20260615-a"
mode: "plan"
run_id: "27524071854"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27524071854"
head_sha: "a5e7c8bf29db62ec7a23414e3cd47788c11e51c4"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:31:31.899Z"
canonical: "#81781"
canonical_issue: "#81781"
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

# gitcrawl-723-feature-clean-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27524071854](https://github.com/openclaw/clownfish/actions/runs/27524071854)

Workflow conclusion: success

Worker result: planned

Canonical: #81781

## Summary

Plan-only classification using hydrated preflight artifact. #81781 remains the live canonical issue. #81948 is related implementation work for #81781, but it is not merge-ready or a fixed-by-candidate closeout path because required behavior proof and checks are failing and the bot review says the patch only skips greeting-only first messages rather than using later meaningful conversation content.

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

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #81781 | keep_canonical | planned | canonical | #81781 is the broad surviving issue for the product behavior: session titles should reflect conversation core content, not just the first user message. |
| #81948 | keep_related | planned | related | #81948 belongs to the same session-title problem family as #81781, but it is a narrower and currently blocked implementation path, not a duplicate issue, not a merge candidate, and not enough to close #81781 as fixed. |

## Needs Human

- none
