---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238810-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25103904523"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103904523"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.376Z"
canonical: "https://github.com/openclaw/openclaw/pull/72391"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72391"
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238810-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103904523](https://github.com/openclaw/clownfish/actions/runs/25103904523)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72391

## Summary

Representative #46069 is obsolete in live preflight: it is closed, and the memory-lancedb Ollama/base64 dimension-mismatch path is now carried on main via the replacement fix #72391. No open candidate is a high-confidence duplicate to close: #41670, #43910, and #69707 are related provider-compatibility work with distinct remaining scope, while #59130/#59141 are an independent recency/provenance subcluster. Closed refs remain historical evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
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
| #41670 | keep_related | planned | related | Related encoding_format provider compatibility PR; keep open outside the memory-lancedb landed-fix closeout. |
| #42531 | keep_closed | skipped | fixed_by_candidate | Already closed; no close/comment mutation is valid for this ref. |
| #45986 | keep_closed | skipped | superseded | Already closed as superseded by the cleaner scoped PR; no action remains. |
| #46069 | keep_closed | skipped | superseded | Representative is obsolete and already closed; use current main/#72391 as the canonical path, but do not mutate this closed PR. |
| #59141 | keep_independent | planned | independent | Different root cause and unresolved review feedback; keep open as an independent recency subcluster. |
| #43910 | keep_related | planned | related | Related but broader feature/config work; not a high-confidence duplicate close. |
| #45982 | keep_closed | skipped | fixed_by_candidate | Already closed as fixed on main; no mutation is valid. |
| #59048 | keep_closed | skipped | superseded | Already closed by replacement path; no action remains. |
| #59130 | keep_independent | planned | independent | Different product bug; keep open as the issue for the recency subcluster. |
| #63655 | keep_closed | skipped | fixed_by_candidate | Already fixed and closed; no mutation is valid. |
| #69707 | keep_related | planned | related | Related dimensions-forwarding follow-up; keep open rather than close or merge. |

## Needs Human

- none
