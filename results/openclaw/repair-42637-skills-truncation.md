---
repo: "openclaw/openclaw"
cluster_id: "repair-42637-skills-truncation"
mode: "autonomous"
run_id: "27749110377"
workflow_run_id: "27749110377"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27749110377"
head_sha: "16471ef5442ecf7f4cdbf1a46a1ddd53d9048144"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-18T09:25:11.072Z"
canonical: "https://github.com/openclaw/openclaw/pull/42637"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/42637"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# repair-42637-skills-truncation

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27749110377](https://github.com/openclaw/clownfish/actions/runs/27749110377)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/42637

## Summary

#42637 is the canonical contributor PR for the skills truncation defect. It is useful and maintainer-editable, but not merge-ready because the hydrated state has a failing check-test-types job, a waiting-on-author label, and actionable review-bot findings around prompt-budgeting and lookup-key recovery. Merge is blocked by job policy, so the safe path is to repair the contributor branch and preserve credit.

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
  "target": "#42637",
  "source_refs": [
    "#42637"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair the canonical skills truncation PR so truncated prompts list omitted skill lookup names without exceeding maxSkillsPromptChars or breaking prompt structure. Keep the change scoped to skills prompt rendering and regression tests.",
  "pr_title": "fix(skills): list omitted skill names when prompt is truncated",
  "pr_body": "## Summary\n- repair #42637 so the truncation note includes omitted skill lookup names when skills are dropped\n- keep the final rendered skills prompt within `maxSkillsPromptChars`\n- keep omitted lookup names usable with `openclaw skills info <name>` while avoiding prompt-structure/control-character regressions\n\n## Credit\nThis carries forward the contributor work from https://github.com/openclaw/openclaw/pull/42637 by @imwyvern / @sakaenyeniceri5.\n\n## Verification\n- `pnpm test src/skills/loading/compact-format.test.ts src/skills/loading/skills.test.ts src/cli/skills-cli.test.ts`\n- `pnpm check:changed`\n- Codex `/review` clean before any merge recommendation",
  "likely_files": [
    "src/skills/loading/workspace.ts",
    "src/skills/loading/compact-format.test.ts"
  ],
  "validation_commands": [
    "pnpm test src/skills/loading/compact-format.test.ts src/skills/loading/skills.test.ts src/cli/skills-cli.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve contributor credit for #42637: PR author @imwyvern and commit author @sakaenyeniceri5.",
    "Do not edit CHANGELOG.md for this normal PR; carry release-note context in the PR body/update text."
  ],
  "source_job": "jobs/openclaw/inbox/repair-42637-skills-truncation.md",
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
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/42637 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #42637 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #42637 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #42637 | keep_canonical | planned | canonical | This PR owns the canonical fix path but needs repair before any merge-ready recommendation. |
| #42637 | fix_needed | planned | canonical | Repair is needed on the contributor branch before a future review/merge path can be considered. |
| cluster:repair-42637-skills-truncation | build_fix_artifact | planned |  | Executor should repair #42637 or use the target Clownfish branch for the same narrow fix path, then run focused validation and Codex review. |

## Needs Human

- none
