---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2427-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27599300424"
workflow_run_id: "27599300424"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599300424"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:51:55.929Z"
canonical: "https://github.com/openclaw/openclaw/pull/78985"
canonical_issue: "https://github.com/openclaw/openclaw/issues/44471"
canonical_pr: "https://github.com/openclaw/openclaw/pull/78985"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2427-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599300424](https://github.com/openclaw/clownfish/actions/runs/27599300424)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/78985

## Summary

No GitHub mutations are needed or allowed for this pass. The original canonical issue #44471 and duplicate/context issues #44472 and #44587 are already closed, and hydrated linked PR #78985 is the landed canonical fix on main. Linked PR #82724 also landed a focused subagent handoff fix and was superseded by the broader final fix path.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #44471 | keep_closed | skipped | fixed_by_candidate | Already closed and fixed by hydrated merged PR #78985; no mutation should be planned. |
| #44472 | keep_closed | skipped | duplicate | Already closed duplicate/context item; preserve as historical evidence only. |
| #44587 | keep_closed | skipped | duplicate | Already closed duplicate/context item; preserve as historical evidence only. |
| #78985 | keep_closed | skipped | canonical | This is the landed canonical fix PR; it is already merged and closed, and merge actions are blocked by job frontmatter. |
| #82724 | keep_closed | skipped | superseded | Already closed linked PR; useful focused work landed, then the broader #78985 fix became the canonical final path. |

## Needs Human

- none
