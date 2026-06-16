---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-048"
mode: "plan"
run_id: "27580942551-1-49"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "needs_human"
published_at: "2026-06-16T19:01:33.288Z"
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
needs_human_count: 19
---

# pr-inventory-needs_proof-20260615T223445-048

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: needs_human

Canonical: unknown

## Summary

Plan-only PR inventory classification. The artifact hydrated six PRs and failed to hydrate nineteen refs because the GitHub installation rate limit was exceeded. No canonical was selected because the job is not a dedupe cluster. Open hydrated PRs are kept independent for normal proof/review; already-closed hydrated PRs are kept closed; unavailable refs need a fresh hydrated preflight before any classification or mutation.

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
| Needs human | 19 |

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
| openclaw/openclaw#56398 | keep_independent | planned | independent | Open independent PR requiring normal proof/review rather than dedupe closeout. |
| openclaw/openclaw#56706 | keep_closed | skipped |  | Already closed; no action to plan. |
| openclaw/openclaw#56720 | keep_independent | planned | independent | Open independent PR requiring normal proof/review rather than dedupe closeout. |
| openclaw/openclaw#60229 | keep_closed | skipped |  | Already closed; no action to plan. |
| openclaw/openclaw#60630 | keep_closed | skipped |  | Already closed; no action to plan. |
| openclaw/openclaw#93273 | keep_closed | skipped |  | Already closed; no action to plan. |
| openclaw/openclaw#60683 | needs_human | blocked | needs_human | Fresh hydrated live state is required before classifying this candidate. |
| openclaw/openclaw#60934 | needs_human | blocked | needs_human | Fresh hydrated live state is required before classifying this candidate. |
| openclaw/openclaw#61322 | needs_human | blocked | needs_human | Fresh hydrated live state is required before classifying this candidate. |
| openclaw/openclaw#61624 | needs_human | blocked | needs_human | Fresh hydrated live state is required before classifying this candidate. |
| openclaw/openclaw#61675 | needs_human | blocked | needs_human | Fresh hydrated live state is required before classifying this candidate. |
| openclaw/openclaw#61973 | needs_human | blocked | needs_human | Fresh hydrated live state is required before classifying this candidate. |
| openclaw/openclaw#62021 | needs_human | blocked | needs_human | Fresh hydrated live state is required before classifying this candidate. |
| openclaw/openclaw#62338 | needs_human | blocked | needs_human | Fresh hydrated live state is required before classifying this candidate. |
| openclaw/openclaw#62403 | needs_human | blocked | needs_human | Fresh hydrated live state is required before classifying this candidate. |
| openclaw/openclaw#62722 | needs_human | blocked | needs_human | Fresh hydrated live state is required before classifying this candidate. |
| openclaw/openclaw#62841 | needs_human | blocked | needs_human | Fresh hydrated live state is required before classifying this candidate. |
| openclaw/openclaw#63015 | needs_human | blocked | needs_human | Fresh hydrated live state is required before classifying this candidate. |
| openclaw/openclaw#63571 | needs_human | blocked | needs_human | Fresh hydrated live state is required before classifying this candidate. |
| openclaw/openclaw#87344 | needs_human | blocked | needs_human | Fresh hydrated live state is required before classifying this candidate. |
| openclaw/openclaw#89283 | needs_human | blocked | needs_human | Fresh hydrated live state is required before classifying this candidate. |
| openclaw/openclaw#89288 | needs_human | blocked | needs_human | Fresh hydrated live state is required before classifying this candidate. |
| openclaw/openclaw#89380 | needs_human | blocked | needs_human | Fresh hydrated live state is required before classifying this candidate. |
| openclaw/openclaw#93234 | needs_human | blocked | needs_human | Fresh hydrated live state is required before classifying this candidate. |
| openclaw/openclaw#89828 | needs_human | blocked | needs_human | Fresh hydrated live state is required before classifying this candidate. |

## Needs Human

- Fresh hydrated live state is required for #60683 before classification.
- Fresh hydrated live state is required for #60934 before classification.
- Fresh hydrated live state is required for #61322 before classification.
- Fresh hydrated live state is required for #61624 before classification.
- Fresh hydrated live state is required for #61675 before classification.
- Fresh hydrated live state is required for #61973 before classification.
- Fresh hydrated live state is required for #62021 before classification.
- Fresh hydrated live state is required for #62338 before classification.
- Fresh hydrated live state is required for #62403 before classification.
- Fresh hydrated live state is required for #62722 before classification.
- Fresh hydrated live state is required for #62841 before classification.
- Fresh hydrated live state is required for #63015 before classification.
- Fresh hydrated live state is required for #63571 before classification.
- Fresh hydrated live state is required for #87344 before classification.
- Fresh hydrated live state is required for #89283 before classification.
- Fresh hydrated live state is required for #89288 before classification.
- Fresh hydrated live state is required for #89380 before classification.
- Fresh hydrated live state is required for #93234 before classification.
- Fresh hydrated live state is required for #89828 before classification.
