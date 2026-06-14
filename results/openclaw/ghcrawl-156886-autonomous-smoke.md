---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156886-autonomous-smoke"
mode: "autonomous"
run_id: "27485435509"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27485435509"
head_sha: "6039da9a6c96d42c90d16daab044269bd67333ab"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-14T02:17:30.668Z"
canonical: "https://github.com/openclaw/openclaw/pull/64734"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/64734"
actions_total: 3
fix_executed: 0
fix_failed: 1
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156886-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27485435509](https://github.com/openclaw/clownfish/actions/runs/27485435509)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/64734

## Summary

#64734 remains the best live canonical PR. It is open, mergeable, maintainer-editable, narrow, and current main still lacks its 60s/4096-token thread-title tuning, but merge is blocked until the contributor branch gets a clean Codex /review and final validation.

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
| repair_contributor_branch | failed |  |  | source PR #64734 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected when rebased upstream history includes workflow files |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/92836 | clownfish/ghcrawl-156886-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #92836 | merge_canonical | blocked | fix_pr | merge requires CLOWNFISH_ALLOW_MERGE=1; labeled clownfish |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #64172 | keep_closed | skipped | related | Historical merged context only; no mutation is planned for this closed PR. |
| #64734 | fix_needed | planned | canonical | Repair the existing contributor branch and complete the missing merge preflight instead of replacing or closing it. |
| cluster:ghcrawl-156886-autonomous-smoke | build_fix_artifact | planned |  | Build an executable repair artifact for the existing contributor branch because direct merge lacks a clean Codex /review preflight. |

## Needs Human

- none
