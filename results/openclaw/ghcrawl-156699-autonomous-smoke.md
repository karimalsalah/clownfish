---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156699-autonomous-smoke"
mode: "autonomous"
run_id: "27597849416"
workflow_run_id: "27597849416"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597849416"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:13:26.846Z"
canonical: "cluster:ghcrawl-156699-autonomous-smoke:new_fix_pr"
canonical_issue: null
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156699-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597849416](https://github.com/openclaw/clownfish/actions/runs/27597849416)

Workflow conclusion: success

Worker result: planned

Canonical: cluster:ghcrawl-156699-autonomous-smoke:new_fix_pr

## Summary

All hydrated member PRs are already closed, so no close or merge action is valid. The security-sensitive PRs are routed for central handling, and current main still lacks Feishu gateway status-sink plumbing, so a narrow credited replacement fix artifact is planned from current main and the non-security contributor PR context.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

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
| #39487 | keep_closed | skipped | superseded | Already closed; keep as historical source-credit evidence for the replacement fix lane. |
| #39489 | route_security | planned | security_sensitive | Quarantine the exact security-sensitive ref for central OpenClaw security handling while keeping unrelated non-security fix work separate. |
| #41940 | keep_closed | skipped | superseded | Already closed; keep as historical source-credit evidence for the replacement fix lane. |
| #53533 | route_security | planned | security_sensitive | Quarantine the exact security-sensitive ref for central OpenClaw security handling. |
| cluster:ghcrawl-156699-autonomous-smoke | fix_needed | planned | related | No viable open canonical PR remains, and the current-main provider gap is narrow enough for a credited replacement fix PR that avoids the security-routed branches. |
| cluster:ghcrawl-156699-autonomous-smoke | build_fix_artifact | planned | related | Build a scoped replacement fix artifact preserving contributor credit from the non-security source PRs. |

## Needs Human

- none
