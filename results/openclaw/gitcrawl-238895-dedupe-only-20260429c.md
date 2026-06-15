---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238895-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104096803"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104096803"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.415Z"
canonical: "https://github.com/openclaw/openclaw/pull/47613"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/47613"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238895-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104096803](https://github.com/openclaw/clownfish/actions/runs/25104096803)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/47613

## Summary

Canonical remains open PR #47613. PRs #52642 and #61469 overlap the gateway/WebSocket reasoning-stream gap, but both have unique or unsafe implementation scope and unresolved bot review findings, so this dedupe-only run keeps them open rather than closing or merging anything.

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
| #47613 | keep_canonical | planned | canonical | Best surviving focused PR for the shared gateway/WebSocket reasoning-stream no-callback root cause. |
| #52642 | keep_related | planned | related | Related but not a high-confidence duplicate or superseded closeout because it contains broad unrelated session-memory work and unresolved review blockers beyond #47613's focused canonical path. |
| #61469 | keep_related | planned | related | Related overlapping PR, but not safe to close as a duplicate in this dedupe-only run because it carries distinct visibility/gating behavior and unresolved bot-review blockers. |

## Needs Human

- none
