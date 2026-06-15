---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-283-close-canary-20260615-b"
mode: "execute"
run_id: "27525612901"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27525612901"
head_sha: "b9f5b868b735c9465404b83ae25477dfc16a116e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:18:38.431Z"
canonical: "#88307"
canonical_issue: "#88307"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-283-close-canary-20260615-b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27525612901](https://github.com/openclaw/clownfish/actions/runs/27525612901)

Workflow conclusion: success

Worker result: planned

Canonical: #88307

## Summary

Classified #88307 as the canonical live issue for the generated-media duplicate Discord delivery family. Planned one safe duplicate close for older issue #87995 against #88307. Kept #88323 related but non-mutating because it is an overlapping contributor fix PR with unresolved review findings, failing checks, and dirty mergeability.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #87995 | close_duplicate | blocked | duplicate | target changed since worker review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #88307 | keep_canonical | planned | canonical | Best surviving canonical because it has the newest live reproduction against the post-handoff delivery path. |
| #87995 | close_duplicate | planned | duplicate | True duplicate of the newer canonical issue; closing preserves the reporter's proof as context and points follow-up to #88307. |
| #88323 | keep_related | planned | related | Related candidate fix, but not a safe candidate_fix for issue closure because review findings, dirty mergeability, and failing checks block merge/fixed-by-candidate handling. |

## Needs Human

- none
