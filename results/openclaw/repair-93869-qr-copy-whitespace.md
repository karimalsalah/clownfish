---
repo: "openclaw/openclaw"
cluster_id: "repair-93869-qr-copy-whitespace"
mode: "autonomous"
run_id: "27665531103"
workflow_run_id: "27665531103"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27665531103"
head_sha: "4c098bd9122cabae12add972ef61ec0d2f47df96"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T04:53:39.528Z"
canonical: "https://github.com/openclaw/openclaw/pull/93869"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/93869"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# repair-93869-qr-copy-whitespace

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27665531103](https://github.com/openclaw/clownfish/actions/runs/27665531103)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/93869

## Summary

PR #93869 remains the canonical repair path. The hydrated preflight artifact shows its live head at d20a3bd9ed72db0b5f7e88f7fc8288d057351595 on branch clownfish/repair-51868-qr-rendering, matching the job gate, with one failing UI check tied to the current QR copy-path regression. No GitHub mutations are allowed or planned; emit an executable branch-repair artifact for the existing PR only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/93869 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #93869 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #93869 | keep_canonical | planned | canonical | Keep #93869 as the canonical existing credited replacement PR; repair the branch rather than opening another replacement. |
| #93869 | fix_needed | planned | canonical | The QR/block-art rendering path is fixed by the existing PR family, but clipboard quiet-zone whitespace still needs a focused branch repair before #93869 can be validated. |
| cluster:repair-93869-qr-copy-whitespace | build_fix_artifact | planned |  | Build an executable repair artifact for the existing clownfish/repair-51868-qr-rendering branch. |

## Needs Human

- none
