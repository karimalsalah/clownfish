---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-073"
mode: "plan"
run_id: "27580942551-1-73"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.395Z"
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
needs_human_count: 5
---

# pr-inventory-ready_for_maintainer-20260615T223445-073

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. The hydrated preflight artifact covers 20 of 25 listed refs; all hydrated open PRs are independent maintainer-review candidates, not duplicate/closure candidates. One hydrated PR is already closed/merged. Five listed refs were not present in the compacted hydrated item matrix, so they are scoped needs_human for missing live state only.

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
| Needs human | 5 |

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
| #18860 | keep_independent | planned | independent | Open independent feature PR requiring maintainer judgment; no closure, merge, or fix action is allowed or safe in this plan shard. |
| #58823 | keep_independent | planned | independent | Independent maintainer-review candidate; keep open for normal review rather than close or merge. |
| #77539 | keep_independent | planned | independent | Independent session-state fix candidate; no dedupe or closeout basis in hydrated state. |
| #78639 | keep_independent | planned | independent | Independent broad performance/refactor PR still needing maintainer or author follow-up. |
| #80181 | keep_independent | planned | independent | Independent config/model fallback change needing continued review; not a closure candidate. |
| #81131 | keep_independent | planned | independent | Independent Telegram delivery fix with failing proof checks; keep open for author/maintainer follow-up. |
| #81278 | keep_independent | planned | independent | Independent docs/script clarification PR; keep open for maintainer review. |
| #81279 | keep_independent | planned | independent | Independent i18n PR; keep open for maintainer decision rather than close. |
| #83156 | keep_independent | planned | independent | Independent Matrix message-delivery fix; failing check blocks merge but not keep-open classification. |
| #93100 | needs_human | blocked | needs_human | Missing hydrated live state for this listed candidate. |
| #84434 | keep_closed | skipped | fixed_by_candidate | Already closed/merged; no action to apply. |
| #84438 | keep_independent | planned | independent | Independent small CLI cleanup/regression PR with failing proof check; keep open. |
| #84453 | keep_independent | planned | independent | Independent scripts automation fix candidate; keep open for maintainer review. |
| #84485 | keep_independent | planned | independent | Independent Discord delivery fix candidate; keep open for maintainer review. |
| #84545 | keep_independent | planned | independent | Independent provider model-support PR with failing checks; keep open for maintainer/author decision. |
| #84547 | keep_independent | planned | independent | Independent performance/memory PR with proof failure and author follow-up label; keep open. |
| #84554 | keep_independent | planned | independent | Independent memory-core fix candidate; failing checks block merge but not keep-open classification. |
| #84584 | keep_independent | planned | independent | Independent slash-command parsing fix with one failing build-artifacts check; keep open. |
| #84589 | keep_independent | planned | independent | Independent message-tool schema/docs fix; keep open until checks/review are resolved. |
| #84636 | keep_independent | planned | independent | Independent large memory helper feature candidate; keep open for maintainer review. |
| #84708 | keep_independent | planned | independent | Independent session-state recovery fix candidate; keep open for maintainer review. |
| #84728 | needs_human | blocked | needs_human | Missing hydrated live state for this listed candidate. |
| #84772 | needs_human | blocked | needs_human | Missing hydrated live state for this listed candidate. |
| #88872 | needs_human | blocked | needs_human | Missing hydrated live state for this listed candidate. |
| #90799 | needs_human | blocked | needs_human | Missing hydrated live state for this listed candidate. |

## Needs Human

- #93100 missing hydrated live preflight item and target_updated_at in compacted artifact.
- #84728 missing hydrated live preflight item and target_updated_at in compacted artifact.
- #84772 missing hydrated live preflight item and target_updated_at in compacted artifact.
- #88872 missing hydrated live preflight item and target_updated_at in compacted artifact.
- #90799 missing hydrated live preflight item and target_updated_at in compacted artifact.
