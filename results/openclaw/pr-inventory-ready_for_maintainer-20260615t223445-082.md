---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-082"
mode: "plan"
run_id: "27580942551-1-82"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.469Z"
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
needs_human_count: 5
---

# pr-inventory-ready_for_maintainer-20260615T223445-082

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification shard. No shared canonical was selected. Open hydrated non-security PRs are kept as independent maintainer-review items; already merged/closed PRs are recorded as closed; the security-sensitive Feishu webhook-path PR is routed to central security handling; refs missing hydrated live state are escalated only for that missing-state decision.

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
| Needs human | 5 |

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
| #90968 | keep_independent | planned | independent | Independent contributor PR requiring maintainer review; not closable or mergeable in this plan job. |
| #92125 | keep_independent | planned | independent | Independent dependency update; job does not allow merge. |
| #93007 | needs_human | blocked | needs_human | Missing hydrated live state for a listed candidate. |
| #91691 | keep_closed | skipped | fixed_by_candidate | Already merged/closed before this plan. |
| #88988 | keep_independent | planned | independent | Independent feature PR awaiting maintainer review. |
| #78395 | keep_independent | planned | independent | Independent bug-fix PR; not a duplicate or close candidate. |
| #91685 | keep_independent | planned | independent | Potential maintainer-review candidate, but merge cannot be planned in this job. |
| #87504 | keep_independent | planned | independent | Independent bug-fix PR awaiting maintainer review. |
| #89101 | keep_independent | planned | independent | Independent session-state PR; not closable in this inventory classification. |
| #89287 | keep_independent | planned | independent | Independent high-risk PR; keep for maintainer review. |
| #92341 | needs_human | blocked | needs_human | Missing hydrated live state for a listed candidate. |
| #93239 | needs_human | blocked | needs_human | Missing hydrated live state for a listed candidate. |
| #53920 | keep_independent | planned | independent | Independent infrastructure script PR; not a duplicate or low-signal close candidate. |
| #54904 | route_security | planned | security_sensitive | Security-sensitive webhook handling item is out of scope for ProjectClownfish backlog automation and must be routed to central OpenClaw security handling. |
| #89172 | keep_independent | planned | independent | Independent channel bug-fix PR awaiting maintainer review. |
| #89442 | keep_independent | planned | independent | Independent availability bug-fix PR; merge blocked by job frontmatter. |
| #89482 | keep_independent | planned | independent | Independent PR but blocked from merge/fixed-by closeout by failing proof and waiting-on-author signal. |
| #89576 | keep_independent | planned | independent | Independent PR with failing proof; keep for maintainer/author follow-up. |
| #92863 | needs_human | blocked | needs_human | Missing hydrated live state for a listed candidate. |
| #89584 | keep_independent | planned | independent | Independent broad feature PR awaiting maintainer decision. |
| #89604 | keep_independent | planned | independent | Independent CLI/gateway bug-fix PR awaiting maintainer review. |
| #89612 | keep_independent | planned | independent | Independent small bug-fix PR awaiting maintainer review. |
| #89621 | keep_closed | skipped | fixed_by_candidate | Already merged/closed before this plan. |
| #93245 | needs_human | blocked | needs_human | Missing hydrated live state for a listed candidate. |
| #89714 | keep_independent | planned | independent | Independent UI bug-fix PR awaiting maintainer review. |

## Needs Human

- #93007 missing hydrated live state in compacted preflight artifact.
- #92341 missing hydrated live state in compacted preflight artifact.
- #93239 missing hydrated live state in compacted preflight artifact.
- #92863 missing hydrated live state in compacted preflight artifact.
- #93245 missing hydrated live state in compacted preflight artifact.
