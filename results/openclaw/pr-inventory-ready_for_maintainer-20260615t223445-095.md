---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-095"
mode: "plan"
run_id: "27580942551-1-95"
workflow_run_id: "27580942551"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27580942551"
head_sha: "11023f07de225364eeb7bd9fd8705f16da575f9c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T19:01:33.579Z"
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

# pr-inventory-ready_for_maintainer-20260615T223445-095

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27580942551](https://github.com/openclaw/clownfish/actions/runs/27580942551)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. The job explicitly says this is not a dedupe cluster and no shared canonical should be invented, so open PRs are classified independently for maintainer review; no merge, fix, or close mutations are planned.

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
| #93388 | keep_independent | planned | independent | Missing hydrated artifact details, but classification as an independent inventory item is clear. |
| #93266 | keep_independent | planned | independent | Treat as an independent PR awaiting maintainer review. |
| #74235 | keep_independent | planned | independent | Independent broad channel-delivery PR for maintainer review; no closure basis. |
| #54724 | keep_independent | planned | independent | Independent UI fix with failing proof gate; keep for maintainer/author follow-up. |
| #55596 | keep_independent | planned | independent | Independent Markdown rendering fix with failed proof checks; not closable as duplicate or low-signal under this job. |
| #63789 | keep_closed | skipped | superseded | Already closed; no action to take. |
| #64316 | keep_independent | planned | independent | Independent candidate that may be maintainer-reviewable, but no merge action is allowed. |
| #65065 | keep_independent | planned | independent | Independent CLI/docs feature fix; keep for maintainer review. |
| #66174 | keep_independent | planned | independent | Independent session-state fix with failing checks; keep for author/maintainer follow-up. |
| #93308 | keep_independent | planned | independent | Independent PR classification from job evidence only. |
| #93105 | keep_independent | planned | independent | Independent doctor-fix PR awaiting hydrated review. |
| #69346 | keep_independent | planned | independent | Independent diagnostic fix with current proof failures; keep for follow-up. |
| #76873 | keep_independent | planned | independent | Independent message-delivery fix; keep for maintainer review because merge is blocked. |
| #80497 | keep_independent | planned | independent | Independent SDK/API change requiring maintainer review. |
| #82718 | keep_independent | planned | independent | Independent Telegram docs/doctor PR; keep for maintainer review. |
| #85249 | keep_independent | planned | independent | Independent cron delivery fix with an affected failing check and unhydrated discussion; keep for maintainer review. |
| #89396 | keep_independent | planned | independent | Independent doctor/cron fix; keep for maintainer review. |
| #89443 | keep_independent | planned | independent | Independent active-memory fix; keep for maintainer/author follow-up. |
| #93394 | keep_independent | planned | independent | Independent memory-core PR classification from job evidence only. |
| #89577 | keep_independent | planned | independent | Independent narrow Canvas hardening/bugfix; keep for maintainer review. |
| #92072 | keep_independent | planned | independent | Independent gateway capability fix with failed proof gate; keep for follow-up. |
| #89648 | keep_independent | planned | independent | Independent logging fix; keep for maintainer review. |
| #91134 | keep_independent | planned | independent | Independent CI PR; keep for maintainer review because merge is blocked. |
| #92176 | keep_independent | planned | independent | Independent media/model capability fix; keep for maintainer review. |
| #92230 | keep_independent | planned | independent | Independent feature PR that appears reviewable but cannot be planned for merge in this job. |

## Needs Human

- none
