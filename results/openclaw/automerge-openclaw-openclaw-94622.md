---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-94622"
mode: "autonomous"
run_id: "27951922009"
workflow_run_id: "27951922009"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27951922009"
head_sha: "4b55273eb76c37d7e40ed18eeef9b4294f7efa38"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-22T12:25:26.919Z"
canonical: "https://github.com/openclaw/openclaw/pull/94622"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/94622"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 1
---

# automerge-openclaw-openclaw-94622

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27951922009](https://github.com/openclaw/clownfish/actions/runs/27951922009)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/94622

## Summary

PR #94622 is the canonical maintainer-editable branch, but it is not merge-ready for automerge: the hydrated artifact shows ClawSweeper still requiring maintainer acceptance for the added build environment variable and exact-head CI has relevant failures, including core tooling and build-artifacts. Emit a bounded repair plan for the existing contributor branch; do not merge or close.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 1 |

## Repair Candidate

```json
{
  "target": "#94622",
  "source_refs": [
    "#94622"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair the existing #94622 branch so the tsdown heap override remains narrow, uses the repo's strict positive-integer env parsing, passes focused build-wrapper tests, and clears the relevant changed checks before a fresh ClawSweeper review.",
  "pr_title": "fix(build): allow tsdown heap override",
  "pr_body": "What Problem This Solves\n\nConstrained build hosts sometimes need to set the tsdown Node heap cap explicitly when automatic cgroup/proc memory detection is too high or too low.\n\nWhy This Change Was Made\n\nThis repairs the existing #94622 branch in place, preserving @tayoun's source contribution while keeping the override scoped to the tsdown build wrapper. The repair should keep existing cgroup/proc memory detection as the fallback, parse OPENCLAW_TSDOWN_MAX_OLD_SPACE_MB with the existing strict positive-integer env parser, and avoid broader build/config churn.\n\nUser Impact\n\nOperators running OpenClaw builds can opt into a build-only tsdown heap cap without changing unrelated NODE_OPTIONS behavior.\n\nEvidence\n\nPlanned validation: node scripts/run-vitest.mjs test/scripts/tsdown-build.test.ts; git diff --check; pnpm check:changed. ClawSweeper review and exact-head CI must be refreshed after repair.",
  "likely_files": [
    "scripts/tsdown-build.mjs",
    "test/scripts/tsdown-build.test.ts"
  ],
  "validation_commands": [
    "node scripts/run-vitest.mjs test/scripts/tsdown-build.test.ts",
    "git diff --check",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve original contributor credit on #94622: @tayoun authored the source PR and first commit.",
    "Repair the existing PR branch rather than replacing it, so attribution stays in the original branch and PR history.",
    "If release-note context is needed, keep it in the PR body or squash message; do not edit CHANGELOG.md for this normal PR."
  ],
  "source_job": "jobs/openclaw/outbox/finalized/automerge-openclaw-openclaw-94622.md",
  "security_sensitive": false,
  "security_routed_refs": [],
  "needs_human": [
    "Before merge, a maintainer still needs to accept the added build-only OPENCLAW_TSDOWN_MAX_OLD_SPACE_MB environment variable unless a fresh ClawSweeper review clears that product/config-surface concern."
  ],
  "repair_status": "pushed",
  "terminal": true
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/94622 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #94622 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #94622 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #94622 | fix_needed | planned | canonical | Branch is safe to update, but automerge cannot proceed until the repair loop handles failing relevant checks and gets a fresh review/maintainer acceptance for the new build env surface. |
| cluster:automerge-openclaw-openclaw-94622 | build_fix_artifact | planned |  | A complete executable repair artifact exists for the current contributor branch. |

## Needs Human

- Before merge, a maintainer still needs to accept the added build-only OPENCLAW_TSDOWN_MAX_OLD_SPACE_MB environment variable unless a fresh ClawSweeper review clears that product/config-surface concern.
