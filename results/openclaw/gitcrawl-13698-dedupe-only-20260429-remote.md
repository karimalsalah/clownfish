---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13698-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27595845863"
workflow_run_id: "27595845863"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27595845863"
head_sha: "7a8b7ab269d4c8246a3837f1013f6d9715d17c5e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T05:21:58.137Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13698-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27595845863](https://github.com/openclaw/clownfish/actions/runs/27595845863)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Classified the three closed Feishu/Telegram refs as historical context only. The only open candidate, #71058, is security-sensitive for ProjectClownfish automation because the hydrated issue/review touches Teams auth-provider credentials and token isolation, so it must be quarantined to central OpenClaw security handling rather than kept as an ordinary canonical backlog item. No GitHub mutations, fix PRs, or merge work are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #47394 | keep_closed | skipped | related | Already closed historical Feishu context; keep closed and do not mutate. |
| #58243 | keep_closed | skipped | related | Already closed historical Telegram context; keep closed and do not mutate. |
| #62946 | keep_closed | skipped | related | Already closed historical Telegram context; keep closed and do not mutate. |
| #71058 | route_security | planned | security_sensitive | Route #71058 to central OpenClaw security handling. ProjectClownfish should not classify it as an ordinary canonical issue, close it, label it, comment on it, or open a fix PR from this cluster result. |

## Needs Human

- none
