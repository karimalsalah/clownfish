---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156690-autonomous-smoke"
mode: "autonomous"
run_id: "27584186498"
workflow_run_id: "27584186498"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27584186498"
head_sha: "3eaef20c39c95c760c2eeb4e61adf6ea57afc054"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T23:57:44.381Z"
canonical: "https://github.com/openclaw/openclaw/issues/52732"
canonical_issue: "https://github.com/openclaw/openclaw/issues/52732"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# ghcrawl-156690-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27584186498](https://github.com/openclaw/clownfish/actions/runs/27584186498)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/52732

## Summary

Canonical drift resolved: the original representative #13736 is already closed, and #52732 is the current open canonical issue for per-agent compaction/contextPruning overrides. The linked implementation PR #88506 is open but draft, very broad, and failing relevant checks, so no merge or autonomous repair PR is safe from this cluster pass.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #13736 | keep_closed | skipped | superseded | Already closed refs must not receive closure mutations. |
| #52732 | keep_canonical | planned | canonical | Best surviving canonical is the live open issue, not the closed original representative. |
| #57174 | keep_closed | skipped | duplicate | Already closed duplicate; no mutation is valid. |
| #69985 | keep_closed | skipped | duplicate | Already closed duplicate; no mutation is valid. |
| #88506 | needs_human | blocked | needs_human | Maintainer judgment is needed to decide whether #88506 should be narrowed/repaired in place, split into smaller follow-up jobs, or closed in favor of a new scoped implementation plan. |
| cluster:ghcrawl-156690-autonomous-smoke | fix_needed | blocked |  | Implementation is real work but blocked on product/scope decision and broad-code-delta policy. |
| cluster:ghcrawl-156690-autonomous-smoke | build_fix_artifact | blocked |  | Broad feature/config/docs/runtime rewrite should be split or maintainer-scoped before executor work. |

## Needs Human

- Decide the path for #88506: repair/narrow the existing draft PR, split the feature into smaller follow-up jobs, or close it in favor of a fresh scoped implementation plan. The blocker is broad_code_delta plus failing relevant checks, not a security quarantine.
