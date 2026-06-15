---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238879-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104059887"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104059887"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.405Z"
canonical: "https://github.com/openclaw/openclaw/issues/54435"
canonical_issue: "https://github.com/openclaw/openclaw/issues/54435"
canonical_pr: "https://github.com/openclaw/openclaw/pull/54716"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238879-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104059887](https://github.com/openclaw/clownfish/actions/runs/25104059887)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/54435

## Summary

Hydrated state keeps #54435 as the representative canonical issue for the literal per-agent session.store undercount, with #54716 as the linked repairable but not merge-ready implementation candidate. #43737 and #59933 are related session-listing reports with distinct root causes, so no close/comment/label actions are planned.

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
| #54435 | keep_canonical | planned | canonical | Keep #54435 open as the canonical issue until #54716 or an equivalent fix lands; the other open reports are not true duplicates. |
| #54716 | keep_canonical | planned | canonical | Keep #54716 as the canonical implementation candidate for #54435, but do not recommend merge or repair in this dedupe-only job. |
| #43737 | keep_related | planned | related | Related session-listing regression with its own hydrated candidate PR #43984; not a duplicate of #54435. |
| #43984 | keep_related | planned | related | Keep as the related implementation candidate for #43737, not as the canonical path for #54435. |
| #59933 | keep_related | planned | related | Related session-tool visibility issue with distinct scope; keep open and do not close as a duplicate. |
| #53783 | keep_related | planned | related | Linked related issue outside the candidate set; no close action is safe. |
| #50478 | keep_closed | skipped | related | Already closed; skipped in the action matrix. |

## Needs Human

- none
