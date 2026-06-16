---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238869-dedupe-only-20260429c"
mode: "autonomous"
run_id: "27595851592"
workflow_run_id: "27595851592"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27595851592"
head_sha: "7a8b7ab269d4c8246a3837f1013f6d9715d17c5e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T05:21:58.189Z"
canonical: "https://github.com/openclaw/openclaw/issues/39847"
canonical_issue: "https://github.com/openclaw/openclaw/issues/39847"
canonical_pr: "https://github.com/openclaw/openclaw/pull/50520"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238869-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27595851592](https://github.com/openclaw/clownfish/actions/runs/27595851592)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/39847

## Summary

Hydrated preflight shows the original representative #39894 is already closed, #51653 is already closed as superseded, and the live canonical family is security-sensitive: issue #39847 and repair PR #50520 are both marked for central security handling. No close, merge, fix, or PR-opening action is planned.

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
| #39847 | route_security | planned | security_sensitive | Open canonical issue contains security-sensitive metadata-exposure claims and must be quarantined to central OpenClaw security triage. |
| #39894 | route_security | planned | security_sensitive | Closed security-sensitive PR is historical for dedupe purposes but should still be quarantined as an exact security-sensitive ref, with no closure mutation. |
| #50520 | route_security | planned | security_sensitive | Open repair PR is part of the security-sensitive canonical path and must route to central OpenClaw security handling, not ProjectClownfish merge or close automation. |
| #51653 | keep_closed | skipped | superseded | Already-closed candidate PR is superseded historical evidence only. |

## Needs Human

- none
