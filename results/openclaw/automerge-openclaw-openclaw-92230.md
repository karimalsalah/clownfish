---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-92230"
mode: "autonomous"
run_id: "27894555181"
workflow_run_id: "27894555181"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27894555181"
head_sha: "306206110d176b48c730d607289f8916e9fc84dc"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-21T06:02:15.808Z"
canonical: "https://github.com/openclaw/openclaw/pull/92230"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/92230"
actions_total: 2
fix_executed: 1
fix_failed: 1
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-92230

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27894555181](https://github.com/openclaw/clownfish/actions/runs/27894555181)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/92230

## Summary

#92230 remains the canonical open PR for adding configured model choices to /model. The branch is maintainer-editable, the hydrated item is not security-sensitive, and close/merge are blocked by the job, so the executable path is a narrow repair of the existing contributor PR branch at e012d5b51d99919f76ea8b8ed9c101a5bf66065f.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 1 |
| Fix failed | 1 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Repair Candidate

```json
{
  "target": "#92230",
  "source_refs": [
    "#92230"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair #92230 in place at head e012d5b51d99919f76ea8b8ed9c101a5bf66065f. Preserve the fresh /model picker work, but first route bare Discord /model through the configured binding readiness guard before picker loading/replying, and make Telegram fall back from oversized tgcmd model-choice keyboards to the established /model browse/compact mdl_sel controls so long models remain selectable.",
  "pr_title": "feat: add model switch choices to /model",
  "pr_body": "## What Problem This Solves\n\nRepairs the existing #92230 /model picker branch so native model choices remain safe across Discord configured ACP bindings and Telegram callback-size limits.\n\n## Why This Change Was Made\n\nClownfish is keeping @clawSean's contributor PR as the canonical lane. The repair should preserve the fresh model-picker implementation while ensuring bare Discord /model uses the same configured-binding readiness guard as normal command dispatch, and Telegram long model IDs fall back to the established /model browse/compact mdl_sel controls instead of emitting a partial tgcmd keyboard.\n\n## User Impact\n\nUsers can open model choices from native command surfaces without bypassing unavailable configured bindings, and Telegram users can still reach long model IDs that cannot fit native command callback data.\n\n## Evidence\n\nRequired focused proof:\n\n- pnpm test:serial extensions/discord/src/monitor/native-command.plugin-dispatch.test.ts extensions/discord/src/monitor/native-command.model-picker.test.ts extensions/telegram/src/bot-native-commands.test.ts src/auto-reply/commands-registry.test.ts\n- pnpm check:changed\n\nSource PR and attribution: https://github.com/openclaw/openclaw/pull/92230 by @clawSean.",
  "likely_files": [
    "extensions/discord/src/monitor/native-command.ts",
    "extensions/discord/src/monitor/native-command.model-picker.test.ts",
    "extensions/telegram/src/bot-native-commands.ts",
    "extensions/telegram/src/bot-native-commands.test.ts",
    "src/auto-reply/commands-registry.test.ts"
  ],
  "validation_commands": [
    "pnpm test:serial extensions/discord/src/monitor/native-command.plugin-dispatch.test.ts extensions/discord/src/monitor/native-command.model-picker.test.ts extensions/telegram/src/bot-native-commands.test.ts src/auto-reply/commands-registry.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve @clawSean as the original contributor for https://github.com/openclaw/openclaw/pull/92230.",
    "Keep repair commits on the existing PR branch so the source PR, review context, and contributor credit stay together.",
    "Do not edit CHANGELOG.md; release-note context belongs in the PR body or eventual squash message if this user-visible feature lands."
  ],
  "source_job": "jobs/openclaw/inbox/automerge-openclaw-openclaw-92230.md",
  "security_sensitive": false,
  "security_routed_refs": [],
  "needs_human": [],
  "repair_status": "executed",
  "terminal": true
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | fix execution deadline exceeded before Codex /review; 136606ms remains, 90000ms reserved for report upload |
| repair_contributor_branch | blocked | https://github.com/openclaw/openclaw/pull/92230 |  | fix execution deadline exceeded before Codex /review; 136606ms remains, 90000ms reserved for report upload |
| automerge_repair_outcome_comment | executed | #92230 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #92230 | fix_needed | planned | canonical | Repair the existing contributor PR branch; do not replace, close, or merge. |
| cluster:automerge-openclaw-openclaw-92230 | build_fix_artifact | planned |  | Executable repair artifact for the canonical contributor branch. |

## Needs Human

- none
