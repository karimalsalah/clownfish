---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-064"
mode: "plan"
run_id: "27580942551-1-64"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "needs_human"
published_at: "2026-06-16T19:01:33.331Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 6
---

# pr-inventory-ready_for_maintainer-20260615T223445-064

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: needs_human

Canonical: unknown

## Summary

Plan-only PR inventory classification. This shard is not a dedupe cluster, so no canonical was selected and no close, merge, or fix action is planned. Hydrated closed PRs are kept closed. Hydrated open PRs remain independent maintainer-review candidates unless blocked by author-waiting or review state. Five job refs were not present in the compacted preflight artifact and need refreshed hydration before classification.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 6 |

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
| #92817 | keep_closed | skipped | fixed_by_candidate | Already closed items must not receive closure actions. |
| #88899 | keep_independent | planned | independent | Useful independent PR, not a duplicate or low-signal close candidate. |
| #88919 | keep_independent | planned | independent | Independent focused PR requiring normal maintainer review; merge is blocked by job policy. |
| #88681 | keep_independent | planned | independent | Independent maintainer-review candidate; no dedupe or closure evidence. |
| #92877 | keep_independent | planned | independent | Independent PR with active author-waiting signal; do not close in inventory cleanup. |
| #92873 | keep_independent | planned | independent | Independent test-coverage PR; no canonical or duplicate relationship in this shard. |
| #92819 | keep_independent | planned | independent | Independent high-risk maintainer-review candidate; merge is not allowed by this plan job. |
| #50177 | keep_independent | planned | independent | Independent PR with failing proof/checks; not eligible for close or fixed-by-candidate action. |
| #51067 | keep_independent | planned | independent | Independent feature PR needing maintainer product/technical review; no closure evidence. |
| #92613 | needs_human | planned | needs_human | Active maintainer change request requires human or author follow-up before any merge/close classification beyond this item. |
| #90998 | keep_independent | planned | independent | Independent focused channel PR; no duplicate or low-signal evidence. |
| #92399 | keep_independent | planned | independent | Independent high-risk LLM/provider PR needing maintainer review; no closure action is justified. |
| #90846 | keep_closed | skipped | fixed_by_candidate | Already closed items must not receive closure actions. |
| #90864 | keep_independent | planned | independent | Independent PR with author-waiting signal; no dedupe or low-signal closure evidence. |
| #90923 | keep_independent | planned | independent | Independent platform fix with author-waiting signal; not a close candidate. |
| #92957 | needs_human | blocked | needs_human | Cannot safely classify listed candidate without hydrated live state from the preflight artifact. |
| #92939 | needs_human | blocked | needs_human | Cannot safely classify listed candidate without hydrated live state from the preflight artifact. |
| #66985 | keep_closed | skipped | fixed_by_candidate | Already closed items must not receive closure actions. |
| #92947 | needs_human | blocked | needs_human | Cannot safely classify listed candidate without hydrated live state from the preflight artifact. |
| #92990 | needs_human | blocked | needs_human | Cannot safely classify listed candidate without hydrated live state from the preflight artifact. |
| #89745 | keep_independent | planned | independent | Independent usage fix with author-waiting signal; not closable as duplicate or low-signal. |
| #89767 | keep_independent | planned | independent | Independent gateway feature/fix PR needing maintainer review; no closure evidence. |
| #92996 | needs_human | blocked | needs_human | Cannot safely classify listed candidate without hydrated live state from the preflight artifact. |
| #75213 | keep_closed | skipped | superseded | Already closed historical PR; no closure or fix action allowed in this plan job. |
| #88901 | keep_closed | skipped | superseded | Already closed historical PR; no closure action allowed. |

## Needs Human

- #92613 has an unresolved member CHANGES_REQUESTED review that blocks maintainer-ready classification beyond needs_human.
- #92957 is listed in the job but absent from the hydrated preflight artifact; refresh hydration before classification.
- #92939 is listed in the job but absent from the hydrated preflight artifact; refresh hydration before classification.
- #92947 is listed in the job but absent from the hydrated preflight artifact; refresh hydration before classification.
- #92990 is listed in the job but absent from the hydrated preflight artifact; refresh hydration before classification.
- #92996 is listed in the job but absent from the hydrated preflight artifact; refresh hydration before classification.
