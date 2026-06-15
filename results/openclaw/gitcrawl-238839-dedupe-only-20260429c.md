---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238839-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25103995096"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103995096"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.392Z"
canonical: "https://github.com/openclaw/openclaw/pull/42908"
canonical_issue: "https://github.com/openclaw/openclaw/issues/42754"
canonical_pr: "https://github.com/openclaw/openclaw/pull/42908"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238839-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103995096](https://github.com/openclaw/clownfish/actions/runs/25103995096)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/42908

## Summary

Kept #42908 as the canonical open Feishu card-action PR. #43953 and #43202 remain related because they include broader input_value/name scope that #42908 does not fully cover. #73514 and #74191 are already closed, so no close action is planned for them. No security-sensitive items were present, and no merge or fix PR action is allowed by this job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #42754 | keep_related | planned | fixed_by_candidate | #42754 is covered by the canonical candidate #42908, but should remain open until the candidate lands because current main is not fixed and post-merge closeout is disabled for this job. |
| #42908 | keep_canonical | planned | canonical | #42908 remains the best canonical path for the option/options/form_value Feishu card-action data-loss cluster, but this autonomous dedupe-only job cannot merge or repair it. |
| #43202 | keep_related | planned | related | #43202 is related to the Feishu callback-field family but has unique input_value/name scope, so it should not be closed as a duplicate of #42908. |
| #43953 | keep_related | planned | related | #43953 is related, not a high-confidence duplicate or superseded PR for this cluster; keep it open for the broader #43202 scope. |
| #73514 | keep_closed | skipped | superseded | Already closed in live hydrated state; no mutation is valid. Historical classification is superseded by the canonical #42908 path. |
| #74191 | keep_closed | skipped | superseded | Already closed in live hydrated state with a prior Clownfish superseded-by-#42908 closeout, so this worker only records the skipped closed classification. |

## Needs Human

- none
