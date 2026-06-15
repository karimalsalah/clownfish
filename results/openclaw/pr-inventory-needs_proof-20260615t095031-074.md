---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T095031-074"
mode: "plan"
run_id: "27539426030"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27539426030"
head_sha: "9b25ecfc01dff17c8f2bdf816a06ed4ce6eeb581"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T10:23:54.091Z"
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
needs_human_count: 1
---

# pr-inventory-needs_proof-20260615T095031-074

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27539426030](https://github.com/openclaw/clownfish/actions/runs/27539426030)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification. The cluster is not a dedupe cluster, no shared canonical was selected, no GitHub mutations were planned, and already-closed PRs were left closed. Open PRs remain independent backlog items because the preflight artifact shows missing/failed real behavior proof, draft state, failed checks, unknown mergeability, or unresolved maintainer/product judgment.

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
| Needs human | 1 |

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
| #62937 | keep_independent | planned | independent | Open draft feature PR needs behavior proof and maintainer review before any mutation. |
| #62528 | keep_closed | skipped | superseded | Already closed in live preflight state. |
| #62338 | keep_independent | planned | independent | Independent open PR with incomplete proof; keep for maintainer or proof follow-up. |
| #62503 | keep_independent | planned | independent | Independent broad feature/config PR; not eligible for close or merge from this inventory shard. |
| #61675 | keep_independent | planned | independent | Independent behavior-change PR blocked on proof/checks and merge conflicts. |
| #63015 | keep_independent | planned | independent | Independent focused fix still needs real behavior proof. |
| #62956 | keep_closed | skipped | superseded | Already closed in live preflight state. |
| #64540 | keep_closed | skipped | superseded | Already closed in live preflight state. |
| #64907 | keep_closed | skipped | superseded | Already closed in live preflight state. |
| #62722 | keep_independent | planned | independent | Independent tiny PR but proof/check failures prevent stronger action. |
| #64703 | keep_independent | planned | independent | Independent config parsing fix with failed proof and checks. |
| #63113 | keep_closed | skipped | superseded | Already closed in live preflight state. |
| #63025 | keep_independent | planned | independent | Independent fix candidate remains open pending proof and maintainer review. |
| #62403 | keep_independent | planned | independent | Independent UI fix candidate blocked on proof/check state. |
| #64335 | keep_closed | skipped | superseded | Already closed in live preflight state. |
| #61521 | keep_closed | skipped | superseded | Already closed in live preflight state. |
| #64749 | keep_closed | skipped | superseded | Already closed in live preflight state. |
| #62966 | keep_closed | skipped | superseded | Already closed in live preflight state. |
| #64416 | keep_closed | skipped | superseded | Already closed in live preflight state. |
| #63062 | keep_closed | skipped | superseded | Already closed in live preflight state. |
| #63193 | keep_independent | planned | independent | Independent draft release/automation PR; keep open for maintainer decision. |
| #63057 | keep_closed | skipped | superseded | Already closed in live preflight state. |
| #62307 | keep_closed | skipped | superseded | Already closed in live preflight state. |
| #63789 | needs_human | planned | needs_human | Maintainer/product intent judgment is required for this proposal PR. |
| #64384 | keep_closed | skipped | superseded | Already closed in live preflight state. |

## Needs Human

- #63789 requires maintainer/product judgment: draft low-signal docs proposal marked ready for maintainer look, with incomplete check hydration.
