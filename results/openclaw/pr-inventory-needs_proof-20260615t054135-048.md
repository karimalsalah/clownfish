---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T054135-048"
mode: "plan"
run_id: "27526624496"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526624496"
head_sha: "dd092f08dfed6ec600221eb169e0ce317c148af7"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:50:35.016Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-inventory-needs_proof-20260615T054135-048

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526624496](https://github.com/openclaw/clownfish/actions/runs/27526624496)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was selected because the job explicitly says this is not a dedupe cluster. Closed PRs are kept closed or routed when security-sensitive; open non-security PRs are left open as independent PRs needing proof/review rather than closure, merge, or fix work.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #64540 | keep_closed | skipped | related | Already closed; keep as historical related evidence, not a mutation target. |
| #62722 | keep_independent | planned | independent | Focused independent PR with plausible behavior value, but proof/checks are insufficient for merge or closure. |
| #64703 | keep_independent | planned | independent | Independent compatibility-affecting parser PR; keep open for proof and maintainer review rather than close. |
| #63113 | route_security | planned | security_sensitive | Out of ProjectClownfish backlog cleanup scope; route the exact item to central OpenClaw security handling. |
| #62403 | keep_independent | planned | independent | Useful independent bug-fix candidate, but not merge-ready and not safe to close as low-signal. |
| #64335 | keep_closed | skipped | related | Already closed; keep as historical related provider/auth evidence, not an executable close or fix target in this plan-only job. |
| #61521 | keep_closed | skipped | related | Already closed; preserve as related historical context for any future channel setup validation work. |
| #64749 | route_security | planned | security_sensitive | Out of ProjectClownfish backlog cleanup scope; route the exact item to central OpenClaw security handling. |
| #62966 | keep_closed | skipped | fixed_by_candidate | Already closed after being covered by current main; keep closed. |
| #64416 | route_security | planned | security_sensitive | Out of ProjectClownfish backlog cleanup scope; route the exact item to central OpenClaw security handling. |

## Needs Human

- none
