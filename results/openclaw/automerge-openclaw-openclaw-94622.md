---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-94622"
mode: "autonomous"
run_id: "27875370777"
workflow_run_id: "27875370777"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27875370777"
head_sha: "b9ea876fdcb5ab9314b59cc4dc4a84d155c81760"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-20T15:29:33.008Z"
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
needs_human_count: 0
---

# automerge-openclaw-openclaw-94622

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27875370777](https://github.com/openclaw/clownfish/actions/runs/27875370777)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/94622

## Summary

#94622 is the canonical automerge repair target. The hydrated artifact shows the PR is open, maintainer-editable, small, and non-security-sensitive, but it is not merge-ready because GitHub reports mergeable=false/mergeable_state=dirty and the latest ClawSweeper review requires maintainer/review follow-through for the added build env surface. Merge and close are blocked by job policy, so the safe path is to repair the contributor branch and rerun validation/review.

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
| Needs human | 0 |

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
  "summary": "Repair PR #94622 in place by rebasing/resolving conflicts against current main, preserving @tayoun's tsdown heap override, then rerunning the focused tests plus the repository changed gate and requesting a fresh ClawSweeper/Codex review before any separate merge lane acts.",
  "pr_title": "fix(build): allow tsdown heap override",
  "pr_body": "## What Problem This Solves\n\nSome constrained build hosts need an explicit way to set the tsdown Node heap cap when automatic cgroup/proc memory detection or inherited NODE_OPTIONS does not match the host's usable memory.\n\n## Why This Change Was Made\n\nThis repairs and preserves @tayoun's contributor PR #94622 by rebasing/resolving the dirty branch state, keeping the narrow OPENCLAW_TSDOWN_MAX_OLD_SPACE_MB override, and retaining strict positive-integer parsing for malformed values.\n\n## User Impact\n\nOperators can set OPENCLAW_TSDOWN_MAX_OLD_SPACE_MB for tsdown builds while the existing platform, cgroup, proc, and NODE_OPTIONS behavior remains the fallback when the override is unset.\n\n## Evidence\n\n- Source PR: https://github.com/openclaw/openclaw/pull/94622\n- Current main inspected: 2252674168f7951332f7a7627a50267e2e68b031\n- Planned validation: node scripts/run-vitest.mjs test/scripts/tsdown-build.test.ts; git diff --check; pnpm check:changed\n- Fresh ClawSweeper/Codex review required after repair before any merge decision.",
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
    "Preserve @tayoun as the source contributor for https://github.com/openclaw/openclaw/pull/94622.",
    "Keep the PR body/release-note context focused on the build-time OPENCLAW_TSDOWN_MAX_OLD_SPACE_MB operator override and its validation."
  ],
  "source_job": "jobs/openclaw/inbox/automerge-openclaw-openclaw-94622.md",
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
| #94622 | fix_needed | planned | canonical | Repair the existing maintainer-editable contributor branch instead of replacing it; merge and close are blocked by job policy. |
| cluster:automerge-openclaw-openclaw-94622 | build_fix_artifact | planned |  | Build an executable repair plan for the existing contributor branch. |

## Needs Human

- none
