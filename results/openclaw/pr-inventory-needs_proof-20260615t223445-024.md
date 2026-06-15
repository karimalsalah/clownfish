---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-024"
mode: "plan"
run_id: "27583351485"
workflow_run_id: "27583351485"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583351485"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:55:41.422Z"
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
needs_human_count: 14
---

# pr-inventory-needs_proof-20260615T223445-024

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583351485](https://github.com/openclaw/clownfish/actions/runs/27583351485)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No GitHub mutations are planned. Hydrated open PRs are kept for independent maintainer/review handling because this shard has no shared canonical and merge/fix/low-signal closeout are disabled. Already-closed PRs are skipped as closed. Candidates with unavailable live state are escalated only for that missing hydration decision.

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
| Needs human | 14 |

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
| #92759 | keep_closed | skipped | superseded | Already closed in hydrated live state. |
| #88192 | keep_independent | planned | independent | Independent PR with missing proof; no close, merge, or fix action is permitted in this plan job. |
| #88850 | keep_independent | planned | independent | Independent channel fix candidate; keep open for normal maintainer review/proof path. |
| #88883 | keep_independent | planned | independent | Independent small TypeScript fix with failing proof/check signals; keep open, do not close or merge. |
| #92822 | keep_independent | planned | independent | Independent Discord PR with unhydrated linked issue and failed proof; keep open for proof/maintainer review. |
| #48396 | keep_independent | planned | independent | Independent UI feature PR with unresolved bot findings and failed proof; no low-signal closeout is allowed. |
| #92831 | keep_closed | skipped | superseded | Already closed in hydrated live state. |
| #92716 | keep_independent | planned | independent | Independent proof-supplied PR; keep open for normal merge review outside this plan-only shard. |
| #92770 | keep_independent | planned | independent | Independent provider compatibility fix; keep open for standard review/merge path. |
| #52120 | needs_human | blocked | needs_human | Maintainer judgment is required to decide whether to keep, close as abandoned, or split a replacement path; low-signal/instant close and fix PRs are disabled. |
| #92847 | keep_independent | planned | independent | Independent proof-supplied PR; keep open for maintainer review outside this plan-only job. |
| #92867 | keep_independent | planned | independent | Independent proof-supplied PR; keep open for standard review/merge path. |
| #50454 | needs_human | blocked | needs_human | Hydrated live state is unavailable for this candidate. |
| #92893 | needs_human | blocked | needs_human | Hydrated live state is unavailable for this candidate. |
| #92929 | needs_human | blocked | needs_human | Hydrated live state is unavailable for this candidate. |
| #55085 | needs_human | blocked | needs_human | Hydrated live state is unavailable for this candidate. |
| #55390 | needs_human | blocked | needs_human | Hydrated live state is unavailable for this candidate. |
| #55742 | needs_human | blocked | needs_human | Hydrated live state is unavailable for this candidate. |
| #55861 | needs_human | blocked | needs_human | Hydrated live state is unavailable for this candidate. |
| #90833 | needs_human | blocked | needs_human | Hydrated live state is unavailable for this candidate. |
| #90855 | needs_human | blocked | needs_human | Hydrated live state is unavailable for this candidate. |
| #92936 | needs_human | blocked | needs_human | Hydrated live state is unavailable for this candidate. |
| #54862 | needs_human | blocked | needs_human | Hydrated live state is unavailable for this candidate. |
| #55770 | needs_human | blocked | needs_human | Hydrated live state is unavailable for this candidate. |
| #57364 | needs_human | blocked | needs_human | Hydrated live state is unavailable for this candidate. |

## Needs Human

- #52120 requires maintainer judgment because the author explicitly abandoned the Mattermost patch and bot comments identify unresolved technical blockers, while close/fix actions are disabled.
- #50454 live state unavailable from preflight artifact.
- #92893 live state unavailable from preflight artifact.
- #92929 live state unavailable from preflight artifact.
- #55085 live state unavailable from preflight artifact.
- #55390 live state unavailable from preflight artifact.
- #55742 live state unavailable from preflight artifact.
- #55861 live state unavailable from preflight artifact.
- #90833 live state unavailable from preflight artifact.
- #90855 live state unavailable from preflight artifact.
- #92936 live state unavailable from preflight artifact.
- #54862 live state unavailable from preflight artifact.
- #55770 live state unavailable from preflight artifact.
- #57364 live state unavailable from preflight artifact.
