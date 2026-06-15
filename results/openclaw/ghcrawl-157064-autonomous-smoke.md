---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-157064-autonomous-smoke"
mode: "autonomous"
run_id: "27584191295"
workflow_run_id: "27584191295"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27584191295"
head_sha: "3eaef20c39c95c760c2eeb4e61adf6ea57afc054"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:57:44.420Z"
canonical: "https://github.com/openclaw/openclaw/pull/43837"
canonical_issue: "https://github.com/openclaw/openclaw/issues/43201"
canonical_pr: "https://github.com/openclaw/openclaw/pull/43837"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-157064-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27584191295](https://github.com/openclaw/clownfish/actions/runs/27584191295)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/43837

## Summary

Canonical path is the open contributor PR #43837. The original issue #43201 is already closed and must not receive a close action. #43837 is useful and maintainer-editable, but it is not merge-ready because the required real behavior proof check is failing and the latest ClawSweeper review blocks merge until proof is added. Plan repair of the contributor branch, preserving Astro-Han's credit.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #43201 | keep_closed | skipped | superseded | Already closed; keep as historical source issue and route remaining work through #43837. |
| #43837 | fix_needed | planned | canonical | Repair the maintainer-editable contributor branch before any merge consideration. |
| cluster:ghcrawl-157064-autonomous-smoke | build_fix_artifact | planned |  | Create an executable repair plan for the open canonical PR. |

## Needs Human

- none
