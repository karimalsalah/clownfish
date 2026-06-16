---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-029"
mode: "plan"
run_id: "27580942551-1-30"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.226Z"
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

# pr-inventory-needs_proof-20260615T223445-029

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Planning-only PR inventory classification shard. No GitHub mutations are planned because this is not a dedupe cluster, merge/fix actions are blocked, low-signal closure is disabled, checks/review details are incomplete from rate limiting, and hydrated PRs carry unique implementation scope needing proof or maintainer review.

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
| #66067 | keep_independent | planned | independent | Unique focused PR; keep open for behavior proof/review. |
| #66098 | keep_independent | planned | independent | Unique web-ui/gateway behavior fix needing proof and review resolution. |
| #72677 | keep_independent | planned | independent | Substantial unique cron warning PR; keep open for maintainer validation. |
| #73462 | keep_independent | planned | independent | Unique auth CLI PR with unhydrated bot review; keep open. |
| #74643 | keep_independent | planned | independent | Unique per-agent config compatibility fix; keep open. |
| #75918 | keep_independent | planned | independent | Large feature/session-state PR with non-main base and unstable state; keep open. |
| #76020 | keep_independent | planned | independent | Unique Feishu feature/policy PR; keep open for proof and checks. |
| #76445 | keep_independent | planned | independent | Unique cron validation PR; keep open. |
| #76614 | keep_independent | planned | independent | Unique message-delivery bug fix; keep open. |
| #76634 | keep_independent | planned | independent | Unique focused Mattermost delivery fix; keep open. |
| #76646 | keep_independent | planned | independent | Unique UI behavior fix; keep open. |
| #76732 | keep_independent | planned | independent | Unique session/image-history fix; keep open. |
| #76922 | keep_independent | planned | independent | Unique CLI fix with unhydrated bot-review context; keep open. |
| #76928 | keep_independent | planned | independent | Large unique plugin/auth-provider PR; keep open. |
| #76941 | keep_independent | planned | independent | Unique session-state/command PR with unhydrated bot-review detail; keep open. |
| #76975 | keep_independent | planned | independent | Unique Telegram behavior/config PR; keep open. |
| #77109 | keep_independent | planned | independent | Unique Feishu crash fix; keep open. |
| #77318 | keep_independent | planned | independent | Unique loop-detection behavior PR; keep open. |
| #77361 | keep_independent | planned | independent | Open automation PR lacks file/review/check hydration; keep open. |
| #77415 | keep_independent | planned | independent | Open subagent lifecycle PR lacks file/review/check hydration; keep open. |
| #77442 | keep_independent | planned | independent | Open session delivery-context PR lacks file/review/check hydration; keep open. |
| #77445 | keep_independent | planned | independent | Open transcript/session PR lacks file/review/check hydration; keep open. |
| #77513 | keep_independent | planned | independent | Open Telegram command scope PR lacks file/review/check hydration; keep open. |
| #77540 | keep_independent | planned | independent | Open performance PR lacks full hydration and is marked dirty-candidate; keep open. |
| #77549 | needs_human | planned | needs_human | Live state is unavailable, so this ref needs targeted rehydration before classification. |

## Needs Human

- #77549 requires live-state rehydration because the artifact has kind unknown, state unavailable, and no updated_at.
