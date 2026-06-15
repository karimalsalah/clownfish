---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238852-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104012896"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104012896"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.396Z"
canonical: "https://github.com/openclaw/openclaw/issues/71783"
canonical_issue: "https://github.com/openclaw/openclaw/issues/71783"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72297"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238852-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104012896](https://github.com/openclaw/clownfish/actions/runs/25104012896)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/71783

## Summary

Hydrated state shows the original representative #59967 and older cluster members #59073/#65908 are already closed as implemented. The remaining live scope is #71783, with #72297 as an open focused implementation candidate; both should stay open because current main still lacks the metadata-free different-name QMD conflict warning/manual-repair UX, and this dedupe-only job cannot merge, fix, or raise a PR.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #59073 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; keep as historical fixed evidence only. |
| #59967 | keep_closed | skipped | fixed_by_candidate | Historical representative is already closed as implemented; #71783 is the current live canonical issue for the remaining name-only conflict scope. |
| #65908 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; no dedupe or close mutation is available. |
| #66141 | keep_closed | skipped | fixed_by_candidate | Merged historical fix evidence; no merge recommendation or mutation applies. |
| #71783 | keep_canonical | planned | canonical | Current live canonical issue for the remaining scope; not a duplicate of the closed #59967 family because this report tracks metadata-free different-name conflict handling still left open. |
| #72297 | keep_related | planned | related | Active focused PR for canonical #71783, but not merge-ready in this dedupe-only job; keep it open rather than closing or treating #71783 as fixed. |

## Needs Human

- none
