---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156831-autonomous-smoke"
mode: "autonomous"
run_id: "27584188955"
workflow_run_id: "27584188955"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27584188955"
head_sha: "3eaef20c39c95c760c2eeb4e61adf6ea57afc054"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T23:57:44.403Z"
canonical: "https://github.com/openclaw/openclaw/issues/47975"
canonical_issue: "https://github.com/openclaw/openclaw/issues/47975"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# ghcrawl-156831-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27584188955](https://github.com/openclaw/clownfish/actions/runs/27584188955)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/47975

## Summary

The original representative #56516 is no longer live canonical; it was already closed as a duplicate of #47975. The surviving canonical path is open issue #47975, but the hydrated ClawSweeper review says the remaining fix requires maintainer product decisions on subagent retention/history, session/UI visibility, cleanup, and yielded-parent delivery semantics before an autonomous PR is safe. No GitHub mutations should be applied from this result.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #47975 | needs_human | planned | needs_human | Maintainer product decision is required for the canonical issue before Clownfish can safely choose a retention, archive, pruning, UI visibility, and parent-yield delivery contract. |
| #56516 | keep_closed | skipped | duplicate | Already closed duplicate; preserve as historical evidence only. |
| #67902 | keep_closed | skipped | related | Already closed related lifecycle issue; no mutation allowed. |
| #52803 | keep_related | planned | related | Related UI/product follow-up, not a duplicate of the canonical subagent lifecycle bug. |
| #54488 | keep_related | planned | related | Related scheduler fairness issue, not a duplicate suitable for closeout in this lifecycle cleanup cluster. |

## Needs Human

- #47975: choose the product contract for terminal subagent lifecycle behavior before repair: whether completed one-shot run-mode child sessions are hidden, archived, pruned, or retained by default; how cleanup=keep remains inspectable; how Control UI/session list surfaces distinguish active work from retained history; and how yielded-parent responsiveness should be guaranteed.
