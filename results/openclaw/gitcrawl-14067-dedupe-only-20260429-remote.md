---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14067-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27586017952"
workflow_run_id: "27586017952"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27586017952"
head_sha: "e3eb8644e505a7248576d80431c73eb422cab7c4"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:46:07.240Z"
canonical: "https://github.com/openclaw/openclaw/issues/87561"
canonical_issue: "https://github.com/openclaw/openclaw/issues/87561"
canonical_pr: "https://github.com/openclaw/openclaw/pull/87896"
actions_total: 13
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14067-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27586017952](https://github.com/openclaw/clownfish/actions/runs/27586017952)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/87561

## Summary

No close/merge/fix actions are safe or needed. The original open candidates are now closed in hydrated live state. Security-shaped refs are routed only to central handling; the remaining live non-security follow-up is the maintainer-owned #87561 issue.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
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
| #44027 | route_security | planned | security_sensitive | Security-sensitive item must be routed to central OpenClaw security handling only. |
| #63025 | route_security | planned | security_sensitive | Representative is obsolete and security-sensitive; route exact ref only. |
| #64182 | route_security | planned | security_sensitive | Security-sensitive linked ref requires exact-item quarantine. |
| #87561 | keep_related | planned | related | Keep open as the live maintainer follow-up for broader delivery semantics. |
| #32903 | keep_closed | skipped | fixed_by_candidate | Already closed context item. |
| #42745 | keep_closed | skipped | related | Already closed related context PR. |
| #46165 | keep_closed | skipped | superseded | Already closed obsolete PR. |
| #69067 | keep_closed | skipped | fixed_by_candidate | Already closed linked issue. |
| #70152 | keep_closed | skipped | superseded | Already closed obsolete PR. |
| #70286 | keep_closed | skipped | fixed_by_candidate | Already closed linked issue. |
| #70288 | keep_closed | skipped | fixed_by_candidate | Already closed candidate PR. |
| #76135 | keep_closed | skipped | fixed_by_candidate | Already closed linked issue. |
| #87896 | keep_closed | skipped | fixed_by_candidate | Already merged linked candidate; no mutation allowed or needed. |

## Needs Human

- none
