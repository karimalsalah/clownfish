---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-133-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610221326"
workflow_run_id: "27610221326"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610221326"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:12:25.919Z"
canonical: "https://github.com/openclaw/openclaw/issues/90213"
canonical_issue: "https://github.com/openclaw/openclaw/issues/90213"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-133-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610221326](https://github.com/openclaw/clownfish/actions/runs/27610221326)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/90213

## Summary

Classified the hydrated open issue #90213 as the surviving canonical issue for the repeated legacy state migration warning family. Issue #90418 is the same root cause and user-visible failure, with additional plugin/platform confirmations already represented in #90213, so it is safe to close as a duplicate. Closed issue #90040 remains historical evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #90418 | close_duplicate | blocked | duplicate | canonical is not listed in job refs |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #90040 | keep_closed | skipped | fixed_by_candidate | Already closed context ref retained as evidence only. |
| #90213 | keep_canonical | planned | canonical | Best surviving hydrated canonical issue for the repeated legacy state migration warning family. |
| #90418 | close_duplicate | planned | duplicate | Same root cause and same user-visible failure as the hydrated open canonical issue #90213; no unique remaining work needs to stay separate in #90418. |

## Needs Human

- none
