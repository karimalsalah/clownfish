---
repo: "openclaw/openclaw"
cluster_id: "repair-93869-qr-ci"
mode: "autonomous"
run_id: "27705472684"
workflow_run_id: "27705472684"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27705472684"
head_sha: "11055a7e49bd4d7a4f5c6d331788c99e8595d963"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T16:56:26.461Z"
canonical: "#93869"
canonical_issue: null
canonical_pr: "#93869"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# repair-93869-qr-ci

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27705472684](https://github.com/openclaw/clownfish/actions/runs/27705472684)

Workflow conclusion: success

Worker result: planned

Canonical: #93869

## Summary

Plan a narrow repair of canonical PR #93869 on the existing clownfish/repair-51868-qr-rendering branch. #51868 remains open as credited source context and is not altered. No close, comment, label, merge, or new PR action is planned.

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
  "summary": "Repair existing PR #93869 on branch clownfish/repair-51868-qr-rendering so QR/block-art data-code payloads preserve leading quiet-zone spaces through DOM parsing and clipboard copy. Encode only block-art clipboard payloads with a deterministic marked representation in markdown rendering, decode marked payloads before copyToClipboard, and keep raw data-code support for existing non-marked payloads.",
  "pr_title": "UI: render half-block QR output in web chat",
  "pr_body": "## Summary\n- Repairs the existing #93869 branch only; no second replacement PR.\n- Encodes only block-art data-code payloads with a deterministic marked representation so leading quiet-zone spaces survive DOM parsing.\n- Decodes marked block-art payloads before copyToClipboard while retaining support for existing raw payloads.\n- Adds focused coverage proving rendered DOM and clipboard copy preserve the two leading quiet-zone spaces for normal and truncated QR art.\n\n## Credit\nThis continues to carry forward the fix idea, reproduction, and proof from @emg110 in https://github.com/openclaw/openclaw/pull/51868.\n\n## Validation\n- pnpm test:serial ui/src/ui/markdown.test.ts ui/src/ui/chat/grouped-render.test.ts ui/src/ui/views/chat.test.ts\n- pnpm check:changed\n- git diff --check\n- Codex /review",
  "likely_files": [
    "ui/src/ui/markdown.ts",
    "ui/src/ui/views/chat.ts",
    "ui/src/ui/markdown.test.ts",
    "ui/src/ui/views/chat.test.ts",
    "ui/src/ui/chat/grouped-render.test.ts",
    "ui/src/ui/chat/code-block-copy-payload.ts"
  ],
  "validation_commands": [
    "pnpm test:serial ui/src/ui/markdown.test.ts ui/src/ui/chat/grouped-render.test.ts ui/src/ui/views/chat.test.ts",
    "pnpm check:changed",
    "git diff --check",
    "Codex /review"
  ],
  "credit_notes": [
    "Preserve #93869 as the existing credited replacement PR.",
    "Carry forward credit for @emg110 and source PR https://github.com/openclaw/openclaw/pull/51868 in PR body/commit context.",
    "Do not alter, close, label, or comment on #51868."
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
| #93869 | fix_needed | planned | canonical | Canonical PR #93869 needs a focused CI repair on its existing branch before validation can proceed; merge and close actions are blocked by job policy. |
| #51868 | keep_related | planned | fixed_by_candidate | Keep #51868 open and untouched as the credited source PR while #93869 owns the repair path. |
| cluster:repair-93869-qr-ci | build_fix_artifact | planned |  | A complete same-branch repair artifact is safe and executable; the executor should update #93869 rather than open a second replacement PR. |

## Needs Human

- none
