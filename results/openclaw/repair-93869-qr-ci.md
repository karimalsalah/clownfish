---
repo: "openclaw/openclaw"
cluster_id: "repair-93869-qr-ci"
mode: "autonomous"
run_id: "27756675926"
workflow_run_id: "27756675926"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27756675926"
head_sha: "7ed621f36b5608521fede215ccb9eecfc855e65f"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-18T11:47:32.569Z"
canonical: "https://github.com/openclaw/openclaw/pull/93869"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/93869"
actions_total: 3
fix_executed: 0
fix_failed: 1
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# repair-93869-qr-ci

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27756675926](https://github.com/openclaw/clownfish/actions/runs/27756675926)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/93869

## Summary

Prepared a scoped repair for canonical PR #93869 on `clownfish/repair-51868-qr-rendering`. The patch keeps normal code-block `data-code` payloads raw, marks only QR/block-art payloads with `data-code-encoding="block-art-json"`, decodes only marked payloads before clipboard copy, preserves legacy raw payload behavior, and adds focused coverage for normal, truncated, and encoded-looking raw copy cases. No GitHub comments, labels, closures, merges, PR creation, or pushes were performed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Repair Candidate

```json
{
  "target": "#93869",
  "source_refs": [
    "#93869",
    "#51868"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair #93869 so only QR/block-art copy payloads are encoded and explicitly marked, while ordinary code-block payloads and existing raw `data-code` values remain raw. Decode only marked block-art payloads in the chat copy handler so leading quiet-zone spaces survive DOM parsing without mis-decoding normal code snippets.",
  "pr_title": "UI: render half-block QR output in web chat",
  "pr_body": "## Summary\n- Repairs the existing #93869 branch so QR/block-art copy payloads preserve leading quiet-zone spaces after DOM parsing.\n- Keeps ordinary code-block `data-code` payloads raw and marks only block-art payloads with `data-code-encoding=\"block-art-json\"`.\n- Decodes only marked block-art payloads in the chat copy handler, while retaining support for existing raw payloads.\n- Adds focused coverage for normal block-art copy, truncated block-art copy, normal raw code copy, and encoded-looking raw payloads.\n\n## Credit\nThis continues to carry forward the original fix idea and reproduction from @emg110 in https://github.com/openclaw/openclaw/pull/51868. Thanks @emg110 for the source PR and proof.\n\n## Verification\n- `node scripts/run-vitest.mjs ui/src/ui/markdown.test.ts ui/src/ui/chat/grouped-render.test.ts ui/src/ui/views/chat.test.ts`\n- `corepack pnpm exec oxfmt --check --threads=1 ui/src/ui/markdown.ts ui/src/ui/views/chat.ts ui/src/ui/markdown.test.ts ui/src/ui/views/chat.test.ts`\n- `git diff --check`\n- Codex autoreview: clean, no accepted/actionable findings\n\n## Follow-up gate\nRun `pnpm check:changed` after applying/pushing in a normal checkout; this worker checkout had shallow-branch merge-base limitations that made changed-lane detection over-broad.",
  "likely_files": [
    "ui/src/ui/markdown.ts",
    "ui/src/ui/views/chat.ts",
    "ui/src/ui/markdown.test.ts",
    "ui/src/ui/views/chat.test.ts"
  ],
  "validation_commands": [
    "node scripts/run-vitest.mjs ui/src/ui/markdown.test.ts ui/src/ui/chat/grouped-render.test.ts ui/src/ui/views/chat.test.ts",
    "corepack pnpm exec oxfmt --check --threads=1 ui/src/ui/markdown.ts ui/src/ui/views/chat.ts ui/src/ui/markdown.test.ts ui/src/ui/views/chat.test.ts",
    "git diff --check",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve @emg110 credit from source PR https://github.com/openclaw/openclaw/pull/51868 in PR body/release-note context.",
    "Keep #93869 as the canonical writable replacement branch; do not open a second replacement PR.",
    "No CHANGELOG.md edit; release-note context belongs in the PR body or squash message."
  ],
  "source_job": "jobs/openclaw/inbox/repair-93869-qr-ci.md",
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
| execute_fix | failed |  |  | unsupported validation command: corepack pnpm exec oxfmt --check --threads=1 ui/src/ui/markdown.ts ui/src/ui/views/chat.ts ui/src/ui/markdown.test.ts ui/src/ui/views/chat.test.ts |

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
| #93869 | fix_needed | planned | canonical | PR #93869 is the writable canonical replacement path for the QR/block-art rendering fix and needs this branch repair before maintainer review. |
| #51868 | keep_related | planned | superseded | #51868 remains the credited source context; no close/comment/label action is allowed or needed in this run. |
| cluster:repair-93869-qr-ci | build_fix_artifact | planned |  | Existing canonical branch should be updated; no second replacement PR should be opened. |

## Needs Human

- none
