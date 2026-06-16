---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2893-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27586104034"
workflow_run_id: "27586104034"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27586104034"
head_sha: "cd27262aa84c91b6795825f85982447d9f04143d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:46:07.241Z"
canonical: "https://github.com/openclaw/openclaw/issues/44749"
canonical_issue: "https://github.com/openclaw/openclaw/issues/44749"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2893-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27586104034](https://github.com/openclaw/clownfish/actions/runs/27586104034)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/44749

## Summary

Autonomous classification completed from the hydrated preflight artifact and target checkout at main SHA 2365a137d88cd8ae3902159267545b9edc7cf54a. Open security-marked refs #44749 and #56994 are routed individually to central OpenClaw security handling. Closed refs remain historical evidence only; no close, merge, fix, or PR actions are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #44749 | route_security | planned | security_sensitive | Exec approval persistence trust is security-sensitive in this artifact, so this exact open issue must be routed to central OpenClaw security handling without ProjectClownfish mutation. |
| #56994 | route_security | planned | security_sensitive | The hydrated artifact marks this exact open umbrella issue as security-sensitive; route it centrally and do not mutate it in this dedupe-only cluster. |
| #54296 | keep_closed | skipped | fixed_by_candidate | Already closed; retain as historical evidence only. |
| #63707 | keep_closed | skipped | related | Already closed; related historical evidence for the exec-approvals atomic-write family only. |
| #57895 | keep_closed | skipped | related | Already closed; useful historical context but no live ProjectClownfish action is allowed. |
| #63843 | keep_closed | skipped | related | Already closed; no mutation should be replayed. |
| #80615 | keep_closed | skipped | fixed_by_candidate | Already merged and closed; retain as the historical fix candidate for #54296 only. |

## Needs Human

- none
