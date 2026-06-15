---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156757-autonomous-smoke"
mode: "autonomous"
run_id: "27584187597"
workflow_run_id: "27584187597"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27584187597"
head_sha: "3eaef20c39c95c760c2eeb4e61adf6ea57afc054"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:57:44.391Z"
canonical: "https://github.com/openclaw/openclaw/issues/13948"
canonical_issue: "https://github.com/openclaw/openclaw/issues/13948"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156757-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27584187597](https://github.com/openclaw/clownfish/actions/runs/27584187597)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/13948

## Summary

Hydrated live state supersedes the stale representative hint. #13948 is the open canonical tracker for the remaining action-level tool-policy contract, but the preflight artifact marks it security-sensitive, so it is quarantined to central OpenClaw security handling. The other hydrated refs are already closed historical/context items and receive no close/comment/merge/fix mutations. No fix artifact is emitted because the only open remaining work is security-routed and broad authorization-policy design, not a narrow autonomous fix PR.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #13948 | route_security | planned | security_sensitive | The only open canonical item is explicitly security-sensitive in hydrated live state, so Clownfish must route the exact ref to central security handling and perform no close/comment/label/merge/fix mutation on it. |
| #46684 | keep_closed | skipped | duplicate | Already closed duplicate of the security-routed canonical #13948; no mutation is valid for a closed target. |
| #54260 | keep_closed | skipped | duplicate | Already closed duplicate of the security-routed canonical #13948; no mutation is valid for a closed target. |
| #18661 | keep_closed | skipped | related | Closed related context item only; no mutation is valid for a closed target. |
| #48304 | keep_closed | skipped | related | Closed related/superseded context item only; no mutation is valid for a closed target. |
| #53760 | keep_closed | skipped | related | Closed related context item only; no mutation is valid for a closed target. |

## Needs Human

- none
