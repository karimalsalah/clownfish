---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238805-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25103898767"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103898767"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.374Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238805-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103898767](https://github.com/openclaw/clownfish/actions/runs/25103898767)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Hydrated state shows the original #60400 family is already closed/fixed on current main, but there is no single live canonical for the whole cluster. The remaining open items split into related subfamilies: #62985/#63380 Telegram account agentId routing, #72906 status-summary reporting, and #73602 WSL2 channel reliability. No high-confidence duplicate closeout is planned; #60646 is quarantined because hydrated comments show a redacted Telegram bot token exposure signal.

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
| #59833 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; closed refs must not receive close actions. |
| #60400 | keep_closed | skipped | canonical | Historical representative is already closed/fixed; it is not a live canonical for closing newer open reports. |
| #60646 | route_security | planned | security_sensitive | Scoped token-exposure signal; quarantine this item without blocking unrelated non-security classification. |
| #62985 | keep_related | planned | related | Related Telegram/channel configuration regression with its own canonical issue and PR; keep open, no dedupe close. |
| #63380 | keep_related | planned | related | Useful open contributor PR for a related subcluster; job blocks merge/fix and failing checks block merge or fixed-by closure. |
| #72906 | keep_related | planned | related | Related channel status family, but not a true duplicate and no high-confidence close path. |
| #73602 | keep_related | planned | related | Related channel reliability subcluster; keep open for focused WSL2 retest and investigation. |

## Needs Human

- none
