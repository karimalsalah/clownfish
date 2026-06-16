---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-15442-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27599300094"
workflow_run_id: "27599300094"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599300094"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:46:59.515Z"
canonical: "https://github.com/openclaw/openclaw/issues/73716"
canonical_issue: "https://github.com/openclaw/openclaw/issues/73716"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-15442-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599300094](https://github.com/openclaw/clownfish/actions/runs/27599300094)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/73716

## Summary

No GitHub mutation is planned. The hydrated preflight artifact shows the representative #53235, context #62386, candidate #67779, and linked canonical/fix refs #73716/#73721 are all already closed. The best surviving canonical family is #73716 for the raw-vs-canonical Control UI live-update bug; current main is 999d44340fa5436b5f8305e0df4dc537b74df83b, and the read-only checkout contains the active-runId match path in ui/src/ui/controllers/chat.ts, so no close, label, merge, or fix artifact is needed.

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
| #39743 | keep_closed | skipped | related | Closed linked context ref retained as historical related evidence only. |
| #53235 | keep_closed | skipped | related | Closed representative is obsolete for mutation; it remains related historical context. |
| #62386 | keep_closed | skipped | related | Closed context ref retained as historical related evidence only. |
| #67779 | keep_closed | skipped | duplicate | The only open candidate from the job is no longer open; it is a closed duplicate of the #73716 canonical family. |
| #73716 | keep_closed | skipped | canonical | Best canonical issue for the remaining raw-vs-canonical live-update family, already closed as fixed on main. |
| #73721 | keep_closed | skipped | superseded | Closed unmerged contributor PR is superseded by the already-fixed mainline path for #73716. |

## Needs Human

- none
