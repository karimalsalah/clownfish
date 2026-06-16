---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13587-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27595845814"
workflow_run_id: "27595845814"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27595845814"
head_sha: "7a8b7ab269d4c8246a3837f1013f6d9715d17c5e"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-16T05:21:58.136Z"
canonical: "https://github.com/openclaw/openclaw/pull/59118"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/59118"
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 4
---

# gitcrawl-13587-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27595845814](https://github.com/openclaw/clownfish/actions/runs/27595845814)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/pull/59118

## Summary

Hydrated preflight shows the hinted canonical #59118 is already merged on main as the narrow raw JSON parse leak fix. No close actions are planned: the remaining live non-security issues are related or independent follow-up/product decisions, one candidate ref is unavailable, and security-sensitive refs are routed only to central security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 4 |

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
| #59118 | keep_canonical | planned | canonical | Canonical path is already-merged PR #59118; this run is dedupe/closure-only and should not create a fix PR or merge anything. |
| #11207 | route_security | planned | security_sensitive | Security-sensitive open issue; route only this ref to central security triage. |
| #41803 | route_security | planned | security_sensitive | Security-sensitive PR; route exact ref to central security handling and do not mutate it. |
| #45393 | route_security | planned | security_sensitive | Security-sensitive PR; route exact ref to central security handling and do not mutate it. |
| #50425 | route_security | planned | security_sensitive | Security-sensitive PR; route exact ref to central security handling and do not mutate it. |
| #55923 | route_security | planned | security_sensitive | Security-sensitive PR; route exact ref to central security handling and do not mutate it. |
| #62201 | route_security | planned | security_sensitive | Security-sensitive PR; route exact ref to central security handling and do not mutate it. |
| #63786 | route_security | planned | security_sensitive | Security-sensitive PR; route exact ref to central security handling and do not mutate it. |
| #44910 | keep_related | planned | related | Keep open as related; not a true duplicate of #59118 and no fix PR is allowed in this job. |
| #45385 | keep_related | planned | related | Keep open as related; not a true duplicate and no fix PR is allowed in this job. |
| #54496 | keep_independent | planned | independent | Keep independent; it is a broader product/API feature request, not a duplicate closeout candidate. |
| #49550 | needs_human | blocked | needs_human | Live GitHub state is unavailable; do not classify, close, or route without a refreshed hydrated target. |

## Needs Human

- #49550: live state is unavailable (HTTP 404), so this candidate cannot be classified safely.
- #44910: maintainer decision remains on whether to land a narrow top-level detail parser repair or rely on generic suppression for unconfigured-provider errors.
- #45385: maintainer decision remains on mismatch-specific user messaging/retry behavior after current generic suppression and repair mitigations.
- #54496: maintainer product/API design is needed for durable transcript semantics before implementation.
