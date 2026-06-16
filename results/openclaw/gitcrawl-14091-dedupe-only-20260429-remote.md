---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14091-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585129714"
workflow_run_id: "27585129714"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585129714"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:18:21.256Z"
canonical: "#41265"
canonical_issue: "#41256"
canonical_pr: "#41265"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14091-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585129714](https://github.com/openclaw/clownfish/actions/runs/27585129714)

Workflow conclusion: success

Worker result: planned

Canonical: #41265

## Summary

Selected #41265 as the current live canonical PR for the Discord MIME/WebP upload fix. No close, merge, or fix PR actions are planned: the surviving canonical PR is still open but blocked by failing checks, missing real behavior proof, and unresolved review-bot findings; closed PRs are kept closed as historical superseded context; the security-sensitive closed PNG PR is routed to central security handling only.

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
| #40829 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish mutation scope even though it is already closed. |
| #41256 | keep_related | planned | related | The issue should remain open until the canonical fix PR or equivalent lands and validates. |
| #41265 | keep_canonical | planned | canonical | Canonical PR is identified, but merge is blocked and merge is disallowed by this job. |
| #41419 | keep_closed | skipped | superseded | Already-closed superseded PR; closed historical refs must not receive close actions. |
| #41714 | keep_closed | skipped | superseded | Already-closed superseded PR; closed historical refs must not receive close actions. |

## Needs Human

- none
