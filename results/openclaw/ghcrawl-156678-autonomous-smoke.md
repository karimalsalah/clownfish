---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156678-autonomous-smoke"
mode: "autonomous"
run_id: "27506372172"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27506372172"
head_sha: "772609939e8df97f161412c135242d1e0fca23c1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-14T17:39:32.566Z"
canonical: "https://github.com/openclaw/openclaw/issues/50795"
canonical_issue: "https://github.com/openclaw/openclaw/issues/50795"
canonical_pr: null
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156678-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27506372172](https://github.com/openclaw/clownfish/actions/runs/27506372172)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/50795

## Summary

Canonical hint #69287 is now closed. The only live in-scope issue is #50795, and current main still clears every assistant usage snapshot after final compaction, so this needs a narrow credited replacement fix PR rather than closeout or merge.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
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
| open_fix_pr | blocked |  | clownfish/ghcrawl-156678-autonomous-smoke | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs [check:changed] src/agents/compaction-usage.ts: core production [check:changed] src/agents/embedded-agent-runner/replay-history.ts: core production [check:changed] src/agents/embedded-agent-subscribe.handlers.compaction.test.ts: core test [check:changed] src/agents/embedded-agent-subscribe.handlers.compaction.ts: core production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] changelog attributions $ node scripts/check-changelog-attributions.mjs [check:changed] guarded extension wildcard re-exports $ node scripts/check-extension-wildcard-reexports.mjs [check:changed] plugin-sdk wildcard re-exports $ node scripts/check-plugin-sdk-wildcard-reexports.mjs [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] dependency pin guard $ node scripts/check-dependency-pins.mjs [check:changed] package patch guard $ node scripts/check-package-patches.mjs [check:changed] typecheck core $ node scripts/run-tsgo.mjs -p tsconfig.core.json --incremental --tsBuildInfoFile .artifacts/tsgo-cache/core.tsbuildinfo [check:change... |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #50795 | fix_needed | planned | canonical | No viable open canonical PR exists; build a narrow replacement fix artifact that preserves source PR credit. |
| cluster:ghcrawl-156678-autonomous-smoke | build_fix_artifact | planned |  | Replacement fix PR is allowed and safer than trying to revive uneditable or broad closed contributor branches. |
| #50845 | keep_closed | skipped | superseded | Closed historical source PR; no close or merge action is valid. |
| #82874 | keep_closed | skipped | superseded | Closed historical source PR; replacement path carries attribution forward. |
| #91468 | keep_closed | skipped | superseded | Closed non-viable implementation; do not reopen or merge. |
| #69270 | keep_closed | skipped | related | Closed broad related PR; use only as historical evidence. |
| #69269 | keep_closed | skipped | related | Closed related issue; no close action is valid. |
| #69286 | keep_closed | skipped | duplicate | Already closed duplicate context; no close action is valid. |
| #69287 | keep_closed | skipped | duplicate | Already closed representative; no close action is valid. |
| #69202 | keep_closed | skipped | related | Closed related context only. |
| #60126 | keep_closed | skipped | independent | Closed independent context. |
| #91143 | keep_closed | skipped | independent | Closed independent linked ref. |

## Needs Human

- none
