---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T131654-068"
mode: "plan"
run_id: "27552746090"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27552746090"
head_sha: "6219e4cb8ba01b5666ea86632936d90d53200623"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T14:25:19.090Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 40
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-inventory-ready_for_maintainer-20260615T131654-068

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27552746090](https://github.com/openclaw/clownfish/actions/runs/27552746090)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was selected. Security-shaped items are routed to central security handling; unrelated open PRs are kept as independent inventory items because merge, fix, raise_pr, and low-signal closeout are blocked for this job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 40 |
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
| #88075 | route_security | planned | security_sensitive | Exec deny-path work is security-boundary shaped and linked to a hydrated security-sensitive issue; route this exact PR out of ProjectClownfish cleanup. |
| #88085 | keep_independent | planned | independent | Standalone PR needing normal maintainer/review handling; no duplicate or close-safe canonical is established. |
| #88503 | keep_related | planned | related | Likely related to the closed webchat reconnect context, but live target state is unavailable in the compacted artifact. |
| #88098 | keep_independent | planned | independent | Standalone unhydrated inventory item; keep for normal review rather than infer duplicate status. |
| #88150 | keep_independent | planned | independent | Standalone unhydrated PR; keep independent. |
| #88203 | keep_independent | planned | independent | Standalone unhydrated PR; keep independent for maintainer review. |
| #88206 | keep_independent | planned | independent | Narrow non-security PR path should not be poisoned by the security-sensitive linked issue; keep independent. |
| #90741 | route_security | planned | security_sensitive | Exact security-sensitive ref in the preflight boundary list. |
| #88301 | keep_related | planned | related | Related to the bootstrap warning default area, but the job body describes additional digest-drift scope and live target state is unavailable. |
| #88323 | keep_independent | planned | independent | Standalone unhydrated PR; keep independent. |
| #88437 | keep_independent | planned | independent | Low-signal closeout is disabled; keep as independent inventory. |
| #88400 | keep_independent | planned | independent | Standalone unhydrated PR; keep independent. |
| #88401 | keep_independent | planned | independent | Standalone unhydrated PR; keep independent. |
| #92930 | keep_independent | planned | independent | Standalone unhydrated PR; keep independent. |
| #93025 | keep_related | planned | related | Related implementation PR for a hydrated open issue, but not closeable or mergeable in this plan-only shard. |
| #93176 | keep_independent | planned | independent | Standalone unhydrated PR; keep independent. |
| #93182 | keep_independent | planned | independent | Standalone unhydrated PR; keep independent. |
| #90979 | keep_independent | planned | independent | Standalone unhydrated PR; keep independent. |
| #91093 | keep_independent | planned | independent | Standalone unhydrated feature PR; keep independent. |
| #91097 | keep_independent | planned | independent | Standalone unhydrated PR; keep independent. |
| #91117 | keep_independent | planned | independent | Unhydrated inventory PR; keep independent rather than close. |
| #91134 | keep_independent | planned | independent | Standalone unhydrated PR; keep independent. |
| #91146 | keep_independent | planned | independent | Standalone unhydrated PR; keep independent. |
| #91193 | keep_related | planned | related | Related to #88085 but not safely closeable without hydrated live state. |
| #93185 | keep_independent | planned | independent | Standalone unhydrated PR; keep independent. |
| #93149 | keep_independent | planned | independent | Standalone unhydrated PR; keep independent. |
| #93189 | route_security | planned | security_sensitive | Transcript/session-file handling appears sensitive-data/security-boundary shaped; route exact item. |
| #69729 | keep_independent | planned | independent | Standalone provider catalog PR with review/check blockers; no close or merge recommendation. |
| #72009 | keep_independent | planned | independent | Standalone PR with active review/mergeability blockers; keep for maintainer or author follow-up. |
| #72404 | route_security | planned | security_sensitive | Exact hydrated security-sensitive PR. |
| #73163 | keep_independent | planned | independent | Standalone PR ready for maintainer review; no inventory closeout applies. |
| #73785 | keep_independent | planned | independent | Standalone PR awaiting maintainer decision; keep independent. |
| #75754 | keep_independent | planned | independent | Standalone PR with proof/review blockers; keep independent. |
| #75857 | keep_independent | planned | independent | Active standalone PR with review follow-up; no closeout applies. |
| #75860 | route_security | planned | security_sensitive | Exact hydrated security-sensitive PR. |
| #80008 | route_security | planned | security_sensitive | Exact hydrated security-sensitive PR. |
| #80147 | keep_independent | planned | independent | Standalone browser PR with review follow-up; keep independent. |
| #80204 | keep_independent | planned | independent | Standalone gateway TLS fingerprint PR with review/check blockers; keep independent. |
| #80396 | keep_independent | planned | independent | Standalone media parser PR needing rebase/maintainer review; keep independent. |
| #93188 | keep_independent | planned | independent | Standalone unhydrated PR; keep independent. |

## Needs Human

- none
