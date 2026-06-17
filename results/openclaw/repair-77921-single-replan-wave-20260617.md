---
repo: "openclaw/openclaw"
cluster_id: "repair-77921-single-replan-wave-20260617"
mode: "autonomous"
run_id: "27703237295"
workflow_run_id: "27703237295"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27703237295"
head_sha: "3d1c6e80508f4f0169e7d61190672f06031166e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T16:20:11.254Z"
canonical: "https://github.com/openclaw/openclaw/pull/77921"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/77921"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 0
---

# repair-77921-single-replan-wave-20260617

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27703237295](https://github.com/openclaw/clownfish/actions/runs/27703237295)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/77921

## Summary

PR #77921 is a useful contributor change, but the current head is not safe to repair directly as-is: against current main baa389ebed1a85258b2ff7f4a61d0746280edf61 it carries stale/broad deltas, including a large CHANGELOG rewrite, package version regression, and unrelated Inworld test/comment churn. The intended behavior is still narrow and real: current main defaults Inworld to inworld-tts-1.5-max, while the PR head defaults to inworld-tts-2 and documents/tests that path. Plan a narrow credited replacement PR from current main rather than mutating or merging the stale branch.

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

## Repair Candidate

```json
{
  "target": "#77921",
  "source_refs": [
    "#77921",
    "#55972"
  ],
  "repair_strategy": "replace_uneditable_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Create a narrow replacement PR from current main that preserves @cshape's Inworld TTS-2 contribution without carrying the stale #77921 branch drift. Keep the fix to the Inworld runtime default/model list, request-shape test coverage, plugin metadata, and docs. Do not edit CHANGELOG.md for this normal PR; capture release-note context in the PR body.",
  "pr_title": "feat(inworld): default to inworld-tts-2",
  "pr_body": "## Summary\n\nCarries forward @cshape's Inworld TTS-2 update from #77921 on top of current main, without the stale branch drift.\n\n- default unpinned Inworld TTS requests to `inworld-tts-2`\n- keep the older `inworld-tts-1.5-*` and `inworld-tts-1*` model IDs accepted for pinned configs\n- update the plugin manifest and public Inworld TTS docs to match the runtime default\n- add focused request-shape coverage proving the no-`modelId` path resolves to `inworld-tts-2`\n\nCredit: source PR https://github.com/openclaw/openclaw/pull/77921 by @cshape.\n\n## Verification\n\n- `pnpm check:changed`\n- `pnpm test extensions/inworld`\n- `pnpm config:docs:check`\n\n## Notes\n\nThis intentionally does not edit `CHANGELOG.md`; release-note context is captured here for release generation.",
  "likely_files": [
    "extensions/inworld/tts.ts",
    "extensions/inworld/tts.test.ts",
    "extensions/inworld/openclaw.plugin.json",
    "docs/providers/inworld.md",
    "docs/tools/tts.md",
    "docs/.generated/config-baseline.sha256"
  ],
  "validation_commands": [
    "pnpm check:changed",
    "pnpm test extensions/inworld",
    "pnpm config:docs:check"
  ],
  "credit_notes": [
    "Credit @cshape as the source contributor for https://github.com/openclaw/openclaw/pull/77921.",
    "Replacement PR body should state that it carries forward #77921's Inworld TTS-2 default/model-list/docs idea with attribution.",
    "Do not close #77921 until the replacement PR exists and passes focused validation; then close as superseded with explicit credit wording."
  ],
  "source_job": "jobs/openclaw/inbox/repair-77921-single-replan-wave-20260617.md",
  "security_sensitive": false,
  "security_routed_refs": [],
  "needs_human": [],
  "repair_status": null,
  "terminal": null
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #77921 | close_superseded | skipped | superseded | action status is blocked |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| 1 | apply | #77921 | close_superseded | skipped | action status is blocked |
| 2 | apply | #77921 | close_superseded | skipped | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #55972 | keep_closed | skipped | fixed_by_candidate | Already-closed context ref; no closure or mutation is valid. |
| #77921 | close_superseded | blocked | superseded | Close is blocked until a replacement fix PR exists; current source branch is too broad/stale to close or land directly. |
| cluster:repair-77921-single-replan-wave-20260617 | fix_needed | planned |  | A narrow credited replacement PR is the safe executable path. |
| cluster:repair-77921-single-replan-wave-20260617 | build_fix_artifact | planned |  | Build a new narrow fix artifact preserving @cshape credit. |

## Needs Human

- none
