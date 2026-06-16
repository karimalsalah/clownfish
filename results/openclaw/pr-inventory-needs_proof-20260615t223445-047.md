---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-047"
mode: "plan"
run_id: "27580942551-1-48"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.287Z"
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

# pr-inventory-needs_proof-20260615T223445-047

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No GitHub mutations are planned because this shard has no shared canonical, merge/fix are blocked by job frontmatter, low-signal closeout is disabled, comments/review comments/checks are incomplete due hydration limits, and several refs lack live state from the preflight artifact.

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
| #75270 | keep_independent | planned | independent | Distinct broad PR needing proof/review, not closable or mergeable in plan mode. |
| #76332 | keep_independent | planned | independent | Independent candidate requiring behavior proof and review; no closure or merge action is supported. |
| #84666 | keep_independent | planned | independent | Narrow independent fix candidate, but proof/check gates are incomplete. |
| #85696 | keep_independent | planned | independent | Draft independent candidate; no mutating action should be planned. |
| #93184 | keep_independent | planned | independent | Independent UI/message-delivery candidate needing normal proof and check review. |
| #88738 | keep_independent | planned | independent | Small independent docs PR; no allowed evidence-backed close action. |
| #88961 | keep_independent | planned | independent | Draft independent candidate with incomplete validation. |
| #88962 | keep_independent | planned | independent | Independent candidate, but mixed scope needs maintainer/code review outside this inventory plan. |
| #89014 | keep_related | planned | related | Related overlapping Feishu candidate; canonical choice would require maintainer/code review. |
| #89083 | keep_related | planned | related | Related overlapping Feishu candidate; keep for human comparison rather than close. |
| #93256 | keep_independent | planned | independent | Independent plugin startup fix candidate with incomplete proof/check evidence. |
| #89099 | keep_independent | planned | independent | Independent partial fix candidate; no fixed-by closeout or merge is supported. |
| #89117 | keep_independent | planned | independent | Independent provider capability PR; partial hydration prevents stronger action. |
| #89190 | keep_independent | planned | independent | Independent provider catalog PR; partial hydration prevents merge/close planning. |
| #89209 | needs_human | blocked | needs_human | Live PR state unavailable; cannot safely classify beyond hydration blocker. |
| #89211 | needs_human | blocked | needs_human | Live PR state unavailable; cannot safely classify beyond hydration blocker. |
| #89214 | needs_human | blocked | needs_human | Live PR state unavailable; cannot safely classify beyond hydration blocker. |
| #89236 | needs_human | blocked | needs_human | Live PR state unavailable; cannot safely classify beyond hydration blocker. |
| #93264 | needs_human | blocked | needs_human | Live PR state unavailable; cannot safely classify beyond hydration blocker. |
| #89074 | needs_human | blocked | needs_human | Live PR state unavailable; cannot safely classify beyond hydration blocker. |
| #93226 | needs_human | blocked | needs_human | Live PR state unavailable; cannot safely classify beyond hydration blocker. |
| #92700 | needs_human | blocked | needs_human | Live PR state unavailable; cannot safely classify beyond hydration blocker. |
| #91943 | needs_human | blocked | needs_human | Live PR state unavailable; cannot safely classify beyond hydration blocker. |
| #54585 | needs_human | blocked | needs_human | Live PR state unavailable; cannot safely classify beyond hydration blocker. |
| #55927 | needs_human | blocked | needs_human | Live PR state unavailable; cannot safely classify beyond hydration blocker. |

## Needs Human

- #54585 live state unavailable in preflight artifact due GitHub API rate limit.
- #55927 live state unavailable in preflight artifact due GitHub API rate limit.
- #89074 live state unavailable in preflight artifact due GitHub API rate limit.
- #89209 live state unavailable in preflight artifact due GitHub API rate limit.
- #89211 live state unavailable in preflight artifact due GitHub API rate limit.
- #89214 live state unavailable in preflight artifact due GitHub API rate limit.
- #89236 live state unavailable in preflight artifact due GitHub API rate limit.
- #91943 live state unavailable in preflight artifact due GitHub API rate limit.
- #92700 live state unavailable in preflight artifact due GitHub API rate limit.
- #93226 live state unavailable in preflight artifact due GitHub API rate limit.
- #93264 live state unavailable in preflight artifact due GitHub API rate limit.
- #89014 and #89083 overlap on the same Feishu streaming final overwrite area; comments/review comments/checks were not hydrated enough to choose a canonical or superseded PR.
