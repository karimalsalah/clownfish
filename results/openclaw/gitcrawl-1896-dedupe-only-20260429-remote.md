---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1896-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585129009"
workflow_run_id: "27585129009"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585129009"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:18:21.253Z"
canonical: "#42099"
canonical_issue: "#42099"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1896-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585129009](https://github.com/openclaw/clownfish/actions/runs/27585129009)

Workflow conclusion: success

Worker result: planned

Canonical: #42099

## Summary

Plan-only autonomous classification for cluster gitcrawl-1896-dedupe-only-20260429-remote. The preflight artifact shows the original representative #60620 is already closed, no security-sensitive refs were detected, and #42099 is the remaining open issue candidate. The linked replacement PR #72409 is open but has failing proof/check evidence, so it is not safe to use as a fixed-by-candidate closeout path.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #60620 | keep_closed | skipped | canonical | The original representative is already closed; retain it only as historical canonical-family evidence. |
| #42099 | keep_canonical | planned | canonical | Keep the remaining open issue as the surviving canonical thread instead of closing it against a closed representative or a failing PR. |
| #72409 | keep_related | planned | related | The PR is related to the surviving canonical issue but cannot safely close or resolve it while proof/check evidence is failing and merge/fix actions are blocked. |

## Needs Human

- none
