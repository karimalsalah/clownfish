---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156982-autonomous-smoke"
mode: "autonomous"
run_id: "27506374186"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27506374186"
head_sha: "772609939e8df97f161412c135242d1e0fca23c1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-14T17:27:32.101Z"
canonical: "cluster:ghcrawl-156982-autonomous-smoke"
canonical_issue: null
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 0
---

# ghcrawl-156982-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27506374186](https://github.com/openclaw/clownfish/actions/runs/27506374186)

Workflow conclusion: success

Worker result: planned

Canonical: cluster:ghcrawl-156982-autonomous-smoke

## Summary

Current main still lacks the OpenAI-compatible mangled tool-call ID/name normalization. #39091 is already closed and should stay historical. #39245 is the useful successor, but it is dirty, has a failing Real behavior proof check, and carries unrelated node exec changes, so the safe path is a narrow credited replacement fix PR; #39245 closeout is blocked until that replacement exists.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/session-transcript-repair.attachments.test.ts: core test [check:changed] src/agents/session-transcript-repair.test.ts: core test [check:changed] src/agents/session-transcript-repair.ts: core production [check:changed] src/agents/tool-call-id.test.ts: core test [check:changed] src/agents/tool-call-id.ts: core production [check:changed] src/agents/tool-call-shared.ts: core production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] changelog attributions $ node scripts/check-changelog-attributions.mjs [check:changed] guarded extension wildcard re-exports $ node scripts/check-extension-wildcard-reexports.mjs [check:changed] plugin-sdk wildcard re-exports $ node scripts/check-plugin-sdk-wildcard-reexports.mjs [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] dependency pin guard $ node scripts/check-dependency-pins.mjs [check:changed] package patch guard $ node scripts/check-package-patches.mjs [check:changed] typecheck core $ node scripts/run-tsgo.mjs -p tsconfig.core.json --increme... |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #39245 | close_superseded | skipped | superseded | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #39091 | keep_closed | skipped | superseded | Already closed; keep as superseded historical context only. |
| #39245 | close_superseded | blocked | superseded | Closeout is blocked on a replacement fix PR that preserves @deepujain credit and removes the unsafe/broad branch scope. |
| cluster:ghcrawl-156982-autonomous-smoke | fix_needed | planned |  | Bug still appears real on current main and no merge-ready canonical PR exists. |
| cluster:ghcrawl-156982-autonomous-smoke | build_fix_artifact | planned |  | Build a narrow credited replacement fix artifact for the executor; do not merge or close #39245 until the replacement PR exists and passes gates. |

## Needs Human

- none
