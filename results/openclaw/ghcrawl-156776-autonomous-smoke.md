---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156776-autonomous-smoke"
mode: "autonomous"
run_id: "27597851394"
workflow_run_id: "27597851394"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597851394"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:13:26.894Z"
canonical: "https://github.com/openclaw/openclaw/pull/76020"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/76020"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156776-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597851394](https://github.com/openclaw/clownfish/actions/runs/27597851394)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/76020

## Summary

Current live preflight shows the original representative #48945 and the listed candidates #40530/#63148 are closed. The surviving canonical path is hydrated open PR #76020 for the Feishu topic-thread mention-policy gap, but it is not merge-ready: real behavior proof failed, relevant checks are failing, mergeability is unknown, and no clean Codex /review preflight exists. Plan is to repair contributor branch #76020, preserve credit for earlier superseded work, and quarantine only security-sensitive #40530.

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
| execute_fix | skipped |  |  | fix artifact source PR #40530 is security-sensitive |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #40530 | route_security | planned | security_sensitive | Security-sensitive hydrated item must be routed to central security handling; it is not eligible for ProjectClownfish mutation. |
| #48945 | keep_closed | skipped | superseded | Already closed and superseded by hydrated open canonical PR #76020. |
| #63148 | keep_closed | skipped | related | Related Feishu topic work, but not the same root cause as the open topicRequireMention canonical path. |
| #76020 | fix_needed | planned | canonical | Canonical PR is useful and editable, but it needs branch repair, validation, and review before merge. |
| cluster:ghcrawl-156776-autonomous-smoke | build_fix_artifact | planned |  | Build an executable repair artifact for the current canonical PR. |

## Needs Human

- none
