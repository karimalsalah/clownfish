---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-157040-autonomous-smoke"
mode: "autonomous"
run_id: "27504160898"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27504160898"
head_sha: "dd5c2005f23223b62d521e611dde7c5cf4c69342"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-14T17:14:37.916Z"
canonical: "https://github.com/openclaw/openclaw/pull/70205"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/70205"
actions_total: 5
fix_executed: 0
fix_failed: 1
fix_blocked: 0
apply_executed: 2
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-157040-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27504160898](https://github.com/openclaw/clownfish/actions/runs/27504160898)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/70205

## Summary

#70205 is the current live canonical path, but it is not merge-ready: the hydrated PR is dirty, has a failed Real behavior proof check, and the June 14 ClawSweeper review requires rebase/scope repair because current main already has explicit all-agent usage.cost plumbing. Plan a repair of #70205 in place, keep #42063 and #41986 closed, and keep #13219 open as related broader ledger work.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 0 |
| Applied executions | 2 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | source PR #70205 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected when rebased upstream history includes workflow files |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/93022 | clownfish/ghcrawl-157040-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #93022 | merge_canonical | executed | fix_pr | already merged |
| #70205 | close_superseded | executed | post_merge_closeout | closed after canonical fix merged |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #70205 | fix_needed | planned | canonical | Repair the useful canonical PR branch before any merge or closeout; direct merge is blocked by dirty state, failed proof, and missing clean current-main review preflight. |
| cluster:ghcrawl-157040-autonomous-smoke | build_fix_artifact | planned |  | Build an executable repair plan for #70205 instead of merging or opening a replacement PR; the branch is editable and the remaining work is narrow enough for Clownfish repair. |
| #42063 | keep_closed | skipped | superseded | Already closed historical PR; no mutation is valid, but its contributor credit should be preserved in the canonical repair path. |
| #13219 | keep_related | planned | related | Same usage/cost area but different scope; keep open as related product work rather than closing or folding into #70205. |
| #41986 | keep_closed | skipped | fixed_by_candidate | Already closed historical bug context; keep closed and use only as evidence for the canonical repair. |

## Needs Human

- none
