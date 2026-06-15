---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-199239-agentic-merge"
mode: "autonomous"
run_id: "25103740083"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103740083"
head_sha: "98c86abfe56e7ca0578fd667fdea3121315c5b1d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.350Z"
canonical: "https://github.com/openclaw/openclaw/pull/72388"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72388"
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 2
needs_human_count: 0
---

# ghcrawl-199239-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103740083](https://github.com/openclaw/clownfish/actions/runs/25103740083)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72388

## Summary

Hydrated state shows the original filename-mojibake representative #48578 is no longer live; the filename family was replaced and landed through #72388. The remaining open refs split into separate Feishu subfamilies: #73937 is the current open canonical for the file-typed video 502 fallback, #51196 is an independent upload stream cleanup PR, and #61807 is a related video-thumbnail PR. No merge is recommended because the open candidates lack complete merge preflight and some have failing checks or unresolved bot review comments.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 2 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #49855 | close_fixed_by_candidate | skipped | fixed_by_candidate | Blocked on canonical fix path #73937 landing; not safe to close the open issue yet. |
| #49967 | close_superseded | skipped | superseded | Otherwise likely superseded by #73937, but closure is blocked by require_fix_before_close and contributor-credit preservation until the canonical fix lands. |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72388 | keep_closed | skipped | canonical | Canonical filename fix already landed; closed merged PR receives no mutation. |
| #48578 | keep_closed | skipped | superseded | Already closed as superseded by the landed replacement; no close action is valid. |
| #50435 | keep_closed | skipped | superseded | Already closed after the canonical replacement landed; no mutation needed. |
| #59431 | keep_closed | skipped | superseded | Already closed after the canonical replacement landed; no mutation needed. |
| #50164 | keep_closed | skipped | superseded | Already closed as superseded by hydrated replacement #73937; no close action is valid. |
| #73937 | keep_canonical | planned | canonical | Current canonical for the Feishu file-typed video 502 fallback subfamily; keep open until merge preflight is complete. |
| #49855 | close_fixed_by_candidate | blocked | fixed_by_candidate | Blocked on canonical fix path #73937 landing; not safe to close the open issue yet. |
| #49967 | close_superseded | blocked | superseded | Otherwise likely superseded by #73937, but closure is blocked by require_fix_before_close and contributor-credit preservation until the canonical fix lands. |
| #51196 | keep_independent | planned | independent | Separate useful PR; keep open and do not close or merge as part of this cluster. |
| #61807 | keep_related | planned | related | Related Feishu media work with unresolved review/check blockers; keep open outside the filename closeout path. |

## Needs Human

- none
