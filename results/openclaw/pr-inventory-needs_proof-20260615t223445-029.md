---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-029"
mode: "plan"
run_id: "27583351928"
workflow_run_id: "27583351928"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583351928"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T23:55:41.447Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 19
---

# pr-inventory-needs_proof-20260615T223445-029

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583351928](https://github.com/openclaw/clownfish/actions/runs/27583351928)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Plan-mode PR inventory classification. Six candidate PRs had hydrated live state and are kept independently with no close/merge/fix mutation planned. Nineteen listed candidates were unavailable in the preflight artifact due GitHub API rate limiting, so those specific refs need a refreshed preflight before any classification or mutation.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 19 |

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
| #66067 | keep_independent | planned | independent | Useful focused PR but not merge-ready and not closable as duplicate/superseded in this inventory shard. |
| #66098 | keep_independent | planned | independent | Potentially useful PR with unresolved review-bot concerns and failing proof/checks; keep open independently. |
| #72677 | keep_independent | planned | independent | Appears independently reviewable, but this job cannot merge and there is no closeout basis. |
| #73462 | keep_independent | planned | independent | Potentially useful CLI/auth PR but failing checks and unresolved review-bot feedback block stronger action. |
| #74643 | keep_independent | planned | independent | Focused PR remains open independently; failed proof/checks and unavailable linked issue block stronger action. |
| #75918 | keep_independent | planned | independent | Broad independently scoped feature PR is not closable here and is not merge-ready in this shard. |
| #76020 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #76445 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #76614 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #76634 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #76646 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #76732 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #76922 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #76928 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #76941 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #76975 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #77109 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #77318 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #77361 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #77415 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #77442 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #77445 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #77513 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #77540 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |
| #77549 | needs_human | blocked | needs_human | Needs refreshed hydration before classification. |

## Needs Human

- #76020 unavailable live state
- #76445 unavailable live state
- #76614 unavailable live state
- #76634 unavailable live state
- #76646 unavailable live state
- #76732 unavailable live state
- #76922 unavailable live state
- #76928 unavailable live state
- #76941 unavailable live state
- #76975 unavailable live state
- #77109 unavailable live state
- #77318 unavailable live state
- #77361 unavailable live state
- #77415 unavailable live state
- #77442 unavailable live state
- #77445 unavailable live state
- #77513 unavailable live state
- #77540 unavailable live state
- #77549 unavailable live state
