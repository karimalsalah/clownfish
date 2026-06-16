---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14015-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27595847444"
workflow_run_id: "27595847444"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27595847444"
head_sha: "7a8b7ab269d4c8246a3837f1013f6d9715d17c5e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T05:21:58.155Z"
canonical: "https://github.com/openclaw/openclaw/pull/55487"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/55487"
actions_total: 15
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14015-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27595847444](https://github.com/openclaw/clownfish/actions/runs/27595847444)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/55487

## Summary

Live preflight shows the original representative #55886 is now closed after a later Clownfish replacement path was mentioned in hydrated comments. The only open non-security candidate left in this cluster is #55487, which is a related gateway/TLS availability PR but is not merge-ready and cannot be repaired in this close-only job. Security-sensitive open refs #42856 and #70676 are quarantined for central security handling. No GitHub mutations were performed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 15 |
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
| #55487 | keep_canonical | planned | canonical | Only open non-security candidate; keep open because the branch is useful but blocked by proof/check/review issues and this job cannot repair it. |
| #70676 | route_security | planned | security_sensitive | Security-sensitive open PR; quarantine exact ref only. |
| #42856 | route_security | planned | security_sensitive | Security-sensitive linked issue; quarantine exact ref only. |
| #40067 | keep_closed | skipped |  | Already closed before this worker result. |
| #42962 | keep_closed | skipped |  | Already closed before this worker result. |
| #48908 | keep_closed | skipped |  | Already closed before this worker result. |
| #54526 | keep_closed | skipped |  | Already closed before this worker result. |
| #55886 | keep_closed | skipped | fixed_by_candidate | Representative is already closed; unhydrated replacement PR remains evidence only in this result. |
| #60137 | keep_closed | skipped |  | Already closed before this worker result. |
| #60576 | keep_closed | skipped |  | Already closed before this worker result. |
| #63780 | keep_closed | skipped |  | Already closed before this worker result. |
| #66342 | keep_closed | skipped |  | Already closed before this worker result. |
| #67672 | keep_closed | skipped |  | Already closed before this worker result. |
| #71086 | keep_closed | skipped |  | Already closed before this worker result. |
| #42898 | keep_closed | skipped | security_sensitive | Security-sensitive linked PR is already closed; no action beyond recording quarantine evidence. |

## Needs Human

- none
