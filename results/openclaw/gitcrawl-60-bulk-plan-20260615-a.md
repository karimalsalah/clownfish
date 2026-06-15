---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-60-bulk-plan-20260615-a"
mode: "plan"
run_id: "27521522508"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27521522508"
head_sha: "c7fde105fe4b1bf849faf5ed130f10118614c64c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:58:15.015Z"
canonical: "#90866"
canonical_issue: "#90866"
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

# gitcrawl-60-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27521522508](https://github.com/openclaw/clownfish/actions/runs/27521522508)

Workflow conclusion: success

Worker result: planned

Canonical: #90866

## Summary

Plan-only classification for 8 job refs. #90866 remains the live canonical for the Discord speculative placeholder request. #84288 and #84300 are quarantined as job-declared security-signal refs. #86149 is closable as fixed by merged #76091; #79104 is already closed. The remaining open refs are related but distinct root causes or channel scopes, so they should not be forced into the canonical duplicate family.

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
| #90866 | keep_canonical | planned | canonical | Best live canonical for the Discord placeholder feature request. |
| #79104 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented by hydrated merged PR #76091. |
| #84276 | keep_related | planned | related | Same Discord feedback area, but a distinct lifecycle bug rather than the canonical placeholder feature. |
| #84288 | route_security | planned | security_sensitive | Job-declared security-signal ref; quarantine only this PR and continue unrelated classification. |
| #84300 | route_security | planned | security_sensitive | Job-declared security-signal ref; quarantine only this PR and continue unrelated classification. |
| #86149 | close_fixed_by_candidate | planned | fixed_by_candidate | Same delayed Discord accepted-reply typing root cause is covered by hydrated merged PR #76091. |
| #87665 | keep_related | planned | related | Related Discord operator-feedback problem, but not the same root cause or fix scope as the canonical placeholder issue. |
| #90017 | keep_related | planned | related | Related cross-channel feature family, but Slack and Discord should remain separate canonical items. |

## Needs Human

- none
