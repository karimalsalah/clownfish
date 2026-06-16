---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-061"
mode: "plan"
run_id: "27580942551-1-62"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.320Z"
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

# pr-inventory-needs_proof-20260615T223445-061

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was assigned because the job explicitly states this is not a dedupe cluster. Hydrated open PRs are kept independently for maintainer/proof review; refs omitted from the compacted preflight artifact are marked needs_human because live state and updated_at were unavailable from the artifact.

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
| #75299 | keep_independent | planned | independent | Independent open PR; no safe close or merge action in plan mode. |
| #76545 | keep_independent | planned | independent | Independent open PR still needing proof/maintainer review. |
| #76668 | keep_independent | planned | independent | Independent open PR; no duplicate/superseded evidence in hydrated shard. |
| #77053 | keep_independent | planned | independent | Independent feature PR requiring normal maintainer review. |
| #77067 | keep_independent | planned | independent | Independent open PR still needing proof. |
| #77312 | keep_independent | planned | independent | Independent open PR; proof failure blocks any stronger recommendation. |
| #77393 | keep_independent | planned | independent | Independent open PR needing narrower proof/maintainer review. |
| #87961 | keep_independent | planned | independent | Independent open PR blocked by proof/merge readiness. |
| #88114 | keep_independent | planned | independent | Independent open PR blocked by proof/merge readiness. |
| #88426 | keep_independent | planned | independent | Independent open PR still needing proof. |
| #93391 | needs_human | blocked | needs_human | Cannot classify audibly without hydrated live state from the artifact. |
| #89602 | keep_independent | planned | independent | Independent open PR blocked by proof failure. |
| #89688 | keep_independent | planned | independent | Independent open PR still needing proof. |
| #89693 | keep_independent | planned | independent | Independent open PR still needing proof. |
| #92526 | needs_human | blocked | needs_human | Cannot classify audibly without hydrated live state from the artifact. |
| #92576 | needs_human | blocked | needs_human | Cannot classify audibly without hydrated live state from the artifact. |
| #92135 | keep_independent | planned | independent | Independent open PR; no safe merge action in plan mode. |
| #92763 | needs_human | blocked | needs_human | Cannot classify audibly without hydrated live state from the artifact. |
| #82540 | keep_independent | planned | independent | Independent open PR requiring maintainer/review-bot resolution before any stronger action. |
| #92234 | keep_independent | planned | independent | Independent draft PR needing maintainer/proof review. |
| #92274 | keep_independent | planned | independent | Independent open PR; no safe merge action in plan mode. |
| #92346 | keep_independent | planned | independent | Independent open PR; no safe merge action in plan mode. |
| #92349 | keep_independent | planned | independent | Independent open PR blocked by proof and unresolved review-bot context. |
| #92388 | keep_independent | planned | independent | Independent open PR blocked by proof failure. |
| #92420 | needs_human | blocked | needs_human | Cannot classify audibly without hydrated live state from the artifact. |

## Needs Human

- #93391 missing from compacted preflight artifact; live kind/state/updated_at unavailable.
- #92526 missing from compacted preflight artifact; live kind/state/updated_at unavailable.
- #92576 missing from compacted preflight artifact; live kind/state/updated_at unavailable.
- #92763 missing from compacted preflight artifact; live kind/state/updated_at unavailable.
- #92420 missing from compacted preflight artifact; live kind/state/updated_at unavailable.
