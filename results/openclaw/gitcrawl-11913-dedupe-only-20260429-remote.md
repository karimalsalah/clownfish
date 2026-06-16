---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-11913-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27599298815"
workflow_run_id: "27599298815"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599298815"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:46:59.464Z"
canonical: "https://github.com/openclaw/openclaw/issues/47910"
canonical_issue: "https://github.com/openclaw/openclaw/issues/47910"
canonical_pr: null
actions_total: 17
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-11913-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599298815](https://github.com/openclaw/clownfish/actions/runs/27599298815)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/47910

## Summary

No GitHub mutations are planned. The representative #64905 and all three job-listed candidates (#48623, #57281, #58565) are already closed in the hydrated preflight state, so closed refs are retained as historical evidence only. The remaining live work is split across narrower open follow-up issues: #47910 for provider/failure-class quarantine policy, #55897 for MRU/lastGood auth-profile ordering, #33962 for lightweight slug generation, and #43374 for a distinct multi-agent concurrency timeout investigation.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 17 |
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
| #64905 | keep_closed | skipped | fixed_by_candidate | Representative is already closed and treated as evidence only. |
| #48623 | keep_closed | skipped | superseded | Already closed mixed report; no closure mutation is valid. |
| #57281 | keep_closed | skipped | fixed_by_candidate | Issue is already closed after the same-author fix PR landed. |
| #57283 | keep_closed | skipped | fixed_by_candidate | Merged PR is evidence for #57281 only; no merge or close action is allowed. |
| #58565 | keep_closed | skipped | duplicate | Already closed as duplicate/superseded by hydrated open issue #47910. |
| #47720 | keep_closed | skipped | fixed_by_candidate | Closed context ref; no action needed. |
| #48548 | keep_closed | skipped | fixed_by_candidate | Closed context ref; no action needed. |
| #54073 | keep_closed | skipped | fixed_by_candidate | Closed context ref; no action needed. |
| #55862 | keep_closed | skipped | fixed_by_candidate | Closed context ref; no action needed. |
| #62412 | keep_closed | skipped | superseded | Closed context ref; no action needed. |
| #68241 | keep_closed | skipped | fixed_by_candidate | Closed context ref; no action needed. |
| #70973 | keep_closed | skipped | related | Closed context ref; no action needed. |
| #71126 | keep_closed | skipped | fixed_by_candidate | Closed context ref; no action needed. |
| #47910 | keep_canonical | planned | canonical | Best open canonical for the remaining provider/failure-class quarantine policy; no close, fix, or label action is allowed or needed. |
| #55897 | keep_related | planned | related | Related auth-profile ordering policy, but not a true duplicate of #47910 because it asks for MRU/lastGood semantics and 402 presentation behavior. |
| #33962 | keep_related | planned | related | Related via slug-generator lane congestion and cooldown cascade symptoms, but it is a separate product/config decision rather than the auth-profile cooldown root cause. |
| #43374 | keep_related | planned | related | Related reliability/concurrency investigation; not safe to close as duplicate or route to a fix path in this close-only job. |

## Needs Human

- none
