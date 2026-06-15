---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156957-autonomous-smoke"
mode: "autonomous"
run_id: "27584190017"
workflow_run_id: "27584190017"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27584190017"
head_sha: "3eaef20c39c95c760c2eeb4e61adf6ea57afc054"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:57:44.413Z"
canonical: "#34004"
canonical_issue: "https://github.com/openclaw/openclaw/issues/34004"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156957-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27584190017](https://github.com/openclaw/clownfish/actions/runs/27584190017)

Workflow conclusion: success

Worker result: planned

Canonical: #34004

## Summary

Hydrated state shows the original umbrella issue #33270 is already closed, the auto-presence portion landed through merged PR #33277, and the remaining self-profile scope is security-sensitive. Quarantine the exact security-sensitive refs #33202 and #34004 with route_security; keep closed non-security context as evidence only. No GitHub mutations or fix PR work through Clownfish.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #33202 | route_security | planned | security_sensitive | Closed historical contributor PR contains the security-sensitive self-profile scope; quarantine the exact ref as non-mutating security routing. |
| #33270 | keep_closed | skipped | superseded | Representative issue is no longer open; #34004 is the narrowed remaining thread but must be routed through security handling. |
| #33277 | keep_closed | skipped | fixed_by_candidate | Merged context PR; no merge or close mutation remains. |
| #34004 | route_security | planned | security_sensitive | Security-sensitive canonical remaining work is out of Clownfish mutation scope and should be routed to central OpenClaw security handling. |

## Needs Human

- none
