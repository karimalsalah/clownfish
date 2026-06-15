---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238890-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104085192"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104085192"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.413Z"
canonical: "https://github.com/openclaw/openclaw/pull/45912"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/45912"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238890-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104085192](https://github.com/openclaw/clownfish/actions/runs/25104085192)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/45912

## Summary

Kept #45912 as the current open canonical PR for the configured-root skills symlink family. No close actions are planned because #45912 still has an unresolved Codex review blocker, #59688 contains useful overlapping contributor work with failing checks, and #63312 is a related but distinct user-managed .agents/skills policy change.

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
| #45912 | keep_canonical | planned | canonical | Best live canonical for this dedupe cluster, but not merge-ready and merge/fix actions are blocked by the job. |
| #59688 | keep_related | planned | related | Related overlapping contributor PR; keep open rather than close as duplicate or superseded. |
| #63312 | keep_related | planned | related | Related same skills realpath family, but not a true duplicate of the configured-root canonical PR. |
| #44051 | keep_related | planned | related | Same root-cause family as the canonical PR, but the issue should remain open until the canonical fix is repaired and landed. |
| #46690 | keep_related | planned | related | Related skills-root area, but not a duplicate or closeout target for this cluster. |
| #61585 | keep_closed | skipped | fixed_by_candidate | Already closed; included only to record that it is not a live mutation target. |

## Needs Human

- none
