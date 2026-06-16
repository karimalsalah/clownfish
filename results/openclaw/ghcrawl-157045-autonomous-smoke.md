---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-157045-autonomous-smoke"
mode: "autonomous"
run_id: "27598134109"
workflow_run_id: "27598134109"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27598134109"
head_sha: "3456041b23c90140b1b609eea90480f39847d880"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:17:50.773Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-157045-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27598134109](https://github.com/openclaw/clownfish/actions/runs/27598134109)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Hydrated live state shows both job-provided candidate PRs (#42304 and #42350) are already closed and flagged security-sensitive by the preflight artifact. No close, merge, post-merge close, or fix PR action is safe or needed in this cluster; the only planned work is scoped security routing for the exact affected refs.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #42304 | route_security | planned | security_sensitive | Security-sensitive hydrated primary item; quarantine the exact ref through central OpenClaw security handling without GitHub mutation from this worker. |
| #42350 | route_security | planned | security_sensitive | Security-sensitive hydrated primary item; quarantine the exact ref through central OpenClaw security handling without GitHub mutation from this worker. |

## Needs Human

- none
