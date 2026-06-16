---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-167-autonomous-terminal-gap"
mode: "autonomous"
run_id: "27629649187"
workflow_run_id: "27629649187"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27629649187"
head_sha: "cd08661d53227cd006d83585a7105f6259bea85a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T15:55:25.032Z"
canonical: "https://github.com/openclaw/openclaw/issues/77702"
canonical_issue: "https://github.com/openclaw/openclaw/issues/77702"
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-167-autonomous-terminal-gap

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27629649187](https://github.com/openclaw/clownfish/actions/runs/27629649187)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/77702

## Summary

Hydrated evidence splits this cluster into two Telegram ordinary-reply subfamilies. #77702 is the best live canonical for the excluded media-attachment representative family; #91383 remains a separate canonical issue for Markdown-link text loss with a blocked draft candidate PR. No close or merge action is safe because no canonical fix has landed and the only linked PR for #91383 is draft, dirty, unproven, and has an actionable ClawSweeper blocker.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 1 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/93690 | clownfish/gitcrawl-167-autonomous-terminal-gap |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #93690 | merge_canonical | executed | fix_pr | merged by ProjectClownfish post-flight |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #77702 | fix_needed | planned | canonical | A narrow fix PR is allowed and needed for the still-open Telegram MEDIA directive dispatch gap. |
| #91383 | keep_canonical | planned | canonical | Keep #91383 open as its own canonical subfamily; the linked candidate PR needs repair before it can own closure or merge. |
| #93059 | fix_needed | planned | related | Repair the contributor branch rather than merge or close it; path coverage and real behavior proof are unresolved blockers. |
| #92946 | keep_related | planned | related | Related Telegram delivery work, but not the canonical fix path for the media directive issue or the direct-reply Markdown-link issue. |
| #81411 | keep_closed | skipped | related | Closed context refs must not receive close actions. |
| #81742 | keep_closed | skipped | related | Closed context refs must not receive close actions. |
| #81764 | keep_closed | skipped | fixed_by_candidate | Already merged historical context; no mutation required. |
| #81799 | keep_closed | skipped | fixed_by_candidate | Closed context refs must not receive close actions. |
| cluster:gitcrawl-167-autonomous-terminal-gap | build_fix_artifact | planned |  | Build a narrow new fix PR for the #77702 media directive issue while leaving #91383/#93059 on a separate repair path. |

## Needs Human

- none
