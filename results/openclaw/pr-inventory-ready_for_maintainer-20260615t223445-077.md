---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-077"
mode: "plan"
run_id: "27583277780"
workflow_run_id: "27583277780"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583277780"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:55:40.980Z"
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
needs_human_count: 7
---

# pr-inventory-ready_for_maintainer-20260615T223445-077

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583277780](https://github.com/openclaw/clownfish/actions/runs/27583277780)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory shard. No shared canonical was provided or inferred; merge, fix, raise_pr, instant close, low-signal close, and post-merge close are disabled. Hydrated open PRs are classified conservatively as independent maintainer-review items unless already closed or missing live artifact state.

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
| Needs human | 7 |

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
| #93088 | needs_human | blocked | needs_human | Live artifact state required for a conservative classification is missing for this listed candidate. |
| #86279 | keep_independent | planned | independent | Independent media-generation delivery PR; keep for maintainer review rather than dedupe, close, or merge in this plan shard. |
| #71400 | keep_independent | planned | independent | Focused adaptive reset PR, but active review/author follow-up and merge-disabled plan mode make only a non-mutating independent classification appropriate. |
| #87800 | keep_independent | planned | independent | Independent Google Vertex onboarding/auth/docs PR requiring maintainer judgment on remaining value after the landed ADC work. |
| #87861 | keep_independent | planned | independent | Focused model-usage fix PR; keep independently for maintainer review, not closure or merge in plan mode. |
| #87872 | keep_independent | planned | independent | Independent Codex usage-accounting PR with author-follow-up signal; keep for maintainer review. |
| #88886 | needs_human | blocked | needs_human | Missing hydrated live artifact state blocks reliable classification beyond human follow-up. |
| #87891 | keep_independent | planned | independent | Independent Telegram configuration PR with a failed proof check; keep for maintainer review rather than close or merge. |
| #87923 | keep_independent | planned | independent | Independent thinking-level bugfix PR with failed proof; keep for maintainer review. |
| #87986 | keep_independent | planned | independent | Independent docs PR with failed proof; keep for maintainer review. |
| #88048 | keep_independent | planned | independent | Independent gateway feature PR with author-follow-up signal; keep for maintainer review. |
| #88052 | keep_independent | planned | independent | Independent proxy bugfix PR; keep for maintainer review, with no post-merge or fixed-by closeout planned. |
| #88061 | keep_independent | planned | independent | Broad docs accuracy PR; keep independently for maintainer review, not low-signal closure. |
| #88062 | keep_closed | skipped | superseded | Already closed in hydrated live state. |
| #88085 | keep_independent | planned | independent | Independent CLI bugfix PR with one failing check; keep for maintainer review. |
| #88503 | needs_human | blocked | needs_human | Missing hydrated live artifact state blocks reliable classification. |
| #88098 | keep_independent | planned | independent | Independent onboarding feature PR with failed proof; keep for maintainer review. |
| #88150 | keep_independent | planned | independent | Independent config memory-retention fix; keep for maintainer review. |
| #88203 | keep_independent | planned | independent | Independent approvals bugfix PR; keep for maintainer review. |
| #88206 | keep_independent | planned | independent | Independent Codex dynamic-tool fix; keep for maintainer review. |
| #88301 | keep_independent | planned | independent | Independent prompt-cache PR with author-follow-up signal; keep for maintainer review. |
| #88323 | needs_human | blocked | needs_human | Missing hydrated live artifact state blocks reliable classification. |
| #88437 | needs_human | blocked | needs_human | Missing hydrated live artifact state blocks reliable classification. |
| #88400 | needs_human | blocked | needs_human | Missing hydrated live artifact state blocks reliable classification. |
| #88401 | needs_human | blocked | needs_human | Missing hydrated live artifact state blocks reliable classification. |

## Needs Human

- #93088 missing hydrated live artifact state and target_updated_at in compacted preflight artifact.
- #88886 missing hydrated live artifact state and target_updated_at in compacted preflight artifact.
- #88503 missing hydrated live artifact state and target_updated_at in compacted preflight artifact.
- #88323 missing hydrated live artifact state and target_updated_at in compacted preflight artifact.
- #88437 missing hydrated live artifact state and target_updated_at in compacted preflight artifact.
- #88400 missing hydrated live artifact state and target_updated_at in compacted preflight artifact.
- #88401 missing hydrated live artifact state and target_updated_at in compacted preflight artifact.
