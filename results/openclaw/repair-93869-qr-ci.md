---
repo: "openclaw/openclaw"
cluster_id: "repair-93869-qr-ci"
mode: "autonomous"
run_id: "27757481003"
workflow_run_id: "27757481003"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27757481003"
head_sha: "d730f0cbc462f57aa2161024bc0f8b9478f5a07b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-18T12:14:03.614Z"
canonical: "https://github.com/openclaw/openclaw/pull/93869"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/93869"
actions_total: 3
fix_executed: 0
fix_failed: 1
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# repair-93869-qr-ci

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27757481003](https://github.com/openclaw/clownfish/actions/runs/27757481003)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/93869

## Summary

PR #93869 is the canonical writable repair path for the QR/block-art rendering work originally contributed in #51868. The hydrated preflight artifact marks #93869 and #51868 as open pull requests with `security_sensitive: false`; the validator reported #93869 as security-sensitive, but the job security repair rule forbids converting that into `route_security` because the matching hydrated item is explicitly non-security-sensitive. To avoid a mutating/ref-target repair action against the disputed target while preserving the executable non-security fix lane, #93869 is kept as canonical and the cluster-scoped fix artifact remains the repair path for the existing `clownfish/repair-51868-qr-rendering` branch. No GitHub comment, label, close, merge, or new PR is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 1 |
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
    "build_fix_artifact"
  ],
  "summary": "Repair existing PR #93869 on branch `clownfish/repair-51868-qr-rendering` so QR/block-art copy payloads preserve leading quiet-zone spaces after DOM parsing. Encode only marked block-art `data-code` payloads in the markdown renderer, decode those marked payloads in the chat copy handler before `copyToClipboard`, keep raw `data-code` payload compatibility, and update the grouped-render markdown mock export plus focused tests.",
  "pr_title": "UI: render half-block QR output in web chat",
  "pr_body": "## Summary\n- Repairs the existing #93869 branch so half-block QR/block-art `data-code` copy payloads preserve leading quiet-zone spaces after HTML parsing.\n- Encodes only marked block-art copy payloads in `ui/src/ui/markdown.ts`, decodes those marked payloads in `ui/src/ui/views/chat.ts` before `copyToClipboard`, and keeps existing raw payloads working.\n- Updates the `../markdown.ts` mock in `ui/src/ui/chat/grouped-render.test.ts` to include `isMarkdownBlockArtText`.\n- Adds focused coverage proving normal and truncated QR/block-art copy behavior preserves the two leading quiet-zone spaces through rendered DOM and the clipboard handler.\n\n## Credit\nThis continues the replacement path for #51868 and preserves attribution for @emg110's original report, implementation direction, and proof. Thanks @emg110; #51868 remains the source PR for contributor credit.\n\n## Validation\n- `node scripts/run-vitest.mjs ui/src/ui/markdown.test.ts ui/src/ui/chat/grouped-render.test.ts ui/src/ui/views/chat.test.ts`\n- `pnpm check:changed`\n- `git diff --check`\n\n## Notes\nDo not update prompt snapshots, ClawHub cleanup behavior, or unrelated tests; those failures are called out as current-main drift unrelated to this QR/block-art repair.",
  "likely_files": [
    "ui/src/ui/markdown.ts",
    "ui/src/ui/markdown.test.ts",
    "ui/src/ui/chat/grouped-render.test.ts",
    "ui/src/ui/views/chat.ts",
    "ui/src/ui/views/chat.test.ts"
  ],
  "validation_commands": [
    "node scripts/run-vitest.mjs ui/src/ui/markdown.test.ts ui/src/ui/chat/grouped-render.test.ts ui/src/ui/views/chat.test.ts",
    "pnpm check:changed",
    "git diff --check"
  ],
  "credit_notes": [
    "Preserve attribution from #93869 body: this carries forward the fix idea and reproduction from @emg110 in https://github.com/openclaw/openclaw/pull/51868.",
    "Do not alter #51868; keep it as source PR/proof/credit context.",
    "PR body/release-note context should continue thanking @emg110 for the original report, implementation direction, and proof."
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
| repair_contributor_branch | failed |  |  | fix execution deadline exceeded before git diff --name-only origin/main...HEAD; 89934ms remains, 90000ms reserved for report upload |
| execute_fix | blocked |  |  | fix execution deadline exceeded before git diff --name-only origin/main...HEAD; 89934ms remains, 90000ms reserved for report upload |

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
| #93869 | keep_canonical | planned | canonical | Downgraded the ref-target `fix_needed` action to a non-mutating canonical classification because the validator raised a security-sensitive-target error, while the hydrated artifact explicitly forbids routing #93869 to security. The executable repair remains cluster-scoped in `build_fix_artifact`. |
| #51868 | keep_related | planned | superseded | #51868 remains attribution and proof context for the same QR/block-art root cause, but close actions are blocked and the canonical repair path is #93869. |
| cluster:repair-93869-qr-ci | build_fix_artifact | planned |  | A complete executable repair plan is available for the existing PR branch without mutating GitHub directly. |

## Needs Human

- none
