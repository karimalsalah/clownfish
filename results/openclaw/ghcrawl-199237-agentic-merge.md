---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-199237-agentic-merge"
mode: "autonomous"
run_id: "27346401171"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27346401171"
head_sha: "23bc96a8490b39e055eb96e3753083354a2c7764"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-11T12:27:56.888Z"
canonical: "https://github.com/openclaw/openclaw/tree/9a6c71a47d9526c677a325531dfc44adc054d9bb"
canonical_issue: null
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-199237-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27346401171](https://github.com/openclaw/clownfish/actions/runs/27346401171)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/9a6c71a47d9526c677a325531dfc44adc054d9bb

## Summary

Current main 9a6c71a47d9526c677a325531dfc44adc054d9bb already contains the narrow gateway stream merge/replace behavior and focused regression coverage. Plan: close #60063 as fixed by current main, keep #74498 as a related UI follow-up, route only #47399 to security triage, and leave closed context refs skipped.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #60063 | close_fixed_by_candidate | blocked | fixed_by_candidate | close requires Clownfish fix PR opened/pushed, merged candidate fix, or merge executed first |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #47377 | keep_closed | skipped | superseded | Already closed context ref; no close/comment/merge mutation is valid. |
| #47399 | route_security | planned | security_sensitive | Scoped quarantine to central OpenClaw security handling; no mutation is planned for this item. |
| #54374 | keep_closed | skipped | superseded | Already closed context ref; no close/comment/merge mutation is valid. |
| #60063 | close_fixed_by_candidate | planned | fixed_by_candidate | fixed-by-current-main: #60063 is already covered by current main, while its branch remains dirty and lacks passing real behavior proof. |
| #63994 | keep_closed | skipped | fixed_by_candidate | Already closed context ref covered by hydrated merged replacement #72400; no mutation is valid. |
| #65457 | keep_closed | skipped | fixed_by_candidate | Already closed context ref covered by hydrated merged replacement #72400; no mutation is valid. |
| #74498 | keep_related | planned | related | Related but distinct UI follow-up; keep open and do not close or merge in this cluster. |

## Needs Human

- none
