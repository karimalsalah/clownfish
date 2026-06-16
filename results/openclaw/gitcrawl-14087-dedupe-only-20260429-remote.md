---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14087-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27599299628"
workflow_run_id: "27599299628"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599299628"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:46:59.502Z"
canonical: "https://github.com/openclaw/openclaw/issues/38223"
canonical_issue: "https://github.com/openclaw/openclaw/issues/38223"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14087-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599299628](https://github.com/openclaw/clownfish/actions/runs/27599299628)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/38223

## Summary

No close/comment/label mutations are planned. The hydrated live state shows the originally open candidates are now closed: #38876 is closed and security-sensitive, and #70789 is closed after merge. Closed historical refs are retained only as evidence.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #38223 | keep_closed | skipped | fixed_by_candidate | Already closed and no mutation is allowed or needed. |
| #38228 | keep_closed | skipped | superseded | Closed historical contributor PR; useful context only. |
| #38271 | keep_closed | skipped | canonical | Best historical canonical for the array-shaped tool-result content family, but closed and not a mutation target. |
| #38876 | route_security | planned | security_sensitive | Quarantine only #38876 to central OpenClaw security handling; no ProjectClownfish mutation is planned. |
| #70746 | keep_closed | skipped | fixed_by_candidate | Already closed and covered by the merged related PR #70789. |
| #70789 | keep_closed | skipped | related | Merged related fix; retained as evidence only. |

## Needs Human

- none
