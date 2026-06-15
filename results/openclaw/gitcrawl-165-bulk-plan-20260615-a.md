---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-165-bulk-plan-20260615-a"
mode: "plan"
run_id: "1781509752422093"
run_url: null
head_sha: "ab8f3381c8b4c7ae549806f637732c055ad16c09"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T07:49:49.065Z"
canonical: "#71195"
canonical_issue: "#71195"
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

# gitcrawl-165-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: unknown

Workflow conclusion: success

Worker result: planned

Canonical: #71195

## Summary

Representative #73032 is already closed and should not remain canonical. The only surviving non-security open item is #71195, but it is a distinct macOS/OpenAI realtime Talk follow-up, not a duplicate of the xAI provider work. Job-scoped security-signal refs #73019 and #91308 are routed to central security handling without blocking the non-security classification.

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
| #71195 | keep_canonical | planned | canonical | Keep as the live non-security canonical for the macOS/OpenAI realtime Talk follow-up; do not close or merge anything in plan mode. |
| #73019 | route_security | planned | security_sensitive | Route the flagged closed issue read-only; do not mutate or use as a close target. |
| #73032 | keep_closed | skipped | low_signal | The previous representative is no longer live canonical. Keep it closed as historical evidence only. |
| #91308 | route_security | planned | security_sensitive | Route the open security-signal PR to central OpenClaw security handling; do not close, merge, label, comment, or build a fix PR from this worker. |

## Needs Human

- none
