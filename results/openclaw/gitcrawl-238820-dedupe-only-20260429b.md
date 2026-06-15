---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238820-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25103963894"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103963894"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.383Z"
canonical: "https://github.com/openclaw/openclaw/pull/72393"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72393"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238820-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103963894](https://github.com/openclaw/clownfish/actions/runs/25103963894)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72393

## Summary

Hydrated state makes the original canonical hint #64661 obsolete because it is already closed. The merged maintainer replacement #72393 is the canonical landed fix for the core Windows exec/process CJK mojibake family. The only open cluster ref, #73751, should stay open as related follow-up work because it is maintainer/member-authored, covers additional TUI/QMD streaming surfaces, has failing checks, and has an unresolved Greptile P1 test finding. No close, label, merge, or fix action is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #56538 | keep_closed | skipped | superseded | Already closed; leave historical superseded PR closed. |
| #64661 | keep_closed | skipped | superseded | Canonical hint is stale; #64661 is a closed superseded contributor PR. |
| #64709 | keep_closed | skipped | superseded | Already closed; leave historical superseded PR closed. |
| #72393 | keep_closed | skipped | canonical | Merged canonical fix; no post-merge close action is allowed or needed for this closed PR. |
| #73751 | keep_related | planned | related | Keep open for maintainer follow-up; it has unique follow-up scope and unresolved validation/review blockers. |

## Needs Human

- none
