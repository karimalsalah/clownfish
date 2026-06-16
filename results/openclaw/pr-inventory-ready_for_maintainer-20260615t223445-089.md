---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-089"
mode: "plan"
run_id: "27580942551-1-89"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.531Z"
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
needs_human_count: 0
---

# pr-inventory-ready_for_maintainer-20260615T223445-089

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory shard. The hydrated artifact shows open PRs and no shared canonical; merge, fix, and low-signal closeout are disabled by job permissions. Twenty non-security PRs are kept independently for normal maintainer review, and five validator-identified security-sensitive PRs are routed to central OpenClaw security handling without ProjectClownfish triage mutations.

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
| #91013 | keep_independent | planned | independent | Independent ready-for-maintainer PR; no closure or merge action is available in plan mode. |
| #91049 | keep_independent | planned | independent | Independent broad multi-client fix that requires normal maintainer review outside this inventory classification. |
| #91057 | route_security | planned | security_sensitive | Security-sensitive per deterministic validation; route only this PR to central OpenClaw security handling with no ProjectClownfish mutation. |
| #91087 | keep_independent | planned | independent | Independent ClawSweeper automerge/human-review PR; not a dedupe or closeout target for this shard. |
| #91089 | keep_independent | planned | independent | Independent CI/automation PR. |
| #91093 | keep_independent | planned | independent | Independent feature PR requiring normal maintainer product and technical review. |
| #91146 | keep_independent | planned | independent | Independent Telegram formatting PR; keep open while author/check/review state is unresolved. |
| #91192 | route_security | planned | security_sensitive | Security-sensitive per deterministic validation; route only this PR to central OpenClaw security handling with no ProjectClownfish mutation. |
| #91193 | keep_independent | planned | independent | Independent small CLI maintenance PR. |
| #91210 | keep_independent | planned | independent | Independent UI localization PR with active author-followup signal. |
| #91220 | keep_independent | planned | independent | Independent docs/tooling maintenance PR. |
| #91221 | keep_independent | planned | independent | Independent daemon/systemd PR with active author-followup signal. |
| #91234 | route_security | planned | security_sensitive | Security-sensitive per deterministic validation; route only this PR to central OpenClaw security handling with no ProjectClownfish mutation. |
| #91203 | keep_independent | planned | independent | Independent Matrix channel UX fix. |
| #91208 | keep_independent | planned | independent | Independent gateway/plugin session-state fix. |
| #65359 | keep_independent | planned | independent | Independent config bugfix PR. |
| #65783 | keep_independent | planned | independent | Independent memory-core PR with unresolved author/check/review-bot signals. |
| #82638 | keep_independent | planned | independent | Independent agents provider-discovery PR. |
| #85643 | keep_independent | planned | independent | Independent broad session/model PR requiring maintainer technical review. |
| #87694 | keep_independent | planned | independent | Independent auth/provider behavior PR with author-followup signal. |
| #88686 | keep_independent | planned | independent | Independent WebChat history replay PR. |
| #89469 | keep_independent | planned | independent | Independent subagent model-inheritance feature PR. |
| #91237 | route_security | planned | security_sensitive | Security-sensitive per deterministic validation; route only this PR to central OpenClaw security handling with no ProjectClownfish mutation. |
| #91240 | route_security | planned | security_sensitive | Security-sensitive per deterministic validation; route only this PR to central OpenClaw security handling with no ProjectClownfish mutation. |
| #91257 | keep_independent | planned | independent | Independent runtime import/performance PR. |

## Needs Human

- none
