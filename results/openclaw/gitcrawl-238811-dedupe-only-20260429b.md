---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238811-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25103906665"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103906665"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.376Z"
canonical: "https://github.com/openclaw/openclaw/issues/41609"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41609"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73203"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238811-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103906665](https://github.com/openclaw/clownfish/actions/runs/25103906665)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/41609

## Summary

Hydrated state shows the hinted representative #42218 is already closed. The live work splits into broad inbound Feishu interactive-card parsing (#41609/#56795) and narrower post-format/text-tag/nested-array parsing (#60380/#60383/#73203). No close, merge, or fix action is safe in this dedupe-only job because the open PRs have failing checks and/or unresolved review evidence.

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
| #41609 | keep_canonical | planned | canonical | Best live canonical issue for the broad inbound interactive-card parsing family; keep open for validation and follow-up. |
| #42218 | keep_closed | skipped | superseded | Already closed historical context; preserve as evidence only. |
| #56795 | keep_related | planned | related | Useful candidate for #41609, but not a duplicate closeout target and not merge-ready in this job. |
| #60380 | keep_related | planned | fixed_by_candidate | Keep open until #73203 validates and lands; fixed-by-candidate closeout is blocked by the open/failing candidate path. |
| #60383 | keep_related | planned | superseded | Likely superseded by #73203, but do not close a useful contributor PR before the replacement path is validated and credit can be preserved safely. |
| #73203 | keep_canonical | planned | canonical | Canonical open PR for the narrow #60380 fallback subfamily; keep open for check repair and review outside this dedupe-only run. |

## Needs Human

- none
