---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-085"
mode: "plan"
run_id: "27583278055"
workflow_run_id: "27583278055"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583278055"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:55:41.074Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 26
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-inventory-ready_for_maintainer-20260615T223445-085

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583278055](https://github.com/openclaw/clownfish/actions/runs/27583278055)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. No shared canonical was invented. Open non-security PRs are kept open for normal maintainer/author review, blocked checks, or unresolved review feedback; the already-closed PR is kept closed; security-sensitive refs are routed to central security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 26 |
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
| #75187 | route_security | planned | security_sensitive | Security-sensitive linked issue is out of ProjectClownfish cleanup scope. |
| #81108 | keep_independent | planned | independent | Standalone substantive PR; keep open for maintainer review rather than close or merge in this shard. |
| #84897 | keep_independent | planned | independent | Not a duplicate/low-signal closeout; keep open for author or maintainer follow-up. |
| #89894 | route_security | planned | security_sensitive | Security-sensitive PR is out of ProjectClownfish cleanup scope and must route to central security handling. |
| #89897 | keep_independent | planned | independent | Keep open; failing checks and review state block merge/closeout. |
| #89900 | keep_closed | skipped | superseded | Already closed as superseded; preserve historical evidence only. |
| #89932 | keep_independent | planned | independent | Keep open for docs review and requested changes. |
| #89944 | keep_independent | planned | independent | Keep open; author/review/check blockers make closure or merge inappropriate. |
| #89949 | keep_independent | planned | independent | Keep open; failing proof check blocks fixed-by-candidate or merge actions. |
| #89962 | keep_independent | planned | independent | Standalone message-delivery PR; keep open for maintainer review. |
| #89967 | keep_independent | planned | independent | Keep open as an independent fix candidate for maintainer review. |
| #89981 | keep_independent | planned | independent | Keep open for maintainer review. |
| #89992 | keep_independent | planned | independent | Keep open as an independent config feature/fix candidate. |
| #90019 | keep_independent | planned | independent | Keep open; failing checks block merge/fixed-by-candidate actions. |
| #90030 | keep_independent | planned | independent | Keep open for maintainer review. |
| #90033 | keep_independent | planned | independent | Keep open as an independent provider compatibility fix candidate. |
| #90060 | keep_independent | planned | independent | Keep open for maintainer review due to high-impact behavior change. |
| #90063 | keep_independent | planned | independent | Keep open as an independent SDK/docs candidate. |
| #90089 | keep_independent | planned | independent | Keep open for maintainer review. |
| #90122 | keep_independent | planned | independent | Keep open as an independent UI fix candidate. |
| #90142 | keep_independent | planned | independent | Keep open for requested changes. |
| #90169 | keep_independent | planned | independent | Keep open for maintainer review. |
| #90217 | keep_independent | planned | independent | Keep open; failing checks and unresolved review comments block merge. |
| #90218 | keep_independent | planned | independent | Keep open as an independent web UI fix candidate. |
| #93180 | keep_independent | planned | independent | Keep open for maintainer review; broad high-risk PR is not a cleanup closeout. |
| #93269 | keep_independent | planned | independent | Keep open as an independent extension fix candidate. |

## Needs Human

- none
