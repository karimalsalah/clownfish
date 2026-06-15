---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-186-pr-backlog-plan-20260615-a"
mode: "plan"
run_id: "27525108336"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27525108336"
head_sha: "416f3a943012e6a4f3b9e3e5baef7c4b408b4558"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:04:34.145Z"
canonical: "#43235"
canonical_issue: "#43235"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-186-pr-backlog-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27525108336](https://github.com/openclaw/clownfish/actions/runs/27525108336)

Workflow conclusion: success

Worker result: planned

Canonical: #43235

## Summary

Plan-only classification: #43235 remains the hydrated live canonical issue for the non-security per-agent command lane feature request, #42686 is already closed as its duplicate/superseded predecessor, and #73991 is closed but security-sensitive and should stay quarantined to central security handling rather than ProjectClownfish mutation.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #43235 | keep_canonical | planned | canonical | Open contextual canonical; non-mutating keep action only because the ref is excluded by overlap policy and already owned by another job. |
| #42686 | keep_closed | skipped | duplicate | Already closed historical context; no closure action is valid or needed. |
| #73991 | route_security | planned | security_sensitive | Security-sensitive PR is out of ProjectClownfish mutation scope and is already closed; route the item to central OpenClaw security handling without opening, merging, closing, or fixing it here. |

## Needs Human

- none
