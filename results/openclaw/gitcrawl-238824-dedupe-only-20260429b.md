---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238824-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25103970526"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103970526"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.387Z"
canonical: "https://github.com/openclaw/openclaw/pull/72614"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72614"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238824-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103970526](https://github.com/openclaw/clownfish/actions/runs/25103970526)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72614

## Summary

Representative #64787 is obsolete and already closed. The current canonical streamTo/resumeSessionId fix is merged PR https://github.com/openclaw/openclaw/pull/72614. Closed duplicate/superseded PRs remain closed; #72101 stays open as a related follow-up for distinct model="default" handling; #47115 is routed to security because the hydrated artifact marks it security-sensitive.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #47115 | route_security | planned | security_sensitive | Security-sensitive linked ref is outside ProjectClownfish cleanup scope and should be quarantined to central OpenClaw security handling. |
| #72614 | keep_closed | skipped | canonical | Canonical fix is already merged and closed; no mutation is valid for the canonical PR. |
| #58686 | keep_closed | skipped | superseded | Already closed as superseded by the landed canonical fix. |
| #63121 | keep_closed | skipped | superseded | Already closed as superseded by the landed canonical fix. |
| #64787 | keep_closed | skipped | superseded | Already closed; current canonical path is the later landed #72614. |
| #72331 | keep_closed | skipped | superseded | Already merged/closed and superseded as canonical by the later landed #72614. |
| #72101 | keep_related | planned | related | Not a duplicate of the streamTo canonical; keep open as related follow-up for default-model handling and failing checks. |

## Needs Human

- none
