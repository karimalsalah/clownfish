---
repo: "openclaw/openclaw"
cluster_id: "repair-93893-autonomous-repair-wave-20260617a"
mode: "autonomous"
run_id: "27678023143"
workflow_run_id: "27678023143"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27678023143"
head_sha: "9ae0281ece02872ec2fa63a94d05e6d59b40449b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T09:14:39.624Z"
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

Run: [https://github.com/openclaw/clownfish/actions/runs/27678023143](https://github.com/openclaw/clownfish/actions/runs/27678023143)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/93893

## Summary

Hydrated #93893 remains the canonical repair PR and is maintainer-editable, but it is not merge-ready in this job: merge is disallowed, no Codex /review proof is present, and current main still has a source-level duplicate exact Docker mount destination path when user binds overlap read-only skill mounts. The security-sensitive linked issue #93854 is routed separately without blocking the non-security contributor-branch repair lane.

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
  "summary": "Repair contributor PR #93893 in place by filtering exact duplicate read-only workspace skill mount destinations already claimed by user-provided Docker/browser binds before computing mount hash state and appending Docker -v args. Preserve sandbox validation and reserved-target policy; do not broaden user bind permissions.",
  "pr_title": "fix(sandbox): dedupe conflicting skill mount destinations",
  "pr_body": "## Summary\n- Repair #93893 in place so user-provided Docker/browser binds that exactly target a read-only workspace skill mount destination do not produce duplicate Docker mount points.\n- Keep sandbox reserved-target validation intact; only the already-explicit dangerous override path can reach these reserved target overlaps.\n- Preserve @xydttsw's source PR credit and keep the fix scoped to the Docker sandbox mount construction path.\n\n## Repair Notes\n- Filter exact container destination matches before both config-hash mount state formatting and Docker `-v` argument emission.\n- Use the existing bind parser and container path normalizer; do not infer parent/child overlaps or weaken host/source validation.\n- Update the shell Docker and browser sandbox regression tests that currently assert duplicate exact destinations are appended.\n\n## Verification\n- `node scripts/run-vitest.mjs src/agents/sandbox/docker.config-hash-recreate.test.ts src/agents/sandbox/browser.create.test.ts`\n- `pnpm check:changed`\n- `/review`\n\nSource PR credit: https://github.com/openclaw/openclaw/pull/93893 by @xydttsw.",
  "likely_files": [
    "src/agents/sandbox/workspace-mounts.ts",
    "src/agents/sandbox/docker.ts",
    "src/agents/sandbox/browser.ts",
    "src/agents/sandbox/docker.config-hash-recreate.test.ts",
    "src/agents/sandbox/browser.create.test.ts"
  ],
  "validation_commands": [
    "node scripts/run-vitest.mjs src/agents/sandbox/docker.config-hash-recreate.test.ts src/agents/sandbox/browser.create.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve contributor credit for @xydttsw and source PR https://github.com/openclaw/openclaw/pull/93893.",
    "Keep the repair on the existing maintainer-editable contributor branch when possible; do not replace unless branch update fails.",
    "Do not add closing keywords for security-routed #93854 in the repair body or closeout path."
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
| repair_contributor_branch | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/sandbox/browser.create.test.ts: core test [check:changed] src/agents/sandbox/browser.ts: core production [check:changed] src/agents/sandbox/docker.config-hash-recreate.test.ts: core test [check:changed] src/agents/sandbox/docker.ts: core production [check:changed] src/agents/sandbox/workspace-mounts.ts: core production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] changelog attributions $ node scripts/check-changelog-attributions.mjs [check:changed] guarded extension wildcard re-exports $ node scripts/check-extension-wildcard-reexports.mjs [check:changed] plugin-sdk wildcard re-exports $ node scripts/check-plugin-sdk-wildcard-reexports.mjs [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] dependency pin guard $ node scripts/check-dependency-pins.mjs [check:changed] package patch guard $ node scripts/check-package-patches.mjs [check:changed] test temp creation report (warning-only) No new bare test temp-directory creation patterns found. [check:changed] typecheck core $ node sc... |
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/sandbox/browser.create.test.ts: core test [check:changed] src/agents/sandbox/browser.ts: core production [check:changed] src/agents/sandbox/docker.config-hash-recreate.test.ts: core test [check:changed] src/agents/sandbox/docker.ts: core production [check:changed] src/agents/sandbox/workspace-mounts.ts: core production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] changelog attributions $ node scripts/check-changelog-attributions.mjs [check:changed] guarded extension wildcard re-exports $ node scripts/check-extension-wildcard-reexports.mjs [check:changed] plugin-sdk wildcard re-exports $ node scripts/check-plugin-sdk-wildcard-reexports.mjs [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] dependency pin guard $ node scripts/check-dependency-pins.mjs [check:changed] package patch guard $ node scripts/check-package-patches.mjs [check:changed] test temp creation report (warning-only) No new bare test temp-directory creation patterns found. [check:changed] typecheck core $ node sc... |

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
| #93854 | route_security | planned | security_sensitive | #93854 contains a security-shaped Docker sandbox report and is explicitly listed in security_boundary.security_sensitive_items; central OpenClaw security triage should own that issue. |
| #93893 | fix_needed | planned | canonical | Repair #93893 in place: the branch is useful and maintainer-editable, but it needs a narrow branch update that deduplicates exact internal skill mount destinations against user-provided binds, updates focused regression tests, runs /review, and validates with repo gates before any merge decision. |
| cluster:repair-93893-autonomous-repair-wave-20260617a | build_fix_artifact | planned |  | Build a narrow executable repair plan for the canonical contributor PR branch. |

## Needs Human

- none
