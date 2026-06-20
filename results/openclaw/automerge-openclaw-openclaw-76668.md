---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-76668"
mode: "autonomous"
run_id: "27867197536"
workflow_run_id: "27867197536"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27867197536"
head_sha: "8ab4d140bd398f3809697c401ff9a1bc5fe6f7e2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-20T09:43:19.169Z"
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

Run: [https://github.com/openclaw/clownfish/actions/runs/27867197536](https://github.com/openclaw/clownfish/actions/runs/27867197536)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/76668

## Summary

PR #76668 remains the bounded canonical automerge repair target. The hydrated artifact shows it is open, non-security-sensitive, focused to one issue-template file, maintainer-can-modify is true, and it has no review comments; however merge is blocked by job policy and the artifact still has an unstable merge state plus a failing `check-test-types` check, so the executable path is to repair/rerun the contributor branch rather than merge or close anything from this worker.

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
    "#76619"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair the existing maintainer-editable contributor PR #76668 for automerge by rebasing/refetching the branch, preserving the one-file issue-template change, rerunning the changed gate, and sending it back through ClawSweeper/Codex review. Do not replace the PR unless the branch becomes uneditable or gains unrelated churn.",
  "pr_title": "meta(issue-template): add dedicated docs bug report form",
  "pr_body": "## What Problem This Solves\nDocs-only bug reports currently go through the runtime bug form, which requires runtime/model/provider fields even when the defect is only in documentation. This carries forward @WadydX's focused contribution from https://github.com/openclaw/openclaw/pull/76668 and closes https://github.com/openclaw/openclaw/issues/76664.\n\n## Why This Change Was Made\nThe repair path should keep the existing contributor branch because maintainers can edit it and the diff is already narrow: one new GitHub issue form for docs bugs. Current `main` still lacks `.github/ISSUE_TEMPLATE/docs_bug_report.yml`, while the general bug form requires model/provider fields.\n\n## User Impact\nReporters get a docs-specific bug intake path with docs-relevant fields and automatic `bug`/`docs` labels. Runtime issue intake remains unchanged.\n\n## Evidence\n- Hydrated PR #76668 adds one file, `.github/ISSUE_TEMPLATE/docs_bug_report.yml`, +75/-0.\n- Hydrated PR #76668 has no review comments and maintainer_can_modify=true.\n- Hydrated checks include passing Real behavior proof but a failing `check-test-types` gate, so the executor should refresh/rebase and run `pnpm check:changed` before asking for the final review loop.",
  "likely_files": [
    ".github/ISSUE_TEMPLATE/docs_bug_report.yml"
  ],
  "validation_commands": [
    "git diff --check",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve @WadydX as the PR author and credit the original contribution in any repair comment or replacement body if replacement becomes necessary.",
    "Source PR: https://github.com/openclaw/openclaw/pull/76668"
  ],
  "source_job": "jobs/openclaw/inbox/automerge-openclaw-openclaw-76668.md",
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
| #76668 | keep_canonical | planned | canonical | Canonical PR is useful and safe to repair, but not merge-ready under this worker because merge is blocked and the artifact has an unstable/failing-check state. |
| #76664 | keep_canonical | planned | canonical | Keep the issue open until the candidate PR or a repaired equivalent lands; closure is blocked by job policy and the fix-first gate. |
| #76619 | keep_closed | skipped | related | Already closed historical context only. |
| cluster:automerge-openclaw-openclaw-76668 | fix_needed | planned |  | Bounded automerge repair is needed before the comment router can consider final merge. |
| cluster:automerge-openclaw-openclaw-76668 | build_fix_artifact | planned |  | Provide an executable repair plan for the existing contributor PR. |

## Needs Human

- none
