---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238901-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104110276"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104110276"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.418Z"
canonical: "https://github.com/openclaw/openclaw/pull/73453"
canonical_issue: "https://github.com/openclaw/openclaw/issues/49317"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73453"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238901-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104110276](https://github.com/openclaw/clownfish/actions/runs/25104110276)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73453

## Summary

Canonical issue #49317 is already closed after merged PR #73453. #57109 is already closed. The only open cluster item, #62837, is related to the WhatsApp group mention family but is not a high-confidence duplicate or fixed-by-candidate closeout because it reports a distinct mentionedJids-null extraction path.

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
| #49317 | keep_closed | skipped | fixed_by_candidate | Historical canonical issue is already closed by the landed canonical PR. |
| #57109 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; retained only as historical cluster evidence. |
| #73453 | keep_closed | skipped | canonical | Merged canonical PR is already closed; no direct worker mutation is needed. |
| #62837 | keep_related | planned | related | Leave open as related follow-up until current main is checked against the mentionedJids-null extraction reproduction. |

## Needs Human

- none
