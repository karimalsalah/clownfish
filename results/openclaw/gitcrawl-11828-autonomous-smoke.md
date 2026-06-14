---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-11828-autonomous-smoke"
mode: "autonomous"
run_id: "27488928582"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27488928582"
head_sha: "174f98c691cc8ad2a6c29f671541c354831222e1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-14T05:24:49.433Z"
canonical: "https://github.com/openclaw/openclaw/issues/69700"
canonical_issue: "https://github.com/openclaw/openclaw/issues/69700"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-11828-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27488928582](https://github.com/openclaw/clownfish/actions/runs/27488928582)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/69700

## Summary

#69700 is the only open actionable item and becomes the current canonical issue for the narrow raw-source lint contract. Closed #64696, #70986, and #73722 are evidence only. Current main still applies source-page structure checks to every `sources/` page, and no viable open PR exists, so the safe path is a narrow new fix PR artifact with no close or merge actions.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/92876 | clownfish/gitcrawl-11828-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #92876 | merge_canonical | blocked | fix_pr | merge requires CLOWNFISH_ALLOW_MERGE=1; labeled clownfish |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #64696 | keep_closed | skipped | related | Already closed; keep as related guardrail evidence, not a mutation target. |
| #69700 | keep_canonical | planned | canonical | Best surviving open canonical for the narrow raw `sources/` frontmatter lint behavior. |
| #70986 | keep_closed | skipped | related | Already closed and related, not a live duplicate or closure target. |
| #73722 | keep_closed | skipped | superseded | Closed unmerged PR is historical evidence only; do not repair or close it in this cluster. |
| cluster:gitcrawl-11828-autonomous-smoke | fix_needed | planned |  | Open canonical issue is real enough for a narrow new fix PR artifact; no close or merge is safe before the fix exists. |
| cluster:gitcrawl-11828-autonomous-smoke | build_fix_artifact | planned |  | Fix artifact is needed because the canonical issue is open, current main still has the reported behavior, and the job allows fix and raise_pr. |

## Needs Human

- none
