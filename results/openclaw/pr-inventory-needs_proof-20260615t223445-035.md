---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-035"
mode: "plan"
run_id: "27583352142"
workflow_run_id: "27583352142"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583352142"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T23:55:41.457Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 7
---

# pr-inventory-needs_proof-20260615T223445-035

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583352142](https://github.com/openclaw/clownfish/actions/runs/27583352142)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Plan-only PR inventory classification. No GitHub mutations planned. Routed 2 security-sensitive PRs, kept 15 hydrated open PRs independent, skipped 1 already-closed PR, and blocked 7 PRs on unavailable live state in the preflight artifact.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 7 |

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
| #83295 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish backlog-cleanup scope. |
| #83458 | keep_independent | planned | independent | Open PR needs proof/check follow-up, not dedupe closure. |
| #83629 | keep_independent | planned | independent | Independent open PR with its own issue/fix surface. |
| #83630 | keep_independent | planned | independent | Independent open PR; no closure or merge action is allowed in plan mode. |
| #83665 | keep_independent | planned | independent | Independent open PR with unresolved proof gate. |
| #83703 | keep_independent | planned | independent | Independent open PR; low-signal closeout is disabled by job permissions. |
| #83715 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish backlog-cleanup scope. |
| #83819 | keep_independent | planned | independent | Independent open PR with unresolved proof/draft readiness. |
| #83826 | keep_independent | planned | independent | Independent test PR with unresolved proof gate. |
| #83862 | keep_independent | planned | independent | Independent open PR with unresolved proof gate. |
| #90683 | keep_closed | skipped |  | Already closed; no action needed. |
| #80683 | keep_independent | planned | independent | Independent open PR requiring normal review/update path. |
| #81208 | keep_independent | planned | independent | Independent open PR; unresolved review context blocks merge but not classification. |
| #81298 | keep_independent | planned | independent | Independent open PR requiring normal review/update path. |
| #81299 | keep_independent | planned | independent | Independent open PR requiring normal review/update path. |
| #81306 | keep_independent | planned | independent | Independent open PR; no merge or close action allowed. |
| #81352 | keep_independent | planned | independent | Independent open PR with failing proof/check gates. |
| #81407 | keep_independent | planned | independent | Independent open PR; no low-signal closure permitted. |
| #81418 | needs_human | blocked | needs_human | Live hydrated state is unavailable, so classification cannot be made safely. |
| #81431 | needs_human | blocked | needs_human | Live hydrated state is unavailable, so classification cannot be made safely. |
| #81470 | needs_human | blocked | needs_human | Live hydrated state is unavailable, so classification cannot be made safely. |
| #81592 | needs_human | blocked | needs_human | Live hydrated state is unavailable, so classification cannot be made safely. |
| #83868 | needs_human | blocked | needs_human | Live hydrated state is unavailable, so classification cannot be made safely. |
| #83980 | needs_human | blocked | needs_human | Live hydrated state is unavailable, so classification cannot be made safely. |
| #84023 | needs_human | blocked | needs_human | Live hydrated state is unavailable, so classification cannot be made safely. |

## Needs Human

- #81418 live hydrated state unavailable in preflight artifact; re-run hydration before classification.
- #81431 live hydrated state unavailable in preflight artifact; re-run hydration before classification.
- #81470 live hydrated state unavailable in preflight artifact; re-run hydration before classification.
- #81592 live hydrated state unavailable in preflight artifact; re-run hydration before classification.
- #83868 live hydrated state unavailable in preflight artifact; re-run hydration before classification.
- #83980 live hydrated state unavailable in preflight artifact; re-run hydration before classification.
- #84023 live hydrated state unavailable in preflight artifact; re-run hydration before classification.
