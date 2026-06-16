---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2791-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27595853943"
workflow_run_id: "27595853943"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27595853943"
head_sha: "7a8b7ab269d4c8246a3837f1013f6d9715d17c5e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T05:21:58.201Z"
canonical: "https://github.com/openclaw/openclaw/issues/43661"
canonical_issue: "https://github.com/openclaw/openclaw/issues/43661"
canonical_pr: null
actions_total: 14
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# gitcrawl-2791-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27595853943](https://github.com/openclaw/clownfish/actions/runs/27595853943)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/43661

## Summary

Autonomous classification only. The obsolete representative #42158 is closed, and the hydrated open items split into related but distinct compaction reliability subfamilies. #43661 is the best surviving open issue for the original timeout/duplicate-send family, while #58838 is paired with open PR #86900. No close, merge, or fix-PR action is safe or allowed in this close-only job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 14 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 2 |

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
| #42158 | keep_closed | skipped | canonical | Original canonical hint is obsolete because the issue is already closed. |
| #43661 | keep_canonical | planned | canonical | Best surviving open canonical for the original timeout and duplicate-send subfamily; keep open for maintainer follow-up. |
| #45686 | keep_closed | skipped | superseded | Already closed; no closure action emitted. |
| #48238 | keep_related | planned | related | Related compaction reliability work, but not a true duplicate of #43661 because it asks for detector/config/policy behavior that remains unique. |
| #48278 | keep_related | planned | related | Keep open as related scaffolding for #48238; not merge-ready and not closable as a duplicate. |
| #54383 | keep_closed | skipped | fixed_by_candidate | Already closed as fixed by hydrated PR #54392; no action needed. |
| #58838 | keep_related | planned | fixed_by_candidate | Covered by an open candidate PR, but not closable before that PR lands; merge and post-merge close are disabled for this job. |
| #64960 | keep_closed | skipped | fixed_by_candidate | Already closed; no close action emitted. |
| #64962 | keep_closed | skipped | related | Closed historical context only; no mutation is allowed for an already-closed target. |
| #67750 | keep_related | planned | related | Related compaction timeout/fallback UX issue with unique remaining behavior; keep open. |
| #53008 | keep_related | planned | related | Related but distinct subfamily; keep open. |
| #78562 | keep_related | planned | related | Related repeated-compaction symptom with distinct evidence and unclear reproduction; keep open. |
| #86900 | keep_related | planned | related | Active useful PR for the #58838 subfamily; keep open for maintainer review. |
| #92043 | keep_related | planned | related | Related compaction timeout recovery issue, but it is a distinct product/state-machine decision and should remain open. |

## Needs Human

- #92043 requires maintainer choice on the permanent compaction recovery and state-ownership contract before any implementation path is safe.
- #48278/#48238 require maintainer review/product decision before config scaffolding or loop-aware guard policy can be treated as canonical.
