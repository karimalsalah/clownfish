---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-maintainer_owned-20260615T223445-016"
mode: "plan"
run_id: "27580942551-1-15"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "needs_human"
published_at: "2026-06-16T19:01:33.167Z"
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
needs_human_count: 20
---

# pr-inventory-maintainer_owned-20260615T223445-016

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: needs_human

Canonical: unknown

## Summary

Plan-only PR inventory classification. No GitHub mutations are planned. Six refs had usable hydrated PR state; five are kept independent and one needs maintainer judgment. Nineteen refs could not be classified because live state hydration hit GitHub installation API rate limits.

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
| Needs human | 20 |

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
| #89539 | keep_independent | planned | independent | Independent maintainer-owned draft PR with no safe close, merge, or dedupe action in plan mode. |
| #89550 | keep_independent | planned | independent | Independent draft PR with active author follow-up signal; no close or merge action is appropriate. |
| #89559 | keep_independent | planned | independent | Independent maintainer-owned draft PR with no safe close, merge, or dedupe action in plan mode. |
| #89634 | keep_independent | planned | independent | Independent maintainer-owned draft PR with no safe close, merge, or dedupe action in plan mode. |
| #89810 | keep_independent | planned | independent | Independent maintainer-owned draft PR with no safe close, merge, or dedupe action in plan mode. |
| #90708 | needs_human | blocked | needs_human | This PR contains an explicit maintainer acceptance point and proof gap, so technical correctness and product acceptance require human review. |
| #87827 | needs_human | blocked | needs_human | Live state is unavailable, so this PR cannot be safely classified or targeted for any mutation. |
| #88514 | needs_human | blocked | needs_human | Live state is unavailable, so this PR cannot be safely classified or targeted for any mutation. |
| #89571 | needs_human | blocked | needs_human | Live state is unavailable, so this PR cannot be safely classified or targeted for any mutation. |
| #89582 | needs_human | blocked | needs_human | Live state is unavailable, so this PR cannot be safely classified or targeted for any mutation. |
| #89596 | needs_human | blocked | needs_human | Live state is unavailable, so this PR cannot be safely classified or targeted for any mutation. |
| #89603 | needs_human | blocked | needs_human | Live state is unavailable, so this PR cannot be safely classified or targeted for any mutation. |
| #89733 | needs_human | blocked | needs_human | Live state is unavailable, so this PR cannot be safely classified or targeted for any mutation. |
| #89763 | needs_human | blocked | needs_human | Live state is unavailable, so this PR cannot be safely classified or targeted for any mutation. |
| #89819 | needs_human | blocked | needs_human | Live state is unavailable, so this PR cannot be safely classified or targeted for any mutation. |
| #89875 | needs_human | blocked | needs_human | Live state is unavailable, so this PR cannot be safely classified or targeted for any mutation. |
| #90723 | needs_human | blocked | needs_human | Live state is unavailable, so this PR cannot be safely classified or targeted for any mutation. |
| #91023 | needs_human | blocked | needs_human | Live state is unavailable, so this PR cannot be safely classified or targeted for any mutation. |
| #91091 | needs_human | blocked | needs_human | Live state is unavailable, so this PR cannot be safely classified or targeted for any mutation. |
| #91262 | needs_human | blocked | needs_human | Live state is unavailable, so this PR cannot be safely classified or targeted for any mutation. |
| #91291 | needs_human | blocked | needs_human | Live state is unavailable, so this PR cannot be safely classified or targeted for any mutation. |
| #91452 | needs_human | blocked | needs_human | Live state is unavailable, so this PR cannot be safely classified or targeted for any mutation. |
| #91502 | needs_human | blocked | needs_human | Live state is unavailable, so this PR cannot be safely classified or targeted for any mutation. |
| #91570 | needs_human | blocked | needs_human | Live state is unavailable, so this PR cannot be safely classified or targeted for any mutation. |
| #93306 | needs_human | blocked | needs_human | Live state is unavailable, so this PR cannot be safely classified or targeted for any mutation. |

## Needs Human

- #87827: live GitHub state unavailable from preflight due installation API rate limit; rehydrate before classification.
- #88514: live GitHub state unavailable from preflight due installation API rate limit; rehydrate before classification.
- #89571: live GitHub state unavailable from preflight due installation API rate limit; rehydrate before classification.
- #89582: live GitHub state unavailable from preflight due installation API rate limit; rehydrate before classification.
- #89596: live GitHub state unavailable from preflight due installation API rate limit; rehydrate before classification.
- #89603: live GitHub state unavailable from preflight due installation API rate limit; rehydrate before classification.
- #89733: live GitHub state unavailable from preflight due installation API rate limit; rehydrate before classification.
- #89763: live GitHub state unavailable from preflight due installation API rate limit; rehydrate before classification.
- #89819: live GitHub state unavailable from preflight due installation API rate limit; rehydrate before classification.
- #89875: live GitHub state unavailable from preflight due installation API rate limit; rehydrate before classification.
- #90708: maintainer-visible Slack timing behavior and proof gap require explicit maintainer review.
- #90723: live GitHub state unavailable from preflight due installation API rate limit; rehydrate before classification.
- #91023: live GitHub state unavailable from preflight due installation API rate limit; rehydrate before classification.
- #91091: live GitHub state unavailable from preflight due installation API rate limit; rehydrate before classification.
- #91262: live GitHub state unavailable from preflight due installation API rate limit; rehydrate before classification.
- #91291: live GitHub state unavailable from preflight due installation API rate limit; rehydrate before classification.
- #91452: live GitHub state unavailable from preflight due installation API rate limit; rehydrate before classification.
- #91502: live GitHub state unavailable from preflight due installation API rate limit; rehydrate before classification.
- #91570: live GitHub state unavailable from preflight due installation API rate limit; rehydrate before classification.
- #93306: live GitHub state unavailable from preflight due installation API rate limit; rehydrate before classification.
