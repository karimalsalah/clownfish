---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-052"
mode: "plan"
run_id: "27580942551-1-53"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "needs_human"
published_at: "2026-06-16T19:01:33.298Z"
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
needs_human_count: 13
---

# pr-inventory-needs_proof-20260615T223445-052

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: needs_human

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was selected. Hydrated open PRs are kept independently because this shard is not a dedupe cluster and merge/fix/low-signal close paths are disabled or lack required proof. Refs with unavailable live state require rehydration before classification.

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
| Needs human | 13 |

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
| #68685 | keep_independent | planned | independent | Unique config migration PR with no hydrated duplicate or superseding canonical; keep as independent needs-proof review work. |
| #68785 | keep_independent | planned | independent | Feature/availability PR has unique scope and unresolved proof/review requirements; no close, merge, or fix path is available in this plan. |
| #68801 | keep_independent | planned | independent | Small gateway leak fix candidate remains independent; evidence is insufficient for merge or close-style action. |
| #68833 | keep_independent | planned | independent | Telegram behavior fix is unique and not superseded by any hydrated item; keep independently for proof review. |
| #68857 | keep_independent | planned | independent | Unique configurable timeout feature remains independent and needs proof; no merge or closure gate is satisfied. |
| #88425 | keep_independent | planned | independent | ACP context-engine behavior fix has distinct scope and remains a needs-proof PR. |
| #88529 | keep_independent | planned | independent | Partial enrichment gap blocks any stronger recommendation, but live item identity is present; keep independently. |
| #93302 | keep_independent | planned | independent | Distinct daemon availability/compatibility fix remains independent; insufficient enriched proof for merge or closure. |
| #88915 | keep_independent | planned | independent | Distinct macOS cleanup/fix remains independent; proof and enrichment gaps prevent stronger action. |
| #89086 | keep_independent | planned | independent | Distinct browser error-format fix remains independent; no hydrated canonical or superseding PR exists. |
| #89387 | keep_independent | planned | independent | Session-state fix has unique scope and cannot be safely closed, merged, or superseded from this artifact. |
| #89447 | keep_independent | planned | independent | Potential low-signal indicators are not actionable in this job; keep independently pending rehydration/manual proof review. |
| #89467 | needs_human | blocked | needs_human | Live state is unavailable; rehydrate before classifying or planning any action. |
| #89484 | needs_human | blocked | needs_human | Live state is unavailable; rehydrate before classifying or planning any action. |
| #89687 | needs_human | blocked | needs_human | Live state is unavailable; rehydrate before classifying or planning any action. |
| #90966 | needs_human | blocked | needs_human | Live state is unavailable; rehydrate before classifying or planning any action. |
| #90969 | needs_human | blocked | needs_human | Live state is unavailable; rehydrate before classifying or planning any action. |
| #90990 | needs_human | blocked | needs_human | Live state is unavailable; rehydrate before classifying or planning any action. |
| #90997 | needs_human | blocked | needs_human | Live state is unavailable; rehydrate before classifying or planning any action. |
| #91002 | needs_human | blocked | needs_human | Live state is unavailable; rehydrate before classifying or planning any action. |
| #91015 | needs_human | blocked | needs_human | Live state is unavailable; rehydrate before classifying or planning any action. |
| #91050 | needs_human | blocked | needs_human | Live state is unavailable; rehydrate before classifying or planning any action. |
| #91140 | needs_human | blocked | needs_human | Live state is unavailable; rehydrate before classifying or planning any action. |
| #91156 | needs_human | blocked | needs_human | Live state is unavailable; rehydrate before classifying or planning any action. |
| #91157 | needs_human | blocked | needs_human | Live state is unavailable; rehydrate before classifying or planning any action. |

## Needs Human

- #89467 live state unavailable due GitHub API rate limit; rehydrate before classification.
- #89484 live state unavailable due GitHub API rate limit; rehydrate before classification.
- #89687 live state unavailable due GitHub API rate limit; rehydrate before classification.
- #90966 live state unavailable due GitHub API rate limit; rehydrate before classification.
- #90969 live state unavailable due GitHub API rate limit; rehydrate before classification.
- #90990 live state unavailable due GitHub API rate limit; rehydrate before classification.
- #90997 live state unavailable due GitHub API rate limit; rehydrate before classification.
- #91002 live state unavailable due GitHub API rate limit; rehydrate before classification.
- #91015 live state unavailable due GitHub API rate limit; rehydrate before classification.
- #91050 live state unavailable due GitHub API rate limit; rehydrate before classification.
- #91140 live state unavailable due GitHub API rate limit; rehydrate before classification.
- #91156 live state unavailable due GitHub API rate limit; rehydrate before classification.
- #91157 live state unavailable due GitHub API rate limit; rehydrate before classification.
