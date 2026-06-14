---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156822-autonomous-smoke"
mode: "autonomous"
run_id: "27485434115"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27485434115"
head_sha: "6039da9a6c96d42c90d16daab044269bd67333ab"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-14T02:26:37.932Z"
canonical: "https://github.com/openclaw/openclaw/pull/63321"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/63321"
actions_total: 2
fix_executed: 0
fix_failed: 1
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156822-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27485434115](https://github.com/openclaw/clownfish/actions/runs/27485434115)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/63321

## Summary

#63321 is the only hydrated open candidate and remains the canonical path, but it is not merge-ready. Plan repair of the maintainer-editable contributor branch, preserve @franciscomaestre credit, address the Codex/Greptile review findings, rebase, validate, and only then consider merge or closeout.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | source PR #63321 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected when rebased upstream history includes workflow files |
| open_fix_pr | blocked |  | clownfish/ghcrawl-156822-autonomous-smoke | Codex /review did not pass after 2 attempt(s): Merge blocked. The branch fixes the Greptile helper reuse comment and the Funnel malformed-status issue, and `pnpm check:changed` plus diff checks pass, but the whois repair overcorrects by letting malformed JSON escape the Tailscale auth path instead of preserving the existing error-TTL failure behavior. |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #63321 | fix_needed | planned | canonical | Useful canonical PR is narrow and maintainer-editable, but failing proof, stale branch notice, unstable merge state, and actionable bot review findings block merge; repair the contributor branch first. |
| cluster:ghcrawl-156822-autonomous-smoke | build_fix_artifact | planned |  | A narrow repair artifact is allowed because the job permits fix and raise_pr, #63321 is maintainer-editable, and the source behavior is still present on current main. |

## Needs Human

- none
