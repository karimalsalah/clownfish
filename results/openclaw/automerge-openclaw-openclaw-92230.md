---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-92230"
mode: "autonomous"
run_id: "27893858727"
workflow_run_id: "27893858727"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27893858727"
head_sha: "b1fa7472156b86d73ef994cc4a4efb3db88d4b66"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-21T05:17:44.525Z"
canonical: "https://github.com/openclaw/openclaw/pull/92230"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/92230"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-92230

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27893858727](https://github.com/openclaw/clownfish/actions/runs/27893858727)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/92230

## Summary

#92230 remains the open canonical PR. It is maintainer-editable, but not merge-ready: the latest hydrated ClawSweeper review reports an actionable Telegram /model reachability regression, the job pins two concrete repair requirements, and merge/close are blocked by job policy. Plan a narrow repair of the existing contributor branch so @clawSean's PR remains the credited source path.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
  "target": "#92230",
  "source_refs": [
    "#92230"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair #92230 on the contributor branch. Keep the shared /model argsMenu feature, but fix the two Clownfish-pinned defects: make the Discord model picker test deterministic by installing/restoring a fixed unbound main route through the existing native-command test seam, and preserve Telegram reachability so bare /model does not emit a partial tgcmd menu that drops long configured model ids.",
  "pr_title": "fix(clownfish): repair model menu automerge for #92230",
  "pr_body": "## What Problem This Solves\n\nRepairs the Clownfish automerge branch for #92230 after ClawSweeper found that Telegram bare `/model` can render a partial native command menu and drop configured models whose callback payload exceeds Telegram limits. It also addresses the pinned Discord test determinism issue.\n\n## Why This Change Was Made\n\n#92230 is the canonical contributor PR by @clawSean for adding configured model choices to `/model`. The branch is maintainer-editable, so the narrowest credited path is to repair the existing PR branch instead of replacing it.\n\n## User Impact\n\nUsers keep the richer `/model` picker behavior, and Telegram users can still select both short and long configured models instead of silently losing long entries from the menu.\n\n## Evidence\n\n- Focused suite: `pnpm test:serial extensions/discord/src/monitor/native-command.plugin-dispatch.test.ts extensions/discord/src/monitor/native-command.model-picker.test.ts extensions/telegram/src/bot-native-commands.test.ts src/auto-reply/commands-registry.test.ts`\n- Changed validation: `pnpm check:changed`\n- Source PR credit: https://github.com/openclaw/openclaw/pull/92230 by @clawSean",
  "likely_files": [
    "extensions/discord/src/monitor/native-command.model-picker.test.ts",
    "extensions/telegram/src/bot-native-commands.ts",
    "extensions/telegram/src/bot-native-commands.test.ts",
    "extensions/telegram/src/command-ui.ts",
    "extensions/telegram/src/native-command-callback-data.ts",
    "src/auto-reply/commands-registry.shared.ts",
    "src/auto-reply/commands-registry.test.ts"
  ],
  "validation_commands": [
    "pnpm test:serial extensions/discord/src/monitor/native-command.plugin-dispatch.test.ts extensions/discord/src/monitor/native-command.model-picker.test.ts extensions/telegram/src/bot-native-commands.test.ts src/auto-reply/commands-registry.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve @clawSean as the source PR author for https://github.com/openclaw/openclaw/pull/92230.",
    "Keep release-note context in the existing PR body or final squash message because the fix is user-visible for /model native command menus.",
    "Do not replay the existing Telegram sanitizer patch unless the repair also proves long configured models remain selectable."
  ],
  "source_job": "jobs/openclaw/inbox/automerge-openclaw-openclaw-92230.md",
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
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/92230 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #92230 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #92230 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #92230 | fix_needed | planned | canonical | Repair the existing contributor PR branch to address the actionable ClawSweeper finding and pinned test determinism issue; do not merge or close because both actions are blocked by job policy. |
| cluster:automerge-openclaw-openclaw-92230 | build_fix_artifact | planned |  | Build a narrow executable repair artifact for the current #92230 branch instead of opening a replacement PR. |

## Needs Human

- none
