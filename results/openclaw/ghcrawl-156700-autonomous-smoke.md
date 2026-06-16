---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156700-autonomous-smoke"
mode: "autonomous"
run_id: "27597849297"
workflow_run_id: "27597849297"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597849297"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:13:26.842Z"
canonical: "https://github.com/openclaw/openclaw/commit/eca9f468246e7451ab676f844818ea43da414d2a"
canonical_issue: null
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156700-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597849297](https://github.com/openclaw/clownfish/actions/runs/27597849297)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/commit/eca9f468246e7451ab676f844818ea43da414d2a

## Summary

Current main already contains the node systemd unit-name fix at SHA 6aa83374d90d35226b9cf3577155c3876a91b4b3. All job candidate PRs are already closed, so no close, merge, comment, label, or fix PR action is safe or needed. The only security-sensitive linked ref is scoped to #78686 and is already closed, so it is quarantined as a skipped route-only record.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #34884 | keep_closed | skipped | related | Already closed merged context; no mutation allowed. |
| #39580 | keep_closed | skipped | fixed_by_candidate | Already closed as superseded by the landed main commit; no follow-up action needed. |
| #54375 | keep_closed | skipped | related | Related closed context only; no mutation allowed. |
| #56059 | keep_closed | skipped | superseded | Already closed partial fix superseded by the complete main implementation. |
| #56080 | keep_closed | skipped | superseded | Already closed as superseded; no mutation allowed. |
| #68287 | keep_closed | skipped | fixed_by_candidate | Already closed as fixed on main; no mutation allowed. |
| #68293 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented on main; no mutation allowed. |
| #78686 | route_security | skipped | security_sensitive | Security-sensitive linked ref is already closed; record scoped quarantine without mutating GitHub. |

## Needs Human

- none
