---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-93351"
mode: "autonomous"
run_id: "27948868456"
workflow_run_id: "27948868456"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27948868456"
head_sha: "d12cfe31acf39da99365d7ac1c73013e143ae6c9"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-22T11:48:18.449Z"
canonical: "https://github.com/openclaw/openclaw/pull/93351"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/93351"
actions_total: 5
fix_executed: 1
fix_failed: 1
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-93351

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27948868456](https://github.com/openclaw/clownfish/actions/runs/27948868456)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/93351

## Summary

PR #93351 is the canonical automerge repair target for the bounded `openclaw agent --message-file` work. Current main at f378de9d5ba9d5fc8637de7fe443d4dfbd516a0b still has required inline `--message` only, while the maintainer-editable PR branch has failing exact-head checks and a ClawSweeper human-review pause, so the executable path is to repair the contributor branch, not merge or close. #79182/#79200 are the separate `openclaw message send --message-file` family, and #94423 is related but broader agent input work with stdin plus file input; those related refs are not part of the executable repair artifact.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
  "summary": "Repair contributor PR #93351 in place so `openclaw agent` can accept `--message-file <path>` without breaking inline `--message`, slash-command rejection, Gateway dispatch, or local embedded dispatch. Keep the scope to the current PR files and the failing exact-head checks.",
  "pr_title": "feat(cli): add --message-file to openclaw agent",
  "pr_body": "What Problem This Solves\n\n`openclaw agent` currently requires inline `--message`, which is fragile for multiline prompts, Markdown/code blocks, JSON, and shell-specific quoting. PR #93351 is the canonical narrow implementation for reading the agent message from a UTF-8 file.\n\nWhy This Change Was Made\n\nThis repair should update the maintainer-editable contributor branch for #93351 only. Keep `--message` behavior unchanged, preserve exact file content after the input boundary, reject conflicting or invalid message inputs, and ensure file-backed `/compact` is rejected through the same command guard before Gateway or embedded dispatch.\n\nUser Impact\n\nUsers can call `openclaw agent --agent ops --message-file ./task.md` without shell-escaping a long prompt. Existing inline `--message` calls should continue to behave as they do on main.\n\nEvidence\n\nCurrent main f378de9d5ba9d5fc8637de7fe443d4dfbd516a0b still requires inline `--message` in `src/cli/program/register.agent-turn.ts` and has no `--message-file` or `--message-stdin` symbols in the agent CLI path. Hydrated PR #93351 is open, maintainer-editable, and head cd05d4a0224e681324b6aed29f46f9dad915de5e, but exact-head checks currently fail on `checks-node-core-tooling` and `check-test-types`; rerun `pnpm check:changed` after repair.\n\nCredit\n\nThis is a repair of source PR #93351 and should preserve @ooiuuii's authorship and attribution on the contributor branch.",
  "likely_files": [
    "src/cli/program/register.agent-turn.ts",
    "src/cli/program/register.agent.test.ts",
    "src/commands/agent-via-gateway.ts",
    "src/commands/agent-via-gateway.test.ts",
    "docs/cli/agent.md",
    "docs/tools/agent-send.md"
  ],
  "validation_commands": [
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Repair the existing maintainer-editable contributor branch for #93351; preserve @ooiuuii as the PR author and source of the implementation.",
    "Do not borrow the broader stdin scope from #94423 in this repair; keep that contributor work as a related follow-up unless a maintainer explicitly asks to combine.",
    "Do not borrow the separate `openclaw message send --message-file` implementation from #79200 in this repair; keep that contributor work on its own command surface."
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
| repair_contributor_branch | failed |  |  | Codex /review did not pass after 2 attempt(s): Blocked on one changed-surface regression. Security-sensitive issues appear absent in the reviewed diff, and the supplied validation command (`pnpm check:changed`) is sufficient for this surface, but inline `--message` behavior no longer matches `origin/main` despite the artifact requiring it to stay unchanged. |
| repair_contributor_branch | blocked | https://github.com/openclaw/openclaw/pull/93351 |  | Codex /review did not pass after 2 attempt(s): Blocked on one changed-surface regression. Security-sensitive issues appear absent in the reviewed diff, and the supplied validation command (`pnpm check:changed`) is sufficient for this surface, but inline `--message` behavior no longer matches `origin/main` despite the artifact requiring it to stay unchanged. |
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
| #93351 | fix_needed | planned | canonical | Repair the maintainer-editable contributor branch and rerun changed validation; do not merge or close from this worker. |
| cluster:automerge-openclaw-openclaw-93351 | build_fix_artifact | planned |  | Create an executable repair artifact for the canonical PR branch only. |
| #79182 | keep_related | planned | related | Related CLI ergonomics family, but different command surface and canonical path. |
| #79200 | keep_related | planned | related | Separate command surface; keep out of this automerge repair cluster. |
| #94423 | keep_related | planned | related | Related broader follow-up, not the narrow automerge repair target. |

## Needs Human

- none
