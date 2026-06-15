---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156934-autonomous-smoke"
mode: "autonomous"
run_id: "27584189363"
workflow_run_id: "27584189363"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27584189363"
head_sha: "3eaef20c39c95c760c2eeb4e61adf6ea57afc054"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:57:44.407Z"
canonical: "https://github.com/openclaw/openclaw/issues/8147"
canonical_issue: "https://github.com/openclaw/openclaw/issues/8147"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 0
---

# ghcrawl-156934-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27584189363](https://github.com/openclaw/clownfish/actions/runs/27584189363)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/8147

## Summary

Classified #8147 as the canonical WebChat send-shortcut issue. #39821 and #19859 are already closed duplicates and receive no closure action. #10118 and #16711 are related but distinct open feature tracks. The open implementation PR #73390 is useful but not merge-ready because the hydrated artifact shows maintainer_can_modify=false, unknown mergeability, a failing Real behavior proof check, and unresolved Greptile review comments, so the safe autonomous path is a narrow credited replacement fix artifact rather than merge or duplicate closeout.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #73390 | close_superseded | skipped | superseded | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #8147 | keep_canonical | planned | canonical | Best surviving canonical issue for the WebChat send-shortcut feature; keep open until a viable fix PR lands. |
| #39821 | keep_closed | skipped | duplicate | Already-closed duplicate; retained as historical evidence only. |
| #19859 | keep_closed | skipped | duplicate | Already-closed duplicate; retained as historical evidence only. |
| #10118 | keep_related | planned | related | Related keyboard-composition feature family, but not a duplicate of the WebChat send-shortcut root cause. |
| #16711 | keep_related | planned | related | Adjacent Control UI composer keyboard behavior, but distinct expanded-editor product work rather than a duplicate of #8147. |
| #73390 | close_superseded | blocked | superseded | Useful but not automation-mergeable. Closure is blocked until a replacement fix PR exists, preserving contributor credit. |
| cluster:ghcrawl-156934-autonomous-smoke | fix_needed | planned |  | A narrow credited replacement PR is needed before closing the canonical issue or superseding the uneditable implementation PR. |
| cluster:ghcrawl-156934-autonomous-smoke | build_fix_artifact | planned |  | The executor can open a narrow replacement PR that preserves credit and avoids unsafe branch mutation. |

## Needs Human

- none
