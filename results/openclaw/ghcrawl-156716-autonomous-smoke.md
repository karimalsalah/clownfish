---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156716-autonomous-smoke"
mode: "autonomous"
run_id: "27585279493"
workflow_run_id: "27585279493"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585279493"
head_sha: "5f250e096d9257d26e2a256c906e3b3aec75044a"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-16T00:23:41.520Z"
canonical: "https://github.com/openclaw/openclaw/pull/90305"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/90305"
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 1
---

# ghcrawl-156716-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585279493](https://github.com/openclaw/clownfish/actions/runs/27585279493)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/pull/90305

## Summary

Representative #44518 is closed and obsolete. The best live canonical path is open PR #90305, which addresses the current supervised restart drain/systemd KillMode family with passing proof/checks, but it still needs maintainer review and a fresh Codex /review before any merge recommendation. Open PR #66735 is useful history but blocked from closeout until the canonical path lands because it still has failing proof/check gates and unresolved review-bot findings.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #66735 | close_superseded | skipped | superseded | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #27590 | keep_closed | skipped | related | Already closed; no mutation is valid. |
| #29827 | keep_closed | skipped | related | Already closed; no mutation is valid. |
| #44490 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented on main; no open action remains. |
| #44518 | keep_closed | skipped | superseded | Closed obsolete PR; cannot be canonical or merged. |
| #47133 | keep_closed | skipped | related | Already closed; no mutation is valid. |
| #47222 | keep_closed | skipped | superseded | Closed obsolete PR; no mutation is valid. |
| #57967 | keep_closed | skipped | fixed_by_candidate | Already closed as fixed on main and released builds. |
| #57971 | keep_closed | skipped | superseded | Already closed as superseded by an existing main fix. |
| #66735 | close_superseded | blocked | superseded | Superseded closeout is clear but blocked until the canonical fix is merged or otherwise landed. |
| #66884 | keep_closed | skipped | independent | Closed merged independent context; no cluster action remains. |
| #90305 | needs_human | planned | canonical | Maintainer review and fresh Codex /review are required before any merge_canonical recommendation. |

## Needs Human

- #90305 is the exact unresolved decision: maintainer review is required before merge, and the worker cannot provide the required fresh Codex /review merge preflight from the hydrated artifact.
