---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-040"
mode: "plan"
run_id: "27583352684"
workflow_run_id: "27583352684"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583352684"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:55:41.477Z"
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
needs_human_count: 2
---

# pr-inventory-needs_proof-20260615T223445-040

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583352684](https://github.com/openclaw/clownfish/actions/runs/27583352684)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. The preflight artifact hydrated seven open PRs and returned rate-limit unavailable live state for the remaining listed candidate refs, so no mutating close, label, comment, merge, or fix actions are emitted.

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
| Needs human | 2 |

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
| #93160 | keep_related | planned | related | Non-mutating related classification only; the likely canonical refs are not hydrated live items in this artifact. |
| #93161 | keep_related | planned | related | Independent inventory item with proof/review state to preserve for maintainer review. |
| #43659 | keep_related | planned | related | Useful contributor PR with unresolved proof/review blockers; no safe close or merge action in plan mode. |
| #87709 | keep_related | planned | related | Useful but blocked Feishu fix candidate; keep for maintainer/proof follow-up. |
| #87799 | keep_related | planned | related | Promising contributor PR, but this inventory shard cannot merge and no closure condition applies. |
| #87863 | keep_related | planned | related | Small useful PR remains blocked by proof and failing checks; keep open for author/maintainer follow-up. |
| #88894 | needs_human | blocked | needs_human | Live state unavailable; cannot classify or plan mutation safely. |
| #88078 | needs_human | blocked | needs_human | Live state unavailable; cannot classify or plan mutation safely. |
| #88082 | needs_human | blocked | needs_human | Live state unavailable; cannot classify or plan mutation safely. |
| #88112 | needs_human | blocked | needs_human | Live state unavailable; cannot classify or plan mutation safely. |
| #88193 | needs_human | blocked | needs_human | Live state unavailable; cannot classify or plan mutation safely. |
| #88224 | needs_human | blocked | needs_human | Live state unavailable; cannot classify or plan mutation safely. |
| #88239 | needs_human | blocked | needs_human | Live state unavailable; cannot classify or plan mutation safely. |
| #88396 | needs_human | blocked | needs_human | Live state unavailable; cannot classify or plan mutation safely. |
| #93065 | needs_human | blocked | needs_human | Live state unavailable; cannot classify or plan mutation safely. |
| #93111 | needs_human | blocked | needs_human | Live state unavailable; cannot classify or plan mutation safely. |
| #92301 | needs_human | blocked | needs_human | Live state unavailable; cannot classify or plan mutation safely. |
| #87739 | needs_human | blocked | needs_human | Live state unavailable; cannot classify or plan mutation safely. |
| #64611 | needs_human | blocked | needs_human | Live state unavailable; cannot classify or plan mutation safely. |
| #71249 | needs_human | blocked | needs_human | Live state unavailable; cannot classify or plan mutation safely. |
| #71382 | needs_human | blocked | needs_human | Live state unavailable; cannot classify or plan mutation safely. |
| #71517 | needs_human | blocked | needs_human | Live state unavailable; cannot classify or plan mutation safely. |
| #71792 | needs_human | blocked | needs_human | Live state unavailable; cannot classify or plan mutation safely. |
| #71837 | needs_human | blocked | needs_human | Live state unavailable; cannot classify or plan mutation safely. |
| #71839 | needs_human | blocked | needs_human | Live state unavailable; cannot classify or plan mutation safely. |

## Needs Human

- Live GitHub state was unavailable for 18 listed candidate refs because the preflight artifact hit GitHub API rate limits; those specific refs need rehydration before classification or mutation.
- #93160 has a close-shaped ClawSweeper comment, but its canonical refs #92777 and #92818 were not hydrated in this artifact, so close_duplicate/close_superseded is blocked until those refs are rehydrated.
