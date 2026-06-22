---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-95278"
mode: "autonomous"
run_id: "27926698252"
workflow_run_id: "27926698252"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27926698252"
head_sha: "48c97992ba2331b28c73d7fa7193c9ef8c995193"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-22T03:06:41.105Z"
canonical: "https://github.com/openclaw/openclaw/pull/95278"
canonical_issue: "https://github.com/openclaw/openclaw/issues/94571"
canonical_pr: "https://github.com/openclaw/openclaw/pull/95278"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-95278

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27926698252](https://github.com/openclaw/clownfish/actions/runs/27926698252)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/95278

## Summary

Current main still copies the full environment in the ingress queue state DB opener. #95278 remains the canonical active repair lane, but it is not merge-ready because the hydrated preflight still shows a failing relevant check; the next deterministic action is to repair/revalidate that existing PR branch, preserving @kaka-srp credit from the already-closed source PR #94573.

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
  "target": "#95278",
  "source_refs": [
    "#95278",
    "#94571",
    "#95271",
    "#94573"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair the active Clownfish/ClawSweeper replacement PR #95278 for the ingress queue state DB env-overlay fix. Keep the runtime change narrow: replace the custom-state DB opener's full process.env spread with a prototype-backed overlay that has only OPENCLAW_STATE_DIR as an own enumerable key, and keep/add focused regression coverage proving the opener no longer enumerates a large inherited env.",
  "pr_title": "Repair #95278: avoid copying process.env in ingress queue DB opens",
  "pr_body": "## What Problem This Solves\nRepairs the active Clownfish automerge lane for #95278, which fixes #94571. Current main still copies every key in process.env when a channel ingress queue is opened with a custom stateDir, and Telegram isolated ingress can hit that opener repeatedly while draining its durable queue.\n\n## Why This Change Was Made\nThe state DB resolver only needs OPENCLAW_STATE_DIR as an override while preserving inherited lookups such as HOME or OPENCLAW_HOME. A prototype-backed env overlay keeps those inherited reads available without enumerating thousands of Kubernetes service env vars on the queue hot path.\n\n## User Impact\nLarge-env deployments should avoid the avoidable event-loop/CPU hit in repeated ingress queue operations. The repair preserves the original contributor attribution from source PR #94573; thanks @kaka-srp for the original fix idea while review and validation remain centralized in #95278.\n\n## Evidence\n- Current main a1828110704fade5281dde8b0d2e305d5b23dd54 still spreads process.env in src/channels/message/ingress-queue.ts.\n- Hydrated #95278 has a passed Codex review but still needs repair/revalidation because checks-node-core-tooling is failing in the preflight artifact.\n- Planned validation: pnpm test src/channels/message/ingress-queue.test.ts --run; pnpm check:changed.",
  "likely_files": [
    "src/channels/message/ingress-queue.ts",
    "src/channels/message/ingress-queue.test.ts"
  ],
  "validation_commands": [
    "pnpm test src/channels/message/ingress-queue.test.ts --run",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve original contributor credit from source PR #94573 by @kaka-srp; #94573 is already closed and must remain credit-only historical evidence, not an executable repair target.",
    "#95278 body already states it is a replacement for #94573 because the source branch could not be updated and names @kaka-srp as original contributor.",
    "Keep closing reference Fixes #94571 so the issue closes only after the canonical PR lands through the merge router."
  ],
  "source_job": "jobs/openclaw/inbox/automerge-openclaw-openclaw-95278.md",
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
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/95278 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #95278 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #95278 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #94571 | keep_canonical | planned | canonical | Keep the canonical production issue open until the active fix PR lands; close and post-merge closeout are blocked by the job frontmatter. |
| #94573 | keep_closed | skipped | superseded | Historical source PR only; contributor credit must continue through #95278 without targeting #94573 for repair. |
| #95271 | keep_related | planned | superseded | Clearly superseded by #95278, but closure is disallowed for this autonomous repair job. |
| #95278 | fix_needed | planned | canonical | Repair/revalidate the active canonical PR branch; merge is blocked by job permissions and by the failing relevant check. |
| cluster:automerge-openclaw-openclaw-95278 | build_fix_artifact | planned |  | Allowed actions include fix and raise_pr, allow_fix_pr is true, and #95278 needs repair/revalidation before any merge router can proceed. |

## Needs Human

- none
