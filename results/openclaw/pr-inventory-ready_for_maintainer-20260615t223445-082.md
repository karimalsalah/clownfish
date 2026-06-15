---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-082"
mode: "plan"
run_id: "27583277888"
workflow_run_id: "27583277888"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583277888"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:55:41.015Z"
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
needs_human_count: 16
---

# pr-inventory-ready_for_maintainer-20260615T223445-082

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583277888](https://github.com/openclaw/clownfish/actions/runs/27583277888)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was selected because the job explicitly says this is not a dedupe cluster. No GitHub mutations, merge recommendations, or fix PRs are planned because mode is plan and merge/fix/raise_pr are blocked.

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
| Needs human | 16 |

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
| #90968 | keep_independent | planned | independent | Open PR needs its own author/maintainer path; not safe for closure or merge planning in this shard. |
| #92125 | needs_human | planned | needs_human | Maintainer dependency review is required; no automated close or merge action is appropriate. |
| #93007 | keep_independent | planned | independent | Broad feature PR with unresolved review work; keep it out of dedupe/close automation. |
| #91691 | keep_closed | skipped | superseded | Already closed in live preflight state. |
| #88988 | needs_human | planned | needs_human | Requires maintainer product/UX and implementation review; no dedupe closure is clear. |
| #78395 | needs_human | planned | needs_human | Ready-for-maintainer technical correctness decision; merge is not allowed in this job. |
| #91685 | needs_human | planned | needs_human | High-impact cron/message-delivery change requires maintainer review; no close action applies. |
| #87504 | needs_human | planned | needs_human | Maintainer review is needed to decide whether this PR should carry the linked bug fix. |
| #89101 | needs_human | planned | needs_human | Requires maintainer technical review; no safe automated close or merge action. |
| #89287 | needs_human | planned | needs_human | Large message-delivery correctness change needs maintainer review; merge planning is blocked. |
| #92341 | keep_independent | planned | independent | Not a duplicate or close candidate; keep it on its independent author/review path. |
| #93239 | needs_human | planned | needs_human | Maintainer should decide whether to merge the docs-only entry; low-signal closure is not allowed here. |
| #53920 | needs_human | planned | needs_human | Ready for maintainer review; no merge action is allowed in plan mode. |
| #54904 | route_security | planned | security_sensitive | Security-shaped webhook boundary claim should be routed to central OpenClaw security handling, without blocking unrelated PR classifications. |
| #89172 | needs_human | planned | needs_human | Maintainer review needed for channel behavior change; no close or merge action applies. |
| #89442 | needs_human | planned | needs_human | Availability-sensitive Codex extension fix needs maintainer technical review; no automated mutation is planned. |
| #89482 | keep_independent | planned | independent | Not ready for maintainer close/merge automation; keep it on independent author follow-up path. |
| #89576 | keep_independent | planned | independent | Proof failure blocks ready-for-maintainer action; no duplicate/superseded closure is established. |
| #92863 | needs_human | planned | needs_human | Docs accuracy/wording decision remains for maintainers; merge is blocked by job frontmatter. |
| #89584 | needs_human | planned | needs_human | Broad feature and memory-search behavior change requires maintainer product/technical judgment. |
| #89604 | needs_human | planned | needs_human | Gateway restart/message-delivery behavior needs maintainer review; no merge is allowed in this job. |
| #89612 | needs_human | planned | needs_human | Requires maintainer review of migration/plugin-contract behavior. |
| #89621 | keep_closed | skipped | superseded | Already closed in live preflight state. |
| #93245 | keep_closed | skipped | superseded | Already closed in live preflight state. |
| #89714 | needs_human | planned | needs_human | Maintainer UI/behavior review is required; no automated close/merge action is available. |

## Needs Human

- #92125 dependency bump needs maintainer review before any merge decision.
- #88988 status footer feature needs maintainer product/UX review.
- #78395 model alias fallback behavior needs maintainer technical review.
- #91685 cron delivery behavior needs maintainer review.
- #87504 Skill Workshop fix needs maintainer review against linked issue #87352.
- #89101 session resumability semantics need maintainer review.
- #89287 message-delivery verification change needs maintainer review.
- #93239 low-signal-docs closeout is disabled; maintainer should decide docs merge.
- #53920 risky-infra setup-script change needs maintainer review.
- #89172 Feishu voice duration behavior needs maintainer review.
- #89442 availability-sensitive Codex extension fix needs maintainer review.
- #92863 docs accuracy needs maintainer review.
- #89584 broad memory rerank feature needs product/technical judgment.
- #89604 gateway restart behavior needs maintainer review.
- #89612 plugin migration contract behavior needs maintainer review.
- #89714 Control UI composer behavior needs maintainer review.
