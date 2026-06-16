---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2203-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27595848971"
workflow_run_id: "27595848971"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27595848971"
head_sha: "7a8b7ab269d4c8246a3837f1013f6d9715d17c5e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T05:21:58.186Z"
canonical: "https://github.com/openclaw/openclaw/issues/65636"
canonical_issue: "https://github.com/openclaw/openclaw/issues/65636"
canonical_pr: null
actions_total: 18
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2203-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27595848971](https://github.com/openclaw/clownfish/actions/runs/27595848971)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/65636

## Summary

Classified the live hydrated cluster without GitHub mutations. The original representative #65669 is closed, so the surviving canonical for the custom cron job ID family is open issue #65636, with open PR #75065 related but proof-blocked. Open PR #70046 is a separate canonical subfamily for HH:MM --at/--tz parsing and should remain open for maintainer review. No close actions are safe or needed because the remaining actionable targets are open canonical/related work, while the rest of the job refs are already closed historical evidence.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 18 |
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
| #65636 | keep_canonical | planned | canonical | Best surviving canonical for the custom cron job ID family; no close/fix/merge action is permitted in this job. |
| #75065 | keep_related | planned | related | Useful related contributor PR, but not merge-ready and not closable under contributor-credit and proof gates. |
| #70046 | keep_canonical | planned | canonical | Separate canonical subfamily, not a duplicate of the custom-ID issue; keep open for maintainer review because merge is not allowed in this job. |
| #40218 | keep_closed | skipped | superseded | Already closed. |
| #42327 | keep_closed | skipped | related | Already closed and not part of the surviving custom-ID or time-only closeout lane. |
| #43695 | keep_closed | skipped | related | Already closed. |
| #44270 | keep_closed | skipped | related | Already closed. |
| #46177 | keep_closed | skipped | fixed_by_candidate | Already closed. |
| #49388 | keep_closed | skipped | related | Already closed. |
| #50982 | keep_closed | skipped | fixed_by_candidate | Already closed. |
| #51581 | keep_closed | skipped | related | Already closed. |
| #51969 | keep_closed | skipped | fixed_by_candidate | Already closed. |
| #59441 | keep_closed | skipped | fixed_by_candidate | Already closed; no additional close action is valid. |
| #59456 | keep_closed | skipped | fixed_by_candidate | Already closed. |
| #60890 | keep_closed | skipped | related | Already closed. |
| #65669 | keep_closed | skipped | superseded | Already closed representative; replaced by open canonical issue #65636 for planning. |
| #66023 | keep_closed | skipped | superseded | Already closed. |
| #69975 | keep_closed | skipped | fixed_by_candidate | Already merged and closed. |

## Needs Human

- none
