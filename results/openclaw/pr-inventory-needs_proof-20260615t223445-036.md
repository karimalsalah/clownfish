---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-036"
mode: "plan"
run_id: "27580942551-1-37"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "needs_human"
published_at: "2026-06-16T19:01:33.244Z"
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
needs_human_count: 12
---

# pr-inventory-needs_proof-20260615T223445-036

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: needs_human

Canonical: unknown

## Summary

Plan-only PR inventory classification. The 12 hydrated open PRs are independent review candidates with no shared canonical and no safe close/merge path in this shard. Of the 13 refs with unavailable live state, 12 remain needs_human due GitHub API rate limits, and #83160 is routed to central security handling because the job inventory describes security-shaped prompt-injection guard work.

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
| Needs human | 12 |

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
| #84036 | keep_independent | planned | independent | Standalone CLI behavior PR; no hydrated duplicate, superseding PR, or canonical family in this shard. |
| #84072 | keep_independent | planned | independent | Standalone model fallback change requiring normal review/proof; no close-style action is supported. |
| #84111 | keep_independent | planned | independent | Auth repair feature PR is independent and not safely closable as duplicate, superseded, or low-signal from this artifact. |
| #84122 | keep_independent | planned | independent | Small Feishu fix is an independent candidate; no hydrated canonical or superseding item supports closure. |
| #84123 | keep_independent | planned | independent | Provider configuration feature is independent and requires normal review/proof rather than backlog closeout. |
| #84248 | keep_independent | planned | independent | Substantial session-state fix candidate is independent; no hydrated duplicate or superseding candidate is present. |
| #84280 | keep_independent | planned | independent | Windows restart behavior fix is independent and should remain open for ordinary review/proof. |
| #84300 | keep_independent | planned | independent | Message-delivery PR is a standalone candidate; no safe merge or close recommendation is available. |
| #84325 | keep_independent | planned | independent | Signal command-source fix is independent; missing enrichment blocks stronger conclusions but not non-mutating classification. |
| #84334 | keep_independent | planned | independent | Gateway restart fix is independent and not safely closable from the current artifact. |
| #84424 | keep_independent | planned | independent | Doctor behavior fix is independent and should remain open for normal validation. |
| #83874 | keep_independent | planned | independent | Broad architecture PR is independent and needs maintainer review/proof, not dedupe closeout. |
| #76386 | needs_human | blocked | needs_human | Live PR state is unavailable, so this ref cannot be classified safely in plan mode. |
| #78071 | needs_human | blocked | needs_human | Live PR state is unavailable, so this ref cannot be classified safely in plan mode. |
| #78815 | needs_human | blocked | needs_human | Live PR state is unavailable, so this ref cannot be classified safely in plan mode. |
| #78827 | needs_human | blocked | needs_human | Live PR state is unavailable, so this ref cannot be classified safely in plan mode. |
| #79185 | needs_human | blocked | needs_human | Live PR state is unavailable, so this ref cannot be classified safely in plan mode. |
| #83095 | needs_human | blocked | needs_human | Live PR state is unavailable, so this ref cannot be classified safely in plan mode. |
| #83160 | route_security | planned | security_sensitive | Security-shaped prompt-injection guard work must be quarantined to central OpenClaw security handling for this exact item; no ProjectClownfish close, merge, label, comment, or fix action is safe. |
| #83274 | needs_human | blocked | needs_human | Live PR state is unavailable, so this ref cannot be classified safely in plan mode. |
| #84292 | needs_human | blocked | needs_human | Live PR state is unavailable, so this ref cannot be classified safely in plan mode. |
| #84441 | needs_human | blocked | needs_human | Live PR state is unavailable, so this ref cannot be classified safely in plan mode. |
| #84501 | needs_human | blocked | needs_human | Live PR state is unavailable, so this ref cannot be classified safely in plan mode. |
| #93099 | needs_human | blocked | needs_human | Live PR state is unavailable, so this ref cannot be classified safely in plan mode. |
| #93101 | needs_human | blocked | needs_human | Live PR state is unavailable, so this ref cannot be classified safely in plan mode. |

## Needs Human

- #76386 live state unavailable from preflight artifact
- #78071 live state unavailable from preflight artifact
- #78815 live state unavailable from preflight artifact
- #78827 live state unavailable from preflight artifact
- #79185 live state unavailable from preflight artifact
- #83095 live state unavailable from preflight artifact
- #83274 live state unavailable from preflight artifact
- #84292 live state unavailable from preflight artifact
- #84441 live state unavailable from preflight artifact
- #84501 live state unavailable from preflight artifact
- #93099 live state unavailable from preflight artifact
- #93101 live state unavailable from preflight artifact
