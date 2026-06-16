---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156662-autonomous-smoke"
mode: "autonomous"
run_id: "27597848996"
workflow_run_id: "27597848996"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597848996"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-16T06:11:16.758Z"
canonical: "https://github.com/openclaw/openclaw/pull/59118"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/59118"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# ghcrawl-156662-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597848996](https://github.com/openclaw/clownfish/actions/runs/27597848996)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/pull/59118

## Summary

Canonical path is the already-merged PR #59118 on main at 6aa83374d90d35226b9cf3577155c3876a91b4b3. No close, merge, label, or fix mutations are planned because all hydrated PR candidates are already closed except #49550, whose live state is unavailable. Security-sensitive #41803 is quarantined to central security handling only.

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
| Needs human | 1 |

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
| #59118 | keep_closed | skipped | canonical | Already merged canonical PR; closed refs must not receive closure actions. |
| #41172 | keep_closed | skipped | related | Related formatter/provider-gap work, but already closed and not a mutation target. |
| #41803 | route_security | planned | security_sensitive | Security-shaped review findings require central OpenClaw security routing for this exact ref only. |
| #49550 | needs_human | blocked | needs_human | Live state is unavailable for a job-provided candidate; maintainer or planner should refresh/remove this ref. |
| #61349 | keep_closed | skipped | superseded | Already closed superseded PR; canonical implementation landed through #59118. |

## Needs Human

- #49550 is a job-provided candidate but live hydration returned HTTP 404 with no kind, state, updated_at, body, comments, files, checks, or reviews. Refresh or remove this ref before any mutation decision.
