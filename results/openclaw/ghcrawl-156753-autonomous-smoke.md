---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156753-autonomous-smoke"
mode: "autonomous"
run_id: "27484665882"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27484665882"
head_sha: "15ce3c5acb722f6304d0f6de2dc809dfe5816678"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-14T01:31:14.105Z"
canonical: "https://github.com/openclaw/openclaw/issues/7406"
canonical_issue: "https://github.com/openclaw/openclaw/issues/7406"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156753-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27484665882](https://github.com/openclaw/clownfish/actions/runs/27484665882)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/7406

## Summary

Classified #7406 as the canonical open issue. Current main still has Telegram topic-name cache/context data but no durable/displayed topic label path for sessions.list and the Control UI selector. No merge or close action is safe; build a narrow credited replacement fix PR using the closed contributor PRs as source evidence.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

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
| #7406 | keep_canonical | planned | canonical | #7406 is the best surviving canonical tracker for the remaining Telegram forum topic display-label work. |
| #7407 | keep_closed | skipped | superseded | Already closed historical PR; keep as credited source evidence only. |
| #43105 | keep_closed | skipped | superseded | Already closed historical PR; keep as credited source evidence only. |
| #51124 | keep_closed | skipped | related | Closed related context, not a viable source branch for this canonical fix. |
| #53701 | keep_closed | skipped | duplicate | Already closed duplicate context; no action. |
| #68652 | keep_closed | skipped | duplicate | Already closed duplicate context; no action. |
| cluster:ghcrawl-156753-autonomous-smoke | fix_needed | planned | canonical | The issue remains reproducible from source on current main, no viable open PR owns it, and the job allows fix plus raise_pr. |
| cluster:ghcrawl-156753-autonomous-smoke | build_fix_artifact | planned |  | Build a credited replacement PR because useful prior contributor branches are closed/uneditable or blocked, and current main still lacks the canonical display-label propagation path. |

## Needs Human

- none
