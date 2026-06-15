---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238800-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25103814776"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103814776"
head_sha: "98c86abfe56e7ca0578fd667fdea3121315c5b1d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.372Z"
canonical: "https://github.com/openclaw/openclaw/issues/55334"
canonical_issue: "https://github.com/openclaw/openclaw/issues/55334"
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

# gitcrawl-238800-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103814776](https://github.com/openclaw/clownfish/actions/runs/25103814776)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/55334

## Summary

#55334 remains the best live canonical issue for the skillsSnapshot/session-store bloat family. #51977 is already closed as a duplicate of #55334. The other open seed issues are related but not safe duplicate closeouts because they track distinct mechanisms, symptoms, or additional task-storage scope.

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
| #55334 | keep_canonical | planned | canonical | Best surviving canonical issue for the core retained skillsSnapshot/session-store bloat root cause. |
| #51977 | keep_closed | skipped | duplicate | Already closed as the duplicate path this cluster would otherwise choose. |
| #45438 | keep_related | planned | related | Related structuredClone memory-pressure issue, not a true duplicate of the skillsSnapshot persistence canonical. |
| #54155 | keep_related | planned | related | Related broad memory/RSS tracker with distinct remaining validation and runtime surfaces. |
| #71227 | keep_related | planned | related | Related session metadata bloat issue with distinct latency/run-budget symptoms, so it should stay open. |
| #73114 | keep_related | planned | related | Related mixed session/task accumulation report, not a pure duplicate of the skillsSnapshot canonical. |

## Needs Human

- none
