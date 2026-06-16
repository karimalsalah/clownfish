---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3258-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27599301125"
workflow_run_id: "27599301125"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599301125"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:46:59.524Z"
canonical: "https://github.com/openclaw/openclaw/issues/13744"
canonical_issue: "https://github.com/openclaw/openclaw/issues/13744"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-3258-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599301125](https://github.com/openclaw/clownfish/actions/runs/27599301125)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/13744

## Summary

The hydrated preflight shows the only listed open candidate, #49157, is already closed on live GitHub state. The representative #57032 and context refs #57115/#67544 are also closed; linked session-lock tracker #13744 is closed too. No close/comment/label, merge, post-merge, or fix action is safe or necessary for this dedupe-only job.

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
| #49157 | keep_closed | skipped | duplicate | The only local-store open candidate is already closed in the live preflight artifact, so this run should not mutate it. |
| #57032 | keep_closed | skipped | fixed_by_candidate | The representative is already closed and should not receive a close/comment/label mutation. |
| #57115 | keep_closed | skipped | fixed_by_candidate | This historical gateway-lock context ref is already closed and requires no mutation. |
| #67544 | keep_closed | skipped | fixed_by_candidate | This historical gateway restart context ref is already closed and requires no mutation. |
| #13744 | keep_closed | skipped | canonical | This linked canonical session-lock tracker is already closed; it is evidence for #49157 only, not a mutation target. |

## Needs Human

- none
