---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-081"
mode: "plan"
run_id: "27580942551-1-81"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.460Z"
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

# pr-inventory-ready_for_maintainer-20260615T223445-081

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Planned one conservative non-mutating classification per hydrated PR in this inventory shard. No shared canonical was selected because the job is explicitly not a dedupe cluster. No close, merge, label, or fix action is planned; low-signal closeout, merge, and fix PR paths are disabled by the job/preflight permissions, and several PRs still need normal maintainer review or have check/review-bot blockers.

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
| #86719 | keep_independent | planned | independent | Independent focused fix; keep open for maintainer review rather than dedupe or close. |
| #86730 | keep_independent | planned | independent | Independent focused fix with no hydrated duplicate candidate in this inventory shard. |
| #86733 | keep_closed | skipped |  | Already closed; no mutation should be planned. |
| #86744 | keep_independent | planned | independent | Independent higher-risk fix; keep open for maintainer review. |
| #86759 | keep_independent | planned | independent | Independent message-delivery/session-state fix; no close or merge planned in plan mode. |
| #86873 | keep_independent | planned | independent | Independent channel fix; keep open for maintainer review. |
| #86915 | keep_independent | planned | independent | Draft docs PR should remain open; no low-signal close action is allowed for this run. |
| #86925 | keep_independent | planned | independent | Independent localization PR; keep open for maintainer review. |
| #87255 | keep_independent | planned | independent | Independent config compatibility PR; keep open for normal review. |
| #87300 | keep_independent | planned | independent | Independent feature PR with failing proof/base-ref concerns; keep open, do not close or merge. |
| #87373 | keep_independent | planned | independent | Independent risky-infra/script PR with blockers; keep open for maintainer decision, no close planned. |
| #87393 | keep_independent | planned | independent | Independent media fix; keep open for review rather than mutation. |
| #87478 | keep_independent | planned | independent | Independent auth-provider/config PR; keep open for maintainer review. |
| #87481 | keep_independent | planned | independent | Independent broad message-delivery PR; keep open for maintainer review. |
| #87530 | keep_independent | planned | independent | Independent Discord PR with failing checks and review-bot blocker; keep open, no mutation planned. |
| #87560 | keep_independent | planned | independent | Independent message-delivery text handling PR with a failing check; keep open. |
| #87601 | keep_independent | planned | independent | Independent low-risk docs PR; keep open because closeout is not enabled. |
| #87831 | keep_independent | planned | independent | Independent performance PR; keep open for maintainer review. |
| #87912 | keep_independent | planned | independent | Independent agents fix; keep open for maintainer review. |
| #88103 | keep_independent | planned | independent | Independent docs PR; keep open because no low-signal close action is allowed. |
| #88159 | keep_independent | planned | independent | Independent CLI compatibility PR; keep open for maintainer review. |
| #91217 | keep_independent | planned | independent | Independent feature PR with failing checks; keep open and do not merge or close. |
| #93222 | keep_independent | planned | independent | Independent Discord config PR; keep open for review-bot resolution and maintainer review. |
| #88449 | keep_independent | planned | independent | Independent utility bug fix; keep open for maintainer review. |
| #91988 | keep_independent | planned | independent | Independent P1 workspace/session-state fix; keep open for maintainer review. |

## Needs Human

- none
