---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-083"
mode: "plan"
run_id: "27583277848"
workflow_run_id: "27583277848"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583277848"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:55:41.003Z"
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
needs_human_count: 12
---

# pr-inventory-ready_for_maintainer-20260615T223445-083

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583277848](https://github.com/openclaw/clownfish/actions/runs/27583277848)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification for 25 hydrated PR refs. No GitHub mutations are planned directly; merge and fix actions are blocked by job frontmatter. Most open PRs should remain open for maintainer review or author/check follow-up. #89073 is already closed and receives only a skipped keep_closed action.

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
| Needs human | 12 |

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
| #89716 | needs_human | planned | needs_human | Maintainer technical correctness judgment is required; merge is blocked by job frontmatter. |
| #89721 | keep_independent | planned | independent | Keep open as an independent PR; failing check blocks any merge-style recommendation. |
| #89790 | keep_related | planned | related | Related to the Google Chat thread-target family, but not safe to close or merge in this inventory plan because checks are not clean and there is no canonical selected by the job. |
| #89535 | needs_human | planned | needs_human | Maintainer review is the remaining decision; merge is blocked by job frontmatter. |
| #89799 | needs_human | planned | needs_human | Maintainer technical correctness judgment is required for Node startup behavior; merge is blocked by job frontmatter. |
| #89748 | keep_related | planned | related | Keep open as related to #64036; failing checks block fixed-by-candidate closeout or merge-style planning. |
| #90475 | needs_human | planned | needs_human | Maintainer judgment is required for Telegram reply-target semantics; merge is blocked by job frontmatter. |
| #54593 | keep_independent | planned | independent | Keep open independently; stale/rebase signal and failing checks block merge-style planning. |
| #54716 | keep_related | planned | related | Keep open as related to #54435; author/check/review follow-up blocks closeout or merge planning. |
| #54982 | keep_related | planned | related | Keep open as related implementation work; unresolved review findings and failing proof block merge or closure planning. |
| #58373 | keep_independent | planned | independent | Keep open independently; author/review/check follow-up is required before any maintainer merge decision. |
| #59365 | needs_human | planned | needs_human | Maintainer decision remains after addressed review feedback and dependency-guard update signal; merge is blocked by job frontmatter. |
| #68843 | keep_independent | planned | independent | Keep open independently; active author/review follow-up should settle before maintainer action. |
| #74398 | needs_human | planned | needs_human | Maintainer UI/product correctness judgment is required; merge is blocked by job frontmatter. |
| #79853 | keep_independent | planned | independent | Keep open independently; stale/rebase signal and failing checks block merge-style planning. |
| #85034 | keep_independent | planned | independent | Keep open independently; product-intent/rebase/check follow-up blocks any close or merge plan. |
| #85254 | needs_human | planned | needs_human | Maintainer performance/path correctness judgment is required; merge is blocked by job frontmatter. |
| #86450 | needs_human | planned | needs_human | Maintainer judgment is required for the large test-only coverage addition; merge is blocked by job frontmatter. |
| #89004 | needs_human | planned | needs_human | Maintainer technical correctness judgment is required for Codex hook/input semantics; merge is blocked by job frontmatter. |
| #89028 | needs_human | planned | needs_human | Maintainer technical correctness judgment is required for web_fetch fallback behavior; merge is blocked by job frontmatter. |
| #89044 | keep_independent | planned | independent | Keep open independently; author/review follow-up is required before maintainer action. |
| #89045 | needs_human | planned | needs_human | Maintainer technical correctness judgment is required for session lifecycle/message delivery behavior; merge is blocked by job frontmatter. |
| #89062 | needs_human | planned | needs_human | Maintainer product/ops judgment is required for Docker offline setup behavior; merge is blocked by job frontmatter. |
| #89073 | keep_closed | skipped |  | Already closed in live preflight state; no mutation is valid. |
| #89096 | keep_independent | planned | independent | Keep open independently; failing checks block merge-style planning. |

## Needs Human

- #89716 requires maintainer technical review of cross-provider cache-boundary marker stripping.
- #89535 requires maintainer review of Codex bind regression coverage.
- #89799 requires maintainer review of Node 24 compile-cache startup behavior.
- #90475 requires maintainer review of Telegram bot-reply anchoring semantics.
- #59365 requires maintainer review after addressed volatile-filesystem findings and dependency-guard update signal.
- #74398 requires maintainer UI/product review for Control UI verbose-level behavior.
- #85254 requires maintainer review of prepared manifest plugin metadata threading.
- #86450 requires maintainer review of large node CLI daemon/registry coverage.
- #89004 requires maintainer review of Codex before_prompt_build hook input semantics.
- #89028 requires maintainer review of web_fetch extraction fallback behavior.
- #89045 requires maintainer review of terminal session status recovery on visible inbound turns.
- #89062 requires maintainer review of Docker offline setup rerun behavior.
