---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156676-autonomous-smoke"
mode: "autonomous"
run_id: "27585129859"
workflow_run_id: "27585129859"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585129859"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:18:21.258Z"
canonical: "#59563"
canonical_issue: "#59563"
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156676-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585129859](https://github.com/openclaw/clownfish/actions/runs/27585129859)

Workflow conclusion: success

Worker result: planned

Canonical: #59563

## Summary

Hydrated state shows the original representative #51497 is already closed. The only open in-cluster issue with a concrete remaining Feishu session-loss investigation is #59563, so it is the current live canonical to keep open. Closed refs are retained as historical context only. Linked #76665 remains related but distinct because it tracks a provider/model-specific z.ai/GLM context-loss shape.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #46514 | keep_closed | skipped | related | Closed historical linked ref; no mutation planned. |
| #49772 | keep_closed | skipped | fixed_by_candidate | Closed linked context; no mutation planned. |
| #49777 | keep_closed | skipped | fixed_by_candidate | Already closed and materially narrower than the remaining canonical Feishu session-loss investigation. |
| #51497 | keep_closed | skipped | superseded | Original representative is already closed and superseded; #59563 is the best surviving open in-cluster canonical. |
| #59534 | keep_closed | skipped | duplicate | Already closed duplicate/superseded context. |
| #59563 | keep_canonical | planned | canonical | Best live canonical for the remaining Feishu session data-loss investigation; keep open for maintainer follow-up. |
| #61304 | keep_closed | skipped | duplicate | Already closed duplicate of the current canonical path. |
| #76415 | keep_closed | skipped | fixed_by_candidate | Already closed by related compaction UI fix; historical evidence only. |
| #76437 | keep_closed | skipped | fixed_by_candidate | Merged historical PR; no merge or closure action remains. |
| #76665 | keep_related | planned | related | Related but distinct provider-specific session context-loss tracker; do not close or merge as part of this Feishu canonical cluster. |

## Needs Human

- none
