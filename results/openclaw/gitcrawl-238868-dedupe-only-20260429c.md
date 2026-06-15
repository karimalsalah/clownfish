---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238868-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104035800"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104035800"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.399Z"
canonical: "https://github.com/openclaw/openclaw/pull/73976"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73976"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238868-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104035800](https://github.com/openclaw/clownfish/actions/runs/25104035800)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73976

## Summary

Hydrated state changes the canonical path from closed #39555 to open replacement PR #73976. #48112 is related memory hybrid fallback work with distinct scope and unresolved review/check gates, so no open ref is safe to close in this dedupe-only run.

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
| #39555 | keep_closed | skipped | superseded | Already closed in live state; closed refs must not receive close/comment mutations. |
| #48112 | keep_related | planned | related | Same memory hybrid area, but materially different root cause and remaining work; not a true duplicate or safe superseded close. |
| #73976 | keep_canonical | planned | canonical | Best current canonical path, but this dedupe-only job cannot merge or repair it and should keep it open for maintainer review. |

## Needs Human

- none
