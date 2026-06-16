---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156779-identity-source-proof"
mode: "autonomous"
run_id: "27595655620"
workflow_run_id: "27595655620"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27595655620"
head_sha: "2d3662c151e0b150b29dae63ba637e5edb6b6735"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-16T05:15:51.667Z"
canonical: "https://github.com/openclaw/openclaw/issues/40768"
canonical_issue: "https://github.com/openclaw/openclaw/issues/40768"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# ghcrawl-156779-identity-source-proof

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27595655620](https://github.com/openclaw/clownfish/actions/runs/27595655620)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/40768

## Summary

Blocked on the identity-source invariant. Current main at 7ac2bbaaf0aeefae589001a5ba37b467988c8189 still exposes only botOpenId/botName through the Feishu probe/startup identity path, and the hydrated evidence says the proposed union_id fallback in #40782 is unproven because the available bot identity API evidence does not establish a bot union_id source. No GitHub mutations or fix PR are planned.

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
| #40768 | keep_canonical | planned | canonical | Canonical issue remains open because the bug is plausible but the safe fallback identity source is not proven. |
| #40782 | needs_human | blocked | needs_human | Maintainer/product decision needed: identify a Feishu identity source or invariant that is safe to use before repairing or replacing #40782. |
| #35994 | keep_closed | skipped | fixed_by_candidate | Closed context ref; no mutation allowed. |
| #40783 | keep_closed | skipped | superseded | Closed context PR; no mutation allowed. |
| #46776 | keep_closed | skipped | related | Closed context ref; no mutation allowed. |
| #63884 | keep_related | planned | related | Related Feishu multi-bot behavior, but a distinct product/config scope outside this identity-source proof job. |
| cluster:ghcrawl-156779-identity-source-proof | needs_human | blocked | needs_human | No complete executable fix artifact is safe until maintainers identify or prove the Feishu fallback identity source. |

## Needs Human

- Maintainers need to identify/prove the Feishu bot identity invariant for multi-bot group @mention detection: for example a reliable cross-app bot identity field, a safe way to map WebSocket mention open_id values to the receiving bot, or confirmation that no such invariant exists with the current Feishu APIs.
- After that decision, #40782 should be repaired or replaced only within the proven identity-source surface; matcher/debounce work should remain a separate follow-up job.
