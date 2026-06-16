---
repo: "openclaw/openclaw"
cluster_id: "pr-rebase-canary-93689-20260617"
mode: "autonomous"
run_id: "27651338278"
workflow_run_id: "27651338278"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27651338278"
head_sha: "a3a23c75ed086ba27de6a5268edd698ff2bd73ad"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T22:23:00.305Z"
canonical: "https://github.com/openclaw/openclaw/pull/93689"
canonical_issue: "https://github.com/openclaw/openclaw/issues/57594"
canonical_pr: "https://github.com/openclaw/openclaw/pull/93689"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# pr-rebase-canary-93689-20260617

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27651338278](https://github.com/openclaw/clownfish/actions/runs/27651338278)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/93689

## Summary

#93689 is the sole canonical open PR for the Zalo hex chat_id fix. It is maintainer-editable, narrow, non-security-sensitive, and already has passing hydrated checks, but this rebase-only canary requires repairing the existing contributor branch against current main and rerunning validation plus Codex /review before any later finalization.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/93689 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #93689 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #93689 | fix_needed | planned | canonical | The canonical PR is useful and maintainer-editable but the canary requires a rebase/validation/review repair lane before any later finalization; merge is disabled for this job. |
| cluster:pr-rebase-canary-93689-20260617 | build_fix_artifact | planned |  | A complete executable repair artifact is safe and narrow; no replacement PR, merge, close, label, or broad search is allowed by this canary. |
| #57594 | keep_related | planned | fixed_by_candidate | The issue is covered by the canonical PR path but must not be closed in this rebase-only job. |
| #84599 | keep_independent | planned | independent | This ref is not part of the Zalo fix and should remain untouched. |
| #90859 | keep_closed | skipped | superseded | Already-closed PRs must not receive close or mutation actions. |

## Needs Human

- none
