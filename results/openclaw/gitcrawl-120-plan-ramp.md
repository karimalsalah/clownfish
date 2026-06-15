---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-120-plan-ramp"
mode: "plan"
run_id: "27518751985"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27518751985"
head_sha: "bde7630054b9beb03f7c7699a1f6d7426b906c50"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T01:31:22.428Z"
canonical: "#85846"
canonical_issue: "#85846"
canonical_pr: "#86285"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-120-plan-ramp

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27518751985](https://github.com/openclaw/clownfish/actions/runs/27518751985)

Workflow conclusion: success

Worker result: planned

Canonical: #85846

## Summary

Read-only plan: keep #85846 as the live canonical issue for the OpenAI realtime duplicate-greeting bug, keep #86285 as the strongest open fix path for that root cause, supersede the older overlapping PR #85932 in favor of #86285, and split #85847 and #90749 as separate non-duplicate voice-call work.

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
| #85846 | keep_canonical | planned | canonical | Best surviving issue for the duplicate OpenAI initial-greeting root cause. |
| #85847 | keep_related | planned | related | Related voice-call realtime work, but a different root cause and product decision from the duplicate-greeting bug. |
| #85932 | close_superseded | planned | superseded | Older overlapping PR for the same root cause is superseded by the stronger current fix path #86285; close recommendation preserves contributor credit. |
| #86285 | keep_canonical | planned | canonical | Best open fix path for #85846, but this plan-mode job does not allow merge or fix actions. |
| #90749 | keep_independent | planned | independent | Separate voice-call realtime root cause; likely follow-up cluster, not a duplicate or superseded candidate here. |

## Needs Human

- none
