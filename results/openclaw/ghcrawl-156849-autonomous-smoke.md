---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156849-autonomous-smoke"
mode: "autonomous"
run_id: "27598130736"
workflow_run_id: "27598130736"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27598130736"
head_sha: "3456041b23c90140b1b609eea90480f39847d880"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:44:46.238Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156849-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27598130736](https://github.com/openclaw/clownfish/actions/runs/27598130736)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Hydrated live state shows the original seed PRs are already closed, so no close, comment, label, or merge mutation is planned for them. The representative #50994 is obsolete/closed; #64060 was replaced by #73946 in the hydrated record, but the provided current main checkout at 6aa83374 does not contain the text-payload promotion behavior, so this result emits a narrow fix artifact for that non-security cron payload lane and leaves the separate model-ID whitespace lane out of scope.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 1 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/93527 | clownfish/ghcrawl-156849-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #93527 | merge_canonical | executed | fix_pr | merged by ProjectClownfish post-flight |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #28905 | keep_closed | skipped | related | Already closed; do not mutate closed historical refs. |
| #50942 | keep_closed | skipped | related | Already closed; no closure action is valid. |
| #50994 | keep_closed | skipped | superseded | Representative canonical hint is obsolete because #50994 is already closed and had unresolved review concerns. |
| #64060 | keep_closed | skipped | fixed_by_candidate | Already closed; keep credit trail as evidence for the follow-up fix artifact. |
| #66203 | keep_closed | skipped | related | Already closed and separate from the narrow executable fix lane. |
| #66543 | keep_closed | skipped | superseded | Already closed; separate follow-up lane, not a target for this cluster mutation. |
| #73946 | keep_closed | skipped | canonical | Already closed/merged in hydrated state; use as credit evidence only. |
| cluster:ghcrawl-156849-autonomous-smoke | fix_needed | planned |  | The bug lane remains narrow enough for an executable fix PR, and all source PRs are closed/unusable for direct repair. |
| cluster:ghcrawl-156849-autonomous-smoke | build_fix_artifact | planned |  | Fix-enabled autonomous job with no viable open contributor branch and a narrow, credit-preserving repair path. |

## Needs Human

- none
