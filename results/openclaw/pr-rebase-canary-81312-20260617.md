---
repo: "openclaw/openclaw"
cluster_id: "pr-rebase-canary-81312-20260617"
mode: "autonomous"
run_id: "27704139565"
workflow_run_id: "27704139565"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27704139565"
head_sha: "18d605565c7b3b3b587ef63b4cdc59a29eeaf6fd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T16:48:31.355Z"
canonical: "https://github.com/openclaw/openclaw/pull/81312"
canonical_issue: "https://github.com/openclaw/openclaw/issues/77982"
canonical_pr: "https://github.com/openclaw/openclaw/pull/81312"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# pr-rebase-canary-81312-20260617

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27704139565](https://github.com/openclaw/clownfish/actions/runs/27704139565)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/81312

## Summary

PR #81312 remains the sole canonical repair path. It is maintainer-editable and narrow by intended PR surface, but it is not merge-ready because the branch is stale against current main and the latest ClawSweeper/Codex review did not complete; plan a rebase-only contributor-branch repair, validation, and fresh Codex /review. No close, merge, label, or replacement PR action is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
  "target": "#81312",
  "source_refs": [
    "#81312",
    "#77982"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Rebase and repair PR #81312 on the existing maintainer-editable contributor branch so bundled capability plugin records preserve manifest contracts and contract-backed capability provider ids, without broadening beyond the current plugin runtime/tests surface.",
  "pr_title": "fix(plugins): preserve bundled capability manifest contracts",
  "pr_body": "Rebase-only repair plan for #81312:\n\nSummary:\n- Rebase/refresh @yfge's existing maintainer-editable branch onto current main.\n- Preserve the narrow fix that carries manifest.contracts into bundled capability plugin records.\n- Keep contract-backed provider id lists initialized from manifest contracts and deduped when runtime registration reports the same ids.\n- Keep focused regression coverage for bundled capability runtime contract preservation and loader record provider ids.\n\nValidation:\n- node scripts/run-vitest.mjs src/plugins/bundled-capability-runtime.test.ts src/plugins/loader-records.test.ts\n- pnpm check:changed\n- Run Codex /review after the rebase and address every actionable finding before any later merge finalization.\n\nCredit:\n- Source PR: https://github.com/openclaw/openclaw/pull/81312 by @yfge.\n- Linked issue: https://github.com/openclaw/openclaw/issues/77982 by @pangxianyu-pixel.",
  "likely_files": [
    "src/plugins/bundled-capability-runtime.ts",
    "src/plugins/bundled-capability-runtime.test.ts",
    "src/plugins/loader-records.test.ts"
  ],
  "validation_commands": [
    "node scripts/run-vitest.mjs src/plugins/bundled-capability-runtime.test.ts src/plugins/loader-records.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Repair the existing contributor PR #81312 by @yfge; preserve @yfge as the PR author and source of the fix.",
    "Carry the issue context from #77982, reported by @pangxianyu-pixel, in the PR body or merge/release note context when finalized.",
    "Do not create a replacement PR for this canary; contributor branch repair is the calibrated path."
  ],
  "source_job": "jobs/openclaw/inbox/pr-rebase-canary-81312-20260617.md",
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
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/81312 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #81312 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #81312 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #81312 | fix_needed | planned | canonical | Canonical PR is useful and maintainer-editable, but it needs a rebase-only repair plus fresh validation/review before any separate merge decision. |
| #77982 | keep_related | planned | fixed_by_candidate | Keep the linked issue open while #81312 is repaired and validated; no close action is allowed in this rebase-only job. |
| cluster:pr-rebase-canary-81312-20260617 | build_fix_artifact | planned |  | Executor should rebase/refresh the existing contributor branch, preserve the narrow three-file surface, run validation, and run Codex /review. |

## Needs Human

- none
