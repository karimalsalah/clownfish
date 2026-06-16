---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156968-autonomous-smoke"
mode: "autonomous"
run_id: "27598132132"
workflow_run_id: "27598132132"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27598132132"
head_sha: "3456041b23c90140b1b609eea90480f39847d880"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:17:50.770Z"
canonical: "https://github.com/openclaw/openclaw/tree/6aa83374d90d35226b9cf3577155c3876a91b4b3"
canonical_issue: "https://github.com/openclaw/openclaw/issues/38223"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156968-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27598132132](https://github.com/openclaw/clownfish/actions/runs/27598132132)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/6aa83374d90d35226b9cf3577155c3876a91b4b3

## Summary

Hydrated candidates are no longer open. The narrow #38223 Control UI content-array symptom is already present on current main 6aa83374d90d35226b9cf3577155c3876a91b4b3, #38228 is already closed, and security-sensitive #38876 is quarantined without mutation.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #38223 | keep_closed | skipped | fixed_by_candidate | Already closed and the reported narrow behavior is implemented on current main; no close/comment/label mutation is valid. |
| #38228 | keep_closed | skipped | superseded | The PR is already closed and its useful narrow fix is present on current main; keep as historical superseded context. |
| #38876 | route_security | planned | security_sensitive | Security-sensitive item is quarantined to central OpenClaw security handling without mutating the closed PR. |

## Needs Human

- none
