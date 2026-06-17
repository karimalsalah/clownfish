---
repo: "openclaw/openclaw"
cluster_id: "refresh-codex-prompt-snapshots"
mode: "autonomous"
run_id: "27705469886"
workflow_run_id: "27705469886"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27705469886"
head_sha: "11055a7e49bd4d7a4f5c6d331788c99e8595d963"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T16:56:26.444Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# refresh-codex-prompt-snapshots

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27705469886](https://github.com/openclaw/clownfish/actions/runs/27705469886)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan a standalone Clownfish fix PR on clownfish/refresh-codex-prompt-snapshots to regenerate only the six stale Codex prompt snapshot fixture files from current main. No GitHub close/comment/label/merge actions are planned; #93222 remains evidence only per job guardrails.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Repair Candidate

```json
{
  "target": "#93222",
  "source_refs": [
    "#93222",
    "#85745"
  ],
  "repair_strategy": "new_fix_pr",
  "planned_actions": [
    "build_fix_artifact",
    "open_fix_pr"
  ],
  "summary": "Regenerate the six stale Codex runtime prompt snapshot fixture outputs after the dynamic-tool serialization change introduced by ab1e5832d2fb218e0dca562a79509a09819717ea. Start from current origin/main, verify that commit is an ancestor, run the repo-native snapshot generator, and stage only the six expected generated files.",
  "pr_title": "test: refresh Codex prompt snapshots",
  "pr_body": "## Summary\n\nRegenerates the stale Codex runtime prompt snapshot outputs after the dynamic-tool serialization change from legacy flat tool specs to the canonical direct-function and namespaced deferred-tool shape.\n\nOnly the six requested generated fixture files are changed.\n\n## Validation\n\n- `git merge-base --is-ancestor ab1e5832d2fb218e0dca562a79509a09819717ea origin/main`\n- `pnpm prompt:snapshots:gen`\n- `pnpm prompt:snapshots:check`\n- `pnpm -s vitest run test/agents/codex-dynamic-tools.test.ts test/agents/prompt-snapshots.test.ts`\n\nCluster: refresh-codex-prompt-snapshots\nEvidence PR: #93222",
  "likely_files": [
    "test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/telegram-direct-codex-message-tool.md",
    "test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/discord-group-codex-message-tool.md",
    "test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/telegram-heartbeat-codex-tool.md",
    "test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.telegram-direct.json",
    "test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.discord-group.json",
    "test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.heartbeat-turn.json"
  ],
  "validation_commands": [
    "git merge-base --is-ancestor ab1e5832d2fb218e0dca562a79509a09819717ea origin/main",
    "pnpm prompt:snapshots:gen",
    "git diff --name-only -- test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/telegram-direct-codex-message-tool.md test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/discord-group-codex-message-tool.md test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/telegram-heartbeat-codex-tool.md test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.telegram-direct.json test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.discord-group.json test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.heartbeat-turn.json",
    "pnpm prompt:snapshots:check",
    "pnpm -s vitest run test/agents/codex-dynamic-tools.test.ts test/agents/prompt-snapshots.test.ts"
  ],
  "credit_notes": [
    "This is a current-main generated-fixture refresh, not a repair or replacement of a contributor branch.",
    "#93222 must remain evidence only and must not be updated, commented on, labeled, closed, or merged by this job."
  ],
  "source_job": "jobs/openclaw/inbox/refresh-codex-prompt-snapshots.md",
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
| _None_ |  |  |  |  |

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
| #93222 | keep_related | planned | related | #93222 is useful context for the failing baseline but is not the target of this standalone generated-fixture fix. |
| cluster:refresh-codex-prompt-snapshots | build_fix_artifact | planned |  | A narrow replacement fix PR is allowed and required for the generated snapshot regression. |
| cluster:refresh-codex-prompt-snapshots | open_fix_pr | planned |  | The deterministic fix executor should create or update the guarded Clownfish branch and open no more than one standalone PR after validation and Codex review pass. |

## Needs Human

- none
