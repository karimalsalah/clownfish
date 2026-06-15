---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-046"
mode: "plan"
run_id: "27583352929"
workflow_run_id: "27583352929"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583352929"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T23:55:41.495Z"
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

# pr-inventory-needs_proof-20260615T223445-046

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583352929](https://github.com/openclaw/clownfish/actions/runs/27583352929)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Plan-only PR inventory classification. Hydrated open PRs with live state were kept independent or escalated for the specific unresolved review decision; the already-closed PR was kept closed. Most listed refs were not safely classifiable because the preflight artifact hit GitHub API rate limits and has no live kind/state/updated_at.

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
| #89768 | keep_closed | skipped | fixed_by_candidate | Already closed in live preflight state; no mutation is valid. |
| #89772 | keep_independent | planned | independent | Standalone open PR with proof/check gaps; no close or merge action is allowed or justified. |
| #89645 | keep_independent | planned | independent | Standalone open PR with failed proof/checks; no closure, merge, or fix action is allowed. |
| #93241 | keep_independent | planned | independent | Narrow standalone provider behavior PR; keep open for maintainer review rather than close or merge. |
| #93244 | needs_human | blocked | needs_human | Specific maintainer technical correctness judgment is needed for the broad compatibility-impacting behavior change. |
| #91315 | keep_independent | planned | independent | Standalone open PR with no dedupe target; keep open for normal proof/review path. |
| #91479 | needs_human | blocked | needs_human | Live state unavailable from the authoritative artifact. |
| #55018 | needs_human | blocked | needs_human | Live state unavailable from the authoritative artifact. |
| #55211 | needs_human | blocked | needs_human | Live state unavailable from the authoritative artifact. |
| #55487 | needs_human | blocked | needs_human | Live state unavailable from the authoritative artifact. |
| #55644 | needs_human | blocked | needs_human | Live state unavailable from the authoritative artifact. |
| #55766 | needs_human | blocked | needs_human | Live state unavailable from the authoritative artifact. |
| #55789 | needs_human | blocked | needs_human | Live state unavailable from the authoritative artifact. |
| #56258 | needs_human | blocked | needs_human | Live state unavailable from the authoritative artifact. |
| #56861 | needs_human | blocked | needs_human | Live state unavailable from the authoritative artifact. |
| #57597 | needs_human | blocked | needs_human | Live state unavailable from the authoritative artifact. |
| #58051 | needs_human | blocked | needs_human | Live state unavailable from the authoritative artifact. |
| #58482 | needs_human | blocked | needs_human | Live state unavailable from the authoritative artifact. |
| #59013 | needs_human | blocked | needs_human | Live state unavailable from the authoritative artifact. |
| #68590 | needs_human | blocked | needs_human | Live state unavailable from the authoritative artifact. |
| #71887 | needs_human | blocked | needs_human | Live state unavailable from the authoritative artifact. |
| #72535 | needs_human | blocked | needs_human | Live state unavailable from the authoritative artifact. |
| #72749 | needs_human | blocked | needs_human | Live state unavailable from the authoritative artifact. |
| #75011 | needs_human | blocked | needs_human | Live state unavailable from the authoritative artifact. |
| #75024 | needs_human | blocked | needs_human | Live state unavailable from the authoritative artifact. |

## Needs Human

- #93244: maintainer technical correctness judgment needed for broad lightweight reply lane/Codex watchdog compatibility issue flagged by ClawSweeper.
- #91479: live state unavailable from preflight artifact due GitHub API rate limit.
- #55018: live state unavailable from preflight artifact due GitHub API rate limit.
- #55211: live state unavailable from preflight artifact due GitHub API rate limit.
- #55487: live state unavailable from preflight artifact due GitHub API rate limit.
- #55644: live state unavailable from preflight artifact due GitHub API rate limit.
- #55766: live state unavailable from preflight artifact due GitHub API rate limit.
- #55789: live state unavailable from preflight artifact due GitHub API rate limit.
- #56258: live state unavailable from preflight artifact due GitHub API rate limit.
- #56861: live state unavailable from preflight artifact due GitHub API rate limit.
- #57597: live state unavailable from preflight artifact due GitHub API rate limit.
- #58051: live state unavailable from preflight artifact due GitHub API rate limit.
- #58482: live state unavailable from preflight artifact due GitHub API rate limit.
- #59013: live state unavailable from preflight artifact due GitHub API rate limit.
- #68590: live state unavailable from preflight artifact due GitHub API rate limit.
- #71887: live state unavailable from preflight artifact due GitHub API rate limit.
- #72535: live state unavailable from preflight artifact due GitHub API rate limit.
- #72749: live state unavailable from preflight artifact due GitHub API rate limit.
- #75011: live state unavailable from preflight artifact due GitHub API rate limit.
- #75024: live state unavailable from preflight artifact due GitHub API rate limit.
