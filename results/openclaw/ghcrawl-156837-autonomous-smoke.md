---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156837-autonomous-smoke"
mode: "autonomous"
run_id: "27486518620"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27486518620"
head_sha: "fb8f137c423b876399d9e3e4ff1a8695add173e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-14T03:20:48.800Z"
canonical: "https://github.com/openclaw/openclaw/pull/56176"
canonical_issue: "https://github.com/openclaw/openclaw/issues/56102"
canonical_pr: "https://github.com/openclaw/openclaw/pull/56176"
actions_total: 3
fix_executed: 0
fix_failed: 1
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156837-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27486518620](https://github.com/openclaw/clownfish/actions/runs/27486518620)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/56176

## Summary

Hydrated state shows #56102 and #56176 open with no security-sensitive signal. Current main still lacks ACP protocolVersion coercion; #56176 is the canonical, narrow, maintainer-editable fix path but cannot merge yet because checks, review proof, and Greptile findings are unresolved. Planned repair artifact for #56176.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | source PR #56176 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected when rebased upstream history includes workflow files |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/92853 | clownfish/ghcrawl-156837-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #92853 | merge_canonical | blocked | fix_pr | merge requires CLOWNFISH_ALLOW_MERGE=1; labeled clownfish |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #56102 | keep_canonical | planned | canonical | Keep the source repro issue open; require_fix_before_close blocks any closeout until #56176 is repaired and merged. |
| #56176 | fix_needed | planned | canonical | Repair #56176 in place before any merge: address review-bot findings, add focused startup tests, rebase/refresh if needed, run /review and pnpm check:changed. |
| cluster:ghcrawl-156837-autonomous-smoke | build_fix_artifact | planned |  | Build an executable repair artifact for #56176 while preserving contributor credit and keeping #56102 open until the fix lands. |

## Needs Human

- none
