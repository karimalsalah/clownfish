---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156965-autonomous-smoke"
mode: "autonomous"
run_id: "27584190187"
workflow_run_id: "27584190187"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27584190187"
head_sha: "3eaef20c39c95c760c2eeb4e61adf6ea57afc054"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T23:57:44.415Z"
canonical: "https://github.com/openclaw/openclaw/issues/49740"
canonical_issue: "https://github.com/openclaw/openclaw/issues/49740"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# ghcrawl-156965-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27584190187](https://github.com/openclaw/clownfish/actions/runs/27584190187)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/49740

## Summary

Live hydrated state supersedes the original representative: #38069 is already closed as a duplicate, and #49740 is the only open canonical issue for per-job recurring cron retry. Current main still lacks per-job retry controls, but #49740 carries ClawSweeper no-new-fix-pr and needs-product-decision labels, so executable fix PR creation is blocked on maintainer product direction rather than planned for autonomous execution.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #38069 | keep_closed | skipped | duplicate | Already closed as duplicate of the current canonical issue #49740. |
| #49740 | keep_canonical | planned | canonical | #49740 is the best live canonical thread; #38069 is already closed and the prior implementation candidates are closed/unmergeable. |
| cluster:ghcrawl-156965-autonomous-smoke | fix_needed | blocked |  | Blocked on maintainer product direction for per-job recurring cron retry semantics and permission to open a new fix PR for #49740. |
| cluster:ghcrawl-156965-autonomous-smoke | build_fix_artifact | blocked |  | Fix artifact is blocked rather than executable because maintainer product direction is explicitly requested on the live canonical issue. |

## Needs Human

- #49740 needs maintainer product direction before Clownfish opens a replacement fix PR: confirm whether per-job retry controls should be supported for recurring jobs, whether one-shot jobs should reject or share those flags, how edit/clear semantics should work, and whether the clawsweeper:no-new-fix-pr label should be overridden.
