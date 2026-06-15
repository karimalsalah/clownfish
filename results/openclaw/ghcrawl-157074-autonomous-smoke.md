---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-157074-autonomous-smoke"
mode: "autonomous"
run_id: "27584191425"
workflow_run_id: "27584191425"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27584191425"
head_sha: "3eaef20c39c95c760c2eeb4e61adf6ea57afc054"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:57:44.423Z"
canonical: null
canonical_issue: null
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

# ghcrawl-157074-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27584191425](https://github.com/openclaw/clownfish/actions/runs/27584191425)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Hydrated state shows the representative #43821 is already closed, so it must not receive a close/comment/label action. The only open cluster candidate, #60035, is marked security-sensitive in the preflight artifact and carries security/product-review labels, so the scoped planned action is to route that issue to central OpenClaw security handling. No merge, closeout, or fix PR is safe for this cluster.

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
| #43821 | keep_closed | skipped | related | Already closed in hydrated live state; keep as historical proxy-support context only. |
| #60035 | route_security | planned | security_sensitive | Security-sensitive open issue must be routed to central OpenClaw security handling; no ProjectClownfish close, merge, label, comment, or fix PR should be emitted for this item. |

## Needs Human

- none
