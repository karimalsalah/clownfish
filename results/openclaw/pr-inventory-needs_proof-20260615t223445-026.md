---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-026"
mode: "plan"
run_id: "27580942551-1-27"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "needs_human"
published_at: "2026-06-16T19:01:33.222Z"
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
needs_human_count: 13
---

# pr-inventory-needs_proof-20260615T223445-026

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: needs_human

Canonical: unknown

## Summary

Plan-only PR inventory shard. Hydrated evidence shows 11 listed PRs are already closed, 2 listed PRs are still open but need maintainer/CI proof before any action beyond classification, and 12 listed refs could not be hydrated because the GitHub installation rate limit was exceeded. No GitHub mutations are planned.

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
| Needs human | 13 |

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
| #59221 | keep_closed | skipped |  | Already closed in hydrated live state. |
| #92999 | keep_independent | planned | independent | Independent open PR with plausible proof, but this inventory shard has no canonical and cannot merge or fix. |
| #64805 | keep_closed | skipped |  | Already closed in hydrated live state. |
| #54647 | keep_closed | skipped |  | Already closed in hydrated live state. |
| #56190 | keep_closed | skipped |  | Already closed in hydrated live state. |
| #56741 | keep_closed | skipped |  | Already closed in hydrated live state. |
| #60990 | keep_closed | skipped |  | Already closed in hydrated live state. |
| #61112 | keep_closed | skipped |  | Already closed in hydrated live state. |
| #61183 | keep_closed | skipped |  | Already closed in hydrated live state. |
| #67727 | keep_closed | skipped |  | Already closed in hydrated live state. |
| #89807 | keep_closed | skipped |  | Already closed in hydrated live state. |
| #76495 | keep_independent | planned | independent | Independent open PR requiring normal maintainer/CI proof outside this plan-only shard. |
| #93024 | needs_human | blocked | needs_human | Live state unavailable; cannot safely classify or plan mutation. |
| #65398 | needs_human | blocked | needs_human | Live state unavailable; cannot safely classify or plan mutation. |
| #86554 | needs_human | blocked | needs_human | Live state unavailable; cannot safely classify or plan mutation. |
| #92962 | needs_human | blocked | needs_human | Live state unavailable; cannot safely classify or plan mutation. |
| #92983 | needs_human | blocked | needs_human | Live state unavailable; cannot safely classify or plan mutation. |
| #92989 | needs_human | blocked | needs_human | Live state unavailable; cannot safely classify or plan mutation. |
| #93028 | needs_human | blocked | needs_human | Live state unavailable; cannot safely classify or plan mutation. |
| #60383 | needs_human | blocked | needs_human | Live state unavailable; cannot safely classify or plan mutation. |
| #70348 | needs_human | blocked | needs_human | Live state unavailable; cannot safely classify or plan mutation. |
| #93045 | needs_human | blocked | needs_human | Live state unavailable; cannot safely classify or plan mutation. |
| #77653 | needs_human | blocked | needs_human | Live state unavailable; cannot safely classify or plan mutation. |
| #54830 | needs_human | blocked | needs_human | Live state unavailable; cannot safely classify or plan mutation. |
| #92889 | needs_human | blocked | needs_human | Live state unavailable; cannot safely classify or plan mutation. |

## Needs Human

- #54830 live state unavailable from preflight artifact because GitHub installation rate limit was exceeded.
- #60383 live state unavailable from preflight artifact because GitHub installation rate limit was exceeded.
- #65398 live state unavailable from preflight artifact because GitHub installation rate limit was exceeded.
- #70348 live state unavailable from preflight artifact because GitHub installation rate limit was exceeded.
- #77653 live state unavailable from preflight artifact because GitHub installation rate limit was exceeded.
- #86554 live state unavailable from preflight artifact because GitHub installation rate limit was exceeded.
- #92889 live state unavailable from preflight artifact because GitHub installation rate limit was exceeded.
- #92962 live state unavailable from preflight artifact because GitHub installation rate limit was exceeded.
- #92983 live state unavailable from preflight artifact because GitHub installation rate limit was exceeded.
- #92989 live state unavailable from preflight artifact because GitHub installation rate limit was exceeded.
- #93024 live state unavailable from preflight artifact because GitHub installation rate limit was exceeded.
- #93028 live state unavailable from preflight artifact because GitHub installation rate limit was exceeded.
- #93045 live state unavailable from preflight artifact because GitHub installation rate limit was exceeded.
