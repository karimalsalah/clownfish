---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14172-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27595847269"
workflow_run_id: "27595847269"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27595847269"
head_sha: "7a8b7ab269d4c8246a3837f1013f6d9715d17c5e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T05:21:58.144Z"
canonical: "https://github.com/openclaw/openclaw/issues/43202"
canonical_issue: "https://github.com/openclaw/openclaw/issues/43202"
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-14172-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27595847269](https://github.com/openclaw/clownfish/actions/runs/27595847269)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/43202

## Summary

Classified #43202 as the live canonical issue for the non-security Feishu card-action field-loss reports. #42754 is a high-confidence duplicate of #43202 and can be closed with a credit-preserving comment. #42908 remains a useful open contributor PR candidate but is not merge-ready. Routed exact security-sensitive linked refs #75 and #43953 to central security handling, and kept closed historical refs skipped.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 1 |
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
| #42754 | close_duplicate | executed | duplicate | already closed with matching projectclownfish comment |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #75 | route_security | planned | security_sensitive | Exact linked ref #75 is security-sensitive in the hydrated artifact and must be quarantined to central OpenClaw security handling. |
| #118 | keep_closed | skipped | independent | Closed unrelated context ref; no mutation is valid. |
| #35973 | keep_closed | skipped | related | Already closed; useful only as historical context and contributor-credit evidence. |
| #38609 | keep_closed | skipped | related | Already closed historical PR; no close action is valid. |
| #43202 | keep_canonical | planned | canonical | Best live canonical issue because it covers the broader Feishu input/form/select field-loss scope and has recent hydrated reproduction evidence. |
| #42754 | close_duplicate | planned | duplicate | Same root cause and user-visible failure as #43202, with no unique platform/version or separate reproduction path left after preserving the report trail. |
| #42908 | keep_related | planned | related | Useful overlapping PR candidate; do not close or merge in this dedupe-only job. |
| #43953 | route_security | planned | security_sensitive | Validator requires exact security-sensitive target #43953 to be routed to central OpenClaw security handling; no close, merge, label, or fix mutation is planned for this PR. |
| cluster:gitcrawl-14172-dedupe-only-20260429-remote | needs_human | planned | needs_human | Maintainer must choose or repair the non-security Feishu payload-command contract after #43953 is routed; this worker cannot open a fix PR or merge #42908 in this dedupe-only job. |

## Needs Human

- Choose or repair the non-security Feishu PR/payload-command contract for #43202 after #43953 is routed to central security handling; #42908 remains open but is not merge-ready and this job cannot fix or raise a PR.
