---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-609-bulk-plan-20260615-a"
mode: "plan"
run_id: "27521527155"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27521527155"
head_sha: "c7fde105fe4b1bf849faf5ed130f10118614c64c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:58:15.017Z"
canonical: "#90869"
canonical_issue: "#90869"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-609-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27521527155](https://github.com/openclaw/clownfish/actions/runs/27521527155)

Workflow conclusion: success

Worker result: planned

Canonical: #90869

## Summary

Read-only plan: keep #90869 as the live canonical issue for the recursive memory-wiki subfolder indexing bug; route #90870 because the job explicitly marks it as a security-signal ref; keep #92105 related but separate because it is the broader configurable page-groups feature; keep already-closed #82534 historical only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #90869 | keep_canonical | planned | canonical | #90869 is the clearest open non-security canonical for the recursive scanning data-loss bug. |
| #90870 | route_security | planned | security_sensitive | The job gives an explicit security-signal routing instruction for this exact PR. |
| #92105 | keep_related | planned | related | Related memory-wiki area, but broader feature/product scope with unique remaining work. |
| #82534 | keep_closed | skipped | related | Already closed; no closure mutation is valid. |

## Needs Human

- none
