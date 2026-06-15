---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-31-pr-backlog-plan-20260615-a"
mode: "plan"
run_id: "27525113028"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27525113028"
head_sha: "416f3a943012e6a4f3b9e3e5baef7c4b408b4558"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:05:29.732Z"
canonical: "#54397"
canonical_issue: "#54397"
canonical_pr: null
actions_total: 18
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-31-pr-backlog-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27525113028](https://github.com/openclaw/clownfish/actions/runs/27525113028)

Workflow conclusion: success

Worker result: planned

Canonical: #54397

## Summary

Read-only plan for Gitcrawl cluster 31. #54397 remains the best live canonical for broad Topic/Session Management UI. Security-signal refs are quarantined individually with route_security. The remaining open candidates split into related subfamilies for session UI, document title, guarded shortcuts, and rename affordances; no close, merge, fix, or PR-raise action is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 18 |
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
| #51067 | route_security | planned | security_sensitive | Security-signal ref must be routed to central OpenClaw security handling. |
| #54397 | keep_canonical | planned | canonical | Best surviving canonical for the broad non-security session/topic management UI family. |
| #79607 | route_security | planned | security_sensitive | Security-sensitive session identity/routing request is out of ProjectClownfish backlog-cleanup scope. |
| #80901 | keep_related | planned | related | Related but not a true duplicate; it contains unique product surface and acceptance scope. |
| #80942 | keep_related | planned | related | Related Control UI navigation affordance, not duplicate of the broad session-management canonical. |
| #80944 | keep_closed | skipped | superseded | Already closed; closure actions are invalid for closed refs. |
| #81946 | keep_related | planned | related | Separate Control UI shortcut subfamily; related to the cluster but not duplicate of #54397. |
| #84827 | keep_related | planned | related | Potential shortcut implementation, but broad delta and unresolved review comments block merge or fixed-by closeout in this plan. |
| #85546 | route_security | planned | security_sensitive | Security-signal ref must be routed instead of handled by backlog cleanup. |
| #87662 | keep_related | planned | related | Related shortcut-family issue with unique session/agent-switching scope. |
| #88479 | route_security | planned | security_sensitive | Security-signal ref must be routed instead of closed, merged, or labeled by ProjectClownfish. |
| #88581 | keep_related | planned | related | Useful related rename work, but not a duplicate and not mergeable in plan mode with merge blocked by job frontmatter. |
| #89922 | keep_related | planned | related | Related session-management UI request with distinct rename and sidebar UX details. |
| #90184 | keep_related | planned | related | Promising related candidate for the picker rename subfamily, but plan mode and blocked merge action prevent merge recommendation. |
| #90577 | route_security | planned | security_sensitive | Security-signal ref is out of ProjectClownfish mutation scope. |
| #90655 | keep_related | planned | related | Focused rename-affordance subissue related to #54397; not a duplicate because it has a narrow actionable UI scope. |
| #90833 | keep_related | planned | related | Related candidate PR for #90655, but failing checks block merge and fixed-by-candidate closure. |
| #90916 | route_security | planned | security_sensitive | Security-sensitive topic-session family/privacy-boundary request must be routed to central security handling. |

## Needs Human

- none
