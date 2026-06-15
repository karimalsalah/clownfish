---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238853-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104015172"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104015172"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.396Z"
canonical: "https://github.com/openclaw/openclaw/issues/61653"
canonical_issue: "https://github.com/openclaw/openclaw/issues/61653"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238853-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104015172](https://github.com/openclaw/clownfish/actions/runs/25104015172)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/61653

## Summary

All hydrated refs are already closed in the preflight artifact. No close, label, merge, fix, or PR action is valid for this run. The representative #61667 is no longer the live canonical; it was closed as a duplicate of hydrated issue #61653, which carries the implemented closeout for the exact-command-hash allow-always bug. Security-sensitive #59708 is quarantined only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #59708 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish dedupe mutation scope. |
| #61233 | keep_closed | skipped | duplicate | Already closed duplicate; closed refs must not receive close actions. |
| #61451 | keep_closed | skipped | related | Related closed context only; no live ProjectClownfish mutation is valid. |
| #61647 | keep_closed | skipped | duplicate | Already closed duplicate context; no closure action allowed. |
| #61653 | keep_closed | skipped | canonical | Canonical issue is already closed as implemented; no mutation is valid. |
| #61667 | keep_closed | skipped | duplicate | Representative is obsolete and already closed as duplicate of hydrated canonical #61653. |

## Needs Human

- none
