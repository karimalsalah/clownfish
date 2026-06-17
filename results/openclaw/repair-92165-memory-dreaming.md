---
repo: "openclaw/openclaw"
cluster_id: "repair-92165-memory-dreaming"
mode: "autonomous"
run_id: "27705773327"
workflow_run_id: "27705773327"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27705773327"
head_sha: "a35c8907ec29188d7b2eb3a504f94102b6ac8592"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T17:14:08.157Z"
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

Run: [https://github.com/openclaw/clownfish/actions/runs/27705773327](https://github.com/openclaw/clownfish/actions/runs/27705773327)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/92165

## Summary

Canonical path is open PR #92165, which is safely repairable in place because maintainers can modify the contributor branch. Current main still has the #87637 gap: the doctor memory-search path emits the no-active-plugin diagnostic and returns before rendering available dreaming status when no active backend config resolves. No GitHub mutation, close, label, comment, merge, or PR creation is planned directly by this worker.

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
  "summary": "Repair #92165 in place so `openclaw doctor` keeps the existing `No active memory plugin` diagnostic when memory search is configured but no active backend resolves, and also renders the available memory-core dreaming status from the gateway probe in that same path. Add a focused regression for the configured-no-backend case and preserve the prior literal `storageMode` fixture typing fix.",
  "pr_title": "fix(memory): show dreaming status without search",
  "pr_body": "## Summary\n- Repair the no-active-backend doctor path so it keeps the existing `No active memory plugin` diagnostic and also renders available memory-core dreaming status.\n- Add a focused regression for configured memory search with no active backend and gateway dreaming payload available.\n- Preserve the prior literal `storageMode` fixture typing fix without relaxing production types.\n\n## Linked context\nCloses #87637\nSource PR: #92165 by @bennewell35\n\n## Verification\n- `node scripts/run-vitest.mjs src/commands/doctor-memory-search.test.ts`\n- `pnpm check:changed`\n\n## Credit\nThis repairs the existing contributor branch in place so @bennewell35 keeps authorship and PR credit.",
  "likely_files": [
    "src/commands/doctor-memory-search.ts",
    "src/commands/doctor-memory-search.test.ts"
  ],
  "validation_commands": [
    "node scripts/run-vitest.mjs src/commands/doctor-memory-search.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Repair existing contributor PR https://github.com/openclaw/openclaw/pull/92165 in place; preserve @bennewell35 authorship and source PR credit.",
    "PR body should keep the release-note context for the user-visible doctor output fix; do not edit CHANGELOG.md for this normal PR."
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
| #92165 | fix_needed | planned | canonical | Repair the existing contributor PR branch in place with the narrow #87637 regression rather than replacing the PR or opening a second fix path. |
| cluster:repair-92165-memory-dreaming | build_fix_artifact | planned |  | The job allows fix and raise_pr, and the remaining repair is narrow and executable on the existing canonical PR branch. |
| #87637 | keep_canonical | planned | canonical | Keep the issue open as the canonical issue until the repaired #92165 path lands or is otherwise proven fixed. |
| #87630 | keep_closed | skipped | related | Closed context ref; no mutation allowed or needed. |
| #87634 | keep_closed | skipped | related | Closed context ref; no mutation allowed or needed. |
| #89160 | keep_closed | skipped | independent | Closed independent context ref; no mutation allowed or needed. |

## Needs Human

- none
