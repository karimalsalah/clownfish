---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-93351"
mode: "autonomous"
run_id: "27948123982"
workflow_run_id: "27948123982"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27948123982"
head_sha: "35eda120fbf1c547e6043b9e300d395ed4a77fc8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-22T11:07:45.497Z"
canonical: "https://github.com/openclaw/openclaw/pull/93351"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/93351"
actions_total: 5
fix_executed: 1
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-93351

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27948123982](https://github.com/openclaw/clownfish/actions/runs/27948123982)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/93351

## Summary

PR #93351 is the canonical automerge repair target for `openclaw agent --message-file`. Current main at 5dc6e0ea77a0293d16a7a594689c62fd37cc5c80 still requires inline `--message` and has no `message-file`/`message-stdin` symbols. The PR branch is maintainer-editable, but the hydrated artifact shows failing exact-head checks and a ClawSweeper human-review pause, so the safe autonomous result is an executable repair artifact for the contributor branch, not merge or closure. Linked #79182/#79200 are the separate `openclaw message send --message-file` family; #94423 is a broader related agent input PR with stdin plus file input and failing proof.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
| Fix executed | 1 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Repair Candidate

```json
{
  "target": "#93351",
  "source_refs": [
    "#93351",
    "#79200",
    "#94423",
    "#79182"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair the maintainer-editable contributor branch for PR #93351 so the exact head can pass checks and receive a fresh ClawSweeper/Codex review before any separate merge gate. Keep the repair limited to `openclaw agent --message-file`, not separate message-send or stdin work.",
  "pr_title": "feat(cli): add --message-file to openclaw agent",
  "pr_body": "## What Problem This Solves\n\n`openclaw agent` currently requires inline `--message`, which is fragile for long Markdown, code blocks, JSON, and multiline prompts. PR #93351 is the canonical contributor implementation for adding a file-backed message input to the agent CLI, and this repair preserves contributor credit for @ooiuuii and the source PR.\n\n## Why This Change Was Made\n\nThis repair keeps the existing contributor branch as the canonical path and only addresses current exact-head blockers reported by Clownfish/ClawSweeper: failing `checks-node-core-tooling` / `check-test-types`, any stale review-gate issue still present at the current head, and the need for fresh validation. It must stay scoped to `openclaw agent --message-file`; separate message-send and stdin work are related but outside this executable artifact.\n\n## User Impact\n\nUsers can pass multiline agent prompts from a UTF-8 file without shell-escaping the content. Inline `--message` behavior and existing Gateway/local dispatch semantics should remain unchanged.\n\n## Evidence\n\nCurrent main 5dc6e0ea77a0293d16a7a594689c62fd37cc5c80 still has only required inline `--message` for `openclaw agent` and no `message-file`/`message-stdin` symbols. Validate with `pnpm check:changed` plus focused agent CLI parser/runtime tests before requesting fresh ClawSweeper/Codex review.",
  "likely_files": [
    "docs/cli/agent.md",
    "docs/tools/agent-send.md",
    "src/cli/program/register.agent-turn.ts",
    "src/cli/program/register.agent.test.ts",
    "src/commands/agent-via-gateway.ts",
    "src/commands/agent-via-gateway.test.ts"
  ],
  "validation_commands": [
    "pnpm check:changed",
    "pnpm test src/cli/program/register.agent.test.ts src/commands/agent-via-gateway.test.ts"
  ],
  "credit_notes": [
    "Repair source PR https://github.com/openclaw/openclaw/pull/93351 in place; preserve credit and attribution for @ooiuuii as the contributor author and source PR author.",
    "Do not replace the contributor branch unless later live checkout proof shows it cannot be safely updated; if replacement becomes necessary, preserve @ooiuuii attribution in the PR body and closeout plan."
  ],
  "source_job": "jobs/openclaw/outbox/finalized/automerge-openclaw-openclaw-93351.md",
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
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 |
| automerge_repair_outcome_comment | executed | #93351 |  |  |

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
| #93351 | fix_needed | planned | canonical | Repair the maintainer-editable canonical contributor branch to clear failing exact-head checks and review-gate blockers before any later ClawSweeper merge gate. |
| cluster:automerge-openclaw-openclaw-93351 | build_fix_artifact | planned |  | Build a repair-contributor-branch artifact so the executor can fetch the PR branch, inspect failed check logs, fix the smallest current-head issue, run review/validation, and request a fresh ClawSweeper gate. |
| #79182 | keep_related | planned | related | Related message-file ergonomics family, but not the same command or canonical repair target. |
| #79200 | keep_related | planned | related | Related but separate command family with its own active candidate path. |
| #94423 | keep_related | planned | related | Overlapping agent CLI input work, but broader scope and separate proof blockers. |

## Needs Human

- none
