---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-17439-autonomous-smoke"
mode: "autonomous"
run_id: "27586103690"
workflow_run_id: "27586103690"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27586103690"
head_sha: "cd27262aa84c91b6795825f85982447d9f04143d"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-16T00:44:24.692Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-17439-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27586103690](https://github.com/openclaw/clownfish/actions/runs/27586103690)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

No GitHub mutations are planned. The hydrated live state materially diverges from the gitcrawl cluster: #1254 is unavailable/404, the listed open candidate #1863 is already closed and describes Canvas deep links rather than search recall, and #1256 is a merged heartbeat-session PR unrelated to the displayed search-prefix title. The only unresolved decision is whether to refresh or discard this stale cluster.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #1254 | needs_human | blocked | needs_human | Canonical selection is blocked because the hinted representative is unavailable and the remaining hydrated refs do not match the gitcrawl search-recall cluster title. |
| #1863 | keep_closed | skipped | independent | Already closed and not a hydrated open candidate for this search-recall cluster. |
| #1256 | keep_closed | skipped | independent | Already closed/merged and unrelated to the hydrated search-recall cluster title. |
| #1243 | keep_closed | skipped | independent | Already closed and unrelated to the search recall/prefix issue family. |
| #1163 | keep_closed | skipped | independent | Already closed linked context and unrelated to the displayed search-recall cluster. |

## Needs Human

- Refresh or discard cluster gitcrawl-17439-autonomous-smoke: the hinted canonical #1254 is unavailable, and the hydrated refs #1863/#1256/#1243/#1163 do not contain a live open search-recall issue or PR that can be safely classified, closed, merged, or used for an executable fix artifact.
