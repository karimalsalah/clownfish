---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-079"
mode: "plan"
run_id: "27580942551-1-79"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "needs_human"
published_at: "2026-06-16T19:01:33.440Z"
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

# pr-inventory-ready_for_maintainer-20260615T223445-079

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: needs_human

Canonical: unknown

## Summary

Plan-mode PR inventory classification. The preflight artifact hydrates 20 of 25 job candidates as open pull requests with no security-sensitive signal; those are kept independent for maintainer review because this shard is not a dedupe cluster and merge/close/fix actions are blocked or unsafe without full merge preflight. Five job candidates are missing hydrated live state in the artifact and require a targeted re-hydration decision.

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
| #81818 | needs_human | blocked | needs_human | Missing hydrated live state in the preflight artifact. |
| #93087 | needs_human | blocked | needs_human | Missing hydrated live state in the preflight artifact. |
| #81312 | keep_independent | planned | independent | Independent ready-for-maintainer PR; no closure or merge action is allowed. |
| #83187 | needs_human | blocked | needs_human | Missing hydrated live state in the preflight artifact. |
| #80627 | keep_independent | planned | independent | Independent PR with failing gates; keep for maintainer/author follow-up. |
| #81382 | keep_independent | planned | independent | Independent non-security PR with failing gates. |
| #22439 | keep_independent | planned | independent | Standalone feature PR retained for maintainer review. |
| #93198 | needs_human | blocked | needs_human | Missing hydrated live state in the preflight artifact. |
| #44143 | keep_independent | planned | independent | Draft independent PR with failing proof; keep open. |
| #45315 | keep_independent | planned | independent | Independent PR with unresolved validation/review context. |
| #48942 | keep_independent | planned | independent | Independent ready-for-maintainer PR. |
| #49488 | keep_independent | planned | independent | Independent Android compatibility PR requiring author/maintainer follow-up. |
| #51868 | keep_independent | planned | independent | Independent contributor PR retained for maintainer review. |
| #54758 | keep_independent | planned | independent | Independent ready-for-maintainer PR. |
| #86901 | needs_human | blocked | needs_human | Missing hydrated live state in the preflight artifact. |
| #59414 | keep_independent | planned | independent | Independent feature PR retained for maintainer review. |
| #69199 | keep_independent | planned | independent | Independent contributor PR kept open. |
| #71863 | keep_independent | planned | independent | Independent ready-for-maintainer PR. |
| #72055 | keep_independent | planned | independent | Independent PR with failing proof; keep for follow-up. |
| #72984 | keep_independent | planned | independent | Independent PR retained for maintainer review. |
| #73079 | keep_independent | planned | independent | Independent PR with failing proof. |
| #73162 | keep_independent | planned | independent | Independent PR with failing proof and waiting-on-author label. |
| #73199 | keep_independent | planned | independent | Independent automation PR with failing gates. |
| #73338 | keep_independent | planned | independent | Independent ready-for-maintainer PR; merge not planned. |
| #73809 | keep_independent | planned | independent | Independent ready-for-maintainer PR. |

## Needs Human

- #81818 missing hydrated live state in cluster preflight artifact.
- #93087 missing hydrated live state in cluster preflight artifact.
- #83187 missing hydrated live state in cluster preflight artifact.
- #93198 missing hydrated live state in cluster preflight artifact.
- #86901 missing hydrated live state in cluster preflight artifact.
