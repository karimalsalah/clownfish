---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-077"
mode: "plan"
run_id: "27580942551-1-77"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.425Z"
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
needs_human_count: 0
---

# pr-inventory-ready_for_maintainer-20260615T223445-077

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. The job explicitly says this is not a dedupe cluster, merges/fixes/low-signal closeout are disabled, and the hydrated preflight reports no security-sensitive items. Open hydrated PRs are classified independently for maintainer review; the already-merged PR is kept closed; refs missing from the compacted preflight are classified conservatively without mutating actions because live updated_at is unavailable.

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
| #93088 | keep_independent | planned | independent | Live hydrated state is missing from the compacted artifact, so this remains a conservative non-mutating independent classification. |
| #86279 | keep_independent | planned | independent | Independent ready-for-maintainer PR; no duplicate/superseded evidence and no merge/fix action allowed. |
| #71400 | keep_independent | planned | independent | Independent feature PR with broad session-state scope; no dedupe or closure basis in this inventory shard. |
| #87800 | keep_independent | planned | independent | Independent provider/auth PR needing maintainer review; no closeout evidence. |
| #87861 | keep_independent | planned | independent | Small independent fix PR with passing checks; merge is not allowed in this plan-mode job. |
| #87872 | keep_independent | planned | independent | Independent Codex usage-accounting PR awaiting maintainer/author path. |
| #88886 | keep_independent | planned | independent | Conservative non-mutating classification for an unhydrated inventory ref. |
| #87891 | keep_independent | planned | independent | Independent Telegram config PR with a failing proof check; keep for maintainer/author attention. |
| #87923 | keep_independent | planned | independent | Independent bug-fix PR with unresolved validation failure; no close action appropriate. |
| #87986 | keep_independent | planned | independent | Independent docs PR; failing proof and disabled merge/closeout leave maintainer review as the path. |
| #88048 | keep_independent | planned | independent | Independent feature PR; merge is blocked by job frontmatter and no dedupe evidence exists. |
| #88052 | keep_independent | planned | independent | Independent narrow fix PR with passing checks; keep for maintainer review. |
| #88061 | keep_independent | planned | independent | Broad independent docs-correction PR; no closeout allowed under this job. |
| #88062 | keep_closed | skipped | fixed_by_candidate | Already merged; no worker mutation should be planned. |
| #88085 | keep_independent | planned | independent | Independent CLI fix PR with a failing boundary check; keep for maintainer/author follow-up. |
| #88503 | keep_independent | planned | independent | Conservative non-mutating classification for an unhydrated inventory ref. |
| #88098 | keep_independent | planned | independent | Independent onboard feature PR with failing proof; keep for maintainer/author review. |
| #88150 | keep_independent | planned | independent | Independent P1 config fix PR with passing checks; merge is not allowed in this plan job. |
| #88203 | keep_independent | planned | independent | Independent approvals fix PR; no closure or merge action permitted. |
| #88206 | keep_independent | planned | independent | Independent Codex message-delivery fix PR; keep for maintainer review. |
| #88301 | keep_independent | planned | independent | Independent broad prompt-cache PR awaiting maintainer/author handling; no dedupe closure basis. |
| #88323 | keep_independent | planned | independent | Independent message-delivery PR; uneditable branch and merge-disabled job prevent merge or repair actions. |
| #88437 | keep_independent | planned | independent | Conservative non-mutating classification for an unhydrated inventory ref. |
| #88400 | keep_independent | planned | independent | Independent config fix PR; keep for maintainer review. |
| #88401 | keep_independent | planned | independent | Conservative non-mutating classification for an unhydrated inventory ref. |

## Needs Human

- none
