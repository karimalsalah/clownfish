---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-recent_active-20260615T223445-097"
mode: "plan"
run_id: "27583354081"
workflow_run_id: "27583354081"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583354081"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:55:41.609Z"
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

# pr-inventory-recent_active-20260615T223445-097

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583354081](https://github.com/openclaw/clownfish/actions/runs/27583354081)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was selected because the job is explicitly an independent PR inventory shard. Security-sensitive hydrated PRs are routed to central security handling; already-closed PRs are kept closed; hydrated open non-security PRs require maintainer or author/review resolution before any merge/close decision; rate-limited candidates need fresh hydration before classification.

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
| #88898 | needs_human | planned | needs_human | Maintainer/reviewer decision is needed before any merge or close path because proof/review status is unresolved. |
| #91776 | keep_closed | skipped |  | Already closed in live preflight state. |
| #91768 | keep_closed | skipped |  | Already closed in live preflight state. |
| #92430 | keep_closed | skipped |  | Already closed in live preflight state. |
| #92440 | keep_closed | skipped |  | Already closed in live preflight state. |
| #92156 | keep_closed | skipped |  | Already closed in live preflight state. |
| #92570 | keep_closed | skipped |  | Already closed in live preflight state. |
| #88845 | route_security | planned | security_sensitive | Security-sensitive release/distribution and dependency-graph work is out of scope for Clownfish backlog cleanup. |
| #92860 | route_security | planned | security_sensitive | Security-boundary/provenance trust surface should be routed to central OpenClaw security handling. |
| #92953 | needs_human | planned | needs_human | Maintainers need to choose the canonical landing path among competing fix PRs before merge or closeout decisions. |
| #78031 | needs_human | planned | needs_human | Active author follow-up and template behavior/product wording need maintainer judgment. |
| #76082 | needs_human | planned | needs_human | The proposed workspace capability convention and active maintainer-review thread require maintainer judgment. |
| #93034 | needs_human | planned | needs_human | Fresh hydration is required before classification or any mutation can be planned. |
| #77629 | needs_human | planned | needs_human | Fresh hydration is required before classification or any mutation can be planned. |
| #79846 | needs_human | planned | needs_human | Fresh hydration is required before classification or any mutation can be planned. |
| #90841 | needs_human | planned | needs_human | Fresh hydration is required before classification or any mutation can be planned. |
| #80924 | needs_human | planned | needs_human | Fresh hydration is required before classification or any mutation can be planned. |
| #81305 | needs_human | planned | needs_human | Fresh hydration is required before classification or any mutation can be planned. |
| #84560 | needs_human | planned | needs_human | Fresh hydration is required before classification or any mutation can be planned. |
| #87932 | needs_human | planned | needs_human | Fresh hydration is required before classification or any mutation can be planned. |
| #73923 | needs_human | planned | needs_human | Fresh hydration is required before classification or any mutation can be planned. |
| #87247 | needs_human | planned | needs_human | Fresh hydration is required before classification or any mutation can be planned. |
| #89409 | needs_human | planned | needs_human | Fresh hydration is required before classification or any mutation can be planned. |
| #73989 | needs_human | planned | needs_human | Fresh hydration is required before classification or any mutation can be planned. |
| #79141 | needs_human | planned | needs_human | Fresh hydration is required before classification or any mutation can be planned. |

## Needs Human

- #88898: unresolved proof/review status before any merge or close decision.
- #92953: maintainer must choose among competing GBK read-tool fix PRs before a canonical landing path is declared.
- #78031: active author/review follow-up and template wording/product concerns need maintainer judgment.
- #76082: proposed workspace capability convention and active maintainer-review thread need maintainer judgment.
- #93034: live preflight state unavailable due to GitHub API rate limit.
- #77629: live preflight state unavailable due to GitHub API rate limit.
- #79846: live preflight state unavailable due to GitHub API rate limit.
- #90841: live preflight state unavailable due to GitHub API rate limit.
- #80924: live preflight state unavailable due to GitHub API rate limit.
- #81305: live preflight state unavailable due to GitHub API rate limit.
- #84560: live preflight state unavailable due to GitHub API rate limit.
- #87932: live preflight state unavailable due to GitHub API rate limit.
- #73923: live preflight state unavailable due to GitHub API rate limit.
- #87247: live preflight state unavailable due to GitHub API rate limit.
- #89409: live preflight state unavailable due to GitHub API rate limit.
- #73989: live preflight state unavailable due to GitHub API rate limit.
- #79141: live preflight state unavailable due to GitHub API rate limit.
