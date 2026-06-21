---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1181-intake-20260621"
mode: "plan"
run_id: "27898763463"
workflow_run_id: "27898763463"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27898763463"
head_sha: "235915800bae334c4c4446fe4ca178fb46b1cb9b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-21T08:34:48.387Z"
canonical: "#94428"
canonical_issue: "#94360"
canonical_pr: "#94428"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1181-intake-20260621

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27898763463](https://github.com/openclaw/clownfish/actions/runs/27898763463)

Workflow conclusion: success

Worker result: planned

Canonical: #94428

## Summary

Plan-mode classification only. The job canonical #94360 is already closed and the hydrated record shows the Feishu issue was landed through #94428 at 7cca3d4618b943f1507d407b4ec61a638f874e8f. No GitHub mutations are planned. The linked security-sensitive issue #93251 is quarantined with route_security only.

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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #93251 | route_security | planned | security_sensitive | Security-sensitive linked issue is out of ProjectClownfish cleanup scope. |
| #94360 | keep_closed | skipped | fixed_by_candidate | The original issue is already closed by the landed Feishu-owned fix, so no closure action is valid. |
| #94374 | keep_closed | skipped | superseded | Contributor PR was already closed with attribution after the landed replacement path. |
| #94381 | keep_closed | skipped | superseded | Contributor PR was already closed with attribution after the landed replacement path. |
| #94428 | keep_closed | skipped | canonical | This is the landed canonical fix for the Feishu report, but it is already closed and merged, so no merge action is valid. |
| #94454 | keep_closed | skipped | superseded | Alternative contributor PR was already closed after the maintainer chose the narrower Feishu-owned canonical fix. |

## Needs Human

- none
