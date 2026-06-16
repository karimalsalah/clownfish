---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-maintainer_owned-20260615T223445-003"
mode: "plan"
run_id: "27580942551-1-2"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "needs_human"
published_at: "2026-06-16T19:01:33.187Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 24
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 6
---

# pr-inventory-maintainer_owned-20260615T223445-003

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: needs_human

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. No shared canonical was selected because the job says this is not a dedupe cluster. Hydrated open non-security PRs are kept independently for maintainer review; #72610 is routed to central security handling because its hydrated labels include security-boundary/auth-provider merge risk. Refs with unavailable live state are scoped needs_human due GitHub rate-limit hydration failure.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 24 |
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
| #89912 | keep_independent | planned | independent |  |
| #89924 | keep_independent | planned | independent |  |
| #89940 | keep_independent | planned | independent |  |
| #89945 | keep_independent | planned | independent |  |
| #89946 | keep_independent | planned | independent |  |
| #89948 | keep_independent | planned | independent |  |
| #89963 | keep_independent | planned | independent |  |
| #85481 | keep_independent | planned | independent |  |
| #16544 | keep_independent | planned | independent |  |
| #72610 | route_security | planned | security_sensitive | Security-boundary/auth-provider risk labels require central security routing; no ProjectClownfish close, merge, label, comment, or fix action is safe for this target. |
| #84335 | keep_independent | planned | independent |  |
| #78054 | keep_independent | planned | independent |  |
| #78099 | keep_independent | planned | independent |  |
| #78388 | keep_independent | planned | independent |  |
| #78511 | keep_independent | planned | independent |  |
| #78536 | keep_independent | planned | independent |  |
| #64436 | keep_independent | planned | independent |  |
| #77774 | keep_independent | planned | independent |  |
| #89857 | needs_human | blocked | needs_human | Live GitHub state unavailable from the artifact; rehydrate this ref before classification or mutation planning. |
| #89923 | needs_human | blocked | needs_human | Live GitHub state unavailable from the artifact; rehydrate this ref before classification or mutation planning. |
| #89936 | needs_human | blocked | needs_human | Live GitHub state unavailable from the artifact; rehydrate this ref before classification or mutation planning. |
| #28081 | needs_human | blocked | needs_human | Live GitHub state unavailable from the artifact; rehydrate this ref before classification or mutation planning. |
| #90102 | needs_human | blocked | needs_human | Live GitHub state unavailable from the artifact; rehydrate this ref before classification or mutation planning. |
| #90105 | needs_human | blocked | needs_human | Live GitHub state unavailable from the artifact; rehydrate this ref before classification or mutation planning. |

## Needs Human

- #89857: live state unavailable due GitHub installation API rate limit; rehydrate before classification.
- #89923: live state unavailable due GitHub installation API rate limit; rehydrate before classification.
- #89936: live state unavailable due GitHub installation API rate limit; rehydrate before classification.
- #28081: live state unavailable due GitHub installation API rate limit; rehydrate before classification.
- #90102: live state unavailable due GitHub installation API rate limit; rehydrate before classification.
- #90105: live state unavailable due GitHub installation API rate limit; rehydrate before classification.
