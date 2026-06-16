---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14090-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585131161"
workflow_run_id: "27585131161"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585131161"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:18:21.280Z"
canonical: "#46748"
canonical_issue: "#46748"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14090-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585131161](https://github.com/openclaw/clownfish/actions/runs/27585131161)

Workflow conclusion: success

Worker result: planned

Canonical: #46748

## Summary

The original representative #40220 is already closed. The best live canonical for the remaining non-security logging timezone work is open issue #46748. No close actions are planned because the only open non-security candidate is the canonical issue, and all duplicate/context refs are already closed. Security-sensitive linked PR #46782 is routed only to central security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #46748 | keep_canonical | planned | canonical | Open #46748 is the surviving canonical issue for the non-security logs timezone cluster. |
| #40220 | keep_closed | skipped | duplicate | Already closed; no closure mutation is valid. |
| #46782 | route_security | planned | security_sensitive | Security-sensitive linked PR must be quarantined to central OpenClaw security handling only. |
| #47365 | keep_closed | skipped | superseded | Already closed implementation candidate; useful historical context only. |
| #48717 | keep_closed | skipped | superseded | Already closed historical fix attempt; no mutation is valid. |
| #50151 | keep_closed | skipped | fixed_by_candidate | Already closed fixed context issue; no mutation is valid. |
| #67116 | keep_closed | skipped | duplicate | Already closed duplicate context issue; no mutation is valid. |
| #83694 | keep_closed | skipped | superseded | Already closed historical fix attempt with failing checks; no mutation is valid. |

## Needs Human

- none
