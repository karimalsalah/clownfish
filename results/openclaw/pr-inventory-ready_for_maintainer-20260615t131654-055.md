---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T131654-055"
mode: "plan"
run_id: "27552746161"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27552746161"
head_sha: "6219e4cb8ba01b5666ea86632936d90d53200623"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T14:25:19.100Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 40
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 24
---

# pr-inventory-ready_for_maintainer-20260615T131654-055

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27552746161](https://github.com/openclaw/clownfish/actions/runs/27552746161)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification shard. No shared canonical was selected. Security-sensitive PRs are quarantined individually; all other open PRs are kept for independent maintainer or author-track review without mutation.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 40 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 24 |

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
| #89745 | needs_human | planned | needs_human | Maintainer technical correctness decision required; no closure basis. |
| #89767 | needs_human | planned | needs_human | Maintainer compatibility judgment required. |
| #89428 | needs_human | planned | needs_human | Maintainer review is needed for the linked session-state behavior change. |
| #59695 | needs_human | planned | needs_human | Small independent PR ready for maintainer decision; merge is blocked by job frontmatter. |
| #89567 | needs_human | planned | needs_human | Independent PR awaiting maintainer technical judgment. |
| #62063 | keep_independent | planned | independent | Broad independent feature/localization PR remains on author/maintainer track, not a dedupe closeout. |
| #74131 | keep_independent | planned | independent | Independent PR with check/review gating; no closure or merge action is available. |
| #74136 | needs_human | planned | needs_human | Likely canonical for this narrow bug, but maintainer merge judgment is required and merge is blocked. |
| #92725 | route_security | planned | security_sensitive | Route this exact PR to central OpenClaw security handling. |
| #74185 | keep_independent | planned | independent | Independent author-track PR; no closeout or merge action is justified. |
| #74235 | needs_human | planned | needs_human | Maintainer decision required for a message-delivery fix; no merge action allowed. |
| #74252 | needs_human | planned | needs_human | Independent small PR awaiting maintainer correctness review. |
| #74369 | needs_human | planned | needs_human | Maintainer frontend behavior judgment required. |
| #74444 | keep_independent | planned | independent | Independent feature/provider PR remains on author track. |
| #89577 | needs_human | planned | needs_human | Maintainer compatibility judgment required. |
| #92996 | keep_independent | planned | independent | Independent PR remains in review loop, not closeable. |
| #75100 | keep_independent | planned | independent | Independent feature PR remains on author track. |
| #75157 | keep_independent | planned | independent | Independent author-track UI PR. |
| #75213 | needs_human | planned | needs_human | Maintainer review required for reliability fix; merge/fix actions are blocked. |
| #88901 | needs_human | planned | needs_human | Maintainer message-delivery review required. |
| #75293 | needs_human | planned | needs_human | Maintainer review required; automation-risk PR cannot be merged here. |
| #77736 | keep_independent | planned | independent | Independent author-track provider routing PR. |
| #89800 | needs_human | planned | needs_human | Maintainer session semantics review required. |
| #89806 | needs_human | planned | needs_human | Maintainer review required for integration behavior. |
| #89818 | needs_human | planned | needs_human | Maintainer provider contract review required. |
| #92243 | route_security | planned | security_sensitive | Route this exact PR to central OpenClaw security handling. |
| #92185 | needs_human | planned | needs_human | Maintainer behavior review required. |
| #89855 | needs_human | planned | needs_human | Maintainer message/session behavior review required. |
| #89864 | needs_human | planned | needs_human | Maintainer correctness review required. |
| #89882 | needs_human | planned | needs_human | Broad plugin compatibility change requires maintainer judgment. |
| #87487 | needs_human | planned | needs_human | Maintainer docs/CLI wording review required. |
| #51822 | keep_independent | planned | independent | Independent author-track hardening PR with unresolved review/check blockers. |
| #55901 | keep_independent | planned | independent | Independent feature PR remains blocked by author/review work. |
| #92899 | needs_human | planned | needs_human | Maintainer session-state review required. |
| #64316 | keep_independent | planned | independent | Independent PR not closeable; no merge allowed in this job. |
| #64546 | route_security | planned | security_sensitive | Route this exact PR to central OpenClaw security handling. |
| #66150 | keep_independent | planned | independent | Independent PR with prior review thread context; no closeout. |
| #66174 | keep_independent | planned | independent | Independent author-track PR blocked by review/check failures. |
| #66478 | needs_human | planned | needs_human | Contributor-credit-preserving path appears ready for maintainer decision; merge is blocked by job frontmatter. |
| #67432 | needs_human | planned | needs_human | Small accessibility PR needs maintainer review; checks block any merge recommendation. |

## Needs Human

- #89745
- #89767
- #89428
- #59695
- #89567
- #74136
- #74235
- #74252
- #74369
- #89577
- #75213
- #88901
- #75293
- #89800
- #89806
- #89818
- #92185
- #89855
- #89864
- #89882
- #87487
- #92899
- #66478
- #67432
