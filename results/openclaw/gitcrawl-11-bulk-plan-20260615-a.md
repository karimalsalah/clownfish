---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-11-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520782570"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520782570"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:56:52.477Z"
canonical: "#89105"
canonical_issue: null
canonical_pr: "#89105"
actions_total: 40
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 4
---

# gitcrawl-11-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520782570](https://github.com/openclaw/clownfish/actions/runs/27520782570)

Workflow conclusion: success

Worker result: planned

Canonical: #89105

## Summary

Plan-only classification for 40 job-listed refs. #89105 remains the open canonical for the low-level agent-core/llm-core tool-call validation lookup slice. The cluster also contains related but distinct local-model lean/tool-surface work, adjacent descriptor/schema hardening PRs, two already-closed candidates, and security-signal refs routed out of ProjectClownfish scope.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 40 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 4 |

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
| #86632 | keep_related | planned | related | Related local-model/tool exposure issue, not a duplicate of the #89105 validation lookup slice. |
| #87587 | keep_related | planned | related | Useful but separate local-model behavior mitigation; not safe to close or merge in this cluster. |
| #87617 | keep_related | planned | related | Related local-model lean profile work with distinct product surface. |
| #87850 | keep_related | planned | related | Related local-model tool construction mitigation, separate from canonical validation lookup. |
| #87955 | keep_related | planned | related | Related but distinct catalog-control behavior; not a duplicate of #89105. |
| #88181 | keep_related | planned | related | Related local-model feature/config work with unique scope. |
| #88212 | needs_human | planned | needs_human | Specific maintainer decision needed on the broad auto-trim design and unresolved review comments. |
| #88789 | keep_related | planned | related | Related auto-trim work, distinct from #89105 and not safe for closure. |
| #88881 | keep_related | planned | related | Related lean tool-surface change with unique media-tool scope. |
| #88884 | keep_related | planned | related | Related but independent web-tool lean-mode scope. |
| #88931 | keep_related | planned | related | Related Tool Search tuning, separate from validation lookup hardening. |
| #89061 | keep_related | planned | related | Overlapping validation-hardening slice, but useful code and failed review make non-mutating related classification safer than superseding closure. |
| #89071 | keep_related | planned | related | Adjacent tool-policy hardening with distinct files and root path. |
| #89079 | keep_related | planned | related | Related runtime allowlist hardening with unresolved review issues. |
| #89081 | keep_related | planned | related | Adjacent embedded construction-plan hardening, distinct from canonical validation lookup. |
| #89105 | keep_canonical | planned | canonical | Best surviving canonical for the narrow low-level tool-call validation lookup root cause. |
| #89132 | keep_related | planned | related | Related overlapping slice; not closable without maintainer deciding split/fold strategy. |
| #89136 | keep_related | planned | related | Related harness hardening with distinct internal harness surface. |
| #89171 | needs_human | planned | needs_human | Specific maintainer judgment is required on fail-closed versus skip-invalid semantics. |
| #89213 | keep_related | planned | related | Related CLI prompt-tool descriptor hardening with distinct runtime path. |
| #89286 | keep_related | planned | related | Related CLI prompt-tool hardening with unique helper/prepare coverage. |
| #89327 | keep_related | planned | related | Related session tool-definition mirroring hardening with distinct surface. |
| #89340 | keep_related | planned | related | Related embedded bootstrap hardening, not duplicate of #89105. |
| #89346 | keep_related | planned | related | Related compact/reserved-name hardening with distinct setup path. |
| #89529 | needs_human | planned | needs_human | Specific review/repro gap requires maintainer or fresh review decision. |
| #89543 | keep_closed | skipped | related | Already closed in live artifact. |
| #89571 | keep_related | planned | related | Related provider schema hook hardening with distinct public plugin SDK surface. |
| #89583 | keep_related | planned | related | Related llm-core schema-validation slice; keep open for maintainer landing decision. |
| #89587 | keep_related | planned | related | Related plugin config-schema hardening with distinct plugin validation surface. |
| #89634 | needs_human | planned | needs_human | Specific maintainer decision needed on competing llm-core schema-validation branches and guard-budget semantics. |
| #89665 | keep_related | planned | related | Related provider schema-walk hardening with unresolved review/coordination risk. |
| #89725 | keep_related | planned | related | Related Code Mode catalog hardening; not merge/close ready. |
| #89726 | keep_related | planned | related | Related descriptor hardening for deferred follow-up guidance with distinct agent-tools path. |
| #89730 | keep_related | planned | related | Related local-model lean descriptor hardening with distinct surface. |
| #90061 | route_security | planned | security_sensitive | Scoped security-signal quarantine per job notes. |
| #90156 | route_security | planned | security_sensitive | Scoped security-signal quarantine per job notes. |
| #90200 | keep_closed | skipped | related | Already closed in live artifact. |
| #90232 | keep_related | planned | related | Related provider SDK schema helper hardening with distinct public helper surface. |
| #90256 | route_security | planned | security_sensitive | Security-sensitive ref must be routed to central OpenClaw security handling. |
| #91291 | keep_related | planned | related | Related broad plugin-tool schema stabilization, should remain separate. |

## Needs Human

- #88212: maintainer decision on broad localModelLean auto design and unresolved Copilot findings.
- #89171: maintainer decision on AgentHarness fail-closed versus skip-invalid policy.
- #89529: review/repro gap after failed ClawSweeper review.
- #89634: maintainer decision on competing llm-core schema-validation branches and guard-budget semantics.
