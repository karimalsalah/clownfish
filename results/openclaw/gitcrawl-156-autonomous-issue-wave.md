---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-156-autonomous-issue-wave"
mode: "autonomous"
run_id: "27565780551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27565780551"
head_sha: "51df92846760066ef00bbc8134866b4a24f97044"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T18:02:58.314Z"
canonical: "https://github.com/openclaw/openclaw/issues/81751"
canonical_issue: "https://github.com/openclaw/openclaw/issues/81751"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-156-autonomous-issue-wave

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27565780551](https://github.com/openclaw/clownfish/actions/runs/27565780551)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/81751

## Summary

Classified the two open job candidates without planning mutations. #81751 remains the canonical open issue for the gateway status shell-wrapped command audit bug, with hydrated linked PR #81778 as the existing fix path. #87199 is related but not a duplicate: it covers a different macOS LaunchAgent env-wrapper launch/permission failure and is already owned by hydrated linked PR #89967. No close, merge, or fix-PR action is planned because both issue closeouts are fix-first blocked until their respective PR paths land, and PR checks/mergeability could not be proven clean from the artifact.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #81751 | keep_canonical | planned | canonical | Keep #81751 open as the canonical issue until the existing linked fix path lands. |
| #87199 | keep_related | planned | related | Keep #87199 open as a related but separate LaunchAgent/env-wrapper bug owned by its own PR path. |

## Needs Human

- none
