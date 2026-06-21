---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-92230"
mode: "autonomous"
run_id: "27897196416"
workflow_run_id: "27897196416"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27897196416"
head_sha: "f88562ba4b45ffade560e416536c50c7a9a7542e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-21T07:46:31.442Z"
canonical: "https://github.com/openclaw/openclaw/pull/92230"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/92230"
actions_total: 3
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

Run: [https://github.com/openclaw/clownfish/actions/runs/27897196416](https://github.com/openclaw/clownfish/actions/runs/27897196416)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/92230

## Summary

#92230 remains the open canonical PR and is maintainer-editable, but the pinned repair requirements identify two remaining code/test defects at head 25949bd916f46682a8fa120ccb878346e498af97. Close and merge are blocked by the job, so the safe executable path is a narrow repair of the existing contributor branch. #94067 is already closed and merged, and is only historical related context.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
    "#92230",
    "#94067"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair #92230 in place. Move bare Discord /model picker handling behind the configured ACP binding readiness route guard so unavailable configured bindings return the existing unavailable response without loading picker data or sending picker UI. Strengthen Telegram long-model coverage so over-budget /model choices fall back through provider browse and the provider list path exposes a usable mdl_sel selection route for the long model, while short-model tgcmd callbacks remain unchanged.",
  "pr_title": "fix(clownfish): repair model menu automerge for #92230",
  "pr_body": "What Problem This Solves\n\n#92230 adds configured model choices to /model, but the pinned automerge repair pass still needs two bounded fixes before review can continue: bare Discord /model must honor configured ACP binding readiness before opening the picker, and Telegram long-model proof must demonstrate a reachable mdl_sel route after provider browse rather than only proving mdl_prov appears.\n\nWhy This Change Was Made\n\nThis repair keeps the existing contributor PR branch as the canonical review lane and limits changes to the two remaining Clownfish repair requirements. It should preserve the existing unavailable configured-binding response, avoid exposing picker data when the binding is unavailable, and keep Telegram short-model callbacks unchanged while proving the long-model fallback remains selectable.\n\nUser Impact\n\nDiscord users with an unavailable configured ACP binding should see the same unavailable-binding response for bare /model that they get for the normal command path. Telegram users should still be able to reach and select long configured model IDs through the provider browse flow when direct callback data would exceed Telegram's limit.\n\nEvidence\n\nPlanned focused validation:\n\npnpm test:serial extensions/discord/src/monitor/native-command.plugin-dispatch.test.ts extensions/discord/src/monitor/native-command.model-picker.test.ts extensions/telegram/src/bot-native-commands.test.ts src/auto-reply/commands-registry.test.ts\n\npnpm check:changed\n\nCredit\n\nBuilt on @clawSean's source PR: https://github.com/openclaw/openclaw/pull/92230. Clownfish repair scope is limited to the pinned automerge findings.",
  "likely_files": [
    "extensions/discord/src/monitor/native-command.ts",
    "extensions/discord/src/monitor/native-command.model-picker.test.ts",
    "extensions/discord/src/monitor/native-command.plugin-dispatch.test.ts",
    "extensions/telegram/src/bot-native-commands.ts",
    "extensions/telegram/src/bot-native-commands.test.ts",
    "extensions/telegram/src/command-ui.ts",
    "extensions/telegram/src/native-command-callback-data.ts",
    "src/auto-reply/commands-registry.test.ts"
  ],
  "validation_commands": [
    "pnpm test:serial extensions/discord/src/monitor/native-command.plugin-dispatch.test.ts extensions/discord/src/monitor/native-command.model-picker.test.ts extensions/telegram/src/bot-native-commands.test.ts src/auto-reply/commands-registry.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Repair the existing maintainer-editable contributor branch for #92230 rather than replacing it.",
    "Keep @clawSean credited as the original contributor for https://github.com/openclaw/openclaw/pull/92230.",
    "Mention in any repair PR/body/comment that Clownfish only added the bounded automerge repair on top of @clawSean's source PR."
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
| repair_contributor_branch | failed |  |  | validation command failed (pnpm test:serial extensions/discord/src/monitor/native-command.plugin-dispatch.test.ts extensions/discord/src/monitor/native-command.model-picker.test.ts extensions/telegram/src/bot-native-commands.test.ts src/auto-reply/commands-registry.test.ts): $ node scripts/test-projects-serial.mjs extensions/discord/src/monitor/native-command.plugin-dispatch.test.ts extensions/discord/src/monitor/native-command.model-picker.test.ts extensions/telegram/src/bot-native-commands.test.ts src/auto-reply/commands-registry.test.ts [test] starting test/vitest/vitest.auto-reply.config.ts [test] starting test/vitest/vitest.extension-discord.config.ts [test] starting test/vitest/vitest.extension-telegram.config.ts [31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m [41m[1m FAIL [22m[49m [30m[43m extension-telegram [49m[39m extensions/telegram/src/bot-native-commands.test.ts[2m > [22mregisterTelegramNativeCommands[2m > [22mfalls back to model browse controls when configured model callbacks exceed Telegram limits [31m[1mAssertionError[22m: expected [ …(3) ] to deep equally contain [ { …(2) } ][39m [32m- Expected[39m [31m+ Received[39m [2m [[22m [31m+ [[39m [2m {[22m [32m- "callback_data": "mdl_sel/nousresearch/hermes-3-llama-3.1-405b:extended",[39m [31m+ "callback_data": "mdl_sel_openrouter/short-model",[39m [31m+ "text": "short-model",[39m [31m+ },[39m [31m+ ],[39m [31m+ [[39m [31m+ {[39m... |
| repair_contributor_branch | blocked | https://github.com/openclaw/openclaw/pull/92230 |  | validation command failed (pnpm test:serial extensions/discord/src/monitor/native-command.plugin-dispatch.test.ts extensions/discord/src/monitor/native-command.model-picker.test.ts extensions/telegram/src/bot-native-commands.test.ts src/auto-reply/commands-registry.test.ts): $ node scripts/test-projects-serial.mjs extensions/discord/src/monitor/native-command.plugin-dispatch.test.ts extensions/discord/src/monitor/native-command.model-picker.test.ts extensions/telegram/src/bot-native-commands.test.ts src/auto-reply/commands-registry.test.ts [test] starting test/vitest/vitest.auto-reply.config.ts [test] starting test/vitest/vitest.extension-discord.config.ts [test] starting test/vitest/vitest.extension-telegram.config.ts [31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m [41m[1m FAIL [22m[49m [30m[43m extension-telegram [49m[39m extensions/telegram/src/bot-native-commands.test.ts[2m > [22mregisterTelegramNativeCommands[2m > [22mfalls back to model browse controls when configured model callbacks exceed Telegram limits [31m[1mAssertionError[22m: expected [ …(3) ] to deep equally contain [ { …(2) } ][39m [32m- Expected[39m [31m+ Received[39m [2m [[22m [31m+ [[39m [2m {[22m [32m- "callback_data": "mdl_sel/nousresearch/hermes-3-llama-3.1-405b:extended",[39m [31m+ "callback_data": "mdl_sel_openrouter/short-model",[39m [31m+ "text": "short-model",[39m [31m+ },[39m [31m+ ],[39m [31m+ [[39m [31m+ {[39m... |
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
| #92230 | fix_needed | planned | canonical | Repair the existing contributor PR branch at the pinned head; do not replace, close, or merge. |
| cluster:automerge-openclaw-openclaw-92230 | build_fix_artifact | planned |  | Create an executable repair plan for the canonical contributor branch. |
| #94067 | keep_closed | skipped | related | Already closed refs are evidence only; no mutation is valid. |

## Needs Human

- none
