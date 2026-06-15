---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-15-bulk-plan-20260615-a"
mode: "plan"
run_id: "178151418602"
run_url: null
head_sha: null
workflow_conclusion: null
result_status: "planned"
published_at: "2026-06-15T09:03:06.248Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 36
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-15-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: unknown

Workflow conclusion: unknown

Worker result: planned

Canonical: unknown

## Summary

Plan-only classification completed from the hydrated preflight artifact. The hinted representative #83940 is already closed, and there is no safe single live replacement canonical because the open items split into unrelated TUI, gateway cleanup, Feishu, cron, provider, UI, and session-maintenance subclusters. No close, merge, label, comment, or fix action is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 36 |
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
| #54948 | keep_closed | skipped | independent | Already closed and not a live canonical candidate. |
| #54982 | keep_related | planned | related | Separate TUI feature subcluster; keep open but do not merge or close around the cron representative. |
| #54985 | route_security | planned | security_sensitive | Security-boundary-adjacent gateway metadata propagation is out of scope for Clownfish cleanup. |
| #55542 | route_security | planned | security_sensitive | Dependency and media-processing security surface should be routed to central security handling. |
| #59285 | keep_related | planned | related | Related cleanup-hint subcluster, but not a duplicate of cron consecutive skip tracking and not merge-ready. |
| #59360 | keep_related | planned | related | Keep as the Feishu footer subcluster canonical; do not close while candidate fix remains unlanded. |
| #61961 | route_security | planned | security_sensitive | Tool access classification changes belong in central security handling. |
| #63375 | keep_independent | planned | independent | Independent docs backlog item; no close or merge action in this cluster. |
| #67610 | keep_independent | planned | independent | Independent sandbox startup bug, not a duplicate of the cron representative. |
| #69562 | keep_related | planned | related | Cron-adjacent candidate with its own root cause; keep related, not canonical. |
| #72449 | route_security | planned | security_sensitive | Security-routed cron parsing item; no Clownfish close or merge action. |
| #72454 | keep_closed | skipped | independent | Already closed and independent. |
| #74081 | keep_closed | skipped | independent | Already closed and unrelated to the live open subclusters. |
| #74791 | route_security | planned | security_sensitive | Pairing/auth-adjacent configuration belongs in central security handling. |
| #74794 | route_security | planned | security_sensitive | Security-routed cron delivery inference item. |
| #78342 | route_security | planned | security_sensitive | Route exact item to central security handling. |
| #78343 | keep_closed | skipped | independent | Already closed and independent dependency cleanup. |
| #78827 | keep_independent | planned | independent | Independent provider usage-normalization fix. |
| #80125 | route_security | planned | security_sensitive | Broad core bug/security-audit surface is outside Clownfish cleanup. |
| #83689 | route_security | planned | security_sensitive | Exec-adjacent tool-call argument repair is routed to central security handling. |
| #83940 | keep_closed | skipped | canonical | Historical representative only; keep closed and split live work by subcluster. |
| #84122 | keep_related | planned | related | Candidate fix for Feishu footer subcluster, not merge-ready. |
| #84123 | keep_independent | planned | independent | Independent provider feature. |
| #84962 | route_security | planned | security_sensitive | Route deployment origin/security-boundary item to central security handling. |
| #85034 | keep_independent | planned | independent | Independent command-menu ordering change. |
| #85261 | keep_independent | planned | independent | Independent broad gateway fix PR; no merge/close action in plan mode. |
| #85335 | route_security | planned | security_sensitive | Broad cron isolated-agent capability change is security routed. |
| #85467 | keep_closed | skipped | independent | Already closed and independent. |
| #87300 | keep_independent | planned | independent | Independent Control UI feature. |
| #89680 | route_security | planned | security_sensitive | Sensitive data exposure/redaction item must be handled by central security. |
| #89687 | keep_related | planned | related | Feishu topic-session subcluster; related but not duplicate of footer parsing or cron representative. |
| #90879 | route_security | planned | security_sensitive | Broad dependency/security-sensitive PR is out of Clownfish cleanup scope. |
| #91069 | route_security | planned | security_sensitive | Large dependency/security-surface PR must be routed, not deduped. |
| #91407 | route_security | planned | security_sensitive | Security scanner finding and dependency changes require central security routing. |
| #92128 | keep_related | planned | related | Feishu topic-session routing subcluster; keep related, no merge/close. |
| #92542 | keep_independent | planned | independent | Independent session-maintenance change with data-model risk. |

## Needs Human

- No single live canonical should replace closed #83940; split follow-up jobs by subcluster before any closure or merge replay.
