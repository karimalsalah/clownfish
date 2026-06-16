---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14077-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27599299672"
workflow_run_id: "27599299672"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599299672"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:46:59.504Z"
canonical: "https://github.com/openclaw/openclaw/issues/63030"
canonical_issue: "https://github.com/openclaw/openclaw/issues/63030"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14077-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599299672](https://github.com/openclaw/clownfish/actions/runs/27599299672)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/63030

## Summary

Hydrated preflight shows the two open candidates from the original job are no longer open: #63030 was closed on 2026-06-12 and #64217 was closed on 2026-06-13. No close/comment/label action is safe or needed for #63030. #64217 remains security-sensitive in the hydrated artifact, so the only planned action is scoped security routing for that exact ref.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #63030 | keep_closed | skipped | canonical | Already-closed refs must not receive close actions; no open non-security candidate remains for this canonical lane. |
| #64217 | route_security | planned | security_sensitive | Route the exact security-sensitive item to central OpenClaw security handling; do not close, comment on, label, merge, or fix it through Clownfish. |

## Needs Human

- none
