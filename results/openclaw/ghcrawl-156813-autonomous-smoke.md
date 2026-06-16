---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156813-autonomous-smoke"
mode: "autonomous"
run_id: "27584188260"
workflow_run_id: "27584188260"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27584188260"
head_sha: "3eaef20c39c95c760c2eeb4e61adf6ea57afc054"
workflow_conclusion: "cancelled"
result_status: "planned"
published_at: "2026-06-16T00:16:37.005Z"
canonical: "https://github.com/openclaw/openclaw/pull/55789"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/55789"
actions_total: 5
fix_executed: 0
fix_failed: 1
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156813-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27584188260](https://github.com/openclaw/clownfish/actions/runs/27584188260)

Workflow conclusion: cancelled

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/55789

## Summary

Classified the cluster with #55789 as the live canonical PR, but it is not merge-ready: the hydrated preflight shows failing real behavior proof, unknown mergeability, and no clean current /review merge preflight. Plan is to repair the editable contributor branch and preserve RichardCao's credit. Closed historical #45344 stays closed, and security-sensitive #55928 and #81815 are routed to central security handling only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | source PR #55789 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected when rebased upstream history includes workflow files |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/93443 | clownfish/ghcrawl-156813-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #45344 | keep_closed | skipped | related | Already closed; related historical context only. |
| #55789 | fix_needed | planned | canonical | Canonical PR is useful and maintainer_can_modify=true, but repair/validation is required before merge. |
| cluster:ghcrawl-156813-autonomous-smoke | build_fix_artifact | planned |  | Build an executable repair plan for the canonical contributor PR instead of merging or closing anything now. |
| #55928 | route_security | planned | security_sensitive | Security-sensitive target must be routed to central OpenClaw security handling and excluded from ProjectClownfish mutation. |
| #81815 | route_security | planned | security_sensitive | Security-sensitive linked ref must be routed to central OpenClaw security handling and excluded from ProjectClownfish mutation. |

## Needs Human

- none
