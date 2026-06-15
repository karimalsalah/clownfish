---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-050"
mode: "plan"
run_id: "27527421190"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27527421190"
head_sha: "8debf1fca806bd022e4e97bf1b00271aed0f88ff"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T06:13:14.035Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# pr-inventory-mixed-20260615T0529-050

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27527421190](https://github.com/openclaw/clownfish/actions/runs/27527421190)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Plan-only PR inventory classification for 10 listed PRs. No GitHub mutations planned. Closed listed PRs are kept closed, open useful PRs are retained for independent/related follow-up, security-sensitive linked issues and security-boundary PRs are routed to central handling, and #85478 needs human review because hydrated live state was not available in the provided artifact.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
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
| #74733 | keep_closed | skipped | superseded | Already closed; preserve historical closeout without further action. |
| #74799 | route_security | planned | security_sensitive | Security-boundary-adjacent implementation tied to security-sensitive #74632; route this PR to central security handling. |
| #74632 | route_security | planned | security_sensitive | Exact linked security-sensitive issue; route to central OpenClaw security handling. |
| #75141 | keep_independent | planned | independent | Useful independent PR, but not merge-ready and not closable from this shard. |
| #73888 | keep_closed | skipped | superseded | Already closed replacement PR; no action beyond preserving the closed state. |
| #74734 | keep_related | planned | related | Related useful implementation for the closed config migration report, but not merge-ready and not a duplicate closeout target. |
| #73989 | keep_related | planned | related | Keep as the active related repair path, but merge/fix actions are blocked by dirty state, failing checks, unresolved review feedback, and job frontmatter. |
| #75050 | keep_related | planned | related | Docs-only related mitigation should stay open, but linked security-sensitive product issue must be handled centrally and the PR is not merge-ready. |
| #72595 | route_security | planned | security_sensitive | Exact linked security-sensitive issue; route to central OpenClaw security handling. |
| #72987 | keep_independent | planned | low_signal | Low-signal docs PR with unresolved review feedback; keep open because low-signal closeout is not allowed for this job. |
| #54831 | keep_closed | skipped |  | Already closed; no mutation or replacement fix is allowed by this plan-mode inventory job. |
| #85478 | needs_human | blocked | needs_human | Missing hydrated live state for a listed candidate; maintainer or rerun with full hydration required. |

## Needs Human

- #85478 requires rerun or human review because the provided compacted artifact lacks hydrated live state and target_updated_at for the listed candidate.
