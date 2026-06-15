---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-023"
mode: "plan"
run_id: "27583351618"
workflow_run_id: "27583351618"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583351618"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T23:55:41.436Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# pr-inventory-needs_proof-20260615T223445-023

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583351618](https://github.com/openclaw/clownfish/actions/runs/27583351618)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Plan-only PR inventory shard could not classify any candidate because the preflight artifact shows every listed ref as unavailable from GitHub API rate limiting. No mutating close/comment/label action is safe without hydrated kind, state, and updated_at.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #88754 | needs_human | blocked | needs_human | Live state is unavailable, so conservative PR inventory classification and any closure-style action are blocked. |
| #88776 | needs_human | blocked | needs_human | Live state is unavailable, so conservative PR inventory classification and any closure-style action are blocked. |
| #40392 | needs_human | blocked | needs_human | Live state is unavailable, so conservative PR inventory classification and any closure-style action are blocked. |
| #49750 | needs_human | blocked | needs_human | Live state is unavailable, so conservative PR inventory classification and any closure-style action are blocked. |
| #46895 | needs_human | blocked | needs_human | Live state is unavailable, so conservative PR inventory classification and any closure-style action are blocked. |
| #88828 | needs_human | blocked | needs_human | Live state is unavailable, so conservative PR inventory classification and any closure-style action are blocked. |
| #92090 | needs_human | blocked | needs_human | Live state is unavailable, so conservative PR inventory classification and any closure-style action are blocked. |
| #92355 | needs_human | blocked | needs_human | Live state is unavailable, so conservative PR inventory classification and any closure-style action are blocked. |
| #92432 | needs_human | blocked | needs_human | Live state is unavailable, so conservative PR inventory classification and any closure-style action are blocked. |
| #92466 | needs_human | blocked | needs_human | Live state is unavailable, so conservative PR inventory classification and any closure-style action are blocked. |
| #92514 | needs_human | blocked | needs_human | Live state is unavailable, so conservative PR inventory classification and any closure-style action are blocked. |
| #92544 | needs_human | blocked | needs_human | Live state is unavailable, and low-signal closeout is disabled, so conservative classification is blocked. |
| #47589 | needs_human | blocked | needs_human | Live state is unavailable, so conservative PR inventory classification and any closure-style action are blocked. |
| #51926 | needs_human | blocked | needs_human | Live state is unavailable, so conservative PR inventory classification and any closure-style action are blocked. |
| #92204 | needs_human | blocked | needs_human | Live state is unavailable, so conservative PR inventory classification and any closure-style action are blocked. |
| #41275 | needs_human | blocked | needs_human | Live state is unavailable, so conservative PR inventory classification and any closure-style action are blocked. |
| #92704 | needs_human | blocked | needs_human | Live state is unavailable, so conservative PR inventory classification and any closure-style action are blocked. |
| #92714 | needs_human | blocked | needs_human | Live state is unavailable, so conservative PR inventory classification and any closure-style action are blocked. |
| #43938 | needs_human | blocked | needs_human | Live state is unavailable, so conservative PR inventory classification and any closure-style action are blocked. |
| #90512 | needs_human | blocked | needs_human | Live state is unavailable, so conservative PR inventory classification and any closure-style action are blocked. |
| #92723 | needs_human | blocked | needs_human | Live state is unavailable, so conservative PR inventory classification and any closure-style action are blocked. |
| #92755 | needs_human | blocked | needs_human | Live state is unavailable, so conservative PR inventory classification and any closure-style action are blocked. |
| #92774 | needs_human | blocked | needs_human | Live state is unavailable, so conservative PR inventory classification and any closure-style action are blocked. |
| #92756 | needs_human | blocked | needs_human | Live state is unavailable, so conservative PR inventory classification and any closure-style action are blocked. |
| #92762 | needs_human | blocked | needs_human | Live state is unavailable, so conservative PR inventory classification and any closure-style action are blocked. |

## Needs Human

- All 25 candidate refs require rehydration before classification because the preflight artifact has kind=unknown, state=unavailable, updated_at=null for every item after GitHub API rate limiting.
