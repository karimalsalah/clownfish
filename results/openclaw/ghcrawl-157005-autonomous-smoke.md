---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-157005-autonomous-smoke"
mode: "autonomous"
run_id: "27494816783"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27494816783"
head_sha: "2fe1e514dd96b4c06f82a4dcf98f42c8cd4f4700"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-14T09:39:32.500Z"
canonical: "https://github.com/openclaw/openclaw/pull/55923"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/55923"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-157005-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27494816783](https://github.com/openclaw/clownfish/actions/runs/27494816783)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/55923

## Summary

#40150 is already closed and should remain historical context. #55923 is the surviving editable canonical PR, but it is not merge-ready because the latest hydrated state has a failed Real behavior proof check, other failing checks, and a June 10 ClawSweeper/Codex review blocker requiring real behavior proof before merge. Plan a narrow repair of #55923 rather than closing or merging anything in this run.

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
| #40150 | keep_closed | skipped | superseded | #40150 is historical superseded context only; no mutation is valid against a closed PR. |
| #55923 | fix_needed | planned | canonical | #55923 is the best canonical path but is not merge-ready; repair the editable contributor branch, provide real behavior proof, rerun review, and validate before any merge decision. |
| cluster:ghcrawl-157005-autonomous-smoke | build_fix_artifact | planned |  | Build an executable branch-repair artifact for the surviving canonical PR. |

## Needs Human

- none
