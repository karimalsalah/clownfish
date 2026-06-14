---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156966-autonomous-smoke"
mode: "autonomous"
run_id: "27494815044"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27494815044"
head_sha: "2fe1e514dd96b4c06f82a4dcf98f42c8cd4f4700"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-06-14T09:40:49.270Z"
canonical: "https://github.com/openclaw/openclaw/issues/38091"
canonical_issue: "https://github.com/openclaw/openclaw/issues/38091"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# ghcrawl-156966-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27494815044](https://github.com/openclaw/clownfish/actions/runs/27494815044)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/38091

## Summary

#38091 is the current open canonical issue; #38090 is already closed as its duplicate and receives no closure action. Current main still has the reported reconnect failure path, but executable fix work is blocked because #38091's hydrated ClawSweeper review says an existing recovery PR is open/conflicting and the preflight artifact did not hydrate that PR, so Clownfish should not queue a competing fix PR until that PR is hydrated and repaired or explicitly superseded.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #38090 | keep_closed | skipped | duplicate | Closed historical duplicate evidence only; #38091 remains the live canonical tracker. |
| #38091 | keep_canonical | planned | canonical | The canonical hint #38090 is obsolete because it is closed; #38091 is the only hydrated open issue tracking this root cause. |
| cluster:ghcrawl-156966-autonomous-smoke | fix_needed | blocked |  | Fix is needed, but execution is blocked until the existing recovery PR referenced from #38091 is hydrated and either repaired or superseded with credit. |
| cluster:ghcrawl-156966-autonomous-smoke | build_fix_artifact | blocked |  | Build artifact is intentionally non-executable until the recovery PR is hydrated and the repair-versus-replacement path is explicit. |

## Needs Human

- Hydrate the existing open/conflicting recovery PR referenced in #38091's 2026-06-12 ClawSweeper comment before executing fix work; choose repair_contributor_branch if it is viable and maintainer_can_modify=true, or supersede it with source PR credit if it is uneditable, unsafe, stale, or too broad.
