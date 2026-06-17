---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-46-autonomous-terminal-gap"
mode: "autonomous"
run_id: "27705469158"
workflow_run_id: "27705469158"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27705469158"
head_sha: "11055a7e49bd4d7a4f5c6d331788c99e8595d963"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T16:56:26.437Z"
canonical: "#87322"
canonical_issue: "#87322"
canonical_pr: "#87449"
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-46-autonomous-terminal-gap

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27705469158](https://github.com/openclaw/clownfish/actions/runs/27705469158)

Workflow conclusion: success

Worker result: planned

Canonical: #87322

## Summary

Planned non-mutating cluster classification. #87322 remains the canonical issue, #87449 is the canonical contributor PR but needs repair before merge because required checks are failing and merge preflight is incomplete. #71569 is related but not covered by #87449 because it tracks Mattermost streaming config support and notification UX. #75256 is quarantined as the exact security-sensitive linked ref.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
  "target": "#87449",
  "source_refs": [
    "#87449",
    "#87322",
    "#71569",
    "#47838",
    "#75256",
    "#32868",
    "#48522",
    "#70253",
    "#71565"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair the canonical contributor PR #87449 in place, preserving @yetval credit, then rerun the merge preflight. The immediate blockers are failing `check-lint`, `check-prod-types`, and `check-dependencies`, plus the missing clean Codex `/review` proof required for merge.",
  "pr_title": "fix(mattermost): preserve text-block boundaries in draft preview (#87322)",
  "pr_body": "Repair canonical PR #87449 in place for #87322. Keep the contributor branch as the landing path, preserve @yetval attribution, address failing checks, rerun `pnpm check:changed`, obtain a clean Codex `/review`, and only then consider merge. #71569 remains related follow-up scope for config/product/notification UX rather than part of this closeout.",
  "likely_files": [
    "extensions/mattermost/src/mattermost/draft-stream.ts",
    "extensions/mattermost/src/mattermost/draft-stream.test.ts",
    "extensions/mattermost/src/mattermost/monitor.ts",
    "extensions/mattermost/src/mattermost/monitor.inbound-system-event.test.ts",
    "src/channels/draft-stream-loop.ts",
    "docs/channels/mattermost.md",
    "docs/concepts/progress-drafts.md",
    "docs/concepts/streaming.md"
  ],
  "validation_commands": [
    "pnpm check:changed",
    "node scripts/run-vitest.mjs extensions/mattermost/src/mattermost/",
    "pnpm lint",
    "pnpm check:prod-types",
    "pnpm check:dependencies"
  ],
  "credit_notes": [
    "Preserve @yetval as the source PR author for https://github.com/openclaw/openclaw/pull/87449.",
    "Preserve reporter credit for #87322 from @Senseonics-AI and keep their live Mattermost proof linked in the repaired PR.",
    "Do not replace the contributor branch unless repair becomes impossible; maintainer_can_modify is true."
  ],
  "source_job": "jobs/openclaw/inbox/gitcrawl-46-autonomous-terminal-gap.md",
  "security_sensitive": false,
  "security_routed_refs": [
    "#75256"
  ],
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
| #32868 | keep_closed | skipped | superseded | Already closed; no mutation planned. |
| #47838 | keep_closed | skipped | related | Already merged; use as context only. |
| #48522 | keep_closed | skipped | related | Already closed; no mutation planned. |
| #70253 | keep_closed | skipped | related | Already closed; no mutation planned. |
| #71565 | keep_closed | skipped | superseded | Already closed; no close action is valid. |
| #71569 | keep_related | planned | related | Related Mattermost streaming UX/config issue, but not the same root cause and not fully covered by the canonical PR. |
| #75256 | route_security | planned | security_sensitive | Exact linked security-sensitive ref is out of ProjectClownfish cleanup scope. |
| #87322 | keep_canonical | planned | canonical | Best live canonical issue for the non-security Mattermost block-boundary root cause. |
| #87449 | fix_needed | planned | canonical | Canonical contributor PR should be repaired before merge rather than replaced or closed. |
| cluster:gitcrawl-46-autonomous-terminal-gap | build_fix_artifact | planned |  | Emit an executable repair artifact for the canonical contributor branch. |

## Needs Human

- none
