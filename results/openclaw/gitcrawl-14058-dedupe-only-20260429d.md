---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14058-dedupe-only-20260429d"
mode: "autonomous"
run_id: "27597513853"
workflow_run_id: "27597513853"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597513853"
head_sha: "ea38411ccee73488f92b6963fa93366cd993f2d1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:02:34.394Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14058-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597513853](https://github.com/openclaw/clownfish/actions/runs/27597513853)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

All listed open candidates in this cluster are security-sensitive skill-installation or skill-scanning proposals. Per the central_security_only policy, each open candidate is quarantined with a non-mutating route_security action; no close, label, comment, merge, or fix action is planned.

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
| #9256 | route_security | planned | security_sensitive | Security-sensitive skill installation threat model belongs to central OpenClaw security handling, not backlog dedupe automation. |
| #18677 | route_security | planned | security_sensitive | The issue is explicitly about security scanning and blocking semantics for skill installation and runtime hooks. |
| #23926 | route_security | planned | security_sensitive | The issue defines a security-sensitive public skill-install lifecycle contract requiring central security review. |
| #45031 | route_security | planned | security_sensitive | The proposal is security-sensitive and the existing ClawSweeper review did not complete, so it should be routed to central security handling. |
| #57535 | route_security | planned | security_sensitive | The item directly concerns security warnings and trust controls for untrusted skill sources. |

## Needs Human

- none
