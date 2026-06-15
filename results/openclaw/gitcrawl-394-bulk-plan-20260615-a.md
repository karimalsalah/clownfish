---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-394-bulk-plan-20260615-a"
mode: "plan"
run_id: "27521389826"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27521389826"
head_sha: "c7fde105fe4b1bf849faf5ed130f10118614c64c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:58:14.860Z"
canonical: "#92479"
canonical_issue: "#92479"
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

# gitcrawl-394-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27521389826](https://github.com/openclaw/clownfish/actions/runs/27521389826)

Workflow conclusion: success

Worker result: planned

Canonical: #92479

## Summary

Plan-mode classification only. #92479 remains the live canonical issue for the non-security Zen provider catalog regression. #92495 is an explicitly listed security-signal ref in the job and is routed to central security handling instead of being merged, closed, or used for ProjectClownfish mutation.

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
| #92479 | keep_canonical | planned | canonical | #92479 is the clearest surviving non-security issue for the Zen provider catalog regression and should remain open as the canonical tracking thread. |
| #92495 | route_security | planned | security_sensitive | The job explicitly marks this exact PR as a security-signal ref, so ProjectClownfish should quarantine it to central OpenClaw security handling and avoid merge, close, label, comment, or fix actions on it. |

## Needs Human

- none
