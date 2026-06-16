---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13565-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585128947"
workflow_run_id: "27585128947"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585128947"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:18:21.246Z"
canonical: "#53376"
canonical_issue: "#53376"
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

# gitcrawl-13565-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585128947](https://github.com/openclaw/clownfish/actions/runs/27585128947)

Workflow conclusion: success

Worker result: planned

Canonical: #53376

## Summary

Planned non-mutating autonomous classification for the Feishu/Lark message cluster using the provided preflight artifact as live state. #53376 remains the canonical open issue for receive_id_type/send-target failures. #53798 is covered by hydrated open fix PR #89172. #61840 and #62468 are already closed and receive no closure action. Security-sensitive linked PR #50399 is routed to central security handling only.

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

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #53376 | keep_canonical | planned | canonical | #53376 is the only open hydrated issue directly tracking the receive_id_type-required Feishu send failure, so it remains the canonical thread. |
| #53798 | close_fixed_by_candidate | planned | fixed_by_candidate | #53798 is the same duration-display defect that #89172 is already fixing, and the hydrated PR has passing behavior proof, so validation and follow-up should live on #89172. |
| #61840 | keep_closed | skipped | fixed_by_candidate | No mutation is valid because #61840 is already closed in the live preflight state. |
| #62468 | keep_closed | skipped | related | No mutation is valid because #62468 is already closed in the live preflight state. |
| #50399 | route_security | planned | security_sensitive | #50399 is explicitly marked security-sensitive by the hydrated preflight artifact, so it is read-only and out of ProjectClownfish cleanup scope. |

## Needs Human

- none
