---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156792-autonomous-smoke"
mode: "autonomous"
run_id: "27584188105"
workflow_run_id: "27584188105"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27584188105"
head_sha: "3eaef20c39c95c760c2eeb4e61adf6ea57afc054"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T23:57:44.399Z"
canonical: "https://github.com/openclaw/openclaw/pull/81771"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/81771"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# ghcrawl-156792-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27584188105](https://github.com/openclaw/clownfish/actions/runs/27584188105)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/pull/81771

## Summary

Current main already contains the non-security Control UI history render-budget fix through merged PR #81771. The original representative #56783 is closed and flagged security-sensitive in the preflight artifact, so it is routed to central security handling only. The accessibility streaming-announcement items are a separate related subcluster around open issue #65538, not duplicates of the history-budget fix. #42636 could not be classified because live hydration returned 404.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #42636 | needs_human | blocked | needs_human | Live state is unavailable, so no close, merge, fixed-by-candidate, or duplicate classification is safe. |
| #56783 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish mutation scope; route the exact PR without poisoning unrelated non-security classification. |
| #65575 | keep_closed | skipped | related | Already closed related accessibility PR; keep it as historical evidence for #65538 rather than treating it as a duplicate of the history-budget cluster. |
| #11890 | keep_closed | skipped | fixed_by_candidate | Historical closed issue is covered by merged #81771; no mutation is needed. |
| #65538 | keep_related | planned | related | Separate accessibility follow-up should stay open in its own subcluster; it is not a duplicate of the history-budget fix. |
| #67424 | keep_closed | skipped | related | Already closed related accessibility PR; keep as historical evidence only. |
| #81771 | keep_closed | skipped | canonical | Merged canonical non-security fix path for the history-budget slice; no additional merge or close action is needed. |

## Needs Human

- #42636 live state is unavailable: preflight returned HTTP 404, so a maintainer or refreshed planner must decide whether this is a stale/deleted ref or needs rehydration from another source.
