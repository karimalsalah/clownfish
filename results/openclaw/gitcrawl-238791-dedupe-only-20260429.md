---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238791-dedupe-only-20260429"
mode: "autonomous"
run_id: "25103795245"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103795245"
head_sha: "98c86abfe56e7ca0578fd667fdea3121315c5b1d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.362Z"
canonical: "https://github.com/openclaw/openclaw/pull/72400"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72400"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238791-dedupe-only-20260429

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103795245](https://github.com/openclaw/clownfish/actions/runs/25103795245)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72400

## Summary

Hydrated representative #63994 is no longer live; #72400 is the landed maintainer replacement for the repeated-character gateway stream-merge subfamily. The still-open PRs are related streaming work but not closable in this dedupe pass: #46985, #47377, and #47399 cover WebChat cumulative stream/tool-boundary rendering; #54374 covers gateway segment-boundary handling; #60063 covers provider overlap/replace plumbing. No close/comment/label mutation is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #46985 | keep_related | planned | related | Keep open as a related WebChat implementation candidate; no landed canonical fix covers this PR's remaining UI/tool-boundary scope. |
| #47377 | keep_related | planned | related | Keep open as a related WebChat implementation candidate; dirty merge state and overlapping open PRs block closure or canonical selection in this dedupe-only job. |
| #47399 | keep_related | planned | related | Keep open as related but not closable; it has useful WebChat signal, an unresolved review finding, unrelated artifact churn, and no landed canonical replacement. |
| #54374 | keep_related | planned | related | Keep open as related gateway/WebChat streaming work; it is not the same repeated-character merge bug fixed by #72400 and still needs maintainer review. |
| #60063 | keep_related | planned | related | Keep open as related provider/gateway streaming work; it is not fixed by #72400 and cannot be merged or closed as duplicate from this artifact. |
| #63994 | keep_closed | skipped | superseded | Historical source PR superseded by merged replacement #72400; no mutation because the target is already closed. |
| #65457 | keep_closed | skipped | superseded | Historical contributor PR was already superseded by merged replacement #72400; no mutation because the target is already closed. |
| #72400 | keep_closed | skipped | canonical | Canonical landed fix for the repeated-character gateway stream-merge subfamily; no mutation because the PR is already merged and closed. |

## Needs Human

- none
