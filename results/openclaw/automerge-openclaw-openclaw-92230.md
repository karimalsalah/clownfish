---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-92230"
mode: "autonomous"
run_id: "27876530859"
workflow_run_id: "27876530859"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27876530859"
head_sha: "16e084b8052e638b3f937e49e3c81c8b676927df"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-20T16:11:40.381Z"
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

Run: [https://github.com/openclaw/clownfish/actions/runs/27876530859](https://github.com/openclaw/clownfish/actions/runs/27876530859)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/92230

## Summary

#92230 is the open canonical PR. It is maintainer-editable, but the latest ClawSweeper review for head 88999c4921eb426c21095300651423e98aed552d blocks automerge on a concrete Telegram compatibility finding, so the executable path is to repair the contributor branch rather than merge or replace it.

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
  "summary": "Repair #92230 on the existing contributor branch by preserving Telegram's dedicated bare /model picker/status flow while keeping the shared /model argsMenu behavior for Slack/Discord. Address the ClawSweeper P1 finding, then re-run focused tests, pnpm check:changed, and a fresh ClawSweeper/Codex review before any later merge router decision.",
  "pr_title": "feat: add model switch choices to /model",
  "pr_body": "What Problem This Solves\n\nAdds configured model choices to the shared /model command metadata so native command surfaces can offer model switching without requiring users to type provider/model values.\n\nWhy This Change Was Made\n\nKeep the shared registry as the source of command argument choices, while preserving Telegram's existing dedicated bare /model picker/status path. Telegram should not lose compact model-picker callbacks or hide long configured model refs just because the shared arg menu exists.\n\nUser Impact\n\nSlack/Discord can expose configured /model choices. Telegram keeps the current /model status/provider-browser behavior and long-model selection compatibility.\n\nEvidence\n\nSource PR: https://github.com/openclaw/openclaw/pull/92230\nClawSweeper blocker addressed: preserve Telegram's dedicated /model picker for model choices.\nValidation to run: node scripts/run-vitest.mjs src/auto-reply/commands-registry.test.ts extensions/discord/src/monitor/native-command.model-picker.test.ts extensions/telegram/src/bot-native-commands.test.ts; pnpm check:changed.",
  "likely_files": [
    "extensions/telegram/src/bot-native-commands.ts",
    "extensions/telegram/src/bot-native-commands.test.ts",
    "extensions/telegram/src/command-ui.ts",
    "extensions/telegram/src/native-command-callback-data.ts",
    "src/auto-reply/commands-registry.shared.ts",
    "src/auto-reply/commands-registry.test.ts",
    "extensions/discord/src/monitor/native-command.ts",
    "extensions/discord/src/monitor/native-command.model-picker.test.ts"
  ],
  "validation_commands": [
    "node scripts/run-vitest.mjs src/auto-reply/commands-registry.test.ts extensions/discord/src/monitor/native-command.model-picker.test.ts extensions/telegram/src/bot-native-commands.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Repair the existing contributor branch for https://github.com/openclaw/openclaw/pull/92230 so @clawSean keeps source PR attribution.",
    "PR body should keep release-note context for the user-facing /model command menu improvement; do not edit CHANGELOG.md for this normal PR repair."
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
| repair_contributor_branch | failed |  |  | validation command failed (pnpm test:serial extensions/discord/src/monitor/native-command.model-picker.test.ts extensions/telegram/src/bot-native-commands.test.ts src/auto-reply/commands-registry.test.ts): $ node scripts/test-projects-serial.mjs extensions/discord/src/monitor/native-command.model-picker.test.ts extensions/telegram/src/bot-native-commands.test.ts src/auto-reply/commands-registry.test.ts [test] starting test/vitest/vitest.auto-reply.config.ts [test] starting test/vitest/vitest.extension-discord.config.ts [31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m [41m[1m FAIL [22m[49m [30m[42m extension-discord [49m[39m extensions/discord/src/monitor/native-command.model-picker.test.ts[2m > [22mDiscord model picker interactions[2m > [22mopens the Discord model picker for bare /model when model choices are configured [31m[1mAssertionError[22m: expected "loadDiscordModelPickerData" to be called with arguments: [ { …(4) }, 'main' ][90m Number of calls: [1m0[22m [31m[39m [36m [2m❯[22m extensions/discord/src/monitor/native-command.model-picker.test.ts:[2m447:21[22m[39m [90m445|[39m await (command as { run: (interaction: unknown) => Promise<void> }… [90m446|[39m [90m447|[39m [34mexpect[39m(loadSpy)[33m.[39m[34mtoHaveBeenCalledWith[39m(cfg[33m,[39m [32m"main"[39m)[33m;[39m [90m |[39m [31m^[39m [90m448|[39m [34mex... |
| repair_contributor_branch | blocked | https://github.com/openclaw/openclaw/pull/92230 |  | validation command failed (pnpm test:serial extensions/discord/src/monitor/native-command.model-picker.test.ts extensions/telegram/src/bot-native-commands.test.ts src/auto-reply/commands-registry.test.ts): $ node scripts/test-projects-serial.mjs extensions/discord/src/monitor/native-command.model-picker.test.ts extensions/telegram/src/bot-native-commands.test.ts src/auto-reply/commands-registry.test.ts [test] starting test/vitest/vitest.auto-reply.config.ts [test] starting test/vitest/vitest.extension-discord.config.ts [31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m [41m[1m FAIL [22m[49m [30m[42m extension-discord [49m[39m extensions/discord/src/monitor/native-command.model-picker.test.ts[2m > [22mDiscord model picker interactions[2m > [22mopens the Discord model picker for bare /model when model choices are configured [31m[1mAssertionError[22m: expected "loadDiscordModelPickerData" to be called with arguments: [ { …(4) }, 'main' ][90m Number of calls: [1m0[22m [31m[39m [36m [2m❯[22m extensions/discord/src/monitor/native-command.model-picker.test.ts:[2m447:21[22m[39m [90m445|[39m await (command as { run: (interaction: unknown) => Promise<void> }… [90m446|[39m [90m447|[39m [34mexpect[39m(loadSpy)[33m.[39m[34mtoHaveBeenCalledWith[39m(cfg[33m,[39m [32m"main"[39m)[33m;[39m [90m |[39m [31m^[39m [90m448|[39m [34mex... |
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
| #92230 | fix_needed | planned | canonical | Repair the existing contributor PR branch to address the latest ClawSweeper finding; do not merge or close because both actions are blocked by the job. |
| cluster:automerge-openclaw-openclaw-92230 | build_fix_artifact | planned |  | Build a narrow executable repair artifact for the existing PR branch. |

## Needs Human

- none
