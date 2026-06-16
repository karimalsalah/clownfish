---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-085"
mode: "plan"
run_id: "27580942551-1-85"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.495Z"
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
needs_human_count: 5
---

# pr-inventory-ready_for_maintainer-20260615T223445-085

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. The hydrated preflight artifact covers 20 of 25 listed candidates; no shared canonical is invented. Open hydrated PRs are kept independent for maintainer review because merge/fix/close actions are blocked or unsafe without merge preflight, review-bot comment hydration, and current mergeability. #89900 is already closed. Five listed refs were absent from the compacted live-state artifact and are scoped needs_human for rehydration only.

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
| Needs human | 5 |

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
| #89894 | keep_independent | planned | independent | Independent ready-for-maintainer PR; no close, merge, or fix action is allowed or justified in plan mode. |
| #89897 | keep_independent | planned | independent | Independent ready-for-maintainer PR; no duplicate/superseded relationship is established. |
| #89900 | keep_closed | skipped | fixed_by_candidate | Already closed in live preflight state; no action to apply. |
| #84897 | keep_independent | planned | independent | Independent ready-for-maintainer PR with no clear duplicate/superseded relationship. |
| #89932 | keep_independent | planned | independent | Independent documentation PR; not low-signal or duplicate based on hydrated evidence. |
| #89944 | keep_related | planned | related | Related to maintainer review backlog but not independently ready for close or merge; failed proof and waiting-on-author label need author/maintainer follow-up. |
| #89949 | keep_related | planned | related | Related ready-for-maintainer PR with a failed specialized proof; needs maintainer/author review rather than closure. |
| #89962 | keep_independent | planned | independent | Independent channel PR; no duplicate/superseded relationship is established. |
| #89967 | keep_independent | planned | independent | Independent compatibility fix PR; no closure or merge action is available. |
| #89981 | keep_independent | planned | independent | Independent small extension fix; no duplicate/superseded relationship is established. |
| #89992 | keep_related | planned | related | Related to the maintainer-ready backlog but broad feature/config behavior needs maintainer judgment before any landing decision. |
| #81108 | keep_related | planned | related | Large availability-risk PR remains related to maintainer review, not a close/merge candidate in this plan. |
| #93269 | needs_human | blocked | needs_human | Needs rehydration in a follow-up preflight; no mutation is planned. |
| #93180 | needs_human | blocked | needs_human | Needs rehydration in a follow-up preflight; no mutation is planned. |
| #90019 | keep_independent | planned | independent | Independent memory-search PR; no duplicate/superseded relationship is established. |
| #90030 | keep_independent | planned | independent | Independent memory-core PR; no duplicate/superseded relationship is established. |
| #90033 | keep_independent | planned | independent | Independent LLM/provider compatibility PR; no close/merge action is available. |
| #90060 | keep_independent | planned | independent | Independent high-priority edit fix; no duplicate/superseded relationship is established. |
| #90063 | keep_independent | planned | independent | Independent channel/plugin-sdk docs and helper PR; no duplicate/superseded relationship is established. |
| #90089 | keep_independent | planned | independent | Independent sandbox compatibility PR; no closure or merge action is available. |
| #90122 | keep_independent | planned | independent | Independent UI PR; no duplicate/superseded relationship is established. |
| #90142 | keep_independent | planned | independent | Independent Crestodian PR; no duplicate/superseded relationship is established. |
| #90169 | needs_human | blocked | needs_human | Needs rehydration in a follow-up preflight; no mutation is planned. |
| #90217 | needs_human | blocked | needs_human | Needs rehydration in a follow-up preflight; no mutation is planned. |
| #90218 | needs_human | blocked | needs_human | Needs rehydration in a follow-up preflight; no mutation is planned. |

## Needs Human

- #93269 requires live-state hydration; absent from compacted preflight item_matrix.
- #93180 requires live-state hydration; absent from compacted preflight item_matrix.
- #90169 requires live-state hydration; absent from compacted preflight item_matrix.
- #90217 requires live-state hydration; absent from compacted preflight item_matrix.
- #90218 requires live-state hydration; absent from compacted preflight item_matrix.
