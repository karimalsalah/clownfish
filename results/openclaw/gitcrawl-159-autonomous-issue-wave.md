---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-159-autonomous-issue-wave"
mode: "autonomous"
run_id: "27565782742"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27565782742"
head_sha: "51df92846760066ef00bbc8134866b4a24f97044"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T18:02:58.315Z"
canonical: "https://github.com/openclaw/openclaw/issues/80387"
canonical_issue: "https://github.com/openclaw/openclaw/issues/80387"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-159-autonomous-issue-wave

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27565782742](https://github.com/openclaw/clownfish/actions/runs/27565782742)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/80387

## Summary

Autonomous classification only. The live hydrated artifact keeps #80387 as the canonical open issue for the Homebrew/Node-major self-update command-disappears bug. The linked contributor PR #80386 is hydrated and appears to be the claimed fix path, but it is an existing-overlap context ref for this job and is not merge-ready from the artifact because checks could not be hydrated and the latest ClawSweeper review still records proof/compatibility/changelog concerns. No close, merge, label, or fix-PR mutation is safe from this cluster result.

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
| #80387 | keep_canonical | planned | canonical | #80387 remains the best live canonical issue. It should stay open until the linked fix path is merged or replaced by the owning overlap cluster. |
| #80386 | keep_related | blocked | related | Merge or branch repair for #80386 is blocked in this cluster because the PR is an existing-overlap context ref and lacks clean merge preflight evidence. |
| #79048 | keep_closed | skipped | superseded | Closed context ref only; no mutation is valid. |
| #87864 | keep_closed | skipped | independent | Closed independent context ref only; no mutation is valid. |
| #42592 | keep_related | planned | related | Related installer/npm policy work should stay open separately. |
| #73814 | keep_independent | planned | independent | Independent installer-stdin bug; it should not be closed or merged through this cluster. |

## Needs Human

- none
