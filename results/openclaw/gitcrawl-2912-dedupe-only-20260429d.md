---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2912-dedupe-only-20260429d"
mode: "autonomous"
run_id: "27595875567"
workflow_run_id: "27595875567"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27595875567"
head_sha: "d9b9bfb6cf45a4e1ff3cbc2c7635601fa862d87f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T05:21:58.204Z"
canonical: "https://github.com/openclaw/openclaw/pull/45315"
canonical_issue: "https://github.com/openclaw/openclaw/issues/45314"
canonical_pr: "https://github.com/openclaw/openclaw/pull/45315"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2912-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27595875567](https://github.com/openclaw/clownfish/actions/runs/27595875567)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/45315

## Summary

Classified the hydrated cluster without GitHub mutations. Validator preflight requires quarantining #45315 as security-sensitive, so the open canonical PR is routed to central OpenClaw security handling instead of being treated as a normal dedupe canonical. #45454 is already closed and should stay closed; linked issue #45314 remains open and related to the same abort responsePrefix interpolation report, but no fix, merge, or close action is allowed in this dedupe-only job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #45314 | keep_related | planned | related | #45314 is the source issue tied to the canonical PR, not a duplicate close target in this PR-dedupe-only job. |
| #45315 | route_security | planned | security_sensitive | Security-sensitive PR targets must be quarantined to central OpenClaw security handling before any normal dedupe or merge path. |
| #45454 | keep_closed | skipped | superseded | Already-closed historical PR; retain as superseded evidence only. |

## Needs Human

- none
