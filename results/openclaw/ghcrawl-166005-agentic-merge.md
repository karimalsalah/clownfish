---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-166005-agentic-merge"
mode: "autonomous"
run_id: "27347582477"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27347582477"
head_sha: "cd96117eeffd4922d01235e484f00b01bb5fb666"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-11T12:50:40.437Z"
canonical: "https://github.com/openclaw/openclaw/issues/37634"
canonical_issue: "https://github.com/openclaw/openclaw/issues/37634"
canonical_pr: null
actions_total: 26
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-166005-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27347582477](https://github.com/openclaw/clownfish/actions/runs/27347582477)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/37634

## Summary

The live open canonical family is security-sensitive: #37634 remains the likely workspaceAccess:none canonical and #31331 is an open alternate canonical for the Docker/DOOD bind-mount shape. Both are routed to central security. No close, merge, or fix PR is planned for the quarantined family; #73385 is kept related because it is an adjacent non-security sandbox write-tool gating PR, not a hydrated canonical replacement for #37634.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 26 |
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
| #16790 | keep_closed | skipped | related | Already closed sandbox path-handling context; no mutation is valid. |
| #20979 | keep_closed | skipped | related | Already closed related sandbox permissions context; no mutation is valid. |
| #31331 | route_security | planned | security_sensitive | Open issue carries security-sensitive signals and must route to central OpenClaw security handling. |
| #32227 | keep_closed | skipped | related | Already merged historical sandbox mount PR; no action is valid in this cluster pass. |
| #36525 | keep_closed | skipped | duplicate | Already closed duplicate context; no close action is valid. |
| #37276 | keep_closed | skipped | superseded | Closed superseded contributor PR; no mutation is valid. |
| #37634 | route_security | planned | security_sensitive | Open representative issue has security-sensitive signals and is out of ProjectClownfish mutation scope. |
| #38154 | keep_closed | skipped | superseded | Closed superseded contributor PR; no mutation is valid. |
| #44077 | keep_closed | skipped | related | Already closed related sandbox permission issue; no mutation is valid. |
| #44114 | keep_closed | skipped | superseded | Already closed broad superseded PR; no mutation is valid. |
| #44260 | keep_closed | skipped | security_sensitive | Closed security-sensitive context ref; no ProjectClownfish mutation is valid. |
| #46026 | keep_closed | skipped | duplicate | Already closed duplicate context; no close action is valid. |
| #46065 | keep_closed | skipped | superseded | Already closed superseded contributor PR; no mutation is valid. |
| #46300 | keep_closed | skipped | security_sensitive | Closed security-sensitive context ref; no ProjectClownfish mutation is valid. |
| #47237 | keep_closed | skipped | security_sensitive | Closed security-sensitive dirty-branch context ref; no ProjectClownfish mutation is valid. |
| #47784 | keep_closed | skipped | superseded | Already closed superseded contributor PR; no mutation is valid. |
| #47806 | keep_closed | skipped | superseded | Already closed duplicate/superseded PR; no mutation is valid. |
| #48011 | keep_closed | skipped | related | Already closed related issue; no mutation is valid. |
| #48034 | keep_closed | skipped | security_sensitive | Closed security-sensitive context ref; no ProjectClownfish mutation is valid. |
| #57230 | keep_closed | skipped | related | Already closed related sandbox path issue; no mutation is valid. |
| #59063 | keep_closed | skipped | related | Already closed related sandbox path issue; no mutation is valid. |
| #59613 | keep_closed | skipped | related | Already closed related sandbox permission issue; no mutation is valid. |
| #59718 | route_security | planned | security_sensitive | Open linked security-sensitive issue must route to central OpenClaw security handling. |
| #65316 | keep_closed | skipped | related | Already closed related sandbox write-tool issue; no mutation is valid. |
| #73385 | keep_related | planned | related | Related sandbox write-access work, but not a high-confidence canonical replacement for the quarantined workspaceAccess:none issues. |
| cluster:ghcrawl-166005-agentic-merge | fix_needed | blocked |  | An executable fix PR for the workspaceAccess:none family is blocked by the security quarantine. |

## Needs Human

- none
