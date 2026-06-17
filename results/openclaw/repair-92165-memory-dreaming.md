---
repo: "openclaw/openclaw"
cluster_id: "repair-92165-memory-dreaming"
mode: "autonomous"
run_id: "27705472733"
workflow_run_id: "27705472733"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27705472733"
head_sha: "11055a7e49bd4d7a4f5c6d331788c99e8595d963"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T16:56:26.463Z"
canonical: "#92165"
canonical_issue: "#87637"
canonical_pr: "#92165"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# repair-92165-memory-dreaming

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27705472733](https://github.com/openclaw/clownfish/actions/runs/27705472733)

Workflow conclusion: success

Worker result: planned

Canonical: #92165

## Summary

Plan a narrow in-place repair of canonical PR #92165 for issue #87637. The hydrated state shows #92165 is open, maintainer-editable, non-security, and already owns the doctor-memory dreaming-status fix path, but the ClawSweeper review identifies the remaining configured-no-active-backend behavior gap. No close, label, comment, or merge action is planned because those actions are blocked by the job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
    "build_fix_artifact"
  ],
  "summary": "Repair canonical PR #92165 in place so `openclaw doctor` keeps the existing no-active-memory-plugin diagnostic when memory search is configured but no active backend resolves, while still rendering the available memory-core dreaming status. Add a focused regression test for that exact configured-no-backend path.",
  "pr_title": "fix(memory): show dreaming status without search",
  "pr_body": "Repairs #92165 for #87637 only.\n\nScope:\n- Preserve the existing `No active memory plugin` diagnostic when memory search is configured but no backend is active.\n- Also render the available memory-core dreaming status in that configured-no-backend path.\n- Add a focused regression test in `src/commands/doctor-memory-search.test.ts`.\n\nOut of scope:\n- Memory-provider discovery changes.\n- Dreaming scheduler, promotion, or memory-search enablement changes.\n- Unrelated doctor output changes.\n\nCredit:\n- Source PR: https://github.com/openclaw/openclaw/pull/92165\n- Contributor attribution remains with @bennewell35.\n\nValidation:\n- `pnpm -s vitest run src/commands/doctor-memory-search.test.ts`\n- `pnpm check:changed`",
  "likely_files": [
    "src/commands/doctor-memory-search.ts",
    "src/commands/doctor-memory-search.test.ts"
  ],
  "validation_commands": [
    "pnpm -s vitest run src/commands/doctor-memory-search.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Repair contributor PR #92165 in place because maintainer_can_modify is true.",
    "Preserve @bennewell35 as the source PR author and keep attribution on the existing PR history.",
    "Mention source PR https://github.com/openclaw/openclaw/pull/92165 in any executor-generated repair note or PR metadata."
  ],
  "source_job": "jobs/openclaw/inbox/repair-92165-memory-dreaming.md",
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
| #87630 | keep_closed | skipped | related | Already closed historical context ref; no mutation planned. |
| #87634 | keep_closed | skipped | related | Already closed related context ref; no mutation planned. |
| #87637 | keep_related | planned | fixed_by_candidate | Issue #87637 is covered by canonical PR #92165, but closeout is blocked until the fix path lands. |
| #89160 | keep_closed | skipped | independent | Already merged independent context ref; no mutation planned. |
| #92165 | build_fix_artifact | planned | canonical | Repair the useful contributor PR in place and preserve contributor credit instead of opening an unrelated replacement. |

## Needs Human

- none
