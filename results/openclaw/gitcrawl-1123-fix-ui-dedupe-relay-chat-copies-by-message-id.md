---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1123-fix-ui-dedupe-relay-chat-copies-by-message-id"
mode: "plan"
run_id: "27801265980-1-4"
workflow_run_id: "27801265980"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27801265980"
head_sha: "3478e0a5cfdb7b026708259822cc80b242eb0e10"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T02:20:30.621Z"
canonical: "#94479"
canonical_issue: "#94479"
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

# gitcrawl-1123-fix-ui-dedupe-relay-chat-copies-by-message-id

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27801265980](https://github.com/openclaw/clownfish/actions/runs/27801265980)

Workflow conclusion: success

Worker result: planned

Canonical: #94479

## Summary

Plan-mode classification only. #93044 is already closed and should not receive any closure action. #94479 is the only remaining hydrated open item, but it describes a distinct Control UI user-message render latency issue rather than the #93044 relay-envelope duplicate-agent-reply root cause, so it should be kept as the live canonical for its own subcluster rather than forced into the dedupe-relay family.

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
| #93044 | keep_closed | skipped | related | Already closed in live preflight state; no mutation should be planned. |
| #94479 | keep_canonical | planned | canonical | Only hydrated open item remaining, and it should be retained as canonical for the user-message immediate-rendering issue rather than closed into the separate relay duplicate-render family. |

## Needs Human

- none
