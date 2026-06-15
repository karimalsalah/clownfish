---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-053"
mode: "plan"
run_id: "27583353743"
workflow_run_id: "27583353743"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583353743"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T23:55:41.571Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# pr-inventory-needs_proof-20260615T223445-053

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583353743](https://github.com/openclaw/clownfish/actions/runs/27583353743)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Plan-only PR inventory classification. The preflight artifact hydrated six open PRs and rate-limited the remaining listed PRs, so no mutating close/label/comment actions are planned. Hydrated PRs are kept as independent inventory items unless a specific review blocker requires maintainer/author follow-up.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 2 |

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
| #91162 | keep_independent | planned | independent | Separate open PR with failed proof gates; no close, merge, or fix action is allowed in this plan job. |
| #91177 | keep_independent | planned | independent | Independent candidate PR; keep open for normal maintainer review/proof handling. |
| #91206 | needs_human | blocked | needs_human | Maintainer/author follow-up is needed for the reported request-contract defect before any merge-style recommendation. |
| #90700 | keep_independent | planned | independent | Independent open PR with failed proof/check gates; not eligible for merge or closure planning. |
| #91132 | keep_independent | planned | independent | Independent feature PR in the inventory shard; keep open for maintainer review. |
| #93317 | keep_independent | planned | independent | Independent open PR with a failed proof gate; no merge or close action is allowed. |
| #67011 | needs_human | blocked | needs_human | Live PR state is unavailable, so this candidate cannot be safely classified beyond a blocked human/live-state retry. |
| #68116 | needs_human | blocked | needs_human | Live PR state is unavailable; retry hydration or route to human inventory review. |
| #91222 | needs_human | blocked | needs_human | Live PR state is unavailable; no safe inventory classification is possible from the artifact. |
| #91239 | needs_human | blocked | needs_human | Live PR state is unavailable; no safe inventory classification is possible from the artifact. |
| #91249 | needs_human | blocked | needs_human | Live PR state is unavailable; no safe inventory classification is possible from the artifact. |
| #91250 | needs_human | blocked | needs_human | Live PR state is unavailable; no safe inventory classification is possible from the artifact. |
| #91271 | needs_human | blocked | needs_human | Live PR state is unavailable; no safe inventory classification is possible from the artifact. |
| #91273 | needs_human | blocked | needs_human | Live PR state is unavailable; no safe inventory classification is possible from the artifact. |
| #91276 | needs_human | blocked | needs_human | Live PR state is unavailable; no safe inventory classification is possible from the artifact. |
| #91279 | needs_human | blocked | needs_human | Live PR state is unavailable; no safe inventory classification is possible from the artifact. |
| #91280 | needs_human | blocked | needs_human | Live PR state is unavailable; no safe inventory classification is possible from the artifact. |
| #91393 | needs_human | blocked | needs_human | Live PR state is unavailable; no safe inventory classification is possible from the artifact. |
| #91399 | needs_human | blocked | needs_human | Live PR state is unavailable; no safe inventory classification is possible from the artifact. |
| #91444 | needs_human | blocked | needs_human | Live PR state is unavailable; no safe inventory classification is possible from the artifact. |
| #91446 | needs_human | blocked | needs_human | Live PR state is unavailable; no safe inventory classification is possible from the artifact. |
| #91447 | needs_human | blocked | needs_human | Live PR state is unavailable; no safe inventory classification is possible from the artifact. |
| #91466 | needs_human | blocked | needs_human | Live PR state is unavailable; no safe inventory classification is possible from the artifact. |
| #91473 | needs_human | blocked | needs_human | Live PR state is unavailable; no safe inventory classification is possible from the artifact. |
| #91477 | needs_human | blocked | needs_human | Live PR state is unavailable; no safe inventory classification is possible from the artifact. |

## Needs Human

- #91206 needs maintainer/author follow-up for the ClawSweeper-reported request-contract defect before merge-style handling.
- Live state hydration failed for #67011, #68116, #91222, #91239, #91249, #91250, #91271, #91273, #91276, #91279, #91280, #91393, #91399, #91444, #91446, #91447, #91466, #91473, and #91477 due GitHub API rate limiting; retry hydration before inventory classification or any mutation.
