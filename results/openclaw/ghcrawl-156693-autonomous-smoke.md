---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156693-autonomous-smoke"
mode: "autonomous"
run_id: "27584186459"
workflow_run_id: "27584186459"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27584186459"
head_sha: "3eaef20c39c95c760c2eeb4e61adf6ea57afc054"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:57:44.378Z"
canonical: "https://github.com/openclaw/openclaw/issues/51287"
canonical_issue: "https://github.com/openclaw/openclaw/issues/51287"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156693-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27584186459](https://github.com/openclaw/clownfish/actions/runs/27584186459)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/51287

## Summary

Hydrated state shows the representative PR #51292 is already closed and incomplete. The only live canonical issue for the configurable exec-approval timeout request is #51287, but it is explicitly security-sensitive and already labeled for maintainer product/security review, so Clownfish should route it to central security handling and not open or merge an autonomous fix. Closed candidate/context refs are retained as evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #25789 | route_security | planned | security_sensitive | The PR changes host exec approval timeout policy and has security-shaped review findings, so it belongs in central security/product review rather than autonomous cleanup or replacement. |
| #51287 | route_security | planned | security_sensitive | This is the live canonical issue, but it changes how long pending host-exec approvals remain valid and is already queued for maintainer security/product review, so no autonomous fix PR should be planned. |
| #51292 | keep_closed | skipped | superseded | The PR is already closed and incomplete; keep it as historical evidence for #51287 rather than attempting closure, merge, or replacement. |
| #60151 | keep_closed | skipped | independent | This is a different timeout surface and is already closed; no action is needed in this cluster. |
| #85841 | route_security | planned | security_sensitive | This linked security-sensitive approval-routing report should remain in central security handling scope, even though no close or fix action is appropriate here. |

## Needs Human

- none
