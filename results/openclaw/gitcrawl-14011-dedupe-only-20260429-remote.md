---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14011-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585128845"
workflow_run_id: "27585128845"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585128845"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:33:01.529Z"
canonical: "#59048"
canonical_issue: null
canonical_pr: "#59048"
actions_total: 15
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14011-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585128845](https://github.com/openclaw/clownfish/actions/runs/27585128845)

Workflow conclusion: success

Worker result: planned

Canonical: #59048

## Summary

Autonomous plan only. The preflight artifact shows the original representative #59048 is already closed and the float-encoding root cause was later reported fixed on main via hydrated issue #45982. No open replacement canonical is safe to select for closeout. Most prompt-listed candidates are already closed; the remaining open non-security PRs are related or independent memory-lancedb work, not duplicates of #59048. Security-sensitive refs are quarantined only for the exact affected items.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 15 |
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
| #59048 | keep_closed | skipped | canonical | Historical canonical only; already closed. |
| #40578 | route_security | planned | security_sensitive | Exact-item security quarantine. |
| #41670 | keep_closed | skipped | superseded | Already closed before this run. |
| #43910 | keep_closed | skipped | related | Already closed before this run. |
| #47285 | keep_closed | skipped | related | Already closed and not a duplicate closeout target. |
| #56532 | keep_closed | skipped | independent | Already closed before this run. |
| #59141 | keep_related | planned | related | Same component family, different behavior and root cause. |
| #63413 | keep_closed | skipped | independent | Already closed before this run. |
| #65066 | keep_closed | skipped | independent | Already closed before this run. |
| #66913 | keep_closed | skipped | independent | Already closed before this run. |
| #67952 | keep_closed | skipped | independent | Already closed before this run. |
| #68060 | route_security | planned | security_sensitive | Exact-item security quarantine. |
| #68116 | keep_independent | planned | independent | Separate feature surface, not a duplicate. |
| #69707 | keep_related | planned | related | Related embedding-provider compatibility work, but distinct root cause and active review path. |
| #70040 | keep_closed | skipped | related | Already closed before this run. |

## Needs Human

- none
