---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-043"
mode: "plan"
run_id: "27583352715"
workflow_run_id: "27583352715"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583352715"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T23:55:41.479Z"
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

# pr-inventory-needs_proof-20260615T223445-043

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583352715](https://github.com/openclaw/clownfish/actions/runs/27583352715)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Plan-only PR inventory shard. No shared canonical was selected. Six PRs had hydrated live state and were classified conservatively; nineteen candidate refs could not be classified because the preflight artifact hit GitHub rate limits and lacks live kind/state/updated_at.

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
| #72267 | keep_independent | planned | independent | Independent open PR with no duplicate/superseding canonical in this shard; proof and update gates block any merge-style recommendation. |
| #72495 | keep_independent | planned | independent | Independent open PR with plausible useful code, no hydrated duplicate target, and failing proof gate; not safe to close or merge in plan mode. |
| #72843 | keep_independent | planned | independent | Independent open bug-fix PR with user confirmation but failing proof/check gates; no closure or merge action is justified. |
| #73122 | needs_human | blocked | needs_human | Maintainer review/consolidation decision is explicitly outstanding, and the referenced related PR #72590 is not hydrated. |
| #73171 | keep_independent | planned | independent | Independent open PR with unresolved review-bot concern and failing checks; not a closure or merge candidate. |
| #73311 | keep_independent | planned | independent | Independent open UI feature PR with unresolved review/proof evidence; keep it out of dedupe closeout. |
| #73355 | needs_human | blocked | needs_human | Cannot classify or plan any mutation without hydrated kind, state, and updated_at. |
| #73746 | needs_human | blocked | needs_human | Cannot classify or plan any mutation without hydrated kind, state, and updated_at. |
| #73897 | needs_human | blocked | needs_human | Cannot classify or plan any mutation without hydrated kind, state, and updated_at. |
| #74083 | needs_human | blocked | needs_human | Cannot classify or plan any mutation without hydrated kind, state, and updated_at. |
| #74274 | needs_human | blocked | needs_human | Cannot classify or plan any mutation without hydrated kind, state, and updated_at. |
| #87968 | needs_human | blocked | needs_human | Cannot classify or plan any mutation without hydrated kind, state, and updated_at. |
| #74734 | needs_human | blocked | needs_human | Cannot classify or plan any mutation without hydrated kind, state, and updated_at. |
| #74783 | needs_human | blocked | needs_human | Cannot classify or plan any mutation without hydrated kind, state, and updated_at. |
| #74974 | needs_human | blocked | needs_human | Cannot classify or plan any mutation without hydrated kind, state, and updated_at. |
| #75009 | needs_human | blocked | needs_human | Cannot classify or plan any mutation without hydrated kind, state, and updated_at. |
| #75050 | needs_human | blocked | needs_human | Cannot classify or plan any mutation without hydrated kind, state, and updated_at. |
| #75254 | needs_human | blocked | needs_human | Cannot classify or plan any mutation without hydrated kind, state, and updated_at. |
| #75466 | needs_human | blocked | needs_human | Cannot classify or plan any mutation without hydrated kind, state, and updated_at. |
| #75545 | needs_human | blocked | needs_human | Cannot classify or plan any mutation without hydrated kind, state, and updated_at. |
| #75777 | needs_human | blocked | needs_human | Cannot classify or plan any mutation without hydrated kind, state, and updated_at. |
| #82085 | needs_human | blocked | needs_human | Cannot classify or plan any mutation without hydrated kind, state, and updated_at. |
| #83015 | needs_human | blocked | needs_human | Cannot classify or plan any mutation without hydrated kind, state, and updated_at. |
| #83235 | needs_human | blocked | needs_human | Cannot classify or plan any mutation without hydrated kind, state, and updated_at. |
| #92782 | needs_human | blocked | needs_human | Cannot classify or plan any mutation without hydrated kind, state, and updated_at. |

## Needs Human

- #73122 needs maintainer review/consolidation judgment; referenced #72590 is not hydrated.
- #73355 live state unavailable from preflight artifact due GitHub API rate limit.
- #73746 live state unavailable from preflight artifact due GitHub API rate limit.
- #73897 live state unavailable from preflight artifact due GitHub API rate limit.
- #74083 live state unavailable from preflight artifact due GitHub API rate limit.
- #74274 live state unavailable from preflight artifact due GitHub API rate limit.
- #87968 live state unavailable from preflight artifact due GitHub API rate limit.
- #74734 live state unavailable from preflight artifact due GitHub API rate limit.
- #74783 live state unavailable from preflight artifact due GitHub API rate limit.
- #74974 live state unavailable from preflight artifact due GitHub API rate limit.
- #75009 live state unavailable from preflight artifact due GitHub API rate limit.
- #75050 live state unavailable from preflight artifact due GitHub API rate limit.
- #75254 live state unavailable from preflight artifact due GitHub API rate limit.
- #75466 live state unavailable from preflight artifact due GitHub API rate limit.
- #75545 live state unavailable from preflight artifact due GitHub API rate limit.
- #75777 live state unavailable from preflight artifact due GitHub API rate limit.
- #82085 live state unavailable from preflight artifact due GitHub API rate limit.
- #83015 live state unavailable from preflight artifact due GitHub API rate limit.
- #83235 live state unavailable from preflight artifact due GitHub API rate limit.
- #92782 live state unavailable from preflight artifact due GitHub API rate limit.
