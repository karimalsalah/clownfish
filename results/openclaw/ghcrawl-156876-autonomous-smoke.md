---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156876-autonomous-smoke"
mode: "autonomous"
run_id: "27504161669"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27504161669"
head_sha: "dd5c2005f23223b62d521e611dde7c5cf4c69342"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-14T17:13:57.602Z"
canonical: "https://github.com/openclaw/openclaw/issues/56096"
canonical_issue: "https://github.com/openclaw/openclaw/issues/56096"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 2
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156876-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27504161669](https://github.com/openclaw/clownfish/actions/runs/27504161669)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/56096

## Summary

Representative PR #55838 is already closed. The current canonical tracker is #56096; #55886 is useful but stale, dirty, proof-failing, and not safe to land as-is, so the executable path is a narrow credited replacement fix artifact. No merge is recommended and no close action is executable until the replacement PR exists.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 2 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/93020 | clownfish/ghcrawl-156876-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #55886 | close_superseded | executed | post_merge_closeout | closed after canonical fix merged |
| #93020 | merge_canonical | executed | fix_pr | already merged |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #48943 | keep_closed | skipped | related | Already closed in the preflight artifact; do not mutate. |
| #55811 | keep_closed | skipped | related | Already closed in the preflight artifact; keep as evidence only. |
| #55838 | keep_closed | skipped | superseded | Already closed; no close action is valid. |
| #56096 | fix_needed | planned | canonical | The bug still appears real on current main and no merge-ready PR exists; build a narrow credited replacement fix. |
| #55886 | close_superseded | blocked | superseded | Useful contributor PR is superseded by a planned replacement path, but closeout must wait for the replacement PR. |
| #56153 | keep_closed | skipped | superseded | Already closed; no close action is valid. |
| cluster:ghcrawl-156876-autonomous-smoke | build_fix_artifact | planned |  | Open a narrow credited replacement PR for the remaining Telegram sendChatAction transient cooldown/circuit-breaker behavior. |

## Needs Human

- none
