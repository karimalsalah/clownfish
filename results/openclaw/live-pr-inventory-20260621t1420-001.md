---
repo: "openclaw/openclaw"
cluster_id: "live-pr-inventory-20260621T1420-001"
mode: "plan"
run_id: "27907254806"
workflow_run_id: "27907254806"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27907254806"
head_sha: "39bb8be9042ea4510e853fb488dbe722ea7d91d5"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-21T14:24:32.298Z"
canonical: null
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

# live-pr-inventory-20260621T1420-001

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27907254806](https://github.com/openclaw/clownfish/actions/runs/27907254806)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only classification for five independent PR remediation items. No merge_candidate was emitted because none of the open PRs has complete merge preflight proof with a clean passed Codex /review. No close/comment/label mutation was emitted because those actions are blocked by the job. #90061 is retained as related/fixed by already-merged #89350; the other open PRs remain independent or canonical candidates for their own workstreams.

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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #93567 | keep_independent | planned | independent | Retain as an independent ready-for-maintainer PR; no merge recommendation without complete merge preflight and clean passed /review proof. |
| #93504 | keep_independent | planned | independent | Retain as an independent device-pairing hardening PR; no merge recommendation without complete merge preflight and clean passed /review proof. |
| #90870 | keep_canonical | planned | canonical | Keep #90870 as the canonical narrow recursive-scanning PR for the memory-wiki subfolder bug; merge is blocked by dirty state and incomplete merge preflight. |
| #90153 | keep_related | planned | related | Retain as related doctor hardening work. It is not merge-ready, not clearly superseded by a clean canonical PR, and too compatibility-sensitive for a replacement/fix artifact in this multi-PR shard. |
| #90061 | keep_related | planned | fixed_by_candidate | Retain as related/fixed by the already-merged canonical prompt-cache guard #89350; no closure mutation is allowed in this plan job. |

## Needs Human

- none
