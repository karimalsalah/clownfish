---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-maintainer_owned-20260615T223445-020"
mode: "plan"
run_id: "27583280348"
workflow_run_id: "27583280348"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583280348"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:55:41.415Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 26
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 6
---

# pr-inventory-maintainer_owned-20260615T223445-020

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583280348](https://github.com/openclaw/clownfish/actions/runs/27583280348)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was selected because the job explicitly states this is not a dedupe cluster. Open PRs are kept, routed to maintainer judgment only where the hydrated evidence shows an unresolved maintainer/product/technical decision, and already-closed PRs are recorded as skipped keep-closed actions. Security-sensitive PRs are quarantined with route_security.

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
| Needs human | 6 |

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
| #91786 | needs_human | planned | needs_human | Technical correctness and compatibility judgment remain maintainer-owned. |
| #90383 | keep_related | planned | related | Related to the tool-schema hardening workstream, but not safely closable or mergeable from this shard. |
| #91878 | needs_human | planned | needs_human | Protocol compatibility and automation gate changes require maintainer judgment. |
| #91906 | keep_independent | planned | independent | Independent performance change with missing proof; no closure or merge recommendation. |
| #93175 | needs_human | planned | needs_human | Maintainer review is needed for release/smoke taxonomy behavior. |
| #73365 | keep_related | planned | related | Related candidate fix for #48003, but failing checks/proof block merge or fixed-by closeout. |
| #77134 | keep_related | planned | related | Related to plugin-state follow-up work, but current proof/check failures block merge planning. |
| #93156 | keep_closed | skipped |  | Already closed; no mutation should be planned. |
| #93194 | needs_human | planned | needs_human | Session metadata correctness and upgrade behavior require maintainer technical judgment. |
| #89124 | keep_closed | skipped |  | Already closed/merged; retain as historical context only. |
| #89975 | needs_human | planned | needs_human | Active maintainer blocker plus author follow-up requires human review; no closure or merge action is safe. |
| #93265 | needs_human | planned | needs_human | Broad product/default behavior changes require maintainer judgment. |
| #14432 | keep_related | planned | related | Related to sub-agent guidance history, but not duplicate-cleanup material and not merge-ready. |
| #84975 | keep_related | planned | related | Related candidate fix for #84217, but review remains unresolved. |
| #72409 | keep_related | planned | related | Related plugin manifest follow-up; proof/review blockers make it non-closable and non-mergeable. |
| #76115 | keep_independent | planned | independent | Independent experimental diagnostics work with missing proof. |
| #76245 | keep_independent | planned | independent | Independent gateway availability fix with missing proof. |
| #76895 | route_security | planned | security_sensitive | Security-sensitive target is out of scope for backlog-cleanup automation and must be routed to central OpenClaw security handling. |
| #76927 | keep_independent | planned | independent | Independent subagent delivery PR with proof blocker. |
| #89327 | keep_related | planned | related | Related hardening workstream item; keep open independently. |
| #89329 | keep_related | planned | related | Related but distinct schema-hardening PR; not closable as duplicate. |
| #89333 | keep_related | planned | related | Related hardening workstream item; keep open independently. |
| #89518 | keep_related | planned | related | Related migration-stack slice under #88838; keep open, not duplicate-cleanup work. |
| #89547 | keep_closed | skipped |  | Already closed; no mutation should be planned. |
| #89579 | route_security | planned | security_sensitive | Security-sensitive target is out of scope for backlog-cleanup automation and must be routed to central OpenClaw security handling. |
| #90006 | route_security | planned | security_sensitive | Security-sensitive linked ref is out of scope for backlog-cleanup automation. |

## Needs Human

- #91786 requires maintainer compatibility/technical review before any merge path.
- #91878 requires maintainer judgment on Codex app-server protocol/type compatibility automation.
- #93175 requires maintainer judgment on QA smoke/release taxonomy behavior.
- #93194 requires maintainer review of session metadata correctness and upgrade-sensitive behavior.
- #89975 has an active maintainer blocking-regression comment and author re-review follow-up.
- #93265 requires maintainer/product judgment for broad onboarding/default behavior changes.
