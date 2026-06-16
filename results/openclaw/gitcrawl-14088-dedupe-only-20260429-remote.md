---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14088-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27586018310"
workflow_run_id: "27586018310"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27586018310"
head_sha: "e3eb8644e505a7248576d80431c73eb422cab7c4"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:44:24.691Z"
canonical: "https://github.com/openclaw/openclaw/pull/51267"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/51267"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# gitcrawl-14088-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27586018310](https://github.com/openclaw/clownfish/actions/runs/27586018310)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/51267

## Summary

Hydrated live state shows the original representative #42331 and the only local-store open candidate #42361 now return 404, so no close/comment/label mutation is safe for them. The malformed text-block crash family is already canonically fixed by merged PR #51267 on current main 2365a137d88cd8ae3902159267545b9edc7cf54a. The unavailable #42361 candidate is not a duplicate of that family based on the job inventory title, but its live kind and updated_at cannot be verified, so it is blocked for human/planner follow-up instead of being emitted as a planned keep action.

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
| #51267 | keep_closed | skipped | canonical | Merged canonical PR is historical evidence only; no mutation is allowed or needed. |
| #39331 | keep_closed | skipped | superseded | Already closed and superseded by the merged canonical fix. |
| #34980 | keep_closed | skipped | superseded | Already closed historical contributor PR; useful prior work is covered by the landed canonical PR. |
| #34979 | keep_closed | skipped | fixed_by_candidate | Already closed issue fixed by the landed canonical PR. |
| #42331 | needs_human | blocked | needs_human | The representative cannot be verified as a live issue or PR. No mutation is safe; maintainer or planner follow-up may be needed only if #42331 must be tracked outside public GitHub visibility. |
| #42361 | needs_human | blocked | needs_human | The title evidence suggests #42361 is independent of the malformed text-block crash family, but live 404 state means its target kind and updated_at cannot be verified. No mutation is safe, and the unavailable ref needs planner or maintainer follow-up if it must remain tracked. |

## Needs Human

- #42331 returned 404 despite being listed as the canonical representative; no mutation is safe against that unavailable ref. No cluster-wide human decision is needed because #51267 is the hydrated landed canonical fix.
- #42361 returned 404 and has no hydrated target_updated_at. It appears independent from the job inventory title, but the unavailable live ref cannot be emitted as a planned keep action or used for any close/comment/label mutation.
