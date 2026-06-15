---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238861-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104026573"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104026573"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.397Z"
canonical: "https://github.com/openclaw/openclaw/pull/73228"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73228"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238861-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104026573](https://github.com/openclaw/clownfish/actions/runs/25104026573)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73228

## Summary

Hydrated state shows the original security report #24693 and source PR #68667 are already closed, and the replacement PR #73228 is merged on current main. The only open cluster item, draft PR #39046, overlaps the landed #73228 fix and can be closed as superseded with credit preserved.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #39046 | close_superseded | blocked | superseded | canonical is not listed in job refs |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #24693 | route_security | planned | security_sensitive | Security-sensitive item must be routed to central OpenClaw security handling; keep processing unrelated non-security PR cleanup. |
| #39046 | close_superseded | planned | superseded | The open draft PR is fully overlapped by hydrated, merged PR #73228; keeping both open would duplicate the same hook event-routing fix path. |
| #68667 | keep_closed | skipped | superseded | Historical source PR is already closed and superseded by merged replacement #73228. |
| #73228 | keep_closed | skipped | canonical | Canonical fix path is already merged and closed; no merge or post-merge action is allowed or needed in this job. |

## Needs Human

- none
