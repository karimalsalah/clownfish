---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-92230"
mode: "autonomous"
run_id: "27893247570"
workflow_run_id: "27893247570"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27893247570"
head_sha: "ea9e242e08a6006a9751cb4c522fee9e4ac24cb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-21T04:22:05.834Z"
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

Run: [https://github.com/openclaw/clownfish/actions/runs/27893247570](https://github.com/openclaw/clownfish/actions/runs/27893247570)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/92230

## Summary

#92230 is the open canonical PR for adding model switch choices to /model. It is maintainer-editable, but it is not merge-ready: the latest hydrated ClawSweeper review reports an actionable Telegram compatibility issue on the PR head, and relevant checks include failures. Because the job permits fix/raise_pr but blocks close/merge, the executable path is to repair the existing contributor branch and preserve @clawSean's source PR credit.

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
  "summary": "Repair #92230 in place so Telegram native /model argument menus do not degrade into partial menus when one or more configured choices cannot fit Telegram callback-data limits. The branch should keep the shared /model choices feature, preserve Discord behavior, and fall back to the existing Telegram browse/status path when a complete native menu cannot be encoded safely.",
  "pr_title": "feat: add model switch choices to /model",
  "pr_body": "What Problem This Solves\n\nAdds configured model choices to the native /model command while keeping Telegram behavior compatible with callback-data limits.\n\nWhy This Change Was Made\n\nThe source PR from @clawSean teaches the shared command registry to expose configured provider/model choices. Clownfish should repair the existing branch in place so Telegram only sends a native argument menu when every rendered choice can be encoded safely; otherwise it should fall back to the existing model browse/status path instead of sending a partial menu.\n\nUser Impact\n\nSlack/Discord-style native command menus can present model picks for /model, and Telegram users avoid incomplete model menus when long provider/model refs exceed Telegram callback limits.\n\nEvidence\n\nSource PR: https://github.com/openclaw/openclaw/pull/92230\nPlanned validation: node scripts/run-vitest.mjs extensions/telegram/src/bot-native-commands.test.ts extensions/discord/src/monitor/native-command.model-picker.test.ts src/auto-reply/commands-registry.test.ts; pnpm check:changed\nClawSweeper blocker to address: Telegram currently skips over-limit choices and still sends a partial /model menu instead of falling back to the browse picker.",
  "likely_files": [
    "extensions/telegram/src/bot-native-commands.ts",
    "extensions/telegram/src/bot-native-commands.test.ts",
    "extensions/telegram/src/command-ui.ts",
    "extensions/telegram/src/native-command-callback-data.ts",
    "extensions/discord/src/monitor/native-command.model-picker.test.ts",
    "src/auto-reply/commands-registry.test.ts"
  ],
  "validation_commands": [
    "node scripts/run-vitest.mjs extensions/telegram/src/bot-native-commands.test.ts extensions/discord/src/monitor/native-command.model-picker.test.ts src/auto-reply/commands-registry.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve @clawSean as the original contributor for https://github.com/openclaw/openclaw/pull/92230.",
    "Keep repair commits on the existing maintainer-editable PR branch when possible so attribution and discussion remain on the source PR.",
    "Release-note context should credit the contributor-visible behavior: /model can offer configured model choices while Telegram falls back safely when native callback limits would otherwise produce an incomplete menu."
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
| #92230 | fix_needed | planned | canonical | Repair the existing contributor PR branch to address the ClawSweeper Telegram compatibility finding and failing relevant checks; do not merge or close because both actions are blocked by the job. |
| cluster:automerge-openclaw-openclaw-92230 | build_fix_artifact | planned |  | Build an executable repair plan for the existing PR branch rather than a replacement branch. |

## Needs Human

- none
