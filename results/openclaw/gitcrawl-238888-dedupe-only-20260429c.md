---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238888-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104080524"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104080524"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.413Z"
canonical: "https://github.com/openclaw/openclaw/pull/73949"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73949"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238888-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104080524](https://github.com/openclaw/clownfish/actions/runs/25104080524)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73949

## Summary

Original cluster candidates #45712, #58216, and #58988 are already closed in the hydrated preflight state. The obsolete representative #58216 has a hydrated open replacement, #73949, which is the canonical path for the reconnect-exhausted stale-socket restart crash. #73989 is related reconnect-grace work for the #45712 subfamily, not a duplicate of #73949. No close, merge, label, or fix-PR mutation is planned.

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
| #73949 | keep_canonical | planned | canonical | #73949 is the active replacement for the closed representative #58216 and owns the reconnect-exhausted stale-socket restart crash path. |
| #73989 | keep_related | planned | related | #73989 is related Discord health-monitor work but has a different root cause and should stay on its own canonical path. |
| #45712 | keep_closed | skipped | superseded | #45712 has already been superseded by hydrated replacement PR #73989. |
| #58216 | keep_closed | skipped | superseded | The original representative is obsolete because it has already been replaced by hydrated open PR #73949. |
| #58988 | keep_closed | skipped | fixed_by_candidate | #58988 targeted an older shutdown crash path that was already covered by merged lifecycle/shutdown work, while the remaining active reconnect-exhausted live-handler fix is tracked by #73949. |

## Needs Human

- none
