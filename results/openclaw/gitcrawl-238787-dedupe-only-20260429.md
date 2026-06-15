---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238787-dedupe-only-20260429"
mode: "autonomous"
run_id: "25103786112"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103786112"
head_sha: "98c86abfe56e7ca0578fd667fdea3121315c5b1d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.359Z"
canonical: "https://github.com/openclaw/openclaw/pull/73401"
canonical_issue: "https://github.com/openclaw/openclaw/issues/38622"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73401"
actions_total: 22
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238787-dedupe-only-20260429

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103786112](https://github.com/openclaw/clownfish/actions/runs/25103786112)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73401

## Summary

The original representative #38650 is already closed. The clearest live canonical path for the workspace-bootstrap symlink family is #73401, with #73988 related but blocked on consolidation/review. The cluster also contains separate exec-approvals and boundary-path symlink subfamilies; no high-confidence close action is safe because the relevant fixes are unmerged or review-blocked. No GitHub mutations were performed or requested.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 22 |
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
| #73401 | keep_canonical | planned | canonical | Best live canonical for the narrow workspace bootstrap-file symlink family, but merge is blocked by policy and unresolved review/security-review evidence. |
| #73988 | keep_related | planned | related | Related implementation candidate, not safe to close or merge while #73401/#73988 consolidation and review findings remain open. |
| #38622 | keep_related | planned | fixed_by_candidate | Covered by the canonical fix path, but the fix has not landed, so issue closeout is not safe. |
| #40210 | keep_related | planned | fixed_by_candidate | Same root cause as the canonical workspace-bootstrap family, but closeout must wait for a landed fix. |
| #38650 | keep_closed | skipped | superseded | Already closed; no closure action is valid. |
| #40230 | keep_closed | skipped | superseded | Already closed; preserve as historical contributor evidence only. |
| #38981 | keep_related | planned | related | Related product/trust-boundary feature, not a duplicate of the narrow workspace-bootstrap symlink bug and not safe for automated closeout. |
| #64473 | keep_related | planned | canonical | Keep open for maintainer review as the canonical candidate for the #64472 subfamily; no close or merge is allowed. |
| #64472 | keep_related | planned | fixed_by_candidate | Covered by an open candidate, but the candidate is not landed or merge-cleared. |
| #62938 | keep_related | planned | related | Useful related contributor work; not safe to close because the replacement has not landed and contributor credit/validation are unresolved. |
| #62917 | keep_related | planned | fixed_by_candidate | Covered by a live candidate, but closeout must wait for a landed canonical fix. |
| #74002 | keep_related | planned | canonical | Best current candidate for the exec-approvals state-dir subfamily, but not merge-ready. |
| #65736 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #72650 | keep_related | planned | canonical | Keep open as the canonical candidate for #72572; merge is outside this job. |
| #72572 | keep_related | planned | fixed_by_candidate | Covered by a live candidate, but the candidate has not landed. |
| #72713 | keep_related | planned | related | Related overlapping draft; keep open rather than close in this dedupe-only job. |
| #68417 | keep_closed | skipped | superseded | Already closed; historical evidence only. |
| #70819 | keep_closed | skipped | independent | Already closed and independent of the live canonical paths. |
| #51277 | keep_closed | skipped | independent | Already closed; no action is valid. |
| #72377 | keep_closed | skipped | fixed_by_candidate | Merged historical canonical for a subset; no mutation needed. |
| #64663 | keep_closed | skipped | superseded | Already closed; no closure action is valid. |
| #64050 | keep_closed | skipped | related | Closed context only. |

## Needs Human

- none
