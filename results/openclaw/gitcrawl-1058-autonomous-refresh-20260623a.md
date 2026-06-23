---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1058-autonomous-refresh-20260623a"
mode: "autonomous"
run_id: "28005079930"
workflow_run_id: "28005079930"
run_url: "https://github.com/openclaw/clownfish/actions/runs/28005079930"
head_sha: "c3d4877276db1f97103fe56d12a5ddad91fc73e0"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-23T05:48:15.635Z"
canonical: "https://github.com/openclaw/openclaw/issues/87322"
canonical_issue: "https://github.com/openclaw/openclaw/issues/87322"
canonical_pr: "https://github.com/openclaw/openclaw/pull/87449"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-1058-autonomous-refresh-20260623a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/28005079930](https://github.com/openclaw/clownfish/actions/runs/28005079930)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/87322

## Summary

Classified #87322 as the live canonical Mattermost block-streaming issue. #87449 is the active candidate PR but is not merge-ready or repairable by this worker because it carries merge-risk labels, has a relevant failed typecheck in the preflight artifact, and lacks a clean merge preflight. #71569 is related but not a duplicate because its remaining silent-draft/final-notification product question is distinct. #75256 is quarantined as the exact hydrated security-sensitive linked ref.

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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #87322 | keep_canonical | planned | canonical | Keep #87322 open as the canonical issue until #87449 lands or is deliberately replaced. |
| #71569 | keep_related | planned | related | Related Mattermost streaming UX/config thread; keep open rather than closing as duplicate of #87322. |
| #87449 | needs_human | blocked | needs_human | Maintainer decision needed before repair or merge: #87449 is useful but blocked by merge-risk labels, failed typecheck evidence, and missing clean merge preflight. |
| #75256 | route_security | planned | security_sensitive | Quarantine only the exact hydrated security-sensitive ref under central OpenClaw security handling. |

## Needs Human

- #87449 is the active candidate fix for #87322, but repair/merge automation is blocked by merge-risk labels, the failed check-test-types result in the hydrated preflight, and missing clean Codex /review merge preflight.
