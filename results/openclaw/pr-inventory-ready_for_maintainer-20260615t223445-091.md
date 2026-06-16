---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-091"
mode: "plan"
run_id: "27580942551-1-91"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.546Z"
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
needs_human_count: 17
---

# pr-inventory-ready_for_maintainer-20260615T223445-091

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification shard. No shared canonical selected; #90694 is quarantined to central security handling. No GitHub mutations, merge recommendations, close actions, labels, comments, or fix PRs planned.

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
| Needs human | 17 |

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
| #93262 | needs_human | planned | needs_human | Waiting-on-author signal and delivery/compatibility risk require maintainer review. |
| #88968 | needs_human | planned | needs_human | Relevant non-duplicate PR with failing check and high-risk behavior surface. |
| #89226 | keep_independent | planned | independent | Independent focused PR suitable for normal maintainer review. |
| #93334 | needs_human | planned | needs_human | Missing hydrated live state for this listed candidate. |
| #90275 | needs_human | planned | needs_human | Independent PR, but failed proof and unhydrated bot detail block automated close/merge classification. |
| #90367 | needs_human | planned | needs_human | Independent UI fix with failed proof gate. |
| #90610 | needs_human | planned | needs_human | Substantial independent feature PR, not a cleanup close candidate. |
| #90689 | needs_human | planned | needs_human | Open active-author PR requiring maintainer/author follow-up. |
| #91274 | needs_human | planned | needs_human | Broad independent refactor requiring maintainer product/compatibility review. |
| #91457 | keep_independent | planned | independent | Independent maintainer-review PR with passing proof/checks. |
| #93301 | needs_human | planned | needs_human | Missing hydrated live state for this listed candidate. |
| #92930 | needs_human | planned | needs_human | Independent PR with author-followup/proof ambiguity. |
| #93186 | needs_human | planned | needs_human | Independent PR blocked by merge conflict/dirty state and session-state risk. |
| #93351 | needs_human | planned | needs_human | Missing hydrated live state for this listed candidate. |
| #93356 | needs_human | planned | needs_human | Missing hydrated live state for this listed candidate. |
| #88887 | keep_independent | planned | independent | Independent focused PR ready for normal maintainer review. |
| #91728 | keep_independent | planned | independent | Independent provider PR suitable for maintainer review. |
| #91923 | keep_independent | planned | independent | Independent iOS PR with passing checks. |
| #93349 | needs_human | planned | needs_human | Missing hydrated live state for this listed candidate. |
| #90453 | needs_human | planned | needs_human | Independent PR with failing CI and availability-sensitive behavior. |
| #51762 | needs_human | planned | needs_human | Broad config/session/auth behavior plus review-bot history requires maintainer judgment. |
| #66478 | keep_independent | planned | independent | Independent Feishu PR, not a cleanup close candidate. |
| #75100 | needs_human | planned | needs_human | Broad feature PR with author-followup and delivery-risk labels. |
| #75293 | keep_independent | planned | independent | Independent automation-fix PR ready for maintainer review. |
| #90694 | route_security | planned | security_sensitive | Credential and IMDS handling is security-sensitive enough to route this exact PR to central OpenClaw security handling instead of ProjectClownfish backlog cleanup. |

## Needs Human

- #93262
- #88968
- #93334
- #90275
- #90367
- #90610
- #90689
- #91274
- #93301
- #92930
- #93186
- #93351
- #93356
- #93349
- #90453
- #51762
- #75100
