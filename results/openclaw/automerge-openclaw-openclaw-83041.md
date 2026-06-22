---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-83041"
mode: "autonomous"
run_id: "27948247342"
workflow_run_id: "27948247342"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27948247342"
head_sha: "35eda120fbf1c547e6043b9e300d395ed4a77fc8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-22T11:18:51.412Z"
canonical: "https://github.com/openclaw/openclaw/pull/83041"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46797"
canonical_pr: "https://github.com/openclaw/openclaw/pull/83041"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-83041

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27948247342](https://github.com/openclaw/clownfish/actions/runs/27948247342)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/83041

## Summary

Canonical path stays on PR #83041 for the #46797 config.patch restart-required notice fix. The PR is open, maintainer-editable, and credited to @xuruiray, but it is not merge-ready because the hydrated state shows mergeable_state dirty, pending checks, and a latest ClawSweeper review requiring maintainer review; the executable outcome is an in-place contributor-branch repair artifact for #83041 only, not merge or close. PR #93863 stays non-mutating and related because it has a blocked merge-risk label and failing real-behavior proof.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Repair Candidate

```json
{
  "target": "#83041",
  "source_refs": [
    "#83041",
    "#46797",
    "#80823",
    "#93863",
    "#55372"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair PR #83041 in place so the config.patch restart-required notice fix can be re-reviewed without losing @xuruiray attribution.",
  "pr_title": "Fix config patch restart-required notices",
  "pr_body": "## What Problem This Solves\nFixes #46797 by making config.patch restart-sentinel notices say a restart is required instead of implying the restart already completed.\n\n## Why This Change Was Made\nCurrent main writes config apply/patch restart sentinels without restart-required metadata and summarizes successful config-patch payloads as an ok-style restart notice. The repair should keep the existing contributor PR #83041 as the canonical lane, rebase it against main, and resolve only the current conflict/review/check blockers.\n\n## User Impact\nUsers who approve config.patch changes get clearer post-write restart guidance, especially on manual-restart flows such as Windows.\n\n## Evidence\nRun focused restart-sentinel and gateway config tests, then pnpm check:changed. Preserve @xuruiray attribution from https://github.com/openclaw/openclaw/pull/83041.",
  "likely_files": [
    "src/gateway/server-methods/config-write-flow.ts",
    "src/gateway/server-methods/config.shared-auth.test.ts",
    "src/gateway/server-restart-sentinel.ts",
    "src/gateway/server-restart-sentinel.test.ts",
    "src/gateway/server.config-patch.test.ts",
    "src/infra/restart-sentinel.ts",
    "src/infra/restart-sentinel.test.ts",
    "test/scripts/plugin-sdk-surface-report.test.ts"
  ],
  "validation_commands": [
    "node scripts/run-vitest.mjs src/infra/restart-sentinel.test.ts src/gateway/server-methods/config.shared-auth.test.ts src/gateway/server-restart-sentinel.test.ts src/gateway/server.config-patch.test.ts -- --reporter=verbose",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Repair the existing contributor PR #83041 rather than replacing it, because maintainer_can_modify=true.",
    "Keep @xuruiray credited as the source PR author in the PR body and any repair status comment.",
    "Do not edit CHANGELOG.md for this normal PR repair; keep release-note context in the PR body if wording changes remain user-visible."
  ],
  "source_job": "jobs/openclaw/outbox/finalized/automerge-openclaw-openclaw-83041.md",
  "security_sensitive": false,
  "security_routed_refs": [],
  "needs_human": [],
  "repair_status": "pushed",
  "terminal": true
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/83041 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #83041 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #83041 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #46797 | keep_canonical | planned | canonical | Keep the canonical issue open until the repair PR lands; close is blocked by job policy and require_fix_before_close. |
| #55372 | keep_related | planned | related | Related restart-sentinel area, different root cause and product scope. |
| #80823 | keep_related | planned | related | Related config guidance surface, independent repair lane. |
| #83041 | fix_needed | planned | canonical | Repair contributor branch in place; do not merge or close from this worker. |
| #93863 | keep_related | planned | related | Keep non-mutating only; #93863 is related same-area context, but the executable repair path is limited to the maintainer-calibrated #83041 branch. |
| cluster:automerge-openclaw-openclaw-83041 | build_fix_artifact | planned |  | Build a repair plan for the executor; no GitHub mutation from this worker. |

## Needs Human

- none
