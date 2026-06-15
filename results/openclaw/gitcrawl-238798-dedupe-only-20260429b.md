---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238798-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25103809821"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103809821"
head_sha: "98c86abfe56e7ca0578fd667fdea3121315c5b1d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.371Z"
canonical: "https://github.com/openclaw/openclaw/pull/72614"
canonical_issue: "https://github.com/openclaw/openclaw/issues/43556"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72614"
actions_total: 18
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238798-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103809821](https://github.com/openclaw/clownfish/actions/runs/25103809821)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72614

## Summary

Hydrated preflight shows all six job candidate issues are already closed, so no close/comment/label mutation is valid. The current canonical fix path is merged PR #72614 on current main 99950c7f1272dff6e2c34c2be45dfc5f89e62a60; linked security-sensitive PR #47115 is quarantined only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 18 |
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
| #43556 | keep_closed | skipped | fixed_by_candidate | Representative issue is obsolete as an open canonical because it is already closed; keep it closed and use merged #72614 as the current canonical fix path. |
| #47115 | route_security | planned | security_sensitive | Security-sensitive linked PRs are out of scope for Clownfish backlog cleanup even when closed. |
| #53016 | keep_closed | skipped | duplicate | Already closed duplicate context; no mutation is allowed or needed. |
| #55483 | keep_closed | skipped | superseded | Useful older PR was already closed and is superseded by the merged canonical fix. |
| #56326 | keep_closed | skipped | fixed_by_candidate | Already closed as covered by merged #72614. |
| #60965 | keep_closed | skipped | fixed_by_candidate | Already closed same-root issue; current canonical fix path is #72614. |
| #61724 | keep_closed | skipped | fixed_by_candidate | Already closed as fixed by the landed canonical PR. |
| #63120 | keep_closed | skipped | fixed_by_candidate | Already closed after the canonical fix landed. |
| #63121 | keep_closed | skipped | superseded | Already closed as superseded by the merged canonical fix with credit preserved. |
| #64714 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented by the canonical fix path. |
| #65282 | keep_closed | skipped | superseded | Already closed contributor PR superseded by the credited canonical replacement. |
| #66719 | keep_closed | skipped | related | Closed related context ref; do not route or mutate it in this cluster. |
| #67248 | keep_closed | skipped | fixed_by_candidate | Already closed same-root issue; no further closeout is valid. |
| #68397 | keep_closed | skipped | superseded | Already closed useful contributor PR superseded by credited canonical replacement. |
| #69170 | keep_closed | skipped | superseded | Already closed schema-hint PR superseded by the canonical runtime-tolerance fix. |
| #69203 | keep_closed | skipped | superseded | Already closed overlapping schema guidance PR; no action needed. |
| #72331 | keep_closed | skipped | superseded | Merged historical fix is kept closed; #72614 is the current canonical fix path for this cluster. |
| #72614 | keep_closed | skipped | canonical | This merged PR is the current canonical fix path; no merge or post-merge action is allowed by the job. |

## Needs Human

- none
