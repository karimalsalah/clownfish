---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-maintainer_owned-20260615T223445-009"
mode: "plan"
run_id: "27580942551-1-8"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.446Z"
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

# pr-inventory-maintainer_owned-20260615T223445-009

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. No GitHub mutations are planned because this shard has no shared canonical, merge/fix actions are blocked by frontmatter, low-signal closeout is disabled, and several PRs need ordinary maintainer or author follow-up rather than dedupe cleanup.

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
| #40782 | keep_independent | planned | independent | Distinct contributor PR with unresolved maintainer feedback; keep open as independent work. |
| #85345 | keep_independent | planned | independent | Draft maintainer-owned implementation should remain open for normal review. |
| #85496 | keep_independent | planned | independent | Contributor PR has useful code and remains in draft review state. |
| #86365 | keep_independent | planned | independent | Ready-for-maintainer-look PR, not dedupe cleanup. |
| #86539 | keep_independent | planned | independent | Useful contributor PR with failing proof/check gate; keep open for repair or review. |
| #86544 | keep_closed | skipped | fixed_by_candidate | Already merged; no mutation needed. |
| #87111 | keep_independent | planned | independent | Large active feature/fix PR should remain independent. |
| #87304 | keep_independent | planned | independent | Ready-for-maintainer-look PR, not a closure target. |
| #87434 | keep_independent | planned | independent | Draft contributor work should remain open. |
| #87572 | keep_independent | planned | independent | Distinct small PR should remain open for maintainer review/proof resolution. |
| #87617 | keep_independent | planned | independent | Active maintainer-owned work; keep independent. |
| #87888 | keep_independent | planned | independent | Ready-for-maintainer-look PR; keep open independently. |
| #87955 | keep_independent | planned | independent | Active maintainer-owned work; keep independent. |
| #88084 | keep_independent | planned | independent | Distinct useful PR should stay open for proof/review handling. |
| #93143 | needs_human | planned | needs_human | Missing hydrated live state for this listed candidate. |
| #89068 | keep_independent | planned | independent | Draft maintainer-owned Codex fix should remain open. |
| #89082 | keep_independent | planned | independent | Draft active work; keep independent. |
| #89121 | keep_closed | skipped | fixed_by_candidate | Already merged; no mutation needed. |
| #83497 | keep_independent | planned | independent | Contributor PR has useful code but unresolved checks; keep open. |
| #89203 | needs_human | planned | needs_human | Missing hydrated live state for this listed candidate. |
| #92398 | needs_human | planned | needs_human | Missing hydrated live state for this listed candidate. |
| #93207 | needs_human | planned | needs_human | Missing hydrated live state for this listed candidate. |
| #87587 | keep_independent | planned | independent | Draft maintainer-owned work should remain open. |
| #89006 | keep_independent | planned | independent | Draft conflicting PR; keep open for author/maintainer repair, not cleanup. |
| #89404 | needs_human | planned | needs_human | Missing hydrated live state for this listed candidate. |

## Needs Human

- #93143: missing hydrated live state in the provided preflight artifact.
- #89203: missing hydrated live state in the provided preflight artifact.
- #92398: missing hydrated live state in the provided preflight artifact.
- #93207: missing hydrated live state in the provided preflight artifact.
- #89404: missing hydrated live state in the provided preflight artifact.
