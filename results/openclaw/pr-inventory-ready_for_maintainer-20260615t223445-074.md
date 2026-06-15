---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-074"
mode: "plan"
run_id: "27583277591"
workflow_run_id: "27583277591"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583277591"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:55:40.944Z"
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

# pr-inventory-ready_for_maintainer-20260615T223445-074

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583277591](https://github.com/openclaw/clownfish/actions/runs/27583277591)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was selected because the job is an inventory shard, not a dedupe cluster. Open hydrated PRs are kept as independent maintainer-review items; already closed PRs are skipped as closed; #85292 needs a fresh hydrated read before classification.

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
| #90836 | needs_human | planned | needs_human | Technical correctness and product-risk judgment is required before any merge path; no close action is appropriate. |
| #93113 | keep_independent | planned | independent | Useful independent PR with failing checks; keep open for ordinary review rather than close or merge. |
| #93051 | keep_independent | planned | independent | Focused independent fix with unresolved CI; no close or merge action is safe in this plan shard. |
| #73704 | keep_independent | planned | independent | Independent useful PR, but review-bot findings and broad unrelated file surface block merge-style handling. |
| #80823 | keep_independent | planned | independent | Useful independent PR with stale/rebase gating; keep open for maintainer review and branch update. |
| #81333 | keep_independent | planned | independent | Independent PR with author/review follow-up; no low-signal or superseded basis for closure. |
| #81341 | keep_independent | planned | independent | Independent message-delivery fix with failing proof/checks; keep open, do not close or merge. |
| #81714 | keep_independent | planned | independent | Independent PR with author/review follow-up; no closure basis. |
| #82165 | keep_independent | planned | independent | Independent feature PR requiring normal product/maintainer review; no duplicate or superseded evidence. |
| #82354 | keep_independent | planned | independent | Useful independent PR with failed proof gate; keep open for author/maintainer follow-up. |
| #83244 | keep_independent | planned | independent | Draft independent PR with failed proof; keep open, no closure action. |
| #84009 | keep_independent | planned | independent | Broad independent session-state PR needs normal author/maintainer handling; no duplicate or superseded evidence. |
| #84871 | keep_independent | planned | independent | Independent ready-for-maintainer PR; merge is blocked by job mode/actions, not by classification. |
| #84894 | keep_independent | planned | independent | Useful independent PR; keep open for maintainer review. |
| #84895 | keep_independent | planned | independent | Independent ready-for-maintainer PR; no dedupe or closure basis. |
| #92910 | keep_closed | skipped | independent | Already closed; no mutation should be planned. |
| #84977 | keep_independent | planned | independent | Independent provider-format feature/fix; keep open for author/maintainer follow-up. |
| #93001 | keep_closed | skipped | independent | Already closed; no close/comment/label mutation should be planned. |
| #85039 | keep_independent | planned | independent | Independent channel behavior PR; keep open for normal review. |
| #85055 | keep_independent | planned | independent | Broad independent feature/config PR; no close or merge action is appropriate in this plan shard. |
| #85112 | keep_independent | planned | independent | Independent ready-for-maintainer PR; keep open for normal review. |
| #85155 | keep_independent | planned | independent | Independent ready-for-maintainer PR; no duplicate or superseded evidence. |
| #93006 | keep_closed | skipped | independent | Already closed; no mutation should be planned. |
| #85238 | keep_independent | planned | independent | Useful independent PR with conflict/review follow-up; keep open. |
| #85292 | needs_human | blocked | needs_human | Needs fresh hydration before classification or any action. |

## Needs Human

- #90836 requires maintainer judgment on the outbound cron heuristic tradeoff identified by ClawSweeper.
- #85292 could not be classified because live state and target_updated_at were unavailable in the preflight artifact.
