---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-maintainer_owned-20260615T223445-008"
mode: "plan"
run_id: "27583279186"
workflow_run_id: "27583279186"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583279186"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T23:55:41.238Z"
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
needs_human_count: 9
---

# pr-inventory-maintainer_owned-20260615T223445-008

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583279186](https://github.com/openclaw/clownfish/actions/runs/27583279186)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Plan-only PR inventory classification shard. No GitHub mutations planned. Classified hydrated PRs conservatively, routed security-sensitive/security-linked PRs, kept already-closed PRs skipped, and marked refs missing live artifact state as needs_human because target_updated_at could not be copied from the preflight artifact.

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
| Needs human | 9 |

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
| #87927 | keep_independent | planned | independent | Standalone maintainer PR; keep for normal maintainer review. |
| #87958 | keep_independent | planned | independent | Standalone maintainer PR; keep for normal maintainer review. |
| #88142 | keep_related | planned | related | Related to small-model/tool-prep work, but failing checks block any merge-style recommendation. |
| #88175 | keep_independent | planned | independent | Standalone maintainer PR; keep for normal maintainer review. |
| #88181 | keep_related | planned | related | Related feature work, not a duplicate or closure candidate. |
| #88212 | keep_related | planned | related | Related broad feature work; keep for author/maintainer path. |
| #93118 | needs_human | blocked | needs_human | Live hydrated state is unavailable in the provided artifact, so this PR cannot be safely classified with required timestamp fields. |
| #88296 | route_security | planned | security_sensitive | This PR is directly tied to a security-sensitive exec-approval issue, so it should route to central OpenClaw security handling. |
| #88300 | route_security | planned | security_sensitive | This PR is tied to a security-sensitive leaked-argument/session-state issue, so it should route to central OpenClaw security handling. |
| #88311 | needs_human | blocked | needs_human | Live hydrated state is unavailable in the provided artifact, so this PR cannot be safely classified with required timestamp fields. |
| #88361 | needs_human | blocked | needs_human | Live hydrated state is unavailable in the provided artifact, so this PR cannot be safely classified with required timestamp fields. |
| #88379 | needs_human | blocked | needs_human | Live hydrated state is unavailable in the provided artifact, so this PR cannot be safely classified with required timestamp fields. |
| #88384 | needs_human | blocked | needs_human | Live hydrated state is unavailable in the provided artifact, so this PR cannot be safely classified with required timestamp fields. |
| #93178 | needs_human | blocked | needs_human | Live hydrated state is unavailable in the provided artifact, so this PR cannot be safely classified with required timestamp fields. |
| #89972 | route_security | planned | security_sensitive | Explicit security-sensitive item in the preflight artifact; route only. |
| #88750 | needs_human | blocked | needs_human | Live hydrated state is unavailable in the provided artifact, so this PR cannot be safely classified with required timestamp fields. |
| #93181 | needs_human | blocked | needs_human | Live hydrated state is unavailable in the provided artifact, so this PR cannot be safely classified with required timestamp fields. |
| #93174 | needs_human | blocked | needs_human | Live hydrated state is unavailable in the provided artifact, so this PR cannot be safely classified with required timestamp fields. |
| #70596 | keep_related | planned | related | Useful contributor PR with unresolved review context; keep for maintainer/author path. |
| #80426 | keep_related | planned | related | Useful channel feature PR with review blockers; keep related for normal PR workflow. |
| #75025 | keep_closed | skipped | superseded | Already merged/closed; no action needed. |
| #74068 | keep_related | planned | related | Open draft with failing proof/review blocker; keep related rather than close. |
| #83169 | keep_related | planned | related | Useful contributor PR with review context; keep for maintainer review. |
| #24661 | keep_related | planned | related | Open draft with failing proof and bot findings; keep related for author work. |
| #39046 | keep_related | planned | related | Open draft with failing proof and maintainer-review requirement; keep related. |

## Needs Human

- #93118: missing hydrated live item data and target_updated_at in the provided compacted preflight artifact.
- #88311: missing hydrated live item data and target_updated_at in the provided compacted preflight artifact.
- #88361: missing hydrated live item data and target_updated_at in the provided compacted preflight artifact.
- #88379: missing hydrated live item data and target_updated_at in the provided compacted preflight artifact.
- #88384: missing hydrated live item data and target_updated_at in the provided compacted preflight artifact.
- #88750: missing hydrated live item data and target_updated_at in the provided compacted preflight artifact.
- #93178: missing hydrated live item data and target_updated_at in the provided compacted preflight artifact.
- #93181: missing hydrated live item data and target_updated_at in the provided compacted preflight artifact.
- #93174: missing hydrated live item data and target_updated_at in the provided compacted preflight artifact.
