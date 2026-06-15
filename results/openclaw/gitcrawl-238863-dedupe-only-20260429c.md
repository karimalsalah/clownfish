---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238863-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104028983"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104028983"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.398Z"
canonical: "https://github.com/openclaw/openclaw/pull/73972"
canonical_issue: "https://github.com/openclaw/openclaw/issues/38806"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73972"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238863-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104028983](https://github.com/openclaw/clownfish/actions/runs/25104028983)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73972

## Summary

Canonical path is open PR #73972, the hydrated replacement for closed source PR #38808 and the active fix path for #38806. No merge or fix PR is planned because this job blocks merge/fix/raise_pr; #74001 is routed to security because its hydrated Aisle comment contains a security-shaped finding; #66631 is related Feishu topic-thread work but out of scope.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

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
| #73972 | keep_canonical | planned | canonical | Best live canonical PR for this cluster; keep open for the guarded merge path outside this dedupe-only job. |
| #38808 | keep_closed | skipped | superseded | Already closed refs must not receive close actions; #73972 is the explicit replacement path. |
| #74001 | route_security | planned | security_sensitive | Security-shaped bot finding requires central OpenClaw security triage for this exact PR before ordinary dedupe closure. |
| #38806 | keep_related | planned | fixed_by_candidate | Keep the issue open until the canonical fix PR lands; no post-merge close action is allowed in this job. |
| #66631 | keep_related | planned | related | Same Feishu reply area, but different root cause and scope; keep as related follow-up work. |

## Needs Human

- none
