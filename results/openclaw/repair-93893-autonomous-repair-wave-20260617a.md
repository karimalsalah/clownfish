---
repo: "openclaw/openclaw"
cluster_id: "repair-93893-autonomous-repair-wave-20260617a"
mode: "autonomous"
run_id: "27703236995"
workflow_run_id: "27703236995"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27703236995"
head_sha: "3d1c6e80508f4f0169e7d61190672f06031166e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T16:28:43.701Z"
canonical: "https://github.com/openclaw/openclaw/pull/93893"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/93893"
actions_total: 3
fix_executed: 0
fix_failed: 1
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# repair-93893-autonomous-repair-wave-20260617a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27703236995](https://github.com/openclaw/clownfish/actions/runs/27703236995)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/93893

## Summary

Current main at baa389ebed1a85258b2ff7f4a61d0746280edf61 still appends user Docker binds and then read-only workspace skill mounts without filtering duplicate container targets. PR #93893 is the canonical, maintainer-editable contributor branch, but it needs repair/proof before any merge lane: add focused regression coverage, ensure the effective filtered mount set is used for both Docker create args and the sandbox config hash, then run the focused test, pnpm check:changed, and Codex /review. Linked issue #93854 is security-sensitive in the preflight artifact and is routed only to central security handling.

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
  "target": "#93893",
  "source_refs": [
    "#93893",
    "#93854"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair contributor PR #93893 so Docker sandbox creation skips internal read-only workspace skill mounts whose containerPath is already provided by user docker.binds, while keeping non-conflicting skill overlays and sandbox security validation intact.",
  "pr_title": "fix(sandbox): skip duplicate Docker skill mount targets",
  "pr_body": "## Summary\n- Repair #93893 by filtering only read-only workspace skill mounts whose container target is already supplied by validated user docker.binds.\n- Use the same effective filtered skill mount list for Docker create args and sandbox config hashing.\n- Add focused regression coverage for overlapping custom bind targets while preserving non-conflicting read-only skill overlays.\n\n## Credit\nBuilds on the contributor fix from @xydttsw in https://github.com/openclaw/openclaw/pull/93893.\n\n## Verification\n- pnpm test src/agents/sandbox/docker.config-hash-recreate.test.ts -- --reporter=verbose\n- pnpm check:changed\n- Codex /review clean before merge consideration",
  "likely_files": [
    "src/agents/sandbox/docker.ts",
    "src/agents/sandbox/docker.config-hash-recreate.test.ts"
  ],
  "validation_commands": [
    "pnpm test src/agents/sandbox/docker.config-hash-recreate.test.ts -- --reporter=verbose",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve source PR credit for @xydttsw in https://github.com/openclaw/openclaw/pull/93893.",
    "Do not comment on or close linked security-sensitive issue #93854 from this lane.",
    "Run Codex /review after the branch repair and address every actionable finding before merge consideration."
  ],
  "source_job": "jobs/openclaw/inbox/repair-93893-autonomous-repair-wave-20260617a.md",
  "security_sensitive": false,
  "security_routed_refs": [
    "#93854"
  ],
  "needs_human": [],
  "repair_status": null,
  "terminal": null
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | Codex /review did not pass after 1 attempt(s): Current diff is not merge-ready. The main Docker container path was repaired and the supplied validation is relevant for that narrow path, but the same duplicate-mount invariant is still unhandled in the browser Docker container path, and host-side sandbox filesystem policy no longer matches the filtered Docker mount set. Source PR #93893 has no live PR comments, reviews, or review threads; linked issue #93854 only has a failed ClawSweeper review comment with no actionable code finding. |
| execute_fix | blocked |  |  | Codex /review did not pass after 1 attempt(s): Current diff is not merge-ready. The main Docker container path was repaired and the supplied validation is relevant for that narrow path, but the same duplicate-mount invariant is still unhandled in the browser Docker container path, and host-side sandbox filesystem policy no longer matches the filtered Docker mount set. Source PR #93893 has no live PR comments, reviews, or review threads; linked issue #93854 only has a failed ClawSweeper review comment with no actionable code finding. |

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
| #93854 | route_security | planned | security_sensitive | Security-sensitive linked issue must be quarantined to central OpenClaw security handling. |
| #93893 | fix_needed | planned | canonical | Repair the useful contributor PR branch before merge consideration; required regression test, pnpm check:changed, and Codex /review proof are missing. |
| cluster:repair-93893-autonomous-repair-wave-20260617a | build_fix_artifact | planned |  | Produce an executable branch-repair plan for #93893 without mutating GitHub. |

## Needs Human

- none
