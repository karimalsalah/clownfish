---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-060"
mode: "plan"
run_id: "27583353998"
workflow_run_id: "27583353998"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583353998"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:55:41.605Z"
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

# pr-inventory-needs_proof-20260615T223445-060

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583353998](https://github.com/openclaw/clownfish/actions/runs/27583353998)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory shard. No GitHub mutations planned. Hydrated open PRs were classified conservatively; unavailable refs are blocked on live-state hydration due GitHub API rate limit in the preflight artifact.

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
| #91729 | needs_human | planned | needs_human | Draft PR with negative behavior proof, unresolved bot review, and failed checks requires maintainer/author decision. |
| #82303 | keep_independent | planned | independent | Independent feature PR with proof/review history; not a duplicate or low-signal close candidate in this inventory shard. |
| #91924 | needs_human | planned | needs_human | Technical correctness depends on whether the packaged macOS app includes the localization resource. |
| #91973 | needs_human | planned | needs_human | Large behavior-affecting realtime voice PR with failed proof and unresolved real-provider validation. |
| #92079 | keep_related | planned | related | Potentially valid but related to unhydrated #91862; keep as related follow-up rather than closing or merging from this shard. |
| #93218 | needs_human | planned | needs_human | Mixed proof/check state and unresolved cross-channel correctness risk require maintainer judgment. |
| #92556 | needs_human | blocked | needs_human | Live state is unavailable, so no mutating action or reliable classification is allowed. |
| #93389 | needs_human | blocked | needs_human | Live state is unavailable, so no mutating action or reliable classification is allowed. |
| #93390 | needs_human | blocked | needs_human | Live state is unavailable, so no mutating action or reliable classification is allowed. |
| #84758 | needs_human | blocked | needs_human | Live state is unavailable, so no mutating action or reliable classification is allowed. |
| #67758 | needs_human | blocked | needs_human | Live state is unavailable, so no mutating action or reliable classification is allowed. |
| #67761 | needs_human | blocked | needs_human | Live state is unavailable, so no mutating action or reliable classification is allowed. |
| #93395 | needs_human | blocked | needs_human | Live state is unavailable, so no mutating action or reliable classification is allowed. |
| #59214 | needs_human | blocked | needs_human | Live state is unavailable, so no mutating action or reliable classification is allowed. |
| #93397 | needs_human | blocked | needs_human | Live state is unavailable, so no mutating action or reliable classification is allowed. |
| #59898 | needs_human | blocked | needs_human | Live state is unavailable, so no mutating action or reliable classification is allowed. |
| #63112 | needs_human | blocked | needs_human | Live state is unavailable, so no mutating action or reliable classification is allowed. |
| #67734 | needs_human | blocked | needs_human | Live state is unavailable, so no mutating action or reliable classification is allowed. |
| #68537 | needs_human | blocked | needs_human | Live state is unavailable, so no mutating action or reliable classification is allowed. |
| #70056 | needs_human | blocked | needs_human | Live state is unavailable, so no mutating action or reliable classification is allowed. |
| #70471 | needs_human | blocked | needs_human | Live state is unavailable, so no mutating action or reliable classification is allowed. |
| #74223 | needs_human | blocked | needs_human | Live state is unavailable, so no mutating action or reliable classification is allowed. |
| #75127 | needs_human | blocked | needs_human | Live state is unavailable, so no mutating action or reliable classification is allowed. |
| #75198 | needs_human | blocked | needs_human | Live state is unavailable, so no mutating action or reliable classification is allowed. |
| #75218 | needs_human | blocked | needs_human | Live state is unavailable, so no mutating action or reliable classification is allowed. |

## Needs Human

- #91729: draft MS Teams PR has negative behavior proof, unresolved Codex P2 review, and failed checks.
- #91924: macOS localization PR has failed real behavior proof and unresolved packaging-resource correctness concern.
- #91973: large realtime voice-call PR has failed real behavior proof and needs real provider audible timing validation.
- #93218: stream command PR has mixed check/proof state and unresolved cross-channel session-key correctness risk.
- #92556, #93389, #93390, #84758, #67758, #67761, #93395, #59214, #93397, #59898, #63112, #67734, #68537, #70056, #70471, #74223, #75127, #75198, #75218: live state unavailable from preflight due GitHub API rate limit; no target_updated_at available.
