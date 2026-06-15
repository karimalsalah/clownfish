---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-21-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520842537"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520842537"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:56:52.519Z"
canonical: "#78964"
canonical_issue: null
canonical_pr: "#78964"
actions_total: 23
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-21-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520842537](https://github.com/openclaw/clownfish/actions/runs/27520842537)

Workflow conclusion: success

Worker result: planned

Canonical: #78964

## Summary

Plan-mode classification only. #78964 remains the best live non-security canonical for the topic reply-anchor family, but it is not merge-ready because the artifact shows failing checks and ClawSweeper review blockers. The cluster contains multiple Feishu root causes; security-signal PRs are quarantined individually and unrelated non-security items are classified without closure.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 23 |
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
| #39568 | keep_related | planned | related | Related Feishu reply/thread routing bug with unique reproduction details. |
| #50490 | keep_related | planned | related | Related Feishu admission/session-state bug; not the same root cause as topic reply anchors. |
| #72504 | keep_related | planned | related | Related Feishu message-loss family, distinct root cause. |
| #77666 | keep_closed | skipped | fixed_by_candidate | Already closed; closure actions are invalid for closed refs. |
| #78927 | route_security | planned | security_sensitive | Security-signal item must be routed to central OpenClaw security handling. |
| #78964 | keep_canonical | planned | canonical | Best live non-security canonical for the topic reply-anchor family, but merge is blocked and not allowed in this job. |
| #83730 | keep_related | planned | related | Related Feishu reply delivery bug, but p2p target routing is distinct from topic reply anchors. |
| #84588 | keep_closed | skipped | related | Already closed; kept as historical related context only. |
| #85450 | keep_related | planned | related | Related Feishu group admission bug with an active candidate PR; not duplicate of the topic anchor canonical. |
| #85481 | keep_related | planned | related | Active related fix candidate for #85450, but not merge-ready and merge is blocked by job frontmatter. |
| #85692 | keep_related | planned | related | Related Feishu reply-loss family, but root cause is not established as duplicate of #78964. |
| #87468 | keep_related | planned | related | Related Feishu replies=0 family with a separate reconnect trigger. |
| #87709 | route_security | planned | security_sensitive | Security-signal item must be routed to central OpenClaw security handling. |
| #87774 | keep_related | planned | related | Related Feishu routing work, but draft and distinct from the canonical topic reply-anchor PR. |
| #89783 | keep_independent | planned | independent | Independent broad Feishu bot-to-bot feature; should not be folded into this dedupe cluster. |
| #90177 | keep_related | planned | related | Related quoted-reply bug with its own active candidate PR; not duplicate of topic anchor preservation. |
| #90192 | keep_related | planned | related | Related candidate fix for #90177, but merge/fixed-by closeout is blocked by proof/check gaps. |
| #90559 | keep_independent | planned | independent | Independent multi-root Feishu reliability issue; not suitable for duplicate closeout in this cluster. |
| #90572 | keep_related | planned | related | Related Feishu receive-loop fix candidate; distinct from canonical topic anchor path. |
| #90636 | keep_related | planned | related | Related p2p reply delivery candidate, draft and not merge-ready. |
| #91669 | keep_related | planned | related | Related Feishu replies=0 family, distinct unresolved root. |
| #92364 | keep_related | planned | related | Related Feishu DM replies=0 report, but not a confirmed duplicate of any canonical path. |
| #92595 | keep_independent | planned | independent | Independent Feishu inbound-processing report; insufficient evidence for dedupe closure. |

## Needs Human

- none
