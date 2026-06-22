---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-76668"
mode: "autonomous"
run_id: "27953164515"
workflow_run_id: "27953164515"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27953164515"
head_sha: "cf022cccb3f7db38db17d2376c40d081d3270571"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-22T12:44:40.606Z"
canonical: "https://github.com/openclaw/openclaw/pull/76668"
canonical_issue: "https://github.com/openclaw/openclaw/issues/76664"
canonical_pr: "https://github.com/openclaw/openclaw/pull/76668"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-76668

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27953164515](https://github.com/openclaw/clownfish/actions/runs/27953164515)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/76668

## Summary

#76668 is the canonical automerge PR for the docs-focused bug intake request in #76664, but it is not merge-ready in this run because merge is blocked by job policy and the hydrated PR state shows mergeable_state=unstable with a failing checks-node-core-tooling check on head eb14d02fdc3b1f4422238ffb44e029c2461dba69. The branch is safe to repair because maintainer_can_modify=true, the diff is one issue-template file, review comments are hydrated with no inline review blockers, and ClawSweeper's latest review found no repair lane beyond final review/merge handling. Current main 73930764e642a545f688b891d46443e5ae19d5d7 still lacks .github/ISSUE_TEMPLATE/docs_bug_report.yml and the existing bug_report.yml requires runtime/model/provider fields, so a bounded repair of the existing contributor branch is the canonical path.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
  "target": "#76668",
  "source_refs": [
    "#76668",
    "#76664",
    "#76619",
    "#73649"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair the existing #76668 contributor branch rather than replacing it. Keep the patch limited to the docs bug issue-template addition, investigate or refresh the failing checks-node-core-tooling check on the current head, rebase/rerun as needed, and rerun the changed gate before sending the exact current head back through ClawSweeper/Codex review.",
  "pr_title": "meta(issue-template): add dedicated docs bug report form",
  "pr_body": "## What Problem This Solves\nDocs-only defects currently have to use the runtime bug form, which requires runtime/model/provider fields that are not relevant for documentation defects. This keeps #76664 moving through the existing contributor PR instead of replacing the author's work.\n\n## Why This Change Was Made\nCurrent main 73930764e642a545f688b891d46443e5ae19d5d7 has bug_report.yml, config.yml, and feature_request.yml under .github/ISSUE_TEMPLATE, but no docs_bug_report.yml. The existing bug report form still requires runtime/model/provider context, so a dedicated docs bug form is the narrow owner-boundary fix for docs intake.\n\n## User Impact\nUsers filing documentation defects get a docs-focused issue form with docs-relevant required fields, while the runtime bug report form stays unchanged for runtime defects.\n\n## Evidence\nSource PR: https://github.com/openclaw/openclaw/pull/76668\nCanonical issue: https://github.com/openclaw/openclaw/issues/76664\nCurrent blocker to repair before final review: checks-node-core-tooling failed on head eb14d02fdc3b1f4422238ffb44e029c2461dba69 and mergeable_state is unstable in the hydrated artifact.\nValidation to run after repair: git diff --check; pnpm check:changed.",
  "likely_files": [
    ".github/ISSUE_TEMPLATE/docs_bug_report.yml"
  ],
  "validation_commands": [
    "git diff --check",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve @WadydX's contributor branch and PR history for https://github.com/openclaw/openclaw/pull/76668.",
    "Do not open a replacement PR unless the branch becomes unsafe or uneditable; maintainer_can_modify is true in the hydrated artifact.",
    "Release-note context belongs in the PR body or squash message; do not edit CHANGELOG.md for this normal PR repair."
  ],
  "source_job": "jobs/openclaw/outbox/finalized/automerge-openclaw-openclaw-76668.md",
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
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/76668 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #76668 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #76668 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #76668 | fix_needed | planned | canonical | Automerge cannot proceed from this worker because merge is blocked by policy and the current hydrated PR head has an unstable merge state plus a failing relevant check. Repair the contributor branch and rerun the bounded validation/review loop. |
| cluster:automerge-openclaw-openclaw-76668 | build_fix_artifact | planned |  | Build an executable repair artifact for the existing #76668 branch so the executor can refresh the head, investigate the failing tooling check, run the hard changed gate, and request a fresh review. |
| #76664 | keep_canonical | planned | canonical | Keep the canonical issue open while the canonical PR repair path runs. |
| #73649 | keep_related | planned | related | Related issue-template work, but not the same root cause or repair target for this cluster. |
| #76619 | keep_closed | skipped | fixed_by_candidate | Closed context ref only; no closure or mutation action is valid. |

## Needs Human

- none
