---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-733-plan-wave-20260615-b"
mode: "plan"
run_id: "27526152861"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526152861"
head_sha: "bfcc40c5b46da4bbfb978e647e07c894fba40d90"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:34:46.321Z"
canonical: "#92384"
canonical_issue: "#92384"
canonical_pr: "#92995"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-733-plan-wave-20260615-b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526152861](https://github.com/openclaw/clownfish/actions/runs/27526152861)

Workflow conclusion: success

Worker result: planned

Canonical: #92384

## Summary

Read-only plan: original representative #81723 is already closed, so #92384 is the live canonical issue for the WeChat direct-to-group outbound target classifier bug. Open linked PR #92995 is related repair work but is not mergeable in this job because merge is blocked by frontmatter and one check is failing.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #81723 | keep_closed | skipped | duplicate | Closed historical representative; keep as duplicate context and move live canonical tracking to #92384. |
| #92384 | keep_canonical | planned | canonical | Best live canonical issue after the hinted representative #81723 closed. |
| #92995 | keep_related | planned | related | Relevant repair path for #92384, but this plan-mode job cannot merge or repair it and failing checks block any fixed-by-candidate closeout. |

## Needs Human

- none
