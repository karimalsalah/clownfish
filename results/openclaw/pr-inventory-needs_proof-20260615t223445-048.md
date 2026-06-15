---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-048"
mode: "plan"
run_id: "27583353330"
workflow_run_id: "27583353330"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583353330"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T23:55:41.510Z"
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

# pr-inventory-needs_proof-20260615T223445-048

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583353330](https://github.com/openclaw/clownfish/actions/runs/27583353330)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Plan-mode PR inventory classification. No GitHub mutations planned. Hydrated open PRs without a merge/close-safe path were kept non-mutating; the validator-required security-sensitive item is routed to security; already-closed PRs were kept closed; refs without live kind/state/updated_at from the artifact require targeted rehydration before classification.

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
| #56398 | route_security | planned | security_sensitive | Validator requires the exec-approval PR to be routed through central security handling; keep the action non-mutating. |
| #56706 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #56720 | keep_independent | planned | independent | Distinct open PR with proof/check blockers; classify without mutation. |
| #60229 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #60630 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #93273 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #60683 | keep_closed | skipped | related | Already closed; no mutation is valid. |
| #60934 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #61322 | keep_independent | planned | independent | Open draft PR with insufficient proof/enrichment for stronger action; keep non-mutating. |
| #61624 | keep_independent | planned | independent | Open draft PR with insufficient proof/enrichment for stronger action; keep non-mutating. |
| #61675 | keep_independent | planned | independent | Open draft PR with insufficient proof/enrichment for stronger action; keep non-mutating. |
| #61973 | keep_closed | skipped | independent | Already closed; no mutation is valid. |
| #62021 | needs_human | planned | needs_human | Needs targeted rehydration before classification or mutation. |
| #62338 | needs_human | planned | needs_human | Needs targeted rehydration before classification or mutation. |
| #62403 | needs_human | planned | needs_human | Needs targeted rehydration before classification or mutation. |
| #62722 | needs_human | planned | needs_human | Needs targeted rehydration before classification or mutation. |
| #62841 | needs_human | planned | needs_human | Needs targeted rehydration before classification or mutation. |
| #63015 | needs_human | planned | needs_human | Needs targeted rehydration before classification or mutation. |
| #63571 | needs_human | planned | needs_human | Needs targeted rehydration before classification or mutation. |
| #87344 | needs_human | planned | needs_human | Needs targeted rehydration before classification or mutation. |
| #89283 | needs_human | planned | needs_human | Needs targeted rehydration before classification or mutation. |
| #89288 | needs_human | planned | needs_human | Needs targeted rehydration before classification or mutation. |
| #89380 | needs_human | planned | needs_human | Needs targeted rehydration before classification or mutation. |
| #93234 | needs_human | planned | needs_human | Needs targeted rehydration before classification or mutation. |
| #89828 | needs_human | planned | needs_human | Needs targeted rehydration before classification or mutation. |

## Needs Human

- #62021 needs targeted live rehydration: artifact has kind unknown/state unavailable/updated_at null.
- #62338 needs targeted live rehydration: artifact has kind unknown/state unavailable/updated_at null.
- #62403 needs targeted live rehydration: artifact has kind unknown/state unavailable/updated_at null.
- #62722 needs targeted live rehydration: artifact has kind unknown/state unavailable/updated_at null.
- #62841 needs targeted live rehydration: artifact has kind unknown/state unavailable/updated_at null.
- #63015 needs targeted live rehydration: artifact has kind unknown/state unavailable/updated_at null.
- #63571 needs targeted live rehydration: artifact has kind unknown/state unavailable/updated_at null.
- #87344 needs targeted live rehydration: artifact has kind unknown/state unavailable/updated_at null.
- #89283 needs targeted live rehydration: artifact has kind unknown/state unavailable/updated_at null.
- #89288 needs targeted live rehydration: artifact has kind unknown/state unavailable/updated_at null.
- #89380 needs targeted live rehydration: artifact has kind unknown/state unavailable/updated_at null.
- #93234 needs targeted live rehydration: artifact has kind unknown/state unavailable/updated_at null.
- #89828 needs targeted live rehydration: artifact has kind unknown/state unavailable/updated_at null.
