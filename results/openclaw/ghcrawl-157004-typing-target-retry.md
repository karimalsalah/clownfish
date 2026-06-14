---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-157004-typing-target-retry"
mode: "autonomous"
run_id: "27487489636"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27487489636"
head_sha: "31c6a42b35142d058d594ee6be71842d152f240c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-14T04:06:16.145Z"
canonical: "https://github.com/openclaw/openclaw/pull/67783"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/67783"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 1
needs_human_count: 0
---

# ghcrawl-157004-typing-target-retry

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27487489636](https://github.com/openclaw/clownfish/actions/runs/27487489636)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/67783

## Summary

Current main 889bc52ba5b38187d10d22fd8978858011342cba still uses the Feishu reply target as the Typing reaction target, so the #67783 bug remains real. #67783 is useful contributor work but is dirty/unmergeable and prior Clownfish context says the source branch was not writable with available bot permissions, so this retry should build a fresh credited Clownfish replacement from the unique ghcrawl-157004-typing-target-retry branch and must not reuse #73958.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/92862 | clownfish/ghcrawl-157004-typing-target-retry |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #67783 | close_superseded | skipped | superseded | action status is blocked |
| #92862 | merge_canonical | blocked | fix_pr | merge requires CLOWNFISH_ALLOW_MERGE=1; labeled clownfish |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #39 | keep_closed | skipped | independent | Closed historical context only; no mutation is valid for an already-closed ref. |
| #67783 | close_superseded | blocked | superseded | Blocked by require_fix_before_close until the fresh replacement PR exists; preserve @huiwen01's credit and leave the source PR open for context until then. |
| #69572 | keep_related | planned | related | Same Feishu typing area, but a different product/API question; do not close it as a duplicate of the reaction-target fix. |
| #73958 | keep_related | planned | related | Keep #73958 open in its own lane; this retry needs a fresh branch for #67783's typing-reaction target fix. |
| cluster:ghcrawl-157004-typing-target-retry | fix_needed | planned |  | A narrow fix is still needed on current main; no merge is recommended because #67783 is dirty and lacks a clean Codex /review plus validation preflight. |
| cluster:ghcrawl-157004-typing-target-retry | build_fix_artifact | planned |  | Build a narrow credited replacement fix artifact for the executor; do not mutate GitHub from the worker. |

## Needs Human

- none
