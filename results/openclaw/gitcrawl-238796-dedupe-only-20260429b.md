---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238796-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25103804936"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103804936"
head_sha: "98c86abfe56e7ca0578fd667fdea3121315c5b1d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.364Z"
canonical: "https://github.com/openclaw/openclaw/pull/39551"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/39551"
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 0
---

# gitcrawl-238796-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103804936](https://github.com/openclaw/clownfish/actions/runs/25103804936)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/39551

## Summary

#41255 is already closed; hydrated live state now points to #39551 as the maintained non-security canonical PR for the sessions_send sessionKey-first fix. #74009 is routed to central security because its hydrated Aisle analysis alleges a session-key disclosure issue. Closed overlapping PRs remain closed, #41199 stays open as broader related work, and #64699 closeout is blocked until #39551 lands or current main proves the fix.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #64699 | close_fixed_by_candidate | skipped | fixed_by_candidate | Clear fixed-by-candidate relationship, but fixed-by-candidate closeout must wait for a landed or clean canonical fix. |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #39551 | keep_canonical | planned | canonical | Best surviving non-security canonical branch for the sessions_send mixed sessionKey/label rejection; keep open for review and validation. |
| #41199 | keep_related | planned | related | Related but not a duplicate closeout target because unique message-tool work remains. |
| #41255 | keep_closed | skipped | superseded | Already closed; closed historical refs must not receive close actions. |
| #56193 | keep_closed | skipped | independent | Closed linked context only; different root cause and no cluster mutation is appropriate. |
| #56203 | keep_closed | skipped | superseded | Already closed; no close action may be emitted for this target. |
| #59324 | keep_closed | skipped | superseded | Already closed after replacement handling; no mutation is valid for this closed PR. |
| #64699 | close_fixed_by_candidate | blocked | fixed_by_candidate | Clear fixed-by-candidate relationship, but fixed-by-candidate closeout must wait for a landed or clean canonical fix. |
| #64846 | keep_closed | skipped | superseded | Already closed; no close action may be emitted for this target. |
| #74009 | route_security | planned | security_sensitive | Security-sensitive PR review signal must be quarantined to central OpenClaw security handling; do not close, merge, label, or comment on this item through Clownfish. |

## Needs Human

- none
