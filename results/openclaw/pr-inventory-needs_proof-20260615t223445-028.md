---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-028"
mode: "plan"
run_id: "27583352023"
workflow_run_id: "27583352023"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583352023"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:55:41.451Z"
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
needs_human_count: 17
---

# pr-inventory-needs_proof-20260615T223445-028

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583352023](https://github.com/openclaw/clownfish/actions/runs/27583352023)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was selected. Eight hydrated open PRs are kept as non-mutating related backlog items because they remain blocked by proof/review/check evidence. Seventeen listed candidates could not be classified from live state because the preflight artifact has unavailable state from GitHub API rate limits.

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
| Needs human | 17 |

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
| #78075 | keep_related | planned | related | Keep as a standalone related candidate; no close or merge is safe in plan mode with missing proof and a rebase blocker. |
| #78085 | keep_related | planned | related | Keep as a plausible standalone candidate blocked by proof/check evidence; no closure or merge action is warranted. |
| #78124 | keep_related | planned | related | Keep related and non-mutating; it may be useful but requires proof and maintainer review before any merge path. |
| #78129 | keep_related | planned | related | Keep as related backlog work; the artifact does not support closure, merge, or fixed-by-candidate closeout. |
| #78130 | keep_related | planned | related | Keep related; overlapping refs are unhydrated/unavailable, so superseded or duplicate closeout would be unsafe. |
| #78154 | keep_related | planned | related | Keep as a non-mutating related candidate; the evidence blocks merge, but low-signal closeout is disabled for this job. |
| #78410 | keep_related | planned | related | Partial enrichment is not itself a maintainer decision; keep conservatively as related and blocked on proof/porting evidence. |
| #78440 | keep_related | planned | related | Keep related; this is a standalone feature/fix candidate that needs maintainer acceptance and complete enrichment before any mutation. |
| #42908 | needs_human | blocked | needs_human | Live state is unavailable, so the worker cannot safely classify or plan a mutation for this candidate. |
| #93059 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #43951 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #56785 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #58732 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #59821 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #60445 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #60922 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #64503 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #64800 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #78036 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #78453 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #78459 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #78486 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #78507 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #78544 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #78556 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |

## Needs Human

- #42908 needs refreshed hydration because live state is unavailable in the preflight artifact.
- #93059 needs refreshed hydration because live state is unavailable in the preflight artifact.
- #43951 needs refreshed hydration because live state is unavailable in the preflight artifact.
- #56785 needs refreshed hydration because live state is unavailable in the preflight artifact.
- #58732 needs refreshed hydration because live state is unavailable in the preflight artifact.
- #59821 needs refreshed hydration because live state is unavailable in the preflight artifact.
- #60445 needs refreshed hydration because live state is unavailable in the preflight artifact.
- #60922 needs refreshed hydration because live state is unavailable in the preflight artifact.
- #64503 needs refreshed hydration because live state is unavailable in the preflight artifact.
- #64800 needs refreshed hydration because live state is unavailable in the preflight artifact.
- #78036 needs refreshed hydration because live state is unavailable in the preflight artifact.
- #78453 needs refreshed hydration because live state is unavailable in the preflight artifact.
- #78459 needs refreshed hydration because live state is unavailable in the preflight artifact.
- #78486 needs refreshed hydration because live state is unavailable in the preflight artifact.
- #78507 needs refreshed hydration because live state is unavailable in the preflight artifact.
- #78544 needs refreshed hydration because live state is unavailable in the preflight artifact.
- #78556 needs refreshed hydration because live state is unavailable in the preflight artifact.
