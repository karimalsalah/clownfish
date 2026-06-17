---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-312-autonomous-terminal-gap"
mode: "autonomous"
run_id: "27670693177"
workflow_run_id: "27670693177"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27670693177"
head_sha: "c47a0caae1154b30bef4dac4212640474b3c595e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T06:42:15.161Z"
canonical: "https://github.com/openclaw/openclaw/pull/86503"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/86503"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-312-autonomous-terminal-gap

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27670693177](https://github.com/openclaw/clownfish/actions/runs/27670693177)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/86503

## Summary

Hydrated state shows #84821's original websocket tool-event mirror amplification is already fixed on main by merged PR #86503. #84850 is related but not a true duplicate because it still tracks broader CPU saturation and residual exec-update/product-decision scope. Existing-overlap PR #84823 and closed linked refs are context only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #84821 | close_fixed_by_candidate | blocked | fixed_by_candidate | target author association is MEMBER |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #84821 | close_fixed_by_candidate | planned | fixed_by_candidate | The original duplicate websocket-frame root cause is covered by hydrated merged PR #86503 and verified as present on current main; #84821 has no unique remaining work after that fix. |
| #84850 | keep_related | planned | related | Keep open as related follow-up; it is not a true duplicate of #84821/#86503 because it tracks broader CPU/event-loop and residual exec-update behavior. |
| #84823 | keep_related | skipped | superseded | Context only for this job; no close or merge action is planned against the excluded overlap PR, although its narrow fix is superseded by merged #86503. |
| #86503 | keep_closed | skipped | canonical | Merged PR #86503 is the canonical fixed-by-candidate path for #84821; no mutation is valid for an already-closed ref. |
| #90463 | keep_closed | skipped | independent | Closed linked context only; it is independent of the #84821 fixed-by-candidate closeout and not an actionable target. |

## Needs Human

- none
