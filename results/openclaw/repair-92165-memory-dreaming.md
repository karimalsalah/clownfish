---
repo: "openclaw/openclaw"
cluster_id: "repair-92165-memory-dreaming"
mode: "autonomous"
run_id: "27746217375"
workflow_run_id: "27746217375"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27746217375"
head_sha: "6b23fe7fc28d99bdad13dc0ea95bd07b132dfa05"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-18T08:32:51.266Z"
canonical: "https://github.com/openclaw/openclaw/pull/92165"
canonical_issue: "https://github.com/openclaw/openclaw/issues/87637"
canonical_pr: "https://github.com/openclaw/openclaw/pull/92165"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# repair-92165-memory-dreaming

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27746217375](https://github.com/openclaw/clownfish/actions/runs/27746217375)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/92165

## Summary

Canonical path is repairable PR #92165. Current main at e3bd804a17fca25bf0fd82b3d8d4c4eea1d1d66d still returns after the no-active-memory-plugin diagnostic before rendering any dreaming status, so #87637 remains open and should stay tied to #92165 until that branch is repaired and validated. No GitHub mutation, close, label, comment, merge, or PR creation was performed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
  "target": "#92165",
  "source_refs": [
    "#92165",
    "#87637",
    "#89160",
    "#87630",
    "#87634"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair PR #92165 in place so `openclaw doctor` preserves the existing `No active memory plugin` diagnostic while also rendering the gateway-provided memory dreaming status when memory search is configured but no active backend resolves.",
  "pr_title": "fix(memory): show dreaming status without search",
  "pr_body": "## Summary\n- Repair the existing #92165 branch so doctor keeps the no-active-memory-plugin warning and still prints available memory dreaming status.\n- Add a focused regression for configured memory search plus no active backend with a gateway dreaming payload.\n- Keep the change scoped to doctor output; do not broaden provider discovery, scheduling, promotion, or gateway ownership.\n\n## Credit\nThis continues the fix from @bennewell35 in https://github.com/openclaw/openclaw/pull/92165. Clownfish is repairing the contributor branch in place so the source PR remains the credited path.\n\n## Verification\n- `node scripts/run-vitest.mjs src/commands/doctor-memory-search.test.ts`\n- `pnpm check:changed`\n\nCloses #87637.",
  "likely_files": [
    "src/commands/doctor-memory-search.ts",
    "src/commands/doctor-memory-search.test.ts"
  ],
  "validation_commands": [
    "node scripts/run-vitest.mjs src/commands/doctor-memory-search.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Repair contributor branch for https://github.com/openclaw/openclaw/pull/92165 rather than replacing it; original author @bennewell35 keeps authorship for the core fix commits.",
    "OpenClaw release-note context belongs in the PR body or squash message; root policy says not to edit CHANGELOG.md for a normal PR."
  ],
  "source_job": "jobs/openclaw/inbox/repair-92165-memory-dreaming.md",
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
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/92165 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #92165 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #92165 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #92165 | fix_needed | planned | canonical | Repair contributor branch in place, preserving #92165 as the canonical credited fix path. |
| #87637 | keep_related | planned | fixed_by_candidate | Keep issue open and associated with the canonical repair PR until the fix lands. |
| #87630 | keep_closed | skipped | related | Closed context only; no mutation planned. |
| #87634 | keep_closed | skipped | independent | Closed independent context only; no mutation planned. |
| #89160 | keep_closed | skipped | independent | Closed unrelated context only; no mutation planned. |
| cluster:repair-92165-memory-dreaming | build_fix_artifact | planned |  | Executable repair artifact for the applicator to update the existing contributor PR branch. |

## Needs Human

- none
