---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-17426-autonomous-smoke"
mode: "autonomous"
run_id: "27586103415"
workflow_run_id: "27586103415"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27586103415"
head_sha: "cd27262aa84c91b6795825f85982447d9f04143d"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-16T00:50:29.684Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# gitcrawl-17426-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27586103415](https://github.com/openclaw/clownfish/actions/runs/27586103415)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Hydrated live state shows no open candidates to close, merge, or repair. The job's gitcrawl titles describe a clawhub login/Unauthorized cluster, but the preflight artifact hydrated the listed refs as closed, unrelated issues/PRs, with #101 unavailable. Because the representative #72 is already merged/closed and unrelated to the stated auth cluster, canonical selection for the intended cluster is materially stale and needs a refreshed job/preflight before any mutating action.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 2 |

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
| #41 | keep_closed | skipped |  | Already closed historical context; no mutation planned. |
| #72 | keep_closed | skipped |  | Representative/canonical hint is obsolete; #72 cannot be used as a live canonical for this cluster. |
| #73 | keep_closed | skipped |  | Already closed historical context; no mutation planned. |
| #99 | keep_closed | skipped |  | Already closed; cannot emit close or fixed-by-candidate action. |
| #100 | keep_closed | skipped |  | Already closed; no mutation planned. |
| #101 | needs_human | blocked | needs_human | Live state is unavailable; refresh or remove this ref from the cluster before using it as auth-cluster evidence. |
| #115 | keep_closed | skipped |  | Already closed; no mutation planned. |
| #121 | keep_closed | skipped |  | Already closed historical context; no mutation planned. |
| #377 | keep_closed | skipped |  | Already closed linked context; no mutation planned. |
| #702 | keep_closed | skipped |  | Already closed; cannot emit close or post-merge close action. |
| cluster:gitcrawl-17426-autonomous-smoke | needs_human | blocked | needs_human | Canonical choice for the intended auth/login cluster is unclear because the hydrated live refs materially disagree with the job inventory; regenerate the gitcrawl cluster/preflight before any mutation or fix PR. |

## Needs Human

- Regenerate or rehydrate gitcrawl cluster 17426: the job describes a clawhub login Unauthorized cluster with open candidates, but live preflight has no open candidates and the listed refs hydrate as closed unrelated items or 404.
- Do not apply close/comment/label/merge/fix actions from this stale cluster until the intended auth/login refs are hydrated with current live state.
