---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-198-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610221406"
workflow_run_id: "27610221406"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610221406"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:19:15.511Z"
canonical: "https://github.com/openclaw/openclaw/pull/92287"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/92287"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-198-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610221406](https://github.com/openclaw/clownfish/actions/runs/27610221406)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/92287

## Summary

Hydrated state identifies #92287 as the live canonical fix candidate for #92267, but this job cannot merge or raise fixes and the candidate still has a failing native Telegram proof check. Keep both items open for the existing review path; do not close #92267 before the canonical PR lands or maintainers accept the remaining proof gap.

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
| #92287 | keep_canonical | planned | canonical | Canonical fix candidate remains open, hydrated, and owned by the existing overlap job; keep it as the canonical path without mutation. |
| #92267 | keep_related | planned | fixed_by_candidate | Issue is covered by the canonical open PR, but closeout is not safe before the PR lands or the remaining proof failure is resolved. |

## Needs Human

- none
