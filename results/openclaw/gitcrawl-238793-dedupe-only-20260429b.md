---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238793-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25103800038"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103800038"
head_sha: "98c86abfe56e7ca0578fd667fdea3121315c5b1d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.363Z"
canonical: "https://github.com/openclaw/openclaw/pull/56454"
canonical_issue: "https://github.com/openclaw/openclaw/issues/56419"
canonical_pr: "https://github.com/openclaw/openclaw/pull/56454"
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238793-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103800038](https://github.com/openclaw/clownfish/actions/runs/25103800038)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/56454

## Summary

Hydrated state keeps #56454 as the canonical open PR for the #56419 shared image-tool timeout bug. The remaining timeout PRs in this cluster are already closed or are related-but-distinct work; #72687 changes the image-generation default fallback and has failing checks, so it should stay open for normal review rather than be closed as a duplicate. No GitHub mutations are planned directly by this worker.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

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
| #54494 | keep_closed | skipped | fixed_by_candidate | Closed linked issue retained as historical evidence only. |
| #54495 | keep_closed | skipped | superseded | Already-closed contributor PR; no close action may be emitted. |
| #56419 | keep_related | planned | fixed_by_candidate | Covered by the canonical open PR but not closable in this dedupe-only job. |
| #56454 | keep_canonical | planned | canonical | Best live canonical path for the #56419 subcluster; keep open for maintainer/applicator handling. |
| #57215 | keep_closed | skipped | independent | Closed independent context ref; no mutation is valid. |
| #57223 | keep_closed | skipped | independent | Already closed and independent of the canonical timeout path. |
| #62944 | keep_closed | skipped | fixed_by_candidate | Already fixed and closed on main; no closeout action needed. |
| #63046 | keep_closed | skipped | superseded | Already-closed superseded PR; retain only as credit/evidence context. |
| #63483 | keep_closed | skipped | superseded | Already superseded by main; no mutation is valid. |
| #67889 | keep_closed | skipped | fixed_by_candidate | Already fixed and closed; no closeout action may be emitted. |
| #67929 | keep_closed | skipped | superseded | Already-closed contributor PR superseded by a main implementation. |
| #72687 | keep_related | planned | related | Related open PR with distinct scope and failing checks; keep open rather than close as duplicate. |

## Needs Human

- none
