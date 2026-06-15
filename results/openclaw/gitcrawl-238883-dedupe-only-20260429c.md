---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238883-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104069213"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104069213"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.406Z"
canonical: "https://github.com/openclaw/openclaw/issues/50165"
canonical_issue: "https://github.com/openclaw/openclaw/issues/50165"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238883-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104069213](https://github.com/openclaw/clownfish/actions/runs/25104069213)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/50165

## Summary

Kept #50165 as the live canonical issue. No close, merge, or fix actions are safe for this dedupe-only run: #44925 and #69767 have unique remaining scope, #68464 is an active related PR but is blocked by failing checks and unresolved bot review findings, and #43367 is a broader related orchestration issue.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #50165 | keep_canonical | planned | canonical | The representative remains the best live canonical for the completion-state semantics family, but it should stay open for maintainer product/architecture follow-up. |
| #44925 | keep_related | planned | related | Related to the canonical family, but not a true duplicate because it carries unique recovery and transport-delivery scope. |
| #69767 | keep_related | planned | related | Related to #50165, but it has a narrower payload-durability failure and active PR context, so closing it as a duplicate would lose useful validation scope. |
| #68464 | keep_related | planned | related | Active related implementation candidate, but not merge-ready and not closable/supersedable in this dedupe-only job. |
| #43367 | keep_related | planned | related | Related follow-up cluster, not a duplicate target for this dedupe-only run. |

## Needs Human

- none
