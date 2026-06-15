---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238817-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25103957104"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103957104"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.380Z"
canonical: "https://github.com/openclaw/openclaw/issues/47975"
canonical_issue: "https://github.com/openclaw/openclaw/issues/47975"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238817-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103957104](https://github.com/openclaw/clownfish/actions/runs/25103957104)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/47975

## Summary

Preflight state supports #47975 as the canonical open issue for the broad subagent session retention/UI responsiveness family. No new close actions are planned: #56516 and #58534 are already closed as duplicates of #47975, #58649 and #67902 are already closed as implemented/related narrower lifecycle cases, #54488 and #64253 remain related but distinct scheduler/announce timeout issues, and #47884 is independent.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #47975 | keep_canonical | planned | canonical | Best live canonical for the broad completed/ephemeral subagent session retention and dashboard/main-session responsiveness cluster. |
| #56516 | keep_closed | skipped | duplicate | Already closed as a duplicate of #47975; no close action is valid for a closed target. |
| #58534 | keep_closed | skipped | duplicate | Already closed as a duplicate of #47975; no close action is valid for a closed target. |
| #58649 | keep_closed | skipped | related | Closed related/narrower lifecycle issue; no close action is valid for a closed target. |
| #67902 | keep_closed | skipped | related | Closed related/narrower stale-running cleanup issue; no close action is valid for a closed target. |
| #47884 | keep_independent | planned | independent | Independent memory embedding provider bug; do not close or route under the subagent session lifecycle canonical. |
| #54488 | keep_related | planned | related | Related responsiveness symptom family, but distinct scheduler fairness root cause; keep open. |
| #64253 | keep_related | planned | related | Related but not duplicate; keep open as a focused announce-timeout/gateway-load issue. |

## Needs Human

- none
