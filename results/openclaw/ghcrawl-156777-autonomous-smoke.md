---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156777-autonomous-smoke"
mode: "autonomous"
run_id: "27597851505"
workflow_run_id: "27597851505"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597851505"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:13:26.895Z"
canonical: "https://github.com/openclaw/openclaw/tree/6aa83374d90d35226b9cf3577155c3876a91b4b3"
canonical_issue: null
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

# ghcrawl-156777-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597851505](https://github.com/openclaw/clownfish/actions/runs/27597851505)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/6aa83374d90d35226b9cf3577155c3876a91b4b3

## Summary

No GitHub mutation is planned. The hydrated cluster refs are already closed, the linked superseded contributor PR is closed, no security-sensitive signal is present, and the read-only target checkout at current main 6aa83374d90d35226b9cf3577155c3876a91b4b3 contains the Windows codepage-aware exec output decoding needed for the reported Windows CJK mojibake root cause.

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
| #40613 | keep_closed | skipped | fixed_by_candidate | Already closed; no close/comment/label/merge action is needed or allowed. |
| #50519 | keep_closed | skipped | fixed_by_candidate | Already closed and current main contains the narrow fix for the reported root cause. |
| #56462 | keep_closed | skipped | fixed_by_candidate | Already closed and covered by current main's Windows exec output decoding fix. |
| #64661 | keep_closed | skipped | superseded | Closed superseded contributor PR; keep as historical credited evidence only. |
| #5113 | keep_closed | skipped | related | Closed linked context ref only; no mutation planned. |

## Needs Human

- none
