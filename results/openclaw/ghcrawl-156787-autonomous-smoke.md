---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156787-autonomous-smoke"
mode: "autonomous"
run_id: "27597851748"
workflow_run_id: "27597851748"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597851748"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:14:49.724Z"
canonical: "https://github.com/openclaw/openclaw/issues/71932"
canonical_issue: "https://github.com/openclaw/openclaw/issues/71932"
canonical_pr: "https://github.com/openclaw/openclaw/pull/91125"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156787-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597851748](https://github.com/openclaw/clownfish/actions/runs/27597851748)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/71932

## Summary

Hydrated live state shows all three job candidate PRs are already closed. The original representative #41517 is obsolete as a canonical merge path; the Google same-provider prefix bug is covered by the closed canonical issue #71932 and the landed fix referenced there (#91125 / commit 3e4b10fa1cc5d7739de89a563d8088b9e762af35). Current target main at 6aa83374d90d35226b9cf3577155c3876a91b4b3 contains the Google transport prefix stripping and regression coverage, so no new fix PR or close action is needed. #41398 is security-sensitive in the hydrated artifact and is routed only to central security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #41398 | route_security | planned | security_sensitive | Route only #41398 to central OpenClaw security triage; do not close, merge, comment on, or use it as an automated fix source. |
| #41517 | keep_closed | skipped | superseded | The former representative is obsolete and already closed; the canonical path is the landed #71932/#91125 fix, not this PR. |
| #44955 | keep_closed | skipped | independent | This is a separate context-window precedence family and is already closed after a maintainer implementation landed. |
| #71932 | keep_closed | skipped | canonical | Canonical issue is already closed as fixed on current main; no post-merge close action is needed because the issue is not open. |
| #41249 | keep_closed | skipped | fixed_by_candidate | Historical closed Google-prefix report; no mutation is valid or needed. |
| #795 | keep_closed | skipped | related | Closed historical related evidence only; no action target remains open. |
| #16010 | keep_closed | skipped | related | Closed related provider-prefix context; not part of this cluster's Google fix path. |
| #44786 | keep_closed | skipped | independent | Separate closed context-window precedence issue; not a duplicate of the Google prefix cluster. |

## Needs Human

- none
